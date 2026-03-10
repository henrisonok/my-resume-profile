

function Skills() {
    const skills = [
        "JavaScript",
        "React.js",
        "Node.js",
        "Next.js",
        "Git & GitHub",
        "SQL",
        "AWS",
        "Power BI",
    ];

    return (
        <section className="py-12 bg-gray-50 text-center">
            <h2 className="text-3xl font-semibold mb-6">Skills</h2>

            <div className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto">
                {skills.map((skill, index) => (
                    <span
                    key={index}
                    className="bg-slate-800 text-white px-4 py-2 rounded-full text-sm">
                        {skill}
                    </span>
                 ))}
            </div>
            
        </section>
    );
}

// const styles = {
//     section: {
//         padding: "30px",
//         textAlign: "center",
//     },
// };

export default Skills;