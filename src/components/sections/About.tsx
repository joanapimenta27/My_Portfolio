import { Code, Lightbulb, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-pink-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/5">
            <img
              src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="About Joana Pimenta"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          
          <div className="lg:w-3/5">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a student at FEUP/FCUP and I'm finishing a Master's Degree in Artificial Intelligence and currently looking for new projects and opportunities.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              In university I found my passion for both the gaming world and Artificial Intelligence. As an aspiring indie developer, my goal is to build tools and experiences that empower other artists to express their creativity directly in-game and to tell stories that resonate visually, emotionally, and interactively. I'm also deeply interested in how AI can enhance those experiences, from intelligent NPCs to generative content and beyond.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <div className="inline-block p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mb-4">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Developer
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I enjoy bringing ideas to life and exploring what creative minds can build.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <div className="inline-block p-3 bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 rounded-lg mb-4">
                  <Lightbulb size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Designer
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I value simple, clean design patterns and thoughtful interactions.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <div className="inline-block p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg mb-4">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Experience
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Personal projects and projects done in my Bachelor's and Master's Degrees.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <div className="inline-block p-3 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-lg mb-4">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Education
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  BSc in Informatics and Computing Engineering at FEUP and currently finishing a Master's Degree in Artificial Intelligence at FEUP/FCUP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;