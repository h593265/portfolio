export default function Experience() {
  const experiences = [
    {
      title: "QGIS-plugin Developer",
      company: "Statens Vegvesen",
      location: "onsite",
      period: "18/01/2025 - 18/07/2025",
      description: [
        "Developed desktop applications using Python and QGIS API",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Implemented responsive UI components utilized RESTful APIs",
        "Made FME scripts to automate data processing tasks",
      ],
    },
    
  ];

  return (
    <section id="experience" className="mt-50 mb-20">
      <h2 className="text-3xl font-bold mb-8 text-left text-white">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="border-l-4 border-blue-600 pl-6 py-2">
            <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
            <p className="text-lg text-gray-300 mt-1">{exp.company}</p>
            <p className="text-sm text-gray-400">{exp.location} • {exp.period}</p>
            <ul className="mt-3 space-y-2 text-gray-200">
              {exp.description.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
