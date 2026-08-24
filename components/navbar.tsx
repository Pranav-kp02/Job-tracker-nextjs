"use client";
import { Briefcase } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { getSession } from "@/lib/auth/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import SignOutBtn from "./sign-out-btn";
import { useSession } from "@/lib/auth/auth-client";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        <Link
          href="/"
          className="flex item-center gap-2 text-xl font-semibold text-primary"
        >
          <Briefcase />
          job Tracker
        </Link>
        <div className="flex item-center gap-4">
          {" "}
          {session?.user ? (
            <>
              <Link href="/dashboard">
                <Button
                  variant="ghost"
                  className="text-grey-700 hover:text-black"
                >
                  Dashboard
                </Button>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger render={<Button variant="ghost" />}>
                  <Avatar>
                    <AvatarFallback className="bg-primary text-white">
                      {session.user.name[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>
                      <div>
                        <p>{session.user.name}</p>
                        <p>{session.user.email}</p>
                      </div>
                    </DropdownMenuLabel>
                  </DropdownMenuGroup>
                  <DropdownMenuGroup>
                    <SignOutBtn />
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link href="/sign-in">
                <Button
                  variant="ghost"
                  className="text-grey-700 hover:text-black"
                >
                  Login In
                </Button>
              </Link>
              <Link href="/sign-up">
                {" "}
                <Button className="bg-primary hover:bg-primary/90">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
