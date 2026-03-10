const Experience = () => {
  const experiences = [
    {
      role: "IT Account Service Management & Power BI Specialist",
      company: "Dell Technologies",
      location: "Austin, Texas,United States",
      duration: "2021 – Present",
      responsibilities: [
        "Built and automated BI dashboards in Power BI for customer reporting, improving service insights by 30%.",
        "Supported development and integration of SQL-driven dashboards to optimize customer service reporting",
        "Collaborated with development teams on API connections and backend database queries to improve automation workflows.",
        "Partnered with engineers to troubleshoot web-based tools and enhance usability through data-driven fixes.",
        "Facilitated Agile stand-ups and sprints as Scrum Master, ensuring on-time delivery of software features",
      ],
    },
    {
      role: "Software Engineer",
      company: "Teep Africa",
      location: "Canada (Remote)",
      duration: "2025 – Present",
      responsibilities: [
        "Developed and maintained web applications using Next.js, React, and Node.js.",
        "Designed and implemented a scalable web application using HTML & CSS, and JavaScript that improved user engagement by 30%.",
        "Authored and maintained production-level code in Java, resulting in a 15% improvement in system performance.",
        "Implemented RESTful APIs and integrated third-party services to enhance application functionality.",
        "Led code reviews for a team of 5 engineers, ensuring adherence to best practices and coding standards."
      ],
    },
    {
      role: "Software Programmer",
      company: "Nux Software Solutions",
      location: "Coimbatore, Tamil Nadu, India",
      duration: "2019 – 2021",
      responsibilities: [
        "Design, implement, and maintain high‑performance C++ back‑end services that ingest, process, and deliver large volumes of imagery data.",
        "Supported cloud environments including AWS infrastructure and services, and containerization technologies like Docker and Kubernetes.",
        "troubleshoot performance bottlenecks to uphold code quality, security standards, and continuous‑integration/continuous‑deployment (CI/CD) practices.",
        "Ensured robust API design, low latency, and scalability across multi‑core and GPU‑accelerated environments.",
        "Wrote and optimized RQL queries to detect misconfigurations,excessive permissions, and security threats"
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-bold text-left text-gray-800 mb-14">
          Work Experience
        </h2>

        {/* Experience Cards */}
        <div className="space-y-12">
          {experiences.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-left mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {job.role}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {job.company}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {job.location}
                  </p>
                </div>

                <span className="mt-3 md:mt-0 text-sm bg-blue-100 text-blue-700 px-4 py-1 rounded-full">
                  {job.duration}
                </span>
              </div>

              {/* Responsibilities */}
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {job.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;