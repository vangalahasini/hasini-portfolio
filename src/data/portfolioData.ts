import {
  ProjectItem,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  SkillCategory,
} from '../types/portfolio';

export const personalInfo = {
  name: 'Hasini Vangala',
  initials: 'HV',
  title: 'Computer Science Engineering Student | Python Developer | Full Stack Developer',
  headlineRoles: [
    'Python Developer',
    'Full Stack Developer',
    'Computer Science Student',
  ],
  location: 'Karimnagar, Telangana, India',
  email: 'vangalahasini1@gmail.com',
  phone: '+91 9553138734',
  linkedin: 'https://www.linkedin.com/in/hasini-vangala-b47a38414/',
  github: 'https://github.com/vangalahasini',
  existingPortfolio: 'https://portfolio-nu-opal-3wty2x5sd0.vercel.app/',
  profilePhotoPath: '/images/hasini%20-%20profile.jpeg',
  resumePath: '/images/Hasini_Vangala_Resume.pdf',
  resumeDownloadFilename: 'Hasini_Vangala_Resume.pdf',
  summary:
    'I am a passionate Computer Science Engineering student with a strong interest in software development, technology, and innovation. I enjoy learning new skills, exploring emerging technologies, and developing practical solutions through coding and creative thinking. With knowledge of Python, Java, and web development, I am continuously strengthening my technical skills through projects, internships, and hands-on learning. I aspire to grow as a software professional, collaborate with like-minded individuals, and contribute to innovative projects.',
  statusBadge: 'Open to Internship & Entry-Level Opportunities',
  quickIntro:
    'Focused on developing robust, practical software solutions with clean architecture, modern web technologies, and clean code principles.',
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    subtitle: 'Core languages for algorithmic logic and application backends',
    skills: [
      {
        name: 'Python',
        description: 'Object-oriented programming, data structures, backend scripting & APIs',
      },
      {
        name: 'Java',
        description: 'Core Java fundamentals, OOP concepts, modular code design',
      },
    ],
  },
  {
    title: 'Web Development',
    subtitle: 'Building responsive user interfaces and full-stack web experiences',
    skills: [
      {
        name: 'HTML5',
        description: 'Semantic markup, accessibility standards, structured content',
      },
      {
        name: 'CSS3',
        description: 'Modern flexbox, grid, responsive design, custom styling',
      },
      {
        name: 'JavaScript',
        description: 'ES6+ standards, DOM manipulation, asynchronous programming',
      },
      {
        name: 'Full Stack Development',
        description: 'Client-server communication, database integration, REST concepts',
      },
    ],
  },
  {
    title: 'Tools & Technologies',
    subtitle: 'Developer workflow, version control, and database platforms',
    skills: [
      {
        name: 'Git',
        description: 'Version control, branch management, clean commit workflows',
      },
      {
        name: 'GitHub',
        description: 'Remote repository management, collaboration, open-source workflow',
      },
      {
        name: 'VS Code',
        description: 'Primary IDE, debugging tooling, extensions and productivity',
      },
      {
        name: 'Firebase',
        description: 'Real-time database, cloud authentication, storage integrations',
      },
    ],
  },
  {
    title: 'Additional Interests',
    subtitle: 'Areas of active exploration and continuous learning',
    skills: [
      {
        name: 'Artificial Intelligence',
        description: 'Exploration of emerging AI tools, intelligent algorithms & logic',
      },
      {
        name: 'Software Engineering',
        description: 'Clean code architecture, testability, design patterns & scalability',
      },
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'smart-diary',
    title: 'Smart Diary',
    category: 'Full Stack',
    tagline: 'Personal diary application with mood tracking and multimedia notes',
    description:
      'A personal diary web application designed to help users record, organize, and reflect on their daily experiences with interactive features and cloud sync.',
    features: [
      'User login and secure registration',
      'Create, edit, and organize diary entries',
      'Image uploads and voice-assistant entry functionality',
      'Mood-related reflections and tagging',
      'Calendar events, reminders, and scheduling',
      'Interactive dashboard visualizations',
      'Settings and custom theme personalization',
      'Reliable backup and restore operations',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    image: '/src/assets/images/project_smart_diary_1793268309562.jpg',
    // Repositories to be populated with real URLs when pushed to GitHub:
    githubUrl: null, // Set to 'https://github.com/vangalahasini/smart-diary' once public
    liveDemoUrl: null, // Set to live deployment URL once published
    interactiveType: 'smart-diary-preview',
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    category: 'Web Utility',
    tagline: 'Streamlined personal finance management and budget overview',
    description:
      'A simple, intuitive expense-tracking application for recording personal expenses, categorizing spending, and calculating real-time total expenditures.',
    features: [
      'Quick expense entry with title, amount, and category',
      'Dynamic calculation of total spending and remaining balance',
      'Clean expense summaries and breakdown overview',
      'Instant removal and management of individual line items',
      'Responsive design optimized for both mobile and desktop',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/src/assets/images/project_expense_tracker_1793268309608.jpg',
    githubUrl: null,
    liveDemoUrl: null,
    interactiveType: 'expense-calculator',
  },
  {
    id: 'password-generator',
    title: 'Password Generator',
    category: 'Web Utility',
    tagline: 'Customizable cryptographic password generator utility',
    description:
      'A responsive utility tool that generates strong, randomized passwords according to customizable character criteria and security requirements.',
    features: [
      'Custom length slider (8 to 32 characters)',
      'Character set toggles: uppercase, lowercase, numbers, and symbols',
      'Real-time entropy strength evaluation indicator',
      'One-click instant copy-to-clipboard with visual confirmation',
      'Regenerate button for fast iteration',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/src/assets/images/project_password_generator_1793268308988.jpg',
    githubUrl: null,
    liveDemoUrl: null,
    interactiveType: 'password-generator',
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    company: 'Thiranex',
    role: 'Full Stack Engineer',
    period: 'September 2026 – Present',
    location: 'Karimnagar, Telangana, India',
    description:
      'Contributing to full-stack engineering initiatives, developing web modules, integrating front-end interfaces with backend logic, and collaborating on product requirements.',
    skills: ['Full Stack Development', 'JavaScript', 'HTML/CSS', 'Git'],
  },
  {
    company: 'Decode Labs',
    role: 'Python Developer',
    period: 'July 2026 – Present',
    location: 'Karimnagar, Telangana, India',
    description:
      'Developing Python scripts, handling data structures and logical modules, writing clean maintainable code, and supporting technical implementation of software tasks.',
    skills: ['Python', 'Problem Solving', 'Data Structures', 'Code Quality'],
  },
];

export const educationItems: EducationItem[] = [
  {
    institution: 'Kamala Institute of Technology & Science (KITS)',
    degree: 'Bachelor of Technology in Computer Science Engineering',
    grade: '8.2 GPA',
    location: 'Singapur, Telangana, India',
    details:
      'Focused on core computer science subjects including Data Structures, Algorithms, Database Management Systems, Operating Systems, and Object-Oriented Software Engineering.',
  },
  {
    institution: 'SR Junior College',
    degree: 'Intermediate (MPC — Mathematics, Physics, Chemistry)',
    location: 'Telangana, India',
    details: 'Strong analytical and mathematical foundation with rigorous problem-solving preparation.',
  },
  {
    institution: 'SR Prime School',
    degree: 'Secondary School Certificate (SSC)',
    location: 'Telangana, India',
    details: 'Comprehensive foundational education with active participation in science and technology activities.',
  },
];

export const certificationItems: CertificationItem[] = [
  {
    title: 'Full Stack Development',
    issuer: 'Thiranex',
    topic: 'Web Development & Full Stack Engineering',
    credentialUrl: null,
  },
  {
    title: 'Python Development',
    issuer: 'Decode Labs',
    topic: 'Python Programming & Practical Implementation',
    credentialUrl: null,
  },
  {
    title: 'Deloitte Data Analytics Job Simulation',
    issuer: 'Deloitte',
    topic: 'Data Analysis, Business Insights & Problem Solving',
    credentialUrl: null,
  },
  {
    title: 'TCS iON Certification / Courses',
    issuer: 'TCS iON',
    topic: 'Industry-Relevant Technical & Professional Skills',
    credentialUrl: null,
  },
  {
    title: 'Introduction to Programming Using Python',
    issuer: 'Verified Technical Course',
    topic: 'Core Syntax, Algorithmic Thinking & Automation',
    credentialUrl: null,
  },
];
