import React from 'react';
import { MapPin, GraduationCap, Compass, Laptop, Award, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-2">
            Background & Purpose
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            A dedicated Computer Science student driven by continuous learning, software craftsmanship, and real-world implementation.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Prose / Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-indigo-500" />
                <span>Professional Summary</span>
              </h3>
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                "{personalInfo.summary}"
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Laptop className="w-5 h-5 text-blue-500" />
                <span>Engineering Philosophy & Approach</span>
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                I believe in building software that delivers tangible value. Rather than simply memorizing syntax, I focus on understanding underlying computational principles—how algorithms operate under time and memory constraints, how frontends efficiently communicate with backend microservices and databases, and how clean code architecture ensures long-term software maintainability.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Whether writing backend logic in Python, structuring object-oriented modules in Java, or creating responsive web interfaces with modern JavaScript, I prioritize clarity, testability, and a constructive team mindset.
              </p>
            </div>
          </div>

          {/* Quick Info Cards Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {/* Education Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Undergraduate Studies
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 font-medium">
                B.Tech in Computer Science Engineering
              </p>
              <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Kamala Institute (KITS)</span>
                <span className="font-semibold text-slate-900 dark:text-white">8.2 GPA</span>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Location & Availability
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                {personalInfo.location}
              </p>
              <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                Open to on-site, hybrid, or remote developer internships and entry-level positions.
              </div>
            </div>

            {/* Career Interests Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Career Interests
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                Python Development · Full Stack Web Applications · Intelligent Software Systems
              </p>
              <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                Active hands-on experience via industry internships at Thiranex and Decode Labs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
