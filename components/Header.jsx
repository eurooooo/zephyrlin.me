"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./MobileMenu";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { UserPlus } from "lucide-react";
import { motion } from "framer-motion";

export const navigationItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Project",
    href: "/project",
  },
  {
    name: "Message",
    href: "/message",
  },
];

export default function Header() {
  const pathname = usePathname();
  const page = pathname.split("/").slice(0, 2).join("/");

  return (
    <header className="grid grid-flow-col grid-cols-4 px-4 py-8 mx-auto max-w-7xl md:px-8">
      <div className="flex items-center justify-start col-span-1">
        <Link href="/">
          <div className="hidden text-2xl font-semibold rounded-full sm:flex sm:justify-center sm:items-center">
            ZL
          </div>
        </Link>
        <div className="sm:hidden">
          <MobileMenu />
        </div>
      </div>

      <div className="justify-center hidden col-span-2 mt-0.5 sm:flex">
        <ul className="items-center justify-center hidden bg-[#f2f2f21a] rounded-full sm:flex px-2 py-1 ">
          {navigationItems.map((item) => {
            const isSelected = page == item.href;
            return (
              <motion.li key={item.name} className="relative">
                {isSelected && (
                  <>
                    <motion.div
                      className="absolute left-1/4 w-9 mx-auto border-t-2 shadow-[0_2px_25px_2px_#fff]"
                      layoutId="selected"
                    ></motion.div>
                    <motion.div
                      className="absolute top-0.5 bottom-0.5 w-full bg-[#f2f2f20d] rounded-full"
                      layoutId="selecteddiv"
                    ></motion.div>
                  </>
                )}

                <motion.div
                  whileHover={{
                    backgroundColor: "#f2f2f20d",
                  }}
                  className={`px-4 py-3 rounded-full ${item.name != "Home" && item.name != "Blog" ? "tracking-tight" : "tracking-widest"} font-bold text-sm`}
                >
                  <Link href={item.href}>{item.name}</Link>
                </motion.div>
              </motion.li>
            );
          })}
        </ul>
      </div>

      <div className="flex items-center justify-end col-start-4">
        <SignedOut>
          <SignInButton
            mode="modal"
            forceRedirectUrl={pathname}
            signUpForceRedirectUrl={pathname}
          >
            <Button variant="ghost" size="icon">
              <UserPlus />
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl={pathname} />
        </SignedIn>
      </div>
    </header>
  );
}
