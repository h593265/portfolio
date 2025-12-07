import Projects from "./projects";
import Skills from "./skills";
import Experience from "./experience";
import Education from "./education";
import Contact from "./contact";

export default function Main() {
  return (
    <>
      <section className="lg:snap-start min-h-screen lg:h-screen flex items-center justify-center py-20 lg:py-0">
        <div className="max-w-4xl mx-auto px-4 py-8 w-full">
          <Projects />
        </div>
      </section>
      
      <section className="lg:snap-start min-h-screen lg:h-screen flex items-center justify-center py-20 lg:py-0">
        <div className="max-w-4xl mx-auto px-4 py-8 w-full">
          <Skills />
        </div>
      </section>
      
      <section className="lg:snap-start min-h-screen lg:h-screen flex items-center justify-center py-20 lg:py-0">
        <div className="max-w-4xl mx-auto px-4 py-8 w-full">
          <Experience />
        </div>
      </section>
      
      <section className="lg:snap-start min-h-screen lg:h-screen flex items-center justify-center py-20 lg:py-0">
        <div className="max-w-4xl mx-auto px-4 py-8 w-full">
          <Education />
        </div>
      </section>
      
      <section className="lg:snap-start min-h-screen lg:h-screen flex items-center justify-center py-20 lg:py-0">
        <div className="max-w-4xl mx-auto px-4 py-8 w-full">
          <Contact />
        </div>
      </section>
    </>
  );
}
