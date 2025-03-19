import React from "react";

const Journey = () => {
  const journey = [
    {
      year: "Hello",
      title: "I'am Vyom",
      institution: "Web Developer",
      description: "Welcome to my Roller coster Journey.",
      image: "👨‍💼",
    },
    {
      year: "2020 - 2023",
      title: "BSc. IT",
      institution: "Uka Tarsadia University, Bardoli, Gujarat",
      description: "Graduated with a CGPA of 5.76.",
      image: "🎓",
    },
    {
      year: "2023 - 2025",
      title: "MCA (Ongoing)",
      institution: "Sarvajanik College of Engineering & Technology, Surat",
      description: "Pursuing MCA with a CGPA of 8.45 (Sem 3).",
      image: "🎓",
    },
    {
      year: "Skills",
      title: "Tech Stack",
      institution: "Fronteend Technology : HTML,CSS,Javascript",
      description: "Backend Technology : Node.js,PHP,MySQL,MongoDB",
      tech : "Framework : Tailwind CSS,Laravel,React.js,Next.js" ,
      image: "💻",
    },
    {
      year: "2023",
      title: "EyeBeam",
      institution: "E-Commerce Website",
      description:
        "Built a shopping website with secure payments using JavaScript & PHP.",
      tech: "Techology Used : PHP , MySQL , HTML ,CSS",
      image: "🛍️",
    },
    {
        year: "2024",
        title: "Grocery Management System",
        institution: "E-Commerce Project",
        description:
          "Developed an inventory & sales tracking system using Laravel.",
        tech: "Techology Used : Laravel , PHP , MySQL , HTML ,CSS",
        image: "🛒",
    },
    {
        year: "2025",
        title: "To-do List App",
        institution: "Crud Project",
        description:
          "A simple crud operation useing React.js.",
        tech: "Techology Used :React.js,Tailwind CSS,Javascript ",
        image: "📝",
    },
    {
        year: "2025",
        title: "Portfolio Website",
        institution: "Online Resume",
        description:
          "A Portfolio website using Next.js.",
        tech: "Techology Used :Next.js,Tailwind CSS,Typescript ",
        image: "✨",
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-6 md:px-16">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-16">
        My Journey 🚀
      </h2>
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 h-full hidden md:block"></div>

        {/* Starting Dot */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-8 h-8 bg-blue-500 rounded-full"></div>

        {journey.map((item, index) => (
          <div
            key={index}
            className={`flex items-center w-full mb-12 ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {/* Timeline Dot */}
            <div className="w-1/2 flex justify-center relative">
              <div className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-blue-500 bg-white shadow-lg text-3xl">
                {item.image}
              </div>
            </div>

            {/* Timeline Card */}
            <div className="w-1/2">
              <div className="bg-white p-8 shadow-lg rounded-lg">
                <span className="text-blue-600 font-semibold">{item.year}</span>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-600">{item.institution}</p>
                <p className="text-gray-700">{item.description}</p>
                <p className="text-gray-700">{item.tech}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Ending Dot */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 w-8 h-8 bg-blue-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default Journey;

