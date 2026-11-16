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
    'MSc Data Science student at the University of Milano-Bicocca with a BSc in Computer Science. I build end-to-end machine learning and data projects: data pipelines and quality checks, deep learning for computer vision, and LLM-based tools evaluated against solid baselines. Background in web development and teaching programming.',
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
      'Build websites and web tools for private clients, from requirements to deployment (HTML, CSS, JavaScript), e.g. a B&B booking site.',
    ],
  },
  {
    role: 'Computer Science Teacher',
    company: 'IIS Galvani',
    location: 'Milan, Italy',
    period: 'Sep 2024 – Jun 2025',
    bullets: [
      'Taught logic and introductory programming (Visual Basic, Python) to 1st–3rd year classes with interactive learning plans.',
    ],
  },
  {
    role: 'Sales Associate, Home Appliances & Mobile',
    company: 'Carrefour',
    location: 'Paderno Dugnano, Italy',
    period: 'Oct 2022 – Present',
    bullets: [
      'Advise customers on appliances, smartphones and mobile plans, turning technical specs into clear recommendations.',
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
  },
  {
    degree: 'BSc in Computer Science',
    school: 'University of Milano-Bicocca',
    location: 'Milan, Italy',
    period: '2021 – 2025',
    details: [
      'Thesis (MUDI Lab internship): deployed two online decision support tools for medical AI (Flask, Gunicorn, Nginx) and built a Python tool for human–AI reliance analysis.',
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Programming', items: ['Python', 'SQL', 'Java', 'JavaScript', 'HTML/CSS'] },
  {
    group: 'Machine Learning',
    items: ['scikit-learn', 'TensorFlow / Keras', 'PyTorch', 'Hugging Face Transformers', 'OpenCV', 'MediaPipe', 'LLM APIs'],
  },
  { group: 'Data', items: ['pandas', 'NumPy', 'Polars', 'DuckDB', 'Matplotlib', 'Seaborn', 'Dash'] },
  { group: 'Backend & Databases', items: ['REST APIs', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { group: 'Tools', items: ['Git', 'GitHub Actions', 'Docker', 'pytest', 'uv'] },
];

export const languages = [
  { name: 'Italian', level: 'Native' },
  { name: 'English', level: 'B2, Cambridge certified; C1, University of Milano-Bicocca internal certification' },
];

export const certifications = ['Cisco CCNA (2021)', 'Cambridge English, B2'];

export type Project = {
  name: string;
  repo: string;
  summary: string;
  bullets: string[];
  cvBullets?: string[]; // shorter bullets for the one-page CV (defaults to bullets)
  tech: string[];
  status?: 'In progress';
  featured?: boolean; // shown with full detail on the site
  onCv?: boolean; // included in the one-page CV
};

export const projects: Project[] = [
  {
    name: 'Image Quality Assessment',
    repo: 'https://github.com/frabanfo/Image_quality_assessment',
    summary:
      'No-reference image quality assessment on real smartphone photos (LIVE In the Wild): CNNs vs Vision Transformers.',
    bullets: [
      'Compared single- and multi-scale EfficientNetV2-S CNNs with a pretrained Swin Transformer; best: SRCC 0.870, PLCC 0.887.',
      'Controlled ablations: multi-scale features +0.102 SRCC, native-resolution crops +0.028; Grad-CAM for interpretability.',
    ],
    tech: ['TensorFlow', 'Keras', 'Hugging Face Transformers', 'EfficientNet', 'Grad-CAM'],
    featured: true,
    onCv: true,
  },
  {
    name: 'Odino: Vehicle Recall Prediction',
    repo: 'https://github.com/frabanfo/Odino',
    summary:
      'End-to-end ML project on US vehicle safety data: predicting recalls from consumer complaints.',
    bullets: [
      'Goal: predict whether a vehicle model and component will receive a new recall within 6 months, using NHTSA complaint, investigation and recall data.',
      'Combines tabular ML on complaint features with LLM-based extraction from free-text narratives and an agent layer on top.',
    ],
    cvBullets: [
      'Predicting new vehicle recalls within 6 months from NHTSA complaints, combining tabular ML, LLM extraction from complaint narratives and an agent layer.',
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
      'Benchmark of 2,006 Lichess puzzles stratified by rating and theme, with Stockfish as judge, six baselines and confidence intervals on every metric.',
      'Tutor that turns a player’s games into a weakness profile, targeted puzzles and LLM-explained reports (55 tests).',
    ],
    tech: ['Python', 'LLMs', 'Stockfish', 'Batch API', 'pytest'],
    featured: true,
    onCv: true,
  },
  {
    name: 'TrainAnalysis: Railway Delays vs Weather',
    repo: 'https://github.com/frabanfo/TrainAnalysis',
    summary:
      'Event-driven data pipeline correlating train delays with weather conditions across Lombardy.',
    bullets: [
      'Event-driven pipeline (Dramatiq, Redis) loading railway and weather APIs into a data lake and PostgreSQL warehouse.',
      'Data quality framework (schema checks, business rules, deduplication, KPIs) and spatio-temporal train–weather matching.',
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
