export default function Education() {
  const education = [
    {
      degree: "Bachelors degree in Information Technology",
      institution: "Høgskulen på Vestlandet",
      location: "Bergen, Norway",
      period: "2020 - 2023",
      description: "Specialized in software development",
    },
    {
      degree: "High School Diploma",
      institution: "Skeisvang Videregående Skole",
      location: "Haugesund, Norway",
      period: "2016 - 2019",
      description: "",
    },
  ];

  return (
    <section id="education" className="mt-50 mb-20">
      <h2 className="text-3xl font-bold mb-8 text-left text-white">Education</h2>
      <div className="space-y-6">
        {education.map((edu, idx) => (
          <div key={idx} className="border-l-4 border-blue-600 pl-6 py-2">
            <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
            <p className="text-lg text-gray-300 mt-1">{edu.institution}</p>
            <p className="text-sm text-gray-400">{edu.location} • {edu.period}</p>
            <p className="text-gray-200 mt-2">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
