import TextType from "../textType/TextType";
import { TechStack } from "../techStack/TechStack";
export const Header = () => {
  return (
    <header className="w-full flex justify-center">
      <div className="w-full max-w-5xl p-5 ">
        {/* animated text */}
        <div className="text-center text-5xl mb-13 font-heading ">
          <TextType text={["Hello There!"]} typingSpeed={60} loop={false} />
        </div>
        {/* brief about */}
        <div className="mb-8">
          <h1 className="text-2xl mb-5 font-heading text-[#E0B0FF]">
            Im Mohammed Amine!
          </h1>
          <p className="leading-10 font-body">
            a Full Stack MERN Developer focused on building modern, responsive,
            and user-friendly web applications. I work with React, Node.js,
            Express, and MongoDB to create complete solutions from frontend
            interfaces to backend systems. I enjoy writing clean, maintainable
            code and continuously improving my skills through real-world
            projects.
          </p>
        </div>
        {/* stack used */}
        <div className="mb-6">
          <h2 className="text-2xl mb-5  text-[#E0B0FF]">Tech used:</h2>
          <TechStack />
        </div>
      </div>
    </header>
  );
};
