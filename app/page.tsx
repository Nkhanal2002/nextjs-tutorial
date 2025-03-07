import Image from "next/image";
import Link from "next/link";
import ProductCard from "../components/ProductCard/ProductCard";
import { auth } from "@/auth";
// import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";
export default async function Home() {
  // const session = await getServerSession(authOptions);
  const session = await auth(); // auth function here provides the retrieval of session for each user, updated way to do it, covers everything from getServerSession, getSession and so on.
  console.log(session);
  return (
    <main className="p-4">
      <h1 className="mb-4">
        Hello,{" "}
        {session?.user ? <span> {session.user.name}</span> : <span>User</span>}
      </h1>
      {session?.user && (
        <p className="mb-4">
          {" "}
          <span className="font-bold">Email:</span> {session?.user.email}
        </p>
      )}
      <ProductCard></ProductCard>
    </main>
  );
}
