import React, { useState, useEffect } from 'react';
import { X, Download, FileText, Check, ExternalLink, GraduationCap, Briefcase, Mail } from 'lucide-react';
import { personalInfo, experienceItems, educationItems } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopySummary = () => {
    navigator.clipboard.writeText(
      `${personalInfo.name} — ${personalInfo.title}\n\nEmail: ${personalInfo.email}\nPhone: ${personalInfo.phone}\nLocation: ${personalInfo.location}\nLinkedIn: ${personalInfo.linkedin}\n\nSummary:\n${personalInfo.summary}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 text-slate-900 dark:text-slate-100 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Resume Overview
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Hasini Vangala · Updated 2026
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Bar */}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a
            href="/images/Hasini_Vangala_Resume.pdf"
            download="Hasini_Vangala_Resume.pdf"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium text-sm shadow-sm transition-all focus-visible:outline-2 focus-visible:outline-blue-600"
          >
            <Download className="w-4 h-4" />
            <span>Download Official PDF</span>
          </a>
          <a
            href="/images/Hasini_Vangala_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-medium text-sm transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>View in New Tab</span>
          </a>
          <button
            onClick={handleCopySummary}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-sm transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <FileText className="w-4 h-4" />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
          </button>
        </div>

        {/* Quick Credentials Summary */}
        <div className="mt-6 space-y-5 text-sm">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Professional Summary
            </h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              {personalInfo.summary}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-indigo-500" />
              <span>Education</span>
            </h4>
            <div className="space-y-2">
              {educationItems.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs py-1.5 border-b border-slate-100 dark:border-slate-800/80">
                  <span className="font-medium text-slate-800 dark:text-slate-200">{edu.institution}</span>
                  <span className="text-slate-500 dark:text-slate-400">{edu.degree} {edu.grade ? `(${edu.grade})` : ''}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-blue-500" />
              <span>Current Experience</span>
            </h4>
            <div className="space-y-2">
              {experienceItems.map((exp, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs py-1.5 border-b border-slate-100 dark:border-slate-800/80">
                  <span className="font-medium text-slate-800 dark:text-slate-200">{exp.company} — {exp.role}</span>
                  <span className="text-slate-500 dark:text-slate-400">{exp.period}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{personalInfo.email}</span>
            </span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
            >
              <span>View LinkedIn Profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
