import UserPage from "@/components/pages/UserPage";
import { Header, Footer } from "@/components/parts";

const user = () => {
  return (
    <main className="h-screen flex flex-col justify-between">
      <Header />
      <UserPage />
      <Footer />
    </main>
  );
};

export default user;
