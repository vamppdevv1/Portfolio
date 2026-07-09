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
        <div>
          <h1 className="text-2xl mb-5 font-heading  text-amber-50">
            Im Mohammed Amine!
          </h1>
          <p className="leading-10 font-body">
            I am a Full Stack MERN Developer focused on building modern,
            responsive, and user-friendly web applications. I work with React,
            Node.js, Express, and MongoDB to create complete solutions from
            frontend interfaces to backend systems. I enjoy writing clean,
            maintainable code and continuously improving my skills through
            real-world projects.
          </p>
        </div>
        {/* stack used */}
        <h2 className="text-2xl mt-8  text-amber-50">Tech used:</h2>
        <TechStack />
      </div>
    </header>
  );
};
