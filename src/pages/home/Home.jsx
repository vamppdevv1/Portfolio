import Background from "../../components/background/Background";
import { Navbar } from "../../components/navbar/Navbar";
import { Header } from "../../components/header/Header";
import { Featured } from "../../components/featured/FeaturedProjects";
export const Home = () => {
  return (
    <>
      <div className="w-full h-full p-2">
        <Background
          particleCount={140}
          particleSpread={13}
          speed={0.1}
          particleColors={["#ffffff"]}
          moveParticlesOnHover={false}
          particleHoverFactor={1}
          alphaParticles
          particleBaseSize={160}
          sizeRandomness={1}
          cameraDistance={24}
          disableRotation={false}
        />
        <Navbar />
        <Header />
        <div className="w-full flex justify-center">
          <div className="w-full max-w-5xl p-5">
            <h2 className="text-2xl mb-8 text-[#E0B0FF]">Featured Projects:</h2>
            <div className="flex justify-around flex-wrap gap-5">
              <Featured />
              <Featured />
              <Featured />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
