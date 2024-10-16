"use client";

import Link from "next/link";
import { DeleteIconBlack, ShoppingCardIcon1 } from "../svg";
import { useState, useEffect } from "react";
import { Loader } from "../parts";

const ShoppingCartPage = () => {
  const BACKEND_ENDPOINT = process.env.BACKEND_URL;
  const [dataProduct, setDataProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState(true);

  async function fetchData() {
    try {
      const response = await fetch(BACKEND_ENDPOINT);

      // Хариу сайн ирсэн эсэхийг шалгах
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json(); // JSON-ийг парс хийх
      setDataProduct(data);
      setLoading(false);
      setCart(false);
    } catch (error) {
      console.error("Error fetching data:", error); // Алдааг консольд хэвлэх
      setLoading(false);
    }
  }

  console.log("Авах өгөгдлийг консоль CART", dataProduct); // Авах өгөгдлийг консольд хэвлэх

  useEffect(() => {
    fetchData(); // Функцийг дуудна
  }, []);

  if (loading === true) {
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
          <div className="flex gap-4">
            <div className="w-[65%] bg-blue1/5 rounded-lg">
              <div className="font-bold font-roboto not-italic text-2xl text-blue1 p-4">
                Таны сагс <span className="text-green">4</span> бараа
              </div>
              <div className="grid grid-cols-1 gap-3 p-4">
                {dataProduct.map((items, itemIndex) => {
                  return (
                    <Link href={`/product/${items.id}`} key={itemIndex}>
                      <div className="px-3 pt-3">
                        <div className="flex gap-3">
                          <div className="border">
                            <img
                              className="h-[100px]"
                              src={items.image_url}
                              alt=""
                            />
                          </div>
                          <div className="flex items-center justify-between w-full gap-2">
                            <div className="text-xs not-italic font-bold font-roboto text-[#4b4c4f]">
                              {items.description}
                            </div>
                            <div className="flex gap-4 items-center">
                              <div className="text-sm not-italic font-bold font-roboto text-blue1">
                                {items.price}₮
                              </div>
                              <div className="border border-green px-4 py-2 rounded-xl text-sm not-italic font-bold font-roboto text-blue1">
                                3
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end pb-3">
                          <button className="group  flex gap-1 items-center px-4 py-2 rounded-3xl hover:bg-green/20 duration-300">
                            <DeleteIconBlack />
                            <p className="flex items-center justify-center font-roboto font-bold not-italic text-xs text-[#4b4c4f] group-hover:text-blue1">
                              устгах
                            </p>
                          </button>
                        </div>
                        <div className="w-full border-[0.5px]"></div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="w-[35%]">
              <div className="p-4 bg-blue1/5 rounded-lg">
                <div className="flex justify-between py-2">
                  <p className="font-roboto font-bold not-italic text-sm text-blue1">
                    Үнийн дүн
                  </p>
                  <p className="font-roboto font-bold not-italic text-base text-blue1">
                    170,938₮
                  </p>
                </div>
                <div className="flex justify-between py-2">
                  <p className="font-roboto font-bold not-italic text-sm text-blue1">
                    Үйлчилгээний төлбөр
                  </p>
                  <p className="font-roboto font-bold not-italic text-base text-blue1">
                    10,000₮
                  </p>
                </div>
                <div className="flex justify-between py-2">
                  <p className="font-roboto font-bold not-italic text-sm text-blue1">
                    Тээврийн төлбөр
                  </p>
                  <p className="font-roboto font-bold not-italic text-base text-blue1">
                    5,000₮
                  </p>
                </div>
                <div className="w-full border-[0.5px] my-4"></div>
                <div className="flex justify-between">
                  <p className="font-roboto font-bold not-italic text-sm text-blue1">
                    Нийт төлөх дүн
                  </p>
                  <p className="font-roboto font-bold not-italic text-lg text-green">
                    180,938₮
                  </p>
                </div>
                <button className="my-4 w-full flex items-center justify-center border px-4 py-2 rounded-3xl bg-blue1 hover:bg-green duration-300 text-white text-lg not-italic font-roboto font-semibold">
                  Захиалга үргэлжлүүлэх
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShoppingCartPage;
