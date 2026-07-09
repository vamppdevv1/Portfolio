import Background from "../../components/background/Background";
import { Navbar } from "../../components/navbar/Navbar";
import { Header } from "../../components/header/Header";
import { Featured } from "../../components/featured/Featured";
export const Home = () => {
  return (
    <div className="w-full h-screen">
      <Background />
      <Navbar />
      <Header />
      <div className="w-full flex justify-center">
        <div className="w-full max-w-5xl p-5">
          <h2 className="text-2xl text-amber-50">Featured Projects:</h2>
          <Featured/>
        </div>
      </div>
    </div>
  );
};
