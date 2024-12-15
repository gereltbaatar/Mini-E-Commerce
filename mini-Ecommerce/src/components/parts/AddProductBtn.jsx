"use client";

import { AddIcon } from "../svg";

export const AddProductBtn = ({
  handleOnSubmit,
  nameN,
  nameIntrodure,
  namePrice,
  nameURL,
}) => {
  return (
    <div className="">
      <button
        className="btn bg-blue1 text-white hover:bg-green"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <AddIcon />
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-xl text-blue1">Add Product</h3>
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost">✕</button>
              </form>
            </div>
            <form action="" onSubmit={handleOnSubmit}>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Product name"
                  name={nameN}
                  className="border-[1.5px] w-full outline-none p-2 focus:border-[1.5px] focus:border-green"
                />
                <input
                  type="text"
                  placeholder="Product introdure"
                  name={nameIntrodure}
                  className="border-[1.5px] w-full outline-none p-2 focus:border-[1.5px] focus:border-green"
                />
                <input
                  type="number"
                  placeholder="Product price"
                  name={namePrice}
                  className="border-[1.5px] w-full outline-none p-2 focus:border-[1.5px] focus:border-green"
                />
                <input
                  type="text"
                  placeholder="Product picture URL"
                  name={nameURL}
                  className="border-[1.5px] w-full outline-none p-2 focus:border-[1.5px] focus:border-green"
                />
                <button
                  onClick={() => document.getElementById("my_modal_3").close()}
                  className="btn w-full bg-blue1 hover:bg-green text-white text-lg not-italic font-bolt font-roboto"
                >
                  ADD
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
