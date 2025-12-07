import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import Main from "../components/main";
import Footer from "../components/footer";
import ScrollToTop from "../components/scrollToTop";

const Home: React.FC = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll relative animated-dots">
      
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50">  
        <Header />
      </div>
      
      {/* Hero Section */}
      <section className="snap-start h-screen flex items-center justify-center relative z-10">
        <Hero />
      </section>

      {/* Main Content Sections */}
      <div className="relative z-10">
        <Main />
      </div>

      {/* Footer */}
      <footer className="snap-start relative z-10">
        <Footer />
      </footer>
      
      <ScrollToTop />
    </div>
  );
};

export default Home;
