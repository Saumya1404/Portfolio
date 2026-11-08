export const profile = {
  name: 'Saumya Rishikesh',
  tagline: 'AI engineer building GPU-backed services, voice agents, and retrieval systems.',
  sub: 'Associate Software Engineer (AIML) at Cyfuture India · B.Tech CS, Manipal University Jaipur (2026)',
  email: 'saumya1404@gmail.com',
  github: 'https://github.com/Saumya1404',
  linkedin: 'https://linkedin.com/in/saumya-rishikesh-286aa1178',
  resume: '/resume.pdf',
};

export const about = {
  paragraphs: [
    'At Cyfuture India, I build GPU-backed video generation services and work on Java and Spring applications. Previously, I built multilingual voice agents at DealMatrix and document extraction pipelines at SP Software.',
    'My independent projects explore how agents retrieve context, use tools, and handle feedback. I graduated from Manipal University Jaipur in July 2026 and co-authored an IEEE paper on Alzheimer’s classification from MRI scans.',
  ],
  certificate: 'https://drive.google.com/drive/folders/1CImv2fSGDFK8EOht3xbDRDoPGXjOKvzR?usp=sharing',
};

export interface Project {
  title: string;
  metric: string;
  description: string;
  tech: string[];
  links: { label: string; url: string }[];
  note?: string;
}

export const featured: Project[] = [
  {
    title: 'SHL Assessment Recommender',
    metric: 'Mean Recall@10 improved from 0.24 to 0.37',
    description:
      'Hybrid retrieval engine for hiring assessments: dense (MiniLM) and sparse BM25 vectors fused with server-side reciprocal-rank fusion in Qdrant, LLM intent parsing with duration/role/seniority filters, and two-stage reranking (Cohere, ZeRank). Measured on a labeled query set.',
    tech: ['Python', 'Qdrant', 'FastAPI', 'Streamlit', 'Reranking'],
    links: [
      { label: 'Live demo', url: 'https://shl-saumya.streamlit.app/' },
      { label: 'API', url: 'https://shl-5osm.onrender.com' },
      { label: 'Code', url: 'https://github.com/Saumya1404/SHL' },
    ],
  },
  {
    title: 'Math Routing Agent',
    metric: '4-agent pipeline · async human-in-the-loop',
    description:
      'Agentic math tutor: a LangGraph-orchestrated pipeline of Professor, Critic, Guardrail, and human-in-the-loop agents over RAG (GSM8K + Orca-200k in Qdrant). The graph suspends on critic rejection and resumes when human feedback arrives via the API; corrections are compiled into the refiner with DSPy BootstrapFewShot. Includes a custom MCP web-search tool server.',
    tech: ['Python', 'LangGraph', 'DSPy', 'Qdrant', 'MCP', 'FastAPI', 'React'],
    links: [{ label: 'Code', url: 'https://github.com/Saumya1404/Agentic-Math-Prof' }],
  },
  {
    title: 'Jev Codebase Explorer (CodeScout)',
    metric: 'Token-budgeted context packs',
    description:
      'Local CLI that indexes Python, JavaScript, and TypeScript repositories with Tree-sitter and SQLite FTS5. It traces callers and callees and packages source spans, related tests, and Git history for coding agents. An offline ranker and optional Jev reranking can be compared by latency and token usage.',
    tech: ['Python', 'Tree-sitter', 'SQLite FTS5', 'Git', 'Vercel AI Gateway'],
    links: [{ label: 'Code', url: 'https://github.com/Saumya1404/Codescout' }],
  },
  {
    title: 'LLM Gateway and Traffic Router',
    metric: 'Cost and latency routing policies',
    description:
      'Async OpenAI-compatible gateway with fixed, lowest-cost, and latency-aware routing. It supports SSE streaming, per-model concurrency limits, and provider cooldowns. A mock provider simulates failures for repeatable gateway benchmarks, and Prometheus tracks time to first token.',
    tech: ['Python', 'SSE', 'Prometheus', 'Load testing'],
    links: [],
  },
];

export const more: Project[] = [
  {
    title: 'CarePlus Clinic Callbacks',
    metric: 'Full-stack voice workflow',
    description:
      'Missed-call → outbound-callback system: FastAPI + SQLite backend, Bolna call webhooks, React staff dashboard with escalation flags.',
    tech: ['FastAPI', 'Bolna', 'React'],
    links: [{ label: 'Code', url: 'https://github.com/Saumya1404/Bolna-Ai-Assignment' }],
  },
  {
    title: 'News Sentiment & TTS',
    metric: 'Deployed on HF Spaces',
    description:
      'Multilingual news sentiment analysis with spoken Hindi reports; MBart translation across 50+ languages, Dockerized deployment.',
    tech: ['Transformers', 'Docker', 'TTS'],
    links: [{ label: 'Code', url: 'https://github.com/Saumya1404/News-Scraper' }],
  },
  {
    title: 'Clara AI Config Pipeline',
    metric: 'Demo and onboarding workflows',
    description:
      'Turns demo call recordings into initial Retell voice-agent configurations, then applies onboarding transcripts to produce a revised configuration and changelog.',
    tech: ['faster-whisper', 'n8n', 'Gemini'],
    links: [{ label: 'Code', url: 'https://github.com/Saumya1404/ClaraAi-Assignment' }],
  },
  {
    title: 'OpenCode Jev Skill Decision Layer',
    metric: 'On-demand skill selection',
    description:
      'MCP server that keeps the skill catalog outside the coding agent’s base prompt and uses Jev to return the instructions for one relevant skill.',
    tech: ['MCP', 'OpenCode', 'Vercel AI Gateway'],
    links: [],
  },
  {
    title: 'Predictive Fleet Maintenance',
    metric: 'Inspection prioritization MVP',
    description:
      'Scores vehicles for inspection using anomaly detection and fleet data. A Streamlit dashboard shows per-vehicle SHAP explanations and a map view.',
    tech: ['scikit-learn', 'SHAP', 'Streamlit', 'Folium'],
    links: [],
  },
  {
    title: 'JSScan MCP',
    metric: 'JavaScript security scanning',
    description:
      'Discovers JavaScript assets and scans for exposed secrets and known vulnerable libraries. Findings include source URLs and supporting evidence, with a host allowlist and audit log for target requests.',
    tech: ['Python', 'MCP', 'Web security'],
    links: [{ label: 'Code', url: 'https://github.com/Saumya1404/jsscan-mcp' }],
  },
  {
    title: 'GitHub Webhook Tracker',
    metric: 'Event-driven service',
    description:
      'Flask + MongoDB service ingesting GitHub push/PR/merge webhooks with a live-polling activity UI.',
    tech: ['Flask', 'MongoDB', 'Webhooks'],
    links: [{ label: 'Code', url: 'https://github.com/Saumya1404/webhook-repo' }],
  },
];

export const experience = [
  {
    role: 'Associate Software Engineer (AIML)',
    org: 'Cyfuture India',
    period: 'Jul 2026 – Present',
    points: [
      'Deployed a GPU-backed video generation platform on Kubernetes (K3s) with Docker, FastAPI, Redis, and ComfyUI/Wan2.2 on an NVIDIA V100. Separated API, worker, queue, and inference services with persistent job and video storage.',
      'Configured GPU allocation and health probes. Extending the platform with priority-aware FIFO scheduling, atomic job claims, retries, and abandoned-job recovery.',
      'Built refund and stock-transfer modules for JCI Sahyog with Java, Spring MVC, Spring Boot, and JSP, including multi-level refund approvals.',
      'Contributed to CSPDCL’s C#-to-Java migration by building dashboard features and a middleware API for location-based electricity consumption data.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    org: 'DealMatrix Services Pvt Ltd',
    period: 'Jan 2026 – Jul 2026',
    points: [
      'Built voice agents supporting 10+ Indian languages with 24/7 availability and 30–40% lower per-call operating costs compared with human callers.',
      'Achieved sub-second responses using Sarvam STT/TTS, Gemini with Groq fallback, and LiveKit over WebRTC. Tracked time to first token and per-call latency with PostgreSQL and Grafana.',
      'Connected LiveKit SIP through Asterisk to a Jio trunk. Added call recording, transcript logging, WhatsApp follow-ups, interruption handling, and silence watchdogs.',
    ],
  },
  {
    role: 'Data Science Intern',
    org: 'SP Software (P) Limited',
    period: 'Jun 2025 – Jul 2025',
    points: [
      'Automated invoice-document extraction: fine-tuned TrOCR and Donut for structured fields, custom YOLO models for annotated-region detection.',
      'Built labeled datasets from internal archives and schema-constrained post-processing for validation.',
    ],
  },
  {
    role: 'Student Researcher',
    org: 'Manipal University Jaipur',
    period: 'Dec 2024 – May 2025',
    points: [
      "Alzheimer's disease classification from MRI neuroimaging: ResNet-18, VGG-19, ConvNeXt-Tiny with multi-phase fine-tuning and Grad-CAM interpretability.",
      'Presented at ICAIIHI 2025 (IEEE co-sponsored); follow-up research in progress.',
    ],
  },
];

export const publication = {
  citation:
    'S. Rishikesh et al., "Leveraging CNN Architectures for Alzheimer’s Disease Classification Using Neuroimaging Data," in Proc. 2nd Int. Conf. on Artificial Intelligence for Innovations in Healthcare Industries (ICAIIHI), IEEE, 2025.',
  url: 'https://ieeexplore.ieee.org/abstract/document/11403729',
  note: 'Follow-up research in progress — code will be released after publication. Related public work: clinical-data models on OASIS.',
  relatedUrl: 'https://github.com/Saumya1404/Alzheimer-Detection-Clinical',
};

export const skills = [
  { group: 'Languages', items: ['Python', 'Java', 'SQL', 'JavaScript'] },
  { group: 'AI / ML', items: ['PyTorch', 'Hugging Face Transformers', 'OCR', 'LangGraph', 'DSPy', 'MCP'] },
  { group: 'Data & Retrieval', items: ['RAG', 'Qdrant', 'BM25', 'Embeddings', 'Reranking', 'SQLite FTS5', 'PostgreSQL', 'MongoDB'] },
  { group: 'Voice', items: ['LiveKit', 'WebRTC', 'SIP', 'Sarvam STT/TTS'] },
  { group: 'Backend & Frontend', items: ['FastAPI', 'Spring Boot', 'React', 'Streamlit'] },
  { group: 'Infrastructure', items: ['Kubernetes (K3s)', 'Docker', 'Redis', 'Grafana', 'Git'] },
];
