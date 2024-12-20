"use client";

import { useState, useEffect } from "react";
import { Loader } from "../parts";
import Link from "next/link";

const SingleProductPage = ({ params }) => {
  ///////////////////////////////////////////////////////////////////////////////

  const BACKEND_ENDPOINT = process.env.BACKEND_URL;
  const [dataProduct, setDataProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  ///////////////////////////////////////////////////////////////////////////////
  const handleOnSubmit = async (id, price) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: id,
        price: price,
        quantity: 1,
      }),
    };

    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/order_items`, options);

      if (!response.ok) {
        throw new Error(`Серверийн алдаа: ${response.status}`);
      }

      const data = await response.json();
      console.log("Амжилттай нэмэгдлээ:", data);
    } catch (error) {
      console.error("Алдаа гарлаа:", error.message || error);
    }
  };

  ///////////////////////////////////////////////////////////////////////////////

  async function fetchData() {
    try {
      const response = await fetch(
        `${BACKEND_ENDPOINT}/singleProduct?id=${params.id}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setDataProduct(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Алдаа гарвал ачааллыг зогсоох
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
  }

  return (
    <main className="pt-36 pb-20 h-[85%] bg-white">
      <div className="container m-auto h-full">
        <div className="px-20 py-[6px] h-full">
          {dataProduct.map((items, itemIndex) => {
            return (
              <Link href={`/product/${items.id}`} key={itemIndex}>
                <div className="h-full">
                  <div className="grid grid-cols-2 w-full">
                    <div
                      className={`px-10 max-w-[700px] max-h-[500px] rounded-2xl`}
                    >
                      <img
                        src={`${items.image_url}`}
                        className="w-full h-auto rounded-2xl "
                        alt=""
                      />
                    </div>
                    <form
                      action=""
                      onClick={() => {
                        handleOnSubmit(items.id, items.price);
                      }}
                    >
                      <div className="flex flex-col gap-5 px-14">
                        <div className="">
                          <span className="text-blue1 font-roboto font-bold text-xl">
                            {items.description}
                          </span>
                        </div>
                        <div className="border w-full"></div>
                        <div className="">
                          <span className="text-blue1 font-roboto font-semibold text-2xl">
                            {items.price}₮
                          </span>
                        </div>
                        <div className="border w-full"></div>
                        <div className="flex flex-col gap-2 ">
                          <div className="text-textColor text-base not-italic font-roboto font-medium">
                            Тоо ширхэг
                          </div>
                          <input
                            type="number"
                            className="border px-4 py-2 rounded-3xl w-20 outline-none  focus:border focus:border-green font-medium font-roboto not-italic text-base"
                          />
                        </div>
                        <button className="flex items-center justify-center border px-4 py-2 rounded-3xl bg-blue1 hover:bg-green duration-300 text-white text-lg not-italic font-roboto font-semibold">
                          Сагсанд нэмэх
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default SingleProductPage;
