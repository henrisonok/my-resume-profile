const Education = () => {
    const education = [
        {
            degree: "Doctorate in Information Technology",
            institution: "Walden University",
            Location: "Minneapolis, Minnesota - USA",
            year: "In-view",
        },
        {
            degree: "Master in Petroleum Engineering",
            institution: "London South Bank University",
            Location: "London, UK",
            year: "2014",
        },
        {
            degree: "Bachelor of Science in Geology",
            institution: "University of Portharcourt",
            Location: "Rivers State, Nigeria",
            year: "2011",
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    Education
                </h2>

                <div className="grid gap-8 md:grid-cols-3">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                {edu.degree}
                            </h3>
                            <p className="text-gray-600 mb-2">{edu.institution}</p>
                            <p className="text-gray-500">{edu.Location}</p>
                            <p className="text-gray-500">{edu.year}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;