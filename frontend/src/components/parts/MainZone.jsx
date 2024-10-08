import { Cards } from ".";

export const MainZone = () => {
  return (
    <main className="pt-36 pb-20 bg-white">
      <div className="container m-auto">
        <div className="px-20 py-[6px]">
          <div className="grid grid-cols-4 gap-8">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
    </main>
  );
};
