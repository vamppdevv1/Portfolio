import { accounts, freelanceAccounts } from "../../data/contact";
export const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#0a090d] h-fill p-5 flex flex-col items-center justify-center font-primary text-center"
    >
      <span className="text-2xl mb-4">Contact me here:</span>
      <div className="flex gap-50 max-[500px]:gap-10">
        <div>
          {accounts.map(({ name, icon: Icon }) => {
            return (
              <div
                key={name}
                className="flex items-center gap-2 justify-center my-2 cursor-pointer hover:text-blue-400 duration-400 "
              >
                <a>{name}</a>
                <Icon />
              </div>
            );
          })}
        </div>
        <div>
          {" "}
          {freelanceAccounts.map(({ name, icon: Icon, link }) => {
            return (
              <div
                key={name}
                className="flex items-center gap-2 justify-center my-2 cursor-pointer hover:text-blue-400 duration-400 "
              >
                <a target="_blank" rel="noopener noreferrer" href={link}>
                  {name}
                </a>
                <Icon />
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
