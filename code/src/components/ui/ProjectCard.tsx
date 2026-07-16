import { useState } from 'react';
import { Eye, Code } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  /* overlay appears if *any* link exists */
  const showOverlay =
    !!project.demoLink || (project.codeLinks && project.codeLinks.length);

  return (
    <div
      className="group bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ---------- MEDIA ---------- */}
      <div className="relative overflow-hidden h-64">
        {project.mediaType === 'video' ? (
          <video
            src={project.media}
            autoPlay
            loop
            muted
            playsInline
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
        ) : (
          <img
            src={project.media}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            } ${project.imagePosition === 'top' ? 'object-top' : project.imagePosition === 'bottom' ? 'object-bottom' : 'object-center'}`}
          />
        )}

        {/* ---------- OVERLAY ICONS ---------- */}
        {showOverlay && (
          <div
            className={`absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center gap-4 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* eye button (at most one) */}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white text-gray-900 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                aria-label="View demo"
              >
                <Eye size={20} />
              </a>
            )}

            {/* one or many code buttons */}
            {project.codeLinks?.map((url, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white text-gray-900 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                aria-label={`View code ${idx + 1}`}
              >
                <Code size={20} />
              </a>
            ))}
          </div>
        )}

        {/* category badge */}
        <div className="absolute top-4 right-4">
          <span className="px-2 py-1 text-xs font-medium bg-primary-500 text-white rounded-md">
            {project.category}
          </span>
        </div>
      </div>

      {/* ---------- TEXT ---------- */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
