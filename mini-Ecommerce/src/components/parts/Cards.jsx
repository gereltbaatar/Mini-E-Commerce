export const Cards = ({ items }) => {
  return (
    <main>
      <div className="card card-compact bg-base-100 max-w-72 shadow-xl">
        <figure className="skeleton w-[290px] h-[170px]">
          <img src={`${items?.image_url}`} alt={`${items?.name}`} />
        </figure>
        <div className="card-body max-w-[300px]">
          <h2 className="card-title">{items?.name}</h2>
          <div className="card-actions justify-start">
            <p className="font-roboto font-extrabold not-italic text-lg">
              {items?.price}₮
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
{
  /* <img src={`${items.image_url}`} alt={`${items.name}`} /> */
}

// https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp
