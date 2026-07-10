import { Link } from "react-router-dom";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
export const Featured = () => {
  return (
    <div className="border w-max p-5 rounded-xl hover:-translate-y-3 duration-300 ease-in-out">
      <div className="text-center">
        <span className="text-xl ">Template</span>
        <img
          className="w-3xs h-3xs mt-5 rounded-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ocRnv2CKCJGSkRFb_A8Zrs-uQW17ZIODmX7t5efcZJjm6p5aMS4p2GJs&s=10"
          alt=""
        />
        <div className="flex gap-5 justify-center mt-4">
          <SiReact className="text-2xl" />
          <SiTailwindcss className="text-2xl" />
          <SiNodedotjs className="text-2xl" />
          <SiExpress className="text-2xl" />
          <SiMongodb className="text-2xl" />
        </div>
      </div>
      <div className="flex justify-around mt-5">
        <Link className="cursor-pointer border rounded-xl p-2 w-15 flex justify-center items-center">
          View
        </Link>
        <a className="cursor-pointer border rounded-xl p-2 w-15 flex justify-center items-center">
          Github
        </a>
      </div>
    </div>
  );
};
