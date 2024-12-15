"use client";

import Link from "next/link";
import { AdminIcon, ShoppingCardIcon, UserProfileIcon } from "../svg";

const titles = [
  { icon: <ShoppingCardIcon />, title: "Shopping Cart", path: "/shoppingCart" },
  { icon: <UserProfileIcon />, title: "User", path: "/user" },
  { icon: <AdminIcon />, title: "Admin", path: "/admin" },
];

export const HeaderButton = () => {
  return (
    <div className="flex items-center gap-4">
      {titles.map((item, itemindex) => {
        return (
          <button key={itemindex}>
            <Link href={item.path}>
              <div className="flex gap-2 items-center px-4 py-2 rounded-3xl hover:bg-green/20 duration-300">
                {item.icon}
                <span className="font-medium font-roboto not-italic text-sm text-white ">
                  {item.title}
                </span>
              </div>
            </Link>
          </button>
        );
      })}
    </div>
  );
};
