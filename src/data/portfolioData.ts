/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  THE ONLY FILE YOU NEED TO EDIT FOR TEXT CONTENT             ║
 * ║  (images live in /public – see README.md)                    ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

/* ───────────── 1. BASIC INFO ───────────── */
export const SITE = {
  name: 'Sujit Raut', // shown in navbar, footer, hero, about
  pageTitle: 'Sujit Raut – Python & AI Developer', // browser tab title
  role: 'Python & AI Developer', // footer subtitle
  email: 'sujitraut428755@gmail.com',
  // digits only, with country code, no + or spaces (e.g. 919876543210)
  phone: '918600594255',
  whatsappMessage: 'Hi Sujit, I visited your portfolio and would like to get in touch.',
  available: true,
};

/* ───────────── 2. HERO (top of page) ───────────── */
export const HERO = {
  eyebrow: 'PYTHON & AI DEVELOPER • LLMs, RAG & ML',
  headline: 'SUJIT RAUT', // big text, use CAPS
  roles: ['PYTHON & AI DEVELOPER', 'GENAI & ML ENGINEER'] as [string, string],
  tagline:
    'I build grounded, tested AI systems — RAG assistants, multi-agent workflows and ML models — and ship them with FastAPI and Docker.',
  primaryButton: 'EXPLORE MY WORK',
  secondaryButton: 'Get In Touch',
  image: '/assets/hero-red-bg.jpg', // 1920x1080, subject on the RIGHT side
  imageAlt: 'Portrait of Sujit Raut',
  imagePosition: '69% center', // CSS object-position fallback
};

/* ───────────── 3. LOADING SCREEN ───────────── */
export const LOADER = {
  statement: 'I BUILD AI THAT CITES ITS SOURCES AND SHIPS TO PRODUCTION',
  redWords: ['AI', 'PRODUCTION'], // words highlighted in red
};

/* ───────────── 4. ABOUT ───────────── */
export const ABOUT = {
  eyebrow: 'Python · Machine Learning · Generative AI',
  portrait: '/media/profile.webp', // 4:5 portrait photo
  portraitAlt: 'Portrait of Sujit Raut',
  portraitCaption: 'Python & AI Developer', // small red text under the name on the photo
  paragraphs: [
    'I am an Artificial Intelligence & Data Science graduate (CGPA 8.49) and a Trainee Software Engineer in the GenAI Academy at CitiusTech. I build end-to-end AI systems in Python: RAG assistants, LangGraph multi-agent workflows and classical ML models, served through FastAPI and Docker.',
    'I care about AI people can trust. My projects cite their sources, keep calculations in code instead of the LLM, add guardrails and human approval for risky actions, and come with pytest suites and evaluation sets. I am looking for a role where I can ship reliable AI to real users.',
  ],
  technologies: ['Python', 'Scikit-Learn', 'LangGraph', 'LangChain', 'FastAPI', 'Docker'],
  focus: ['LLM & RAG Applications', 'Machine Learning', 'Model Deployment & MLOps'],
};

/* ───────────── 5. SOCIAL LINKS (footer) ───────────── */
export const SOCIALS = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/sujit428755' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/sujitraut428755' },
] as const;

/* ───────────── 6. TECHNICAL SKILLS (6 cards look best) ───────────── */
export const SKILL_CARDS: { name: string; category: string; level: string }[] = [
  { name: 'Python & OOP', category: 'Pydantic · async · pytest', level: 'Advanced' },
  { name: 'LLMs & RAG', category: 'LangChain · LangGraph · Prompting', level: 'Advanced' },
  { name: 'Machine Learning', category: 'Scikit-Learn · XGBoost · SHAP', level: 'Proficient' },
  { name: 'Data & SQL', category: 'Pandas · NumPy · PostgreSQL', level: 'Proficient' },
  { name: 'Vector Search', category: 'FAISS · ChromaDB · Azure AI Search', level: 'Proficient' },
  { name: 'Deployment & MLOps', category: 'FastAPI · Docker · MLflow · CI', level: 'Proficient' },
];

/* ───────────── 6b. TECH STACK STRIP (logos under the skills) ─────────────
 * Use names with a built-in logo: React, JavaScript, Python, FastAPI, PostgreSQL,
 * Supabase, SQLite, Three.js, GSAP. Any other name still shows as a lettered badge. */
export const TECH_STACK: string[] = [
  'Python',
  'FastAPI',
  'PostgreSQL',
  'LangGraph',
  'LangChain',
  'Scikit-Learn',
  'Pandas',
  'Docker',
  'MLflow',
  'Azure',
];

/* ───────────── 7. PROJECTS ─────────────
 * Thumbnails: put project-<n>-1.jpg, -2.jpg, -3.jpg in /public/assets/thumbnails/
 * (card cycles through 1-3). Set poster to the "-1.jpg" file.
 * Add liveUrl / repoUrl to show "View Live" / "View Code" buttons.
 * 6 or 9 projects fill the 3D grid best. */
export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  videoUrl?: string;
  embedUrl?: string;
  driveUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  kind?: 'video' | 'software';
  poster?: string;
  description?: string;
  tags?: string[];
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'loan-underwriting-agent',
    kind: 'software',
    title: 'Loan Underwriting Agent',
    subtitle: 'Multi-agent credit memos with a human approval gate',
    category: 'Agentic AI · ML',
    poster: '/assets/thumbnails/project-1-1.jpg',
    description:
      'Turns a loan file (application, salary slip, bank statement, credit report) into a cited credit memo, pausing for human approval before any decision. Combines document extraction, fraud checks, a credit-risk ML model with SHAP explanations and policy RAG; income, EMI and DTI maths stay in code. Evaluated on 42 cases plus a 500-applicant fairness check (disparate impact 0.84).',
    tags: ['LangGraph', 'FastAPI', 'SHAP', 'MLflow', 'Docker', 'pytest'],
    repoUrl: 'https://github.com/sujit428755/loan-underwriting-agent',
  },
  {
    id: 'shopdesk-support-agent',
    kind: 'software',
    title: 'ShopDesk',
    subtitle: 'Agentic e-commerce support & returns platform',
    category: 'Agentic AI · RAG',
    poster: '/assets/thumbnails/project-2-1.jpg',
    description:
      'A support agent that reads a customer message (with optional photo), looks up the order, applies the returns policy with RAG clause citations and acts through safe tool calls. Guardrails cover prompt injection, PII redaction and refund caps; text-to-SQL analytics run on a read-only connection. Tested with a 51-conversation labelled evaluation suite.',
    tags: ['LangGraph', 'RAG', 'Text-to-SQL', 'Groq', 'FastAPI', 'Docker'],
    repoUrl: 'https://github.com/sujit428755/ecommerce-support-agent',
  },
  {
    id: 'credit-risk-fairness',
    kind: 'software',
    title: 'Credit Risk & Fairness Audit',
    subtitle: 'Explainable ML model, deployed with a bias report',
    category: 'Machine Learning · MLOps',
    poster: '/assets/thumbnails/project-3-1.jpg',
    description:
      'Compared Logistic Regression, Random Forest and XGBoost on the German Credit dataset (ROC-AUC ≈ 0.81) with MLflow tracking, and chose the interpretable model for regulated lending. A SHAP + Fairlearn audit produces a plain-English bias report, served through a Dockerized FastAPI + Streamlit app.',
    tags: ['Scikit-Learn', 'XGBoost', 'SHAP', 'Fairlearn', 'MLflow', 'Docker'],
    repoUrl: 'https://github.com/sujit428755/credit-risk-fairness-mlops',
  },
  {
    id: 'fda-drug-label-rag',
    kind: 'software',
    title: 'FDA Drug Label RAG Assistant',
    subtitle: 'Cited answers from real drug labels',
    category: 'RAG',
    poster: '/assets/thumbnails/project-4-1.jpg',
    description:
      'RAG over real FDA drug labels (DailyMed) with section-aware chunking and TF-IDF retrieval; every answer cites its label and section. A similarity threshold returns a safe “not found – consult a pharmacist” reply without calling the LLM, cutting hallucination risk.',
    tags: ['Python', 'Scikit-Learn', 'TF-IDF', 'Groq', 'Streamlit'],
    repoUrl: 'https://github.com/sujit428755/fda-drug-label-rag-assistant',
  },
  {
    id: 'clinical-multi-agent',
    kind: 'software',
    title: 'Clinical Multi-Agent System',
    subtitle: 'Orchestrated agents for cited clinical answers',
    category: 'Agentic AI',
    poster: '/assets/thumbnails/project-5-1.jpg',
    description:
      'A stateful LangGraph system where an orchestrator routes each query to a drug-interaction agent (reusing the FDA RAG assistant as a tool), a research agent (Tavily) or both, then a synthesis agent writes a cited answer. Degrades gracefully when API keys are missing.',
    tags: ['LangGraph', 'Groq', 'Tavily', 'Streamlit'],
    repoUrl: 'https://github.com/sujit428755/clinical-multi-agent-langgraph',
  },
  {
    id: 'chronic-care-agents',
    kind: 'software',
    title: 'Chronic Care Follow-up Agents',
    subtitle: 'Multi-agent assistant on Microsoft Foundry',
    category: 'Agentic AI · Azure',
    poster: '/assets/thumbnails/project-6-1.jpg',
    description:
      'Router, summary, care-plan, engagement, escalation and education-RAG agents coordinated by an orchestrator whose safety rules live in code. Includes input/output guards, a masked-ID audit log, a staff review queue and an Azure Blob Storage + AI Search ingestion pipeline with rollback.',
    tags: ['Microsoft Foundry', 'Azure AI Search', 'Blob Storage', 'Streamlit'],
    repoUrl: 'https://github.com/sujit428755/chronic-care-agents',
  },
  {
    id: 'phi-deid-studio',
    kind: 'software',
    title: 'PHI De-Identification Studio',
    subtitle: 'HIPAA Safe Harbor redaction for clinical notes',
    category: 'NLP',
    poster: '/assets/thumbnails/project-7-1.jpg',
    description:
      'Multi-format ingestion, OCR cleanup, regex + spaCy NER redaction and a mandatory post-redaction verification scan with a full audit trail. Live evaluation (recall by identifier, ablation) reached 100% identifier recall on the synthetic sample, backed by 19 pytest tests.',
    tags: ['Python', 'spaCy', 'NLP', 'Plotly', 'pytest'],
    repoUrl: 'https://github.com/sujit428755/phi-deid-studio',
  },
  {
    id: 'mlops-sales-forecasting',
    kind: 'software',
    title: 'MLOps Sales Forecasting Pipeline',
    subtitle: 'Final-year project · team of 4',
    category: 'MLOps',
    poster: '/assets/thumbnails/project-8-1.jpg',
    description:
      'A modular time-series forecasting pipeline with experiment tracking and data versioning (MLflow + DVC), Dockerized services, Kubernetes orchestration and GitHub Actions CI/CD, plus data-drift and model-performance monitoring dashboards.',
    tags: ['MLflow', 'DVC', 'Docker', 'Kubernetes', 'Airflow', 'Kafka'],
    driveUrl: 'https://drive.google.com/file/d/1PB_AbC7YwcUzcnBLuMh-nMQxoT3jikpz/view',
  },
  {
    id: 'hospital-management-system',
    kind: 'software',
    title: 'Hospital Management System',
    subtitle: 'Role-based backend with tested APIs',
    category: 'Backend · SQL',
    poster: '/assets/thumbnails/project-9-1.jpg',
    description:
      'Patients, appointments, prescriptions, lab reports, billing and pharmacy on PostgreSQL with SQLAlchemy 2 + Alembic migrations. JWT auth with server-side RBAC for seven roles, 34 pytest tests (~92% coverage) and a GitHub Actions CI pipeline.',
    tags: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JWT', 'Docker', 'GitHub Actions'],
    repoUrl: 'https://github.com/sujit428755/hospital-management-system',
  },
];

/* ───────────── 8. EXPERIENCE & EDUCATION ─────────────
 * (Shown in the "Journey" section. Keys kept from the template:
 *  priceLabel = small label, price = date chip, featured = "Current" badge.) */
export const SERVICES_PRICING = [
  { id: 'service-1', title: 'Trainee Software Engineer (GenAI) · CitiusTech', priceLabel: 'Experience', price: 'Aug 2026 – Present', featured: true },
  { id: 'service-2', title: 'Data Analyst Intern · Shubhsairaj Infotech', priceLabel: 'Experience', price: 'Dec 2024 – Jan 2025', featured: false },
  { id: 'service-3', title: 'B.E. Artificial Intelligence & Data Science · DYPIEMR Pune (CGPA 8.49)', priceLabel: 'Education', price: '2026', featured: false },
  { id: 'service-4', title: 'Oracle Cloud Infrastructure AI Foundations Associate (98/100)', priceLabel: 'Certification', price: '2025', featured: false },
  { id: 'service-5', title: 'Microsoft Azure Fundamentals (AZ-900) · Google Cloud MLOps Fundamentals', priceLabel: 'Certification', price: 'Certified', featured: false },
] as const;

/* ───────────── 9. HEADLINE NUMBERS (under hero) ───────────── */
export const CLIENT_STATS = [
  { id: 'stat-1', value: 10, suffix: '+', label: 'AI & ML Projects Built' },
  { id: 'stat-2', value: 30, suffix: '+', label: 'Technologies Used' },
  { id: 'stat-3', value: 5, suffix: '', label: 'Certifications' },
] as const;

/* Derived – do not edit */
export const WHATSAPP_URL = `https://wa.me/${SITE.phone}?text=${encodeURIComponent(SITE.whatsappMessage)}`;
