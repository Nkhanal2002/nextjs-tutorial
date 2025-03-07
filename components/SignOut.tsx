"use client";

import { logOut } from "@/app/lib/actions/auth";

export default function SignOut() {
  return (
    <button className="p-2 bg-slate-300 rounded-md" onClick={() => logOut()}>
      Sign Out
    </button>
  );
}
