export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 font-primary w-full flex justify-center pt-2 bg-[#120F17] max-lg:px-3 mb-10 ">
      <div className="w-full max-w-5xl border p-4 rounded-2xl flex justify-around text-lg max-sm:text-[16px]">
        <a
          href="#about"
          className="cursor-pointer  font-bold hover:-translate-y-1 duration-300 ease-in-out"
        >
          About
        </a>
        <a
          href="#featured"
          className="cursor-pointer  font-bold hover:-translate-y-1 duration-300 ease-in-out"
        >
          Projects
        </a>
        <a
          href="#stack"
          className="cursor-pointer  font-bold hover:-translate-y-1 duration-300 ease-in-out"
        >
          Skills
        </a>
        <a
          href="#contact"
          className="cursor-pointer  font-bold hover:-translate-y-1 duration-300 ease-in-out"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
