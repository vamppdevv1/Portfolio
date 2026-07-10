import Background from "../../components/background/Background";
import { Header } from "../../components/header/Header";
import { Featured } from "../../components/featuredProjects/FeaturedProjects";
import { featuredProjects } from "../../data/featuredProjects";
import { BsGithub } from "react-icons/bs";
export const Home = () => {
  return (
    <div className="w-full h-full p-2 font-secondary">
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
      <Header />
      <div className="w-full flex justify-center">
        <div className="w-full max-w-5xl p-5">
          <h2 className="text-3xl mb-10">Featured Projects:</h2>
          <section
            id="featured"
            className="flex flex-col justify-center items-center"
          >
            <a
              href="https://github.com/vamppdevv1"
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-xl p-3 mb-10 flex items-center gap-5 text-lg cursor-pointer transition-scale hover:scale-105 duration-300"
            >
              {" "}
              <BsGithub className="text-2xl" /> Check all projects here
            </a>
            <div className="flex justify-around flex-wrap gap-5">
              {featuredProjects.map((project) => {
                return <Featured key={project.name} project={project} />;
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
