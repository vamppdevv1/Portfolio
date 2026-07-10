import TextType from "../textType/TextType";
import TechStack from "../techStack/TechStack";
import { stack } from "../../data/stack.js";

export const Header = () => {
  const techLogos = stack.map((stack) => {
    return { node: <stack.icon />, title: stack.name };
  });

  return (
    <header className="w-full flex justify-center">
      <div className="w-full max-w-5xl p-5 ">
        {/* animated text */}
        <div className="text-center text-5xl mb-13 font-primary ">
          <TextType text={["Hello There!"]} typingSpeed={60} loop={false} />
        </div>
        {/* about */}
        <section id="about" className="mb-8">
          <h1 className="text-3xl mb-5 ">Im Mohammed Amine!</h1>
          <p className="leading-12 font-body text-gray-400 max-[470px]:leading-8">
            a highly motivated {""}
            <span className="font-bold text-white mr-1">
              MERN stack developer
            </span>
            , I have a passion for developing web applications that are
            responsive and user-friendly. I enjoy coming up with concepts that
            will be implemented digitally in a professional way while at the
            same time acquiring more knowledge about what I do. The motivation
            behind my programming is to solve real-world problems and ensure
            that the applications developed are easy to use and reliable.
          </p>
        </section>
        {/* stack used */}
        <section id="stack" className="mb-6 ">
          <h2 className="text-3xl mb-10  ">Tech used:</h2>
          <TechStack
            logos={techLogos}
            speed={60}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={15}
            scaleOnHover
            fadeOut
            fadeOutColor="#120F17"
            ariaLabel="Technology partners"
          />
        </section>
      </div>
    </header>
  );
};
