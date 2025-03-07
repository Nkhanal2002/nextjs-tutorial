import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client";
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

// If you remove the NextRequest parameter, Next.js will cache the result of this response. To prevent it, you should use NextRequest even if it is not used in the function.

export async function POST(request: NextRequest) {
  const body = await request.json();
  //validate the request
  // If one property is missing, error message with status 400
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  // check if user already exists via email
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (user) {
    NextResponse.json({ error: "user already exist" }, { status: 400 });
  }

  // if user doesn't exist, create a new one
  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  //otherwise, respond with the data that the request body provides with status 201 (uses mainly when an object is created)
  return NextResponse.json(newUser, { status: 201 });
}
