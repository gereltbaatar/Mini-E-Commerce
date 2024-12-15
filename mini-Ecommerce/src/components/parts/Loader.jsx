export const Loader = () => {
  return (
    <main>
      <div className="flex flex-col gap-3 items-center">
        <span className="loading loading-spinner bg-blue1 loading-lg"></span>
        <p className="font-roboto font-bold text-base text-blue1 not-italic">
          уншиж байна ...
        </p>
      </div>
    </main>
  );
};
