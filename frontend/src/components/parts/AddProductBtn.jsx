"use client";

import { AddIcon } from "../svg";

export const AddProductBtn = () => {
  return (
    <div className="">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
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
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost">✕</button>
              </form>
            </div>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Product name"
                className="border-[1.5px] w-full outline-none p-2 focus:border-[1.5px] focus:border-green"
              />
              <input
                type="text"
                placeholder="Product introdure"
                className="border-[1.5px] w-full outline-none p-2 focus:border-[1.5px] focus:border-green"
              />
              <input
                type="text"
                placeholder="Product price"
                className="border-[1.5px] w-full outline-none p-2 focus:border-[1.5px] focus:border-green"
              />
              <input
                type="text"
                placeholder="Product picture URL"
                className="border-[1.5px] w-full outline-none p-2 focus:border-[1.5px] focus:border-green"
              />
            </div>
            <button className="btn bg-blue1 hover:bg-green text-white text-lg not-italic font-bolt font-roboto">
              ADD
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};
