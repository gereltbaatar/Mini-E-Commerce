"use client";

import { useState, useEffect } from "react";
import { Cards, Loader } from ".";
import Link from "next/link";

export const MainZone = () => {
  const BACKEND_ENDPOINT = process.env.BACKEND_URL;
  const [dataProduct, setDataProduct] = useState([]);
  const [loading, setLoading] = useState(0);

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
    } catch (error) {
      console.error("Error fetching data:", error); // Алдааг консольд хэвлэх
      setLoading(1);
    }
  }

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
  }

  return (
    <main className="pt-36 pb-20 bg-white">
      <div className="container m-auto">
        <div className="px-20 py-[6px]">
          <div className="grid grid-cols-4 gap-8">
            {dataProduct.map((items, itemIndex) => {
              return (
                <Link href={`/product/${items.id}`} key={itemIndex}>
                  <div className="">
                    <Cards items={items} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};
