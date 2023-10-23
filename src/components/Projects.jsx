import placeHolder from "../assets/placeholder.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Project 1",
      image: placeHolder,
      description: "This is a placeholder for a project",
      github: "https://github.com",
      deployed: "https://www.google.com",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black via-gray-900 to-gray-900 w-full text-gray-400 md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center h-full w-full p-10">
        <div className="pb-8">
          <p className="text-yellow-700 text-4xl font-bold inline border-b-4 border-yellow-700">
            Projects
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>

        {
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {projects.map((project) => (
              <div
                key={project.id}
                className="shadow-sm shadow-yellow-600 rounded-lg p-4 bg-gray-800 hover:bg-gray-700 transition duration-200"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className=" text-center text-yellow-600 ">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-600 hover:text-yellow-500"
                  >
                    <h3 className="text-lg font-bold">{project.name}</h3>
                  </a>
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Projects;
