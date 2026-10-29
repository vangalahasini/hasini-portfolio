import React, { useState, useEffect } from 'react';
import { ArrowDown, FileText, ExternalLink, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.headlineRoles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background ambient gradient glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-blue-400/15 via-indigo-400/15 to-violet-400/10 dark:from-blue-600/10 dark:via-indigo-600/10 dark:to-purple-900/15 blur-3xl pointer-events-none rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 dark:bg-blue-950/50 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-ping" />
              <span>{personalInfo.statusBadge}</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Hasini Vangala</span>.
              </h1>
              <div className="h-10 sm:h-12 flex items-center">
                <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-300">
                  Aspiring{' '}
                  <span className="text-blue-600 dark:text-blue-400 transition-all duration-300 inline-block font-bold">
                    {personalInfo.headlineRoles[roleIndex]}
                  </span>
                </span>
              </div>
            </div>

            {/* Intro Lead Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {personalInfo.quickIntro} Continuously exploring emerging technologies and building full-stack web applications with Python, Java, and modern web frameworks.
            </p>

            {/* Core Tech Stack Labels */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-1">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Core Focus:</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-slate-200/70 dark:border-slate-700/70">
                Python
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-slate-200/70 dark:border-slate-700/70">
                Java
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-slate-200/70 dark:border-slate-700/70">
                Web Development
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-slate-200/70 dark:border-slate-700/70">
                Firebase
              </span>
            </div>

            {/* Action Buttons & Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all focus-visible:outline-2 focus-visible:outline-blue-600"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Resume Overview Modal Action */}
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-sm transition-all hover:border-slate-400 dark:hover:border-slate-600 focus-visible:outline-2 focus-visible:outline-blue-600"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Resume Overview</span>
              </button>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-3 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Frame with Profile / Monogram & Floating Code Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-72 sm:w-80 md:w-96 aspect-[4/5]">
              {/* Decorative background aura */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-violet-600/30 rounded-3xl blur-2xl transform rotate-3"
              />

              {/* Main Portrait Card Container */}
              <div className="relative w-full h-full rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-3 shadow-xl overflow-hidden flex flex-col">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50/50 to-indigo-100/50 dark:from-slate-800 dark:via-slate-850 dark:to-indigo-950/40 flex items-center justify-center border border-slate-200/60 dark:border-slate-700/60">
                  {/* Photo or Monogram Fallback */}
                  {!imgError ? (
                    <img
                      src={personalInfo.profilePhotoPath}
                      alt="Hasini Vangala, Computer Science Engineering student and software developer."
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center space-y-4">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-600 to-violet-600 text-white flex items-center justify-center font-bold text-3xl shadow-lg shadow-indigo-500/25">
                        {personalInfo.initials}
                      </div>
                      <div className="space-y-1">
                        <span className="text-base font-bold text-slate-800 dark:text-white block">
                          Hasini Vangala
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">
                          Computer Science Engineering · KITS
                        </span>
                        <span className="text-[11px] text-blue-600 dark:text-blue-400 block pt-1 font-mono">
                          public/images/hasini - profile.jpeg
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Gradient bottom scrim */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent text-white">
                    <span className="text-xs font-semibold block text-blue-300">Karimnagar, Telangana, India</span>
                    <span className="text-sm font-bold block">Hasini Vangala</span>
                  </div>
                </div>
              </div>

              {/* Floating Code Card */}
              <div
                aria-hidden="true"
                className="absolute -bottom-6 -left-6 sm:-left-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-xl max-w-xs transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-slate-100 dark:border-slate-800">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-[10px] font-mono text-slate-400 ml-1">developer.py</span>
                </div>
                <div className="font-mono text-[11px] leading-relaxed text-slate-700 dark:text-slate-300">
                  <span className="text-violet-600 dark:text-violet-400">class</span>{' '}
                  <span className="text-blue-600 dark:text-blue-400">Developer</span>:
                  <div className="pl-3">
                    <span className="text-slate-500"># Learning & building</span>
                    <br />
                    <span>skills = [</span>
                    <span className="text-emerald-600 dark:text-emerald-400">"Python"</span>,{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">"Java"</span>,{' '}
                    <span className="text-emerald-600 dark:text-emerald-400">"Web"</span>]
                    <br />
                    <span>status = </span>
                    <span className="text-amber-600 dark:text-amber-400">"Ready to contribute"</span>
                  </div>
                </div>
              </div>

              {/* Floating Mini Badge */}
              <div className="absolute -top-3 -right-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 px-3 py-1.5 shadow-md flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>GPA 8.2 · KITS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
