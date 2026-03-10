// import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="max-w-5xl mx-auto px-6">

                {/* Title */}
                <h2 className="text-4xl font-bold text-center mb-12">
                    Contact Me
                </h2>

                {/* Contact Container */}
                <div className="grid md:grid-cols-2 gap-10">

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <p className="text-gray-300">
                            I'm open to opportunities in Software Engineering, IT, Cloud, Data Analytics, and Healthcare Technology.
                            Feel free to reach out for collaboration or professional discussions.
                        </p>

                        <div className="space-y-4">

                            <div className="flex items-center gap-3">
                                <p className="text-blue-400 text-xl" />
                                <span>henrisonok@hotmail.com</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <p className="text-blue-400 text-xl" />
                                <span>+1 (936) 283-3930</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <p className="text-blue-400 text-xl" />
                                <a
                                    href="https://www.linkedin.com/in/henrison-okechukwu-32bb3472"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-400 transition"
                                >
                                    LinkedIn Profile
                                </a>
                            </div>

                            <div className="flex items-center gap-3">
                                <p className="text-blue-400 text-xl" />
                                <a
                                    href="https://github.com/henrisonok?tab=repositories"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-400 transition"
                                >
                                    GitHub Portfolio
                                </a>
                            </div>

                            <div className="flex items-center gap-3">
                                <p className="text-blue-400 text-xl" />
                                <a
                                    href="https://vercel.com/henrison-okechukwus-projects"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-400 transition"
                                >
                                    Vercel Portfolio
                                </a>
                            </div>

                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
                        />

                        <textarea
                            rows={5}
                            placeholder="Your Message"
                            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg font-semibold"
                        >
                            Send Message
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;