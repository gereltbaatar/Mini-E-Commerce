export const Cards = () => {
  return (
    <main>
      <div className="card card-compact bg-base-100 w-72 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-start">
            <p className="font-roboto font-extrabold not-italic text-lg">
              80,218₮
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
