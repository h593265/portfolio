// ProjectCard.tsx
type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
};

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <div className="bg-gray-900 bg-opacity-50 shadow-lg rounded-lg p-6 hover:bg-opacity-70 transition-all border border-gray-800 hover:border-blue-600 group">
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="mb-6 text-gray-300">{description}</p>
      <a 
        href={link} 
        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all group-hover:gap-3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>View Project</span>
        <svg 
          className="w-4 h-4 transition-transform group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );
}
