import ProjectCard from "./projectCard";

export default function Projects() {
  const projects = [
    { title: "E-commerce web application", description: "javascript , react, css, express.js, neonDB", link: "https://norli-clone.onrender.com/" },
    
  ];

  return (
    <section id="projects" className="mt-20 mb-20 align-items-center">
      <h2 className="text-3xl font-bold mb-8 text-left text-white">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}
