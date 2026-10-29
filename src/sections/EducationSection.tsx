import React from 'react';
import { GraduationCap, Award, MapPin, School, BookOpen } from 'lucide-react';
import { educationItems } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-2">
            Academic Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Rigorous engineering curriculum in Computer Science with a strong grounding in core computing principles.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationItems.map((item, idx) => (
            <div
              key={item.institution}
              className={`p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border transition-all flex flex-col justify-between ${
                idx === 0
                  ? 'border-blue-300 dark:border-blue-700/80 shadow-md ring-1 ring-blue-500/10'
                  : 'border-slate-200/80 dark:border-slate-800 shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      idx === 0
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {idx === 0 ? <GraduationCap className="w-5 h-5" /> : <School className="w-5 h-5" />}
                  </div>

                  {item.grade && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
                      <Award className="w-3.5 h-3.5" />
                      <span>{item.grade}</span>
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {item.institution}
                </h3>

                <p className="mt-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                  {item.degree}
                </p>

                {item.location && (
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-2">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                )}

                {item.details && (
                  <p className="mt-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                    {item.details}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
