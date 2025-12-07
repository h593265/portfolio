export default function Skills() {
  return (
    <section id="skills" className="mt-50 mb-20">
      <h2 className="text-3xl font-bold  mb-10 text-left text-white">Skills</h2>
      <div className="grid md:grid-cols-2 gap-6 text-gray-200">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Frontend</h3>
          <ul className="space-y-2">
            <li>• React & TypeScript</li>
            <li>• Tailwind CSS</li>
            <li>• HTML & CSS</li>
            <li>• Responsive Design</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Backend</h3>
          <ul className="space-y-2">
            <li>• Node.js</li>
            <li>• Express.js</li>
            <li>• REST APIs</li>
            <li>• Database Design</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Tools & Technologies</h3>
          <ul className="space-y-2">
            <li>• Git & GitHub</li>
            <li>• VS Code</li>
            <li>• QGIS</li>
            <li>• FME</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Other Skills</h3>
          <ul className="space-y-2">
            <li>• Problem Solving</li>
            <li>• Team Collaboration</li>
            <li>• Agile Methodologies</li>
            <li>• Code Review</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
