import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="font-heading w-full flex justify-center pt-2 bg-[#120F17] max-lg:px-3 mb-10 ">
      <div className="w-full max-w-5xl border p-4 rounded-2xl flex justify-around">
        <Link to="/about" className="cursor-pointer text-lg font-bold">
          About
        </Link>
        <Link to="/projects" className="cursor-pointer text-lg font-bold">
          Projects
        </Link>
        <Link to="/skills" className="cursor-pointer text-lg font-bold">
          Skills
        </Link>
      </div>
    </nav>
  );
}
