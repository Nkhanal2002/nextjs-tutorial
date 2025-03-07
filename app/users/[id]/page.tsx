import { notFound } from "next/navigation";
import React from "react";
interface Props {
  params: Promise<{ id: number }>;
}
const UserDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  if (id > 10) {
    notFound();
  }
  return <div>User Detail Page {id}</div>;
};
//this approach only works in pages, can't add this prop to a component that is used in this page.
export default UserDetailPage;
