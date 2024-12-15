import ShoppingCartPage from "@/components/pages/ShoppingCartPage";
import { Footer, Header } from "@/components/parts";

const shoppingCart = () => {
  return (
    <main className="h-screen flex flex-col justify-between">
      <Header />
      <ShoppingCartPage />
      <Footer />
    </main>
  );
};

export default shoppingCart;
