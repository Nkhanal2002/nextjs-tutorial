import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";
interface Props {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: Props) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!product)
    return NextResponse.json({ error: "product not found" }, { status: 404 });
  return NextResponse.json(product, { status: 201 });
}

export async function PUT(request: NextRequest, { params }: Props) {
  const { id } = await params;
  const body = await request.json();
  const validation = schema.safeParse(body);
  //req validation
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  //product not found
  if (!product)
    return NextResponse.json({ error: "product not found" }, { status: 404 });

  const updatedProduct = await prisma.product.update({
    where: {
      id: product.id,
    },
    data: {
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json(updatedProduct, { status: 200 });
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!product)
    return NextResponse.json({ error: "product not found" }, { status: 404 });

  await prisma.product.delete({
    where: { id: product.id },
  });
  return NextResponse.json({});
}
