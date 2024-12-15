import AdminPage from "@/components/pages/AdminPage";
import { Footer, Header } from "@/components/parts";

const adminPage = () => {
  return (
    <main className="h-screen flex flex-col justify-between">
      <Header />
      <AdminPage />
      <Footer />
    </main>
  );
};

export default adminPage;
