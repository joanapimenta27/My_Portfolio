import { useState } from 'react';
import ProjectCard from '../ui/ProjectCard';
import { bachelorProjects, masterProjects } from '../../data/projects';
import { Project } from '../../types';

function ProjectSection({
  title,
  projects,
}: {
  title: string;
  projects: Project[];
}) {
  const [filter, setFilter] = useState('all');

  const categories = ['all', ...new Set(projects.map(p => p.category))];
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="mb-20">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        {title}
      </h3>

      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === category
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">
          Projects coming soon.
        </p>
      )}
    </div>
  );
}

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6" />
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my projects. Each one was an opportunity to learn,
            grow, and create something valuable.
          </p>
        </div>

        <ProjectSection title="Bachelor's Degree" projects={bachelorProjects} />
        <ProjectSection title="Master's Degree" projects={masterProjects} />

        <div className="flex justify-center mt-4">
          <a
            href="https://github.com/joanapimenta27?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors"
          >
            See more projects on my GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
