import { Header, MainZone, Footer } from "../parts";

const HomePage = () => {
  return (
    <main className="h-screen flex flex-col justify-between">
      <Header />
      <MainZone />
      <Footer />
    </main>
  );
};

export default HomePage;
