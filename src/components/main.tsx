import Projects from "./projects";
import Skills from "./skills";
import Experience from "./experience";
import Education from "./education";
import Contact from "./contact";

export default function Main() {
  return (
    <>
      <section className="snap-start min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 py-16 w-full">
          <Projects />
        </div>
      </section>
      
      <section className="snap-start min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 py-16 w-full">
          <Skills />
        </div>
      </section>
      
      <section className="snap-start min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 py-16 w-full">
          <Experience />
        </div>
      </section>
      
      <section className="snap-start min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 py-16 w-full">
          <Education />
        </div>
      </section>
      
      <section className="snap-start min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 py-16 w-full">
          <Contact />
        </div>
      </section>
    </>
  );
}
