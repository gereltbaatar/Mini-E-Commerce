import { DeleteIcon } from "../svg";

export const AdminBtnDelete = ({ handleOnSubmitDelete, items }) => {
  console.log("AdminBtnDelete", items.id);
  return (
    <div className="">
      <button
        onClick={() => {
          handleOnSubmitDelete(items?.id);
        }}
        className="px-3 py-1 rounded bg-blue1 text-white hover:bg-green duration-300 hover:scale-[1.05]"
      >
        <DeleteIcon />
      </button>
    </div>
  );
};
