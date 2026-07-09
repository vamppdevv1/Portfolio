import { stack } from "../techStack/stack.js";

export const TechStack = ()=> {
  return (
    <div className="flex justify-between w-full mt-7 ">
      {stack.map(({ name, icon: Icon, color }) => (
        <div key={name} className="flex flex-col items-center" style={{color: color}}>
          <Icon className="text-3xl" />
          <span className="max-[440px]:hidden">{name}</span>
        </div>
      ))}
    </div>
  );
}