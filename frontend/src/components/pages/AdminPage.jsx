"use client";

import { useState, useEffect } from "react";
import { AddProductBtn, AdminCard, Loader } from "../parts";

const AdminPage = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const BACKEND_ENDPOINT = process.env.BACKEND_URL;

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const dataBase = {
      name: event.target.name.value,
      description: event.target.description.value,
      price: event.target.price.value,
      image_url: event.target.image_url.value,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataBase),
    };
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/products`, options);
      const data = await response.json();
    } catch (error) {
      console.log("erororo", error);
    }
  };

  console.log(BACKEND_ENDPOINT);

  async function fetchData() {
    try {
      const response = await fetch(BACKEND_ENDPOINT);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setDataProduct(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [dataProduct]);

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
    <main>
      <div className="pt-36 pb-20 bg-white w-full h-full">
        <div className="container m-auto">
          <div className="px-20 py-[6px]">
            <div className="flex flex-col gap-8">
              <div className="flex items-center justify-between">
                <h1 className="text-blue1 text-3xl font-roboto font-black not-italic">
                  Your product
                </h1>
                <AddProductBtn
                  handleOnSubmit={handleOnSubmit}
                  nameN={"name"}
                  nameIntrodure={"description"}
                  namePrice={"price"}
                  nameURL={"image_url"}
                />
              </div>
              <div className="grid grid-cols-4 gap-6">
                {dataProduct.map((items, itemIndex) => {
                  return (
                    <div key={itemIndex} className="">
                      <AdminCard items={items} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default AdminPage;
