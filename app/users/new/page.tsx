"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUsersPage = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/users");
      }}
      className="btn btn-secondary"
    >
      Create
    </button>
  );
};

export default NewUsersPage;
