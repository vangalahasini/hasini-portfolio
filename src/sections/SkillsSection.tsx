import React from 'react';
import { Terminal, Globe, Wrench, Brain, Check } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryIcons = [
  <Terminal className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  <Globe className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
  <Wrench className="w-5 h-5 text-violet-600 dark:text-violet-400" />,
  <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
];

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-2">
            Technical Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Skills & Core Toolset
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            A transparent overview of the programming languages, web standards, and developer tools applied in my projects and internships.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-blue-300 dark:hover:border-blue-700/60 transition-colors"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                  {categoryIcons[idx % categoryIcons.length]}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              {/* Skills List without fake percentages or pill sandwiches */}
              <div className="mt-5 space-y-3.5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-start gap-3 text-xs">
                    <div className="w-4 h-4 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm block">
                        {skill.name}
                      </span>
                      {skill.description && (
                        <span className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed block mt-0.5">
                          {skill.description}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
