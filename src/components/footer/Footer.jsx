import { accounts } from "../../data/contact";
export const Footer = () => {
  return (
    <footer className="bg-[#0a090d] h-50 p-5 flex justify-center">
      <div className="">
        <span className="text-2xl">Contact me here:</span>
        <div>
          {accounts.map(({ name, icon: Icon }) => {
            return (
              <div key={name} className="flex items-center gap-2 justify-center my-2 cursor-pointer hover:text-blue-400">
                <span>{name}</span>
                <Icon />
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
