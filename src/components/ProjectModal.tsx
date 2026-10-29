import React, { useState, useEffect } from 'react';
import { X, Check, Copy, RefreshCw, Github, ExternalLink, Sparkles, Layers, ShieldCheck, Plus, Trash2 } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  // Password Generator interactive state
  const [pwLength, setPwLength] = useState(16);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [copiedPassword, setCopiedPassword] = useState(false);

  // Expense Tracker interactive state
  const [expenseTitle, setExpenseTitle] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('Education');
  const [sampleExpenses, setSampleExpenses] = useState([
    { id: 1, title: 'Programming Course Material', category: 'Education', amount: 1200 },
    { id: 2, title: 'Development Cloud Server', category: 'Tech', amount: 850 },
    { id: 3, title: 'Technical Reference Books', category: 'Books', amount: 650 },
  ]);

  // Smart Diary interactive state
  const [diaryMood, setDiaryMood] = useState<'Focused' | 'Inspired' | 'Happy' | 'Productive'>('Focused');
  const [diaryNote, setDiaryNote] = useState('Explored advanced Python data structures and full-stack API integration.');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      // Initialize password
      generateNewPassword();
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const generateNewPassword = () => {
    let chars = '';
    if (includeUpper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLower) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) chars += '0123456789';
    if (includeSymbols) chars += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    if (!chars) chars = 'abcdefghijklmnopqrstuvwxyz';

    let result = '';
    const array = new Uint32Array(pwLength);
    window.crypto.getRandomValues(array);
    for (let i = 0; i < pwLength; i++) {
      result += chars[array[i] % chars.length];
    }
    setGeneratedPassword(result);
  };

  const handleCopyPassword = () => {
    if (!generatedPassword) return;
    navigator.clipboard.writeText(generatedPassword);
    setCopiedPassword(true);
    setTimeout(() => setCopiedPassword(false), 2000);
  };

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!expenseTitle.trim() || !expenseAmount) return;
    const val = parseFloat(expenseAmount);
    if (isNaN(val) || val <= 0) return;
    setSampleExpenses((prev) => [
      { id: Date.now(), title: expenseTitle.trim(), category: expenseCategory, amount: val },
      ...prev,
    ]);
    setExpenseTitle('');
    setExpenseAmount('');
  };

  const handleDeleteExpense = (id: number) => {
    setSampleExpenses((prev) => prev.filter((item) => item.id !== id));
  };

  if (!isOpen || !project) return null;

  const totalExpense = sampleExpenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 text-slate-900 dark:text-slate-100 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>Project Showcase</span>
            </div>
            <h2 id="project-modal-title" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {project.title}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              {project.tagline}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Preview */}
        <div className="mt-5 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800/60 aspect-video relative group">
          <img
            src={project.image}
            alt={`${project.title} interface preview`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Technology Stack */}
        <div className="mt-5">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-indigo-500" />
            <span>Technologies Used</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-700/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Overview & Key Features */}
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
              Project Description
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2.5">
              Key Features & Capabilities
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Interactive Feature Demo */}
        {project.interactiveType === 'password-generator' && (
          <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Live Demo: Password Generator</span>
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Try it live</span>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <input
                type="text"
                readOnly
                value={generatedPassword}
                className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg font-mono text-sm tracking-wide text-slate-900 dark:text-white select-all"
              />
              <button
                type="button"
                onClick={handleCopyPassword}
                aria-label="Copy password to clipboard"
                className="p-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors shrink-0"
              >
                {copiedPassword ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
              </button>
              <button
                type="button"
                onClick={generateNewPassword}
                aria-label="Generate new password"
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors shrink-0"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <label className="text-slate-600 dark:text-slate-400">Password Length: {pwLength}</label>
                <input
                  type="range"
                  min="8"
                  max="32"
                  value={pwLength}
                  onChange={(e) => setPwLength(Number(e.target.value))}
                  className="w-32 accent-blue-600"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                <label className="flex items-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300">
                  <input
                    type="checkbox"
                    checked={includeUpper}
                    onChange={(e) => setIncludeUpper(e.target.checked)}
                    className="rounded accent-blue-600"
                  />
                  <span>Uppercase</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300">
                  <input
                    type="checkbox"
                    checked={includeLower}
                    onChange={(e) => setIncludeLower(e.target.checked)}
                    className="rounded accent-blue-600"
                  />
                  <span>Lowercase</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300">
                  <input
                    type="checkbox"
                    checked={includeNumbers}
                    onChange={(e) => setIncludeNumbers(e.target.checked)}
                    className="rounded accent-blue-600"
                  />
                  <span>Numbers</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300">
                  <input
                    type="checkbox"
                    checked={includeSymbols}
                    onChange={(e) => setIncludeSymbols(e.target.checked)}
                    className="rounded accent-blue-600"
                  />
                  <span>Symbols</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {project.interactiveType === 'expense-calculator' && (
          <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Live Demo: Expense Calculator</span>
              </span>
              <span className="text-xs font-semibold text-slate-900 dark:text-white tabular-nums">
                Total: ₹{totalExpense.toLocaleString()}
              </span>
            </div>

            <form onSubmit={handleAddExpense} className="grid grid-cols-1 sm:grid-cols-4 gap-2 mb-3">
              <input
                type="text"
                placeholder="Expense description"
                value={expenseTitle}
                onChange={(e) => setExpenseTitle(e.target.value)}
                className="px-3 py-1.5 text-xs rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white sm:col-span-2"
              />
              <input
                type="number"
                placeholder="Amount (₹)"
                value={expenseAmount}
                onChange={(e) => setExpenseAmount(e.target.value)}
                className="px-3 py-1.5 text-xs rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Item</span>
              </button>
            </form>

            <div className="space-y-1.5 max-h-36 overflow-y-auto">
              {sampleExpenses.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-xs"
                >
                  <span className="text-slate-800 dark:text-slate-200">{item.title}</span>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-slate-900 dark:text-white tabular-nums">₹{item.amount.toLocaleString()}</span>
                    <button
                      type="button"
                      onClick={() => handleDeleteExpense(item.id)}
                      className="text-slate-400 hover:text-rose-500"
                      aria-label="Delete expense"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.interactiveType === 'smart-diary-preview' && (
          <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Smart Diary Mood Tagging & Journal Entry Demo</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
              Select a mood state to preview dynamic entry metadata:
            </p>

            <div className="flex flex-wrap gap-2 mb-3">
              {(['Focused', 'Inspired', 'Happy', 'Productive'] as const).map((mood) => (
                <button
                  key={mood}
                  type="button"
                  onClick={() => setDiaryMood(mood)}
                  className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors ${
                    diaryMood === mood
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {mood}
                </button>
              ))}
            </div>

            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800 text-xs space-y-1">
              <div className="flex items-center justify-between text-slate-400">
                <span>Entry Timestamp: Today, 10:30 AM</span>
                <span className="font-medium text-blue-600 dark:text-blue-400">Mood: {diaryMood}</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 pt-1">
                "{diaryNote}"
              </p>
            </div>
          </div>
        )}

        {/* Links and Actions */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.liveDemoUrl ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs border border-slate-200 dark:border-slate-700">
                <span>Live Demo: URL Pending</span>
              </span>
            )}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-medium transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs border border-slate-200 dark:border-slate-700">
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repo Pending</span>
              </span>
            )}
          </div>

          <p className="text-xs text-slate-400 dark:text-slate-500">
            Configure live URLs in <code className="font-mono text-slate-600 dark:text-slate-400">src/data/portfolioData.ts</code>
          </p>
        </div>
      </div>
    </div>
  );
};
