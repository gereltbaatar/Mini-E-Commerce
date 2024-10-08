"use client";

import Link from "next/link";
import { HeaderButton } from ".";

export const Header = () => {
  return (
    <main className="bg-blue1 py-8 fixed w-full z-10">
      <div className="top-6">
        <div className="container m-auto rounded-[38px] bg-white/10 backdrop-blur-sm">
          <div className="px-20 py-[6px]">
            <div className="flex justify-between items-center">
              <div className="font-bold font-roboto text-2xl text-white not-italic">
                <Link href="/">
                  GERELT<span className="text-green">.mn</span>
                </Link>
              </div>
              <div className="min-w-[200px]">
                <input
                  className="border-2 border-solid outline-none px-4 py-2 rounded-3xl  focus:border-2 focus:border-green bg-white/10 w-full text-green"
                  type="text"
                  placeholder="Search"
                />
              </div>
              <div className="">
                <HeaderButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
