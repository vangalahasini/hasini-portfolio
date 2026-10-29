import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Full Stack' | 'Web Utility'>('All');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-2">
              Portfolio Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
              Practical web applications and algorithmic tools built with Python, modern JavaScript, and Firebase.
            </p>
          </div>

          {/* Interactive Filter Control */}
          <div className="inline-flex p-1 bg-slate-200/80 dark:bg-slate-800 rounded-xl self-start md:self-auto border border-slate-300/60 dark:border-slate-700/60">
            {(['All', 'Full Stack', 'Web Utility'] as const).map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {filter === 'All' ? 'All Projects (3)' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-blue-400/60 dark:hover:border-blue-600/60 transition-all duration-300 overflow-hidden group"
            >
              {/* Media Preview Container */}
              <div
                className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800 cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-semibold flex items-center gap-1.5 bg-blue-600/90 backdrop-blur-xs px-3 py-1.5 rounded-lg shadow-xs">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Click to view details & live demo</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category and Type Metadata - unboxed with dot separator */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.technologies.slice(0, 3).join(', ')}</span>
                  </div>

                  <h3
                    onClick={() => onSelectProject(project)}
                    className="text-xl font-bold text-slate-900 dark:text-white cursor-pointer group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  >
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Chips */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group/btn"
                  >
                    <span>View Project Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} GitHub repository`}
                        className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    ) : (
                      <span
                        title="Repository URL pending publication"
                        className="p-1.5 rounded-lg text-slate-400 dark:text-slate-600 cursor-not-allowed"
                      >
                        <Github className="w-4 h-4" />
                      </span>
                    )}

                    {project.liveDemoUrl ? (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live demo`}
                        className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span
                        title="Live demo URL pending publication"
                        className="p-1.5 rounded-lg text-slate-400 dark:text-slate-600 cursor-not-allowed"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
