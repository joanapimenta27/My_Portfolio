import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="bg-gradient-to-b from-pink-50 via-pink-100 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-300">
        {/* Decorative elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {/* Binary rain effect */}
          <div className="absolute inset-0 opacity-5">
            <div className="binary-rain"></div>
          </div>
          
          {/* Floating hearts */}
          <div className="absolute top-20 left-10 w-8 h-8 text-pink-300 dark:text-pink-500 animate-float-slow">❀</div>
          <div className="absolute top-40 right-20 w-6 h-6 text-pink-400 dark:text-pink-600 animate-float">❀</div>
          <div className="absolute bottom-20 left-1/4 w-10 h-10 text-pink-200 dark:text-pink-400 animate-float-delayed">❀</div>
          
          {/* Code symbols */}
          <div className="absolute top-1/3 right-10 text-pink-200 dark:text-pink-800 opacity-20 text-2xl animate-float">{'{}'}</div>
          <div className="absolute bottom-1/4 left-20 text-pink-300 dark:text-pink-700 opacity-20 text-2xl animate-float-slow">{'</>'}</div>
        </div>

        <Header activeSection={activeSection} />
        
        <main className="relative">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;