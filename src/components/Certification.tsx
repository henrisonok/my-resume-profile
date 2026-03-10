import React from 'react';

const Certifications = () => {
    const certifications = [
        {
            title: "AWS Cloud Practitioner",
            issuer: "Amazon Web Services",
            year: "2024",
            validationNumber: "f3dee5b2e1364667926170971ab8b4d3"
        },
        {
            title: "HTML.CSS Web Designer",
            issuer: "COITB - Coalition of IT Businesses",
            year: "2025",
        },
        {
            title: "Certified JavaScript Developer",
            issuer: "COITB - Coalition of IT Businesses",
            year: "2025",
        },
        {
            title: "Certified React.js Developer",
            issuer: "COITB - Coalition of IT Businesses",
            year: "2025",
        },
        {
            title: "MySQL Backend Developer",
            issuer: "COITB - Coalition of IT Businesses",
            year: "2025",
        },
        {
            title: "ITIL Service Management Foundation",
            issuer: "AXELOS",
            year: "2022",
        },
        {
            title: "Certified SCRUM Master",
            issuer: "SCRUM Alliance",
            year: "2021",
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    Certifications
                </h2>

                <div className="grid gap-8 md:grid-cols-3">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                        >
                            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                                {cert.title}
                            </h3>
                            <p className="text-gray-600 mb-2">{cert.issuer}</p>
                            <p className="text-gray-500">{cert.year}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

//     return (
//         <div className="certifications">
//             <h2>Certifications</h2>
//             {certifications.map((cert, index) => (
//                 <div key={index} className="certification-item">
//                     <h3>{cert.title}</h3>
//                     <p>Issuer: {cert.issuer}</p>
//                     <p>Year: {cert.year}</p>
//                     <p>Validation Number: {cert.validationNumber}</p>
//                 </div>
//             ))}
//         </div>
  );
};

export default Certifications;