import React from "react";
import Image from "next/image";
import Link from "next/link";
import SignIn from "@/components/SignIn";
import SignOut from "@/components/SignOut";
import { auth } from "@/auth";

const NavBar = async () => {
  const session = await auth();
  return (
    <div>
      <nav className="navbar  gap-4 mx-auto p-3 bg-slate-200 shadow-md rounded-sm mb-4 ">
        {session?.user?.image && (
          <Image
            src={session.user.image}
            width={40}
            height={40}
            className="rounded-full"
            alt={session.user.name ?? "avatar"}
          ></Image>
        )}
        <Link href="/">Home</Link>
        <Link href="/users">Users</Link>
        <Link href="/products">Products</Link>
        <Link href="/admin">Admin</Link>
        {session?.user ? <SignOut></SignOut> : <SignIn />}
      </nav>
    </div>
  );
};

export default NavBar;
