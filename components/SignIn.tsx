"use client";

import { logIn } from "@/app/lib/actions/auth";

export default function SignIn() {
  return (
    <button className="p-2 bg-slate-300 rounded-md" onClick={() => logIn()}>
      Sign In with Google
    </button>
  );
}
