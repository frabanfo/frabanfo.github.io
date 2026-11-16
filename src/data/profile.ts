// Single source of truth for both the website (/) and the ATS-friendly CV (/cv).
// Edit this file, push, and both are updated.

export const profile = {
  name: 'Francesco Banfi',
  role: 'Data Scientist · ML/AI Engineer',
  location: 'Milan, Italy',
  email: 'fra.banfo@gmail.com',
  github: 'https://github.com/frabanfo',
  linkedin: 'https://www.linkedin.com/in/francesco-banfi-9b751734a/',
  website: 'https://frabanfo.github.io',
  tagline:
    'I build end-to-end data and machine learning systems, from ingestion and data quality to models, evaluation and LLM-powered tools.',
  summary:
    'MSc Data Science student at the University of Milano-Bicocca with a BSc in Computer Science. I build end-to-end machine learning and data projects: data pipelines and data quality checks, deep learning models for computer vision, and LLM-based tools evaluated against solid baselines. Background in software and web development, plus experience teaching programming. Looking for Data Scientist and ML/AI Engineer roles.',
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: 'Freelance Web & Software Developer',
    company: 'Self-employed',
    location: 'Milan, Italy',
    period: '2024 – Present',
    bullets: [
      'Design and build websites and small web tools for private clients, from requirements gathering to deployment.',
      'Develop responsive front ends with HTML, CSS and JavaScript, including a booking and showcase website for a B&B.',
    ],
  },
  {
    role: 'Computer Science Teacher',
    company: 'IIS Galvani',
    location: 'Milan, Italy',
    period: 'Sep 2024 – Jun 2025',
    bullets: [
      'Taught computational logic and introductory programming to 1st–3rd year technical high school classes.',
      'Designed interactive learning plans and hands-on exercises in Visual Basic and Python.',
      'Explained technical concepts to students with different levels of experience, adapting pace and materials.',
    ],
  },
  {
    role: 'Sales Associate, Home Appliances & Mobile',
    company: 'Carrefour',
    location: 'Paderno Dugnano, Italy',
    period: 'Oct 2022 – Present',
    bullets: [
      'Advise customers on home appliances, smartphones and mobile plans, translating technical specifications into clear recommendations.',
      'Work part-time alongside full-time university studies.',
    ],
  },
];

export type Education = {
  degree: string;
  school: string;
  location: string;
  period: string;
  details?: string[];
};

export const education: Education[] = [
  {
    degree: 'MSc in Data Science',
    school: 'University of Milano-Bicocca',
    location: 'Milan, Italy',
    period: '2025 – Present',
    details: [
      'Coursework projects in deep learning, data management and statistical modelling.',
    ],
  },
  {
    degree: 'BSc in Computer Science',
    school: 'University of Milano-Bicocca',
    location: 'Milan, Italy',
    period: '2021 – 2025',
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Programming', items: ['Python', 'SQL', 'Java', 'JavaScript', 'HTML/CSS'] },
  {
    group: 'Machine Learning',
    items: ['scikit-learn', 'TensorFlow / Keras', 'PyTorch', 'Hugging Face Transformers', 'OpenCV', 'MediaPipe', 'LLM APIs'],
  },
  { group: 'Data', items: ['pandas', 'NumPy', 'Polars', 'DuckDB', 'Matplotlib', 'Seaborn', 'Dash'] },
  { group: 'Backend', items: ['REST APIs', 'FastAPI'] },
  { group: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
  { group: 'Tools', items: ['Git', 'GitHub Actions', 'Docker', 'pytest', 'uv'] },
];

export const languages = [
  { name: 'Italian', level: 'Native' },
  { name: 'English', level: 'B2, Cambridge certified; C1 university oral exam' },
];

export const certifications = ['Cisco CCNA (2021)', 'Cambridge English, B2'];

export type Project = {
  name: string;
  repo: string;
  summary: string;
  bullets: string[];
  tech: string[];
  status?: 'In progress';
  featured?: boolean; // shown with full detail on the site
  onCv?: boolean; // included in the one-page CV
};

export const projects: Project[] = [
  {
    name: 'Odino: Vehicle Recall Prediction',
    repo: 'https://github.com/frabanfo/Odino',
    summary:
      'End-to-end ML project on US vehicle safety data: predicting recalls from consumer complaints.',
    bullets: [
      'Goal: predict whether a vehicle model and component will receive a new recall within 6 months, using NHTSA complaint, investigation and recall data.',
      'Combines tabular ML on complaint features with LLM-based extraction from free-text narratives and an agent layer on top.',
    ],
    tech: ['Python', 'Polars', 'DuckDB', 'pydantic', 'LLMs', 'GitHub Actions'],
    status: 'In progress',
    featured: true,
    onCv: true,
  },
  {
    name: 'Chess LLM Tutor',
    repo: 'https://github.com/frabanfo/chess-llm-tutor',
    summary:
      'A benchmark measuring how well LLMs solve chess puzzles depending on how the position is described, and a tutor that explains your own mistakes.',
    bullets: [
      'Built an evaluation set of 2,006 Lichess puzzles stratified by rating and theme, with Stockfish as judge, six baselines and confidence intervals on every metric.',
      'Developed a tutor that turns a player’s games into a weakness profile, targeted puzzles and LLM-explained HTML reports; 55 automated tests.',
    ],
    tech: ['Python', 'LLMs', 'Stockfish', 'Batch API', 'pytest'],
    featured: true,
    onCv: true,
  },
  {
    name: 'Image Quality Assessment',
    repo: 'https://github.com/frabanfo/Image_quality_assessment',
    summary:
      'No-reference image quality assessment on real smartphone photos (LIVE In the Wild): CNNs vs Vision Transformers.',
    bullets: [
      'Compared single-scale and multi-scale EfficientNetV2-S CNNs with a pretrained Swin Transformer; best model reached test SRCC 0.870 / PLCC 0.887.',
      'Ran controlled ablations: multi-scale features added +0.102 SRCC and native-resolution crops +0.028; used Grad-CAM to inspect predictions.',
    ],
    tech: ['TensorFlow', 'Keras', 'Hugging Face Transformers', 'EfficientNet', 'Grad-CAM'],
    featured: true,
    onCv: true,
  },
  {
    name: 'TrainAnalysis: Railway Delays vs Weather',
    repo: 'https://github.com/frabanfo/TrainAnalysis',
    summary:
      'Event-driven data pipeline correlating train delays with weather conditions across Lombardy.',
    bullets: [
      'Built a pipeline with parallel ingestion from railway and weather APIs (Dramatiq, Redis), raw data lake and PostgreSQL data warehouse.',
      'Implemented a data quality framework (schema validation, business rules, deduplication, quality KPIs) and spatio-temporal matching of trains and weather.',
    ],
    tech: ['Python', 'PostgreSQL', 'Redis', 'Dramatiq', 'Docker'],
    featured: true,
    onCv: true,
  },
  {
    name: 'LiftCV: Squat Video Analysis',
    repo: 'https://github.com/frabanfo/LiftCV',
    summary:
      'Computer vision pipeline that analyses a squat from a side-view video: depth and lockout checks, bar velocity and estimated %1RM.',
    bullets: [
      'Extracted pose landmarks with MediaPipe and computed kinematic metrics (range of motion, mean and peak velocity, bar path deviation).',
    ],
    tech: ['Python', 'MediaPipe', 'OpenCV', 'SciPy'],
    featured: true,
  },
  {
    name: 'OBD Analyzer',
    repo: 'https://github.com/frabanfo/OBD_Analyzer',
    summary:
      'Real-time car telemetry dashboard over OBD2: live engine data, trip statistics, fuel use and gear detection learned by clustering RPM/speed ratios.',
    bullets: [],
    tech: ['Python', 'Dash', 'OBD2'],
  },
  {
    name: 'AC Telemetry Tool',
    repo: 'https://github.com/frabanfo/ACTelemetryTool',
    summary:
      'End-to-end motorsport telemetry pipeline: Parquet storage, DuckDB/dbt models, lap and sector analytics and ML-driven driver insights.',
    bullets: [],
    tech: ['Python', 'Parquet', 'DuckDB', 'dbt'],
    status: 'In progress',
  },
  {
    name: 'Pandino',
    repo: 'https://github.com/frabanfo/pandino',
    summary:
      'A row-oriented database engine built from scratch: storage engine, B+tree indexes, mini-SQL and a DataFrame layer.',
    bullets: [],
    tech: ['Python', 'Databases'],
    status: 'In progress',
  },
  {
    name: 'OpenPowerlifting Data Visualization',
    repo: 'https://github.com/frabanfo/dataVisualization',
    summary: 'Exploratory analysis and visual storytelling on the OpenPowerlifting dataset.',
    bullets: [],
    tech: ['pandas', 'Matplotlib', 'Seaborn'],
  },
];
