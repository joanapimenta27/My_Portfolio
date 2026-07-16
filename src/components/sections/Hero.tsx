import { ArrowDown } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
  const handleScrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent-100 dark:bg-accent-900/20 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-12 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-primary-400">Hello,</span> I'm Joana Pimenta
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-accent-600 dark:text-accent-400 mb-6">
              Student in Informatics and Computing Engineering at FEUP
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              I'm a creative and hardworking person that likes a good challenge.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button href="#projects" primary>
                View My Work
              </Button>
              <Button href="#contact">
                Get In Touch
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center animate-fade-in-slow">
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary-300 to-accent-300 rounded-full flex items-center justify-center animate-float">
              <img
                src="https://github.com/joanapimenta27/My_Portfolio/raw/main/images/isto.jpg"
                alt="Joana Pimenta"
                className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-full border-4 border-white dark:border-gray-800"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={handleScrollDown}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-primary-400 dark:text-primary-300 hover:text-primary-500 dark:hover:text-primary-200 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;