"use client";

import Link from "next/link";
import { ShoppingCardIcon1 } from "../svg";

const ShoppingCartPage = () => {
  return (
    <main>
      <div className="pt-36 pb-20 bg-white w-full h-full">
        <div className="container m-auto">
          <div className="px-20 py-[6px]">
            <div className="flex flex-col items-center justify-center gap-4">
              <ShoppingCardIcon1 />
              <p className="font-roboto font-medium not-italic text-3xl text-blue1" >
                Shopping cart is empty
              </p>
              <p className="font-roboto font-normal not-italic text-xl text-blue1">
                You have no items in your shopping cart.
              </p>
              <Link href="/">
                <button className="group px-4 py-2 bg-blue1 rounded-3xl hover:scale-105 duration-300">
                  <p className="font-roboto font-bold not-italic text-base group-hover:text-green duration-300 text-white">
                    Back to store
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShoppingCartPage;
