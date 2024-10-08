import { AddProductBtn, Cards } from "../parts";

const AdminPage = () => {
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
                <AddProductBtn />
              </div>
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
        </div>
      </div>
    </main>
  );
};
export default AdminPage;
