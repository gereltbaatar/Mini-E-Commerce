"use client";

import Link from "next/link";
import { ShoppingCardIcon1 } from "../svg";
import { useState, useEffect } from "react";
import { Cards, Loader } from "../parts";

const ShoppingCartPage = () => {
  const BACKEND_ENDPOINT = process.env.BACKEND_URL;
  const [dataProduct, setDataProduct] = useState([]);
  const [loading, setLoading] = useState(0);
  const [cart, setCart] = useState(true);

  console.log("Url mainPage", BACKEND_ENDPOINT);

  async function fetchData() {
    try {
      const response = await fetch(BACKEND_ENDPOINT);

      // Хариу сайн ирсэн эсэхийг шалгах
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json(); // JSON-ийг парс хийх
      setDataProduct(data);
      setLoading(1);
      setCart(false);
    } catch (error) {
      console.error("Error fetching data:", error); // Алдааг консольд хэвлэх
      setLoading(1);
    }
  }

  console.log("Авах өгөгдлийг консоль CART", dataProduct); // Авах өгөгдлийг консольд хэвлэх

  useEffect(() => {
    fetchData(); // Функцийг дуудна
  }, []);

  if (loading === 0) {
    return (
      <main className="pt-36 pb-20 bg-white">
        <div className="container m-auto">
          <div className="px-20 py-[6px]">
            <div className="flex items-center justify-center">
              <div>
                <Loader />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  } else if (dataProduct.length === 0) {
    return (
      <main>
        <div className="pt-36 pb-20 bg-white w-full h-full">
          <div className="container m-auto">
            <div className="px-20 py-[6px]">
              <div className="flex flex-col items-center justify-center gap-4">
                <ShoppingCardIcon1 />
                <p className="font-roboto font-medium not-italic text-3xl text-blue1">
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
  }
  return (
    <main className="pt-36 pb-20 bg-white">
      <div className="container m-auto">
        <div className="px-20 py-[6px]">
          <div className="flex">
            <div className="w-[60%]">
              <div className="font-bold font-roboto not-italic text-2xl p-4">
                Shopping Cart (4 items)
              </div>
              <div className="grid grid-cols-1 gap-3 p-4">
                {dataProduct.map((items, itemIndex) => {
                  return (
                    <div
                      className="border p-3 border-black flex gap-3"
                      href={`/product/${items.id}`}
                      key={itemIndex}
                    >
                      <div className="border">
                        <img
                          className="h-[100px]"
                          src={items.image_url}
                          alt=""
                        />
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <div className="">{items.description}</div>
                        <div className="flex">
                          <div className="">{items.price}₮</div>
                          <div className="">Product count</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="border border-black w-[40%] p-4">
              edewdewdwedewd
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShoppingCartPage;

// {
//   dataProduct.map((items, itemIndex) => {
//     return (
//       <Link href={`/product/${items.id}`} key={itemIndex}>
//         <div className=""></div>
//       </Link>
//     );
//   });
// }
