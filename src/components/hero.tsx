export default function Hero() {
  return (
    <section className="w-full flex justify-center items-center text-white mt-20 mb-20">
      <div className="max-w-4xl px-8">
        <h1 className="text-6xl font-bold mb-6 text-white">Daniel Endresen</h1>
        <p className="text-2xl text-gray-100 mb-6">Full Stack Developer & Software Engineer</p>
        <p className="text-lg text-gray-200 leading-relaxed mb-6">
          I'm a passionate full-stack developer with a deep love for creating innovative digital solutions 
          that make a real impact. With expertise spanning frontend and backend technologies, I bring ideas 
          to life through clean, efficient code and intuitive user experiences.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-6">
          My journey in software development has led me to master modern frameworks and technologies including 
          Python, React, Node.js, and TypeScript. I thrive on tackling complex challenges and transforming them 
          into elegant, scalable applications. Whether it's building responsive web interfaces, designing robust 
          APIs, or architecting full-stack solutions, I approach each project with meticulous attention to detail 
          and a commitment to excellence.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-8">
          Beyond writing code, I'm constantly exploring emerging technologies and best practices to stay at the 
          forefront of web development. I believe in the power of collaboration, continuous learning, and creating 
          software that not only works flawlessly but also delivers exceptional user experiences. Let's build 
          something amazing together.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors inline-block">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 border border-gray-400 hover:border-white rounded-lg transition-colors inline-block">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
