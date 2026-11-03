export const aboutParagraphs = [
  "I am an M.Sc. Computer Science student specializing in Artificial Intelligence, with a B.Sc. in Software Engineering.",
  "My interests are machine learning, intelligent systems, computer networks, and building software that applies research to real-world problems.",
] as const;

export const experienceEntries = [
  {
    role: "Teaching Assistant — Compiler Design",
    period: "2024–2025",
    points: ["Testing and evaluating student compiler implementations."],
  },
  {
    role: "Instructor — Aharai-Tech",
    points: ["Teaching programming, Python, SQL and database fundamentals."],
  },
] as const;

export const projects = [
  {
    number: "01",
    title: "SCION Intelligent Path Selection",
    description:
      "Deep reinforcement learning system for intelligent path selection in SCION networks. A DQN agent learns routing decisions using network measurements including latency, loss, and goodput.",
    technologies: [
      "Python",
      "PyTorch",
      "Reinforcement Learning",
      "SCION",
      "Docker",
    ],
    meta: "CSCML 2025",
  },
  {
    number: "02",
    title: "Retrieval-Augmented Patch Graph Few-Shot Learning",
    description:
      "Research project exploring patch-level graph representations for few-shot image classification using DINOv2 embeddings, retrieval, and graph neural networks.",
    technologies: [
      "Python",
      "PyTorch",
      "DINOv2",
      "Graph Neural Networks",
    ],
  },
  {
    number: "03",
    title: "AI Tax Agent",
    description:
      "An agentic AI system designed to help analyze Interactive Brokers activity and assist with Israeli tax reporting workflows.",
    technologies: ["Python", "AI Agents", "Financial Data"],
    status: "In Development",
  },
] as const;

export const skillGroups = [
  {
    label: "AI / ML",
    items: ["Python", "PyTorch", "TensorFlow", "NumPy", "Pandas"],
  },
  {
    label: "Software",
    items: ["TypeScript", "Java", "C", "C++", "SQL"],
  },
  {
    label: "Infrastructure / Systems",
    items: ["Docker", "Git", "Linux", "ROS2", "SDN"],
  },
] as const;

export const educationEntries = [
  {
    degree: "M.Sc. Computer Science — Artificial Intelligence",
    institution: "Ben-Gurion University",
  },
  {
    degree: "B.Sc. Software Engineering",
    institution: "SCE — GPA 92",
  },
  {
    degree: "Exchange Semester",
    institution: "Otto von Guericke University, Germany",
  },
] as const;
