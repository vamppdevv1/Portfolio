export const Featured = ({ project }) => {
  return (
    <div className="border w-max p-5 rounded-xl mb-15 hover:-translate-y-3  duration-500 ease-in-out ">
      <div className="text-center">
        <span className="text-xl ">{project.name}</span>
        <img
          className="w-3xs h-3xs mt-5 rounded-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ocRnv2CKCJGSkRFb_A8Zrs-uQW17ZIODmX7t5efcZJjm6p5aMS4p2GJs&s=10"
          alt=""
        />
        <div className="flex gap-5 justify-center mt-4">
          {project.stack.map((Icon) => {
            return <Icon key={Icon} className="text-2xl" />;
          })}
        </div>
      </div>
      <div className="flex justify-around mt-5">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={project.link}
          className="cursor-pointer border rounded-xl p-2 w-15 flex justify-center items-center"
        >
          View
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer border rounded-xl p-2 w-15 flex justify-center items-center"
        >
          Github
        </a>
      </div>
    </div>
  );
};
