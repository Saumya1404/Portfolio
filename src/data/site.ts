export const profile = {
  name: 'Saumya Rishikesh',
  tagline: 'AI engineer — voice agents, multi-agent systems, and retrieval pipelines.',
  sub: 'B.Tech CS, Manipal University Jaipur (2026) · SWE Intern @ DealMatrix · IEEE-published',
  email: 'saumya1404@gmail.com',
  github: 'https://github.com/Saumya1404',
  linkedin: 'https://linkedin.com/in/saumya-rishikesh-286aa1178',
  resume: '/resume.pdf',
};

export const about = {
  paragraphs: [
    'I build AI systems that ship with numbers attached — voice agents measured in milliseconds, retrieval pipelines measured in Recall@K, research measured in peer review.',
    'Right now I’m a software engineering intern at DealMatrix building multilingual voice agents, finishing my B.Tech in Computer Science at Manipal University Jaipur (Dean’s List, semesters 1–2), and continuing the Alzheimer’s neuroimaging research behind my IEEE paper.',
    'Current focus: multi-agent orchestration with LangGraph, multimodal AI, and the unglamorous-but-critical work of evaluating LLM systems properly.',
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
    metric: '+58% Recall@10 (0.24 → 0.37)',
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
    title: 'Multilingual Voice Agent',
    metric: '<1s response · ~60–70% lower cost per call',
    description:
      'Outbound telecalling agents for 10+ Indian languages built at DealMatrix: streaming Sarvam STT/TTS, Gemini-primary/Groq-fallback LLM chain, and self-hosted SIP telephony — LiveKit SIP bridged to an Asterisk PBX over a Jio trunk. Per-call latency instrumentation into Postgres + Grafana, and a compliance layer with AI disclosure, recording, and transcript logging.',
    tech: ['LiveKit', 'Sarvam', 'Gemini/Groq', 'Asterisk', 'Docker', 'Grafana'],
    links: [],
    note: 'Professional work — code private.',
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
    metric: 'Zero-cost automation',
    description:
      'Turns raw sales-call recordings into structured Retell voice-agent configurations: faster-whisper transcription, n8n triggers, Gemini extraction.',
    tech: ['faster-whisper', 'n8n', 'Gemini'],
    links: [{ label: 'Code', url: 'https://github.com/Saumya1404/ClaraAi-Assignment' }],
  },
  {
    title: 'Manga Recommender',
    metric: 'Vector search + chat UI',
    description:
      'Conversational manga recommendations over a ChromaDB vector index with a Streamlit chat interface.',
    tech: ['ChromaDB', 'Streamlit', 'LLM'],
    links: [{ label: 'Code', url: 'https://github.com/Saumya1404/Manga-Recommendation-System' }],
  },
  {
    title: 'Music Genre Classification',
    metric: 'Audio deep learning',
    description:
      'Deep-learning genre classifier built on Librosa audio features.',
    tech: ['PyTorch', 'Librosa'],
    links: [{ label: 'Code', url: 'https://github.com/Saumya1404/Music-Genre-Classification' }],
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
    role: 'Software Engineering Intern',
    org: 'DealMatrix Services Pvt Ltd',
    period: 'Jan 2026 – Present',
    points: [
      'Multilingual AI voice agents for 10+ Indian languages with 24/7 availability, cutting per-call operational cost by ~60–70% vs human callers (self-hosted deployment).',
      'Low-latency streaming pipeline — Sarvam STT/TTS, Gemini-primary/Groq-fallback LLMs, LiveKit over WebRTC — instrumented at <1s end-to-end response.',
      'Self-hosted SIP telephony (LiveKit SIP → Asterisk PBX → Jio trunk), RBI-compliance monitoring with call recording and transcript logging, automated WhatsApp follow-ups, and a modular agent architecture with interruption handling and silence watchdogs.',
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
  { group: 'Languages', items: ['Python', 'C/C++', 'SQL', 'JavaScript'] },
  { group: 'AI / ML', items: ['PyTorch', 'Transformers', 'scikit-learn', 'OpenCV', 'Librosa'] },
  { group: 'Agents & Retrieval', items: ['LangGraph', 'LangChain', 'DSPy', 'MCP', 'Qdrant', 'ChromaDB'] },
  { group: 'Voice', items: ['LiveKit', 'WebRTC', 'Sarvam', 'STT/TTS pipelines'] },
  { group: 'Backend & Infra', items: ['FastAPI', 'Docker', 'Postgres', 'SQLite', 'MongoDB', 'Grafana', 'Git'] },
  { group: 'Frontend', items: ['React', 'Streamlit'] },
];
