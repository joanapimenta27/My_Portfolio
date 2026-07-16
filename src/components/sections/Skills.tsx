import { skillsData } from '../../data/skills';
import { Languages } from 'lucide-react';

const Skills = () => {
  // separate the two groups by icon
  const techSkills = skillsData.filter((s) => s.icon !== Languages);
  const spokenSkills = skillsData.filter((s) => s.icon === Languages);

  return (
    <>
      {/* ────────── TECH SKILLS ────────── */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills&nbsp;&amp;&nbsp;Technologies
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6" />
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              I’m constantly learning and expanding my skill-set. Here are the
              technologies and tools I’ve worked with.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {techSkills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 text-center
                           transition-all hover:shadow-lg hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <div className="flex justify-center mb-4">
                  <skill.icon
                    size={40}
                    className="text-primary-500 dark:text-primary-400"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
                {/*  no percentage bar for tech skills 👇  */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── SPOKEN LANGUAGES ────────── */}
      <section id="languages" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Spoken&nbsp;Languages
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6" />
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              A quick look at the languages I speak and my self-assessed
              proficiency.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {spokenSkills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 text-center
                           transition-all hover:shadow-lg hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <div className="flex justify-center mb-4">
                  <skill.icon
                    size={40}
                    className="text-primary-500 dark:text-primary-400"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.name}
                </h3>

                {/*  proficiency bar stays for languages  */}
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                  <div
                    className="bg-primary-500 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {skill.level}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
