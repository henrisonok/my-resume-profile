
const Projects = () => {
  const projects = [
  
    {
      title: "About Me Portfolio Website",
      description:
        "Personal resume website highlighting education, certifications, and professional experience.",
      tech: ["React", "Tailwind", "JavaScript"],
      link: "#",
    },
    {
        title: "My AI Webpage",
        description:
          "AI-powered webpage showcasing machine learning capabilities.",
        tech: ["Next.js", "Tailwind CSS", "Python"],
        link: "https://henrison-1st-webtool-nextjs.vercel.app/",
      },
      {
      title: "TheBeansPlace Cafe Website",
      description:
        "Responsive Cafe restaurant website built with React showcasing menu, services, and modern UI design.",
      tech: ["React", "Tailwind CSS", "Vite"],
      link: "#",
    },
    {
      title: "Power BI Business Dashboard",
      description:
        "Interactive dashboard analyzing business performance metrics and customer insights.",
      tech: ["Power BI", "SQL", "Data Analysis"],
      link: "#",
    },
    {
      title: "AWS Cloud Infrastructure Setup",
      description:
        "Designed secure AWS environment using VPC concepts and cloud best practices.",
      tech: ["AWS", "Cloud Computing", "Networking"],
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Projects
        </h2>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};




// function Projects() {
//     return (
//         <section className="py-12 text-center">
//             <h2 className="text-3xl font-semibold mb-6">My Projects</h2>

//             <div className="max-w-md mx-auto border rounded-lg shadow-md p-6">
//                 <h3 className="text-xl font-bold mb-2">My AI Webpage</h3>
//                 <p className="text-gray-600">Built with Next.js and Tailwind CSS</p>
//             </div>

//             <div className="max-w-md mx-auto border rounded-lg shadow-md p-6">
//                 <h3 className="text-xl font-bold mb-2">Data Dashboard</h3>
//                 <p className="text-gray-600">Power BI and SQL based reporting system</p>
//             </div>
//         </section>
//     );
// }


export default Projects;
