import { Outlet } from "react-router-dom";
import Background from "../../components/background/Background";
import { Footer } from "../../components/footer/Footer";
import {Navbar} from "../../components/navbar/Navbar"
export const Layout = () => {
  return (
    <>
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
      <Navbar/>
      <Outlet />
      <Footer />
    </>
  );
};
