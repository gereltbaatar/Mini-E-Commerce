import SingleProductPage from "@/components/pages/SingleProductPage";
import { Footer, Header } from "@/components/parts";

const Single = ({ params }) => {
  console.log(params);
  return (
    <main className="h-screen flex flex-col justify-between">
      <Header />
      <SingleProductPage params={params} />
      <Footer />
    </main>
  );
};

export default Single;
