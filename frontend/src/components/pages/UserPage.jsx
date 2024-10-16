"use client";

import { useState, useEffect } from "react";
import { UserCardIcon, OrdersIcon, AddressIcon, LogOuntIcon } from "../svg";
import { Loader } from "../parts";

const UserPage = () => {
  const BACKEND_ENDPOINT = process.env.BACKEND_URL;
  const [dataUser, setDataUser] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/user`);

      // Хариу сайн ирсэн эсэхийг шалгах
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json(); // JSON-ийг парс хийх
      setDataUser(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error); // Алдааг консольд хэвлэх
      setLoading(false);
    }
  }

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
  }
  return (
    <main>
      <div className="pt-36 pb-20 bg-white w-full h-full">
        <div className="container m-auto">
          <div className="px-20 py-[6px]">
            {dataUser.map((items, itemIndex) => {
              return (
                <div key={itemIndex} className="flex gap-2 justify-between">
                  <div className="w-[30%] flex flex-col gap-4">
                    <div className="  bg-blue1/5 rounded-lg flex flex-col items-center justify-center p-4 ">
                      <div className="w-[120px] h-[120px] border rounded-lg border-green">
                        <img src="./profile-icon-png-898.png" alt="" />
                      </div>
                      <h1 className="font-roboto font-medium not-italic text-xl text-green">
                        {items.name}
                      </h1>
                    </div>
                    <div className="  bg-blue1/5 rounded-lg ">
                      <div className="flex gap-2 px-3 py-4">
                        <UserCardIcon />
                        <p className="font-roboto font-medium not-italic text-base text-blue1">
                          Хувийн мэдээлэл
                        </p>
                      </div>
                      <div className="flex gap-2 px-3 py-4">
                        <OrdersIcon />
                        <p className="font-roboto font-medium not-italic text-base text-blue1">
                          Захиалгууд
                        </p>
                      </div>
                      <div className="flex gap-2 px-3 py-4">
                        <AddressIcon />
                        <p className="font-roboto font-medium not-italic text-base text-blue1">
                          Хаяг
                        </p>
                      </div>
                    </div>
                    <div className="  bg-blue1/5 rounded-lg">
                      <div className="flex gap-2 px-3 py-4">
                        <LogOuntIcon />
                        <p className="font-roboto font-medium not-italic text-base text-blue1">
                          Гарах
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue1/5 rounded-lg w-[65%] p-4 flex flex-col gap-4">
                    <div className="font-roboto font-bold not-italic text-2xl">
                      Бүртгэл
                    </div>
                    <div className="">
                      <p className="font-roboto font-medium not-italic text-base">
                        Нэр :
                      </p>
                      <div className="p-2 border w-[35%] rounded-3xl border-green">
                        <p className="font-roboto">{items.name}</p>
                      </div>
                    </div>
                    <div className="w-full border-[0.5px]"></div>
                    <div className="">
                      <p className="font-roboto font-medium not-italic text-base">
                        И-Мэйл хаяг :
                      </p>
                      <div className="p-2 border w-[35%] rounded-3xl border-green">
                        <p className="font-roboto">{items.email}</p>
                      </div>
                    </div>
                    <div className="w-full border-[0.5px]"></div>
                    <div className="">
                      <p className="font-roboto font-medium not-italic text-base">
                        хэрэглэгчийн ID
                      </p>
                      <div className="p-2 border w-[35%] rounded-3xl border-green">
                        <p className="font-roboto">{items.id}</p>
                      </div>
                    </div>
                    <div className="w-full border-[0.5px]"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserPage;
