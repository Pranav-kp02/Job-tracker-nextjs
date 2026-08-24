"use client";

import React from "react";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { signOut } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";

const SignOutBtn = () => {
  const route = useRouter();
  return (
    <DropdownMenuItem
      onClick={async () => {
        const res = await signOut();
        if (res.data) {
          route.push("/sign-in");
        } else {
          alert("Failed to sign out");
        }
      }}
    >
      Log Out
    </DropdownMenuItem>
  );
};

export default SignOutBtn;
