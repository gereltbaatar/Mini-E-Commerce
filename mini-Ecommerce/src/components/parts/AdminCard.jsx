import { AdminBtnDelete, AdminBtnEdit } from ".";

export const AdminCard = ({ items }) => {
  ///////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  const BACKEND_ENDPOINT = process.env.BACKEND_URL;

  ///////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////

  const handleOnSubmitDelete = async (id) => {
    event.preventDefault();

    console.log("items id ene shuu", id);

    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId: id }),
    };

    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/products`, options);
      const data = await response.json();
    } catch (error) {
      console.log("error bol :  ", error);
    }
  };

  ///////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////

  const handleOnSubmitEdit = async (idE) => {
    event.preventDefault();

    const editData = {};

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId: idE }),
    };

    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/products`, options);
      const data = await response.json();
    } catch (error) {
      console.log("error bol :  ", error);
    }
  };

  ///////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////

  return (
    <div className="">
      <div className="card card-compact bg-base-100 w-72 shadow-xl">
        <figure className="">
          {/* <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" /> */}
          <img
            className="skeleton max-w-[290px] h-[170px]"
            src={`${items?.image_url}`}
            alt={`${items?.name}`}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{items?.name}</h2>
          <p> {items?.description}</p>
          <div className="card-actions justify-start">
            <p className="font-roboto font-extrabold not-italic text-lg">
              {items?.price}₮
            </p>
          </div>
          <div className="w-full flex items-center justify-end gap-3">
            <AdminBtnEdit
              handleOnSubmitEdit={handleOnSubmitEdit}
              // nameN={""}
            />
            <AdminBtnDelete
              handleOnSubmitDelete={handleOnSubmitDelete}
              items={items}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
