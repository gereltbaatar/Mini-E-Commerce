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

  const productCount = dataProduct.length;

  ///////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////

  async function fetchData() {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/order_items`);

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

  useEffect(() => {
    fetchData(); // Функцийг дуудна
  }, [dataProduct]);

  ///////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////

  const handleOnSubmitDelete = async (id) => {
    event.preventDefault();

    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    };

    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/order_items`, options);
      const data = await response.json();
    } catch (error) {
      console.log("error bol :  ", error);
    }
  };

  ///////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////

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
                Таны сагс <span className="text-green">{productCount}</span>{" "}
                бараа
              </div>
              <div className="grid grid-cols-1 gap-3 p-4">
                {dataProduct.map((items, itemIndex) => {
                  return (
                    <div key={itemIndex} className="px-3 pt-3">
                      <Link href={`/product/${items.product_id}`}>
                        <div className="flex gap-3">
                          <div className="border">
                            <img
                              className="h-[100px]"
                              src={items.image_url}
                              // src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                              alt=""
                            />
                          </div>
                          <div className="flex items-center justify-between w-full gap-2">
                            <div className="flex flex-col gap-3">
                              <div className="text-xs border not-italic font-bold font-roboto text-[#4b4c4f]">
                                {items.name}
                                {/* description */}
                              </div>
                              <div className="text-xs border not-italic font-bold font-roboto text-[#4b4c4f]">
                                {items.description}
                                {/* description */}
                              </div>
                            </div>
                            <div className="flex gap-4 items-center">
                              <div className="text-sm not-italic font-bold font-roboto text-blue1">
                                {items.price}₮
                              </div>
                              <div className="border border-green px-4 py-2 rounded-xl text-sm not-italic font-bold font-roboto text-blue1">
                                {items.quantity}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="flex justify-end pb-3">
                        <button
                          onClick={() => {
                            handleOnSubmitDelete(items?.id);
                          }}
                          className="group  flex gap-1 items-center px-4 py-2 rounded-3xl hover:bg-green/20 duration-300"
                        >
                          <DeleteIconBlack />
                          <p className="flex items-center justify-center font-roboto font-bold not-italic text-xs text-[#4b4c4f] group-hover:text-blue1">
                            устгах
                          </p>
                        </button>
                      </div>
                      <div className="w-full border-[0.5px]"></div>
                    </div>
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
