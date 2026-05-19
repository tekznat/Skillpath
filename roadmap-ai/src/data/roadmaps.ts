import type { Goal, Question, Roadmap, GoalId } from '@/types'

export const GOALS: Goal[] = [
  { id: 'fe', label: 'Frontend', desc: 'Responsive interfaces & modern web apps', icon: '🎨', color: 'blue', accentColor: '#3b82f6' },
  { id: 'be', label: 'Backend', desc: 'APIs, servers & database systems', icon: '⚙️', color: 'violet', accentColor: '#8b5cf6' },
  { id: 'fs', label: 'Full Stack', desc: 'Frontend + backend to ship production applications', icon: '🌐', color: 'indigo', accentColor: '#6366f1' },
  { id: 'do', label: 'DevOps', desc: 'Deployment, automation & infrastructure', icon: '🚀', color: 'cyan', accentColor: '#06b6d4' },
  { id: 'dsop', label: 'DevSecOps', desc: 'Secure DevOps, compliance & automation', icon: '🛡️', color: 'emerald', accentColor: '#10b981' },
  { id: 'da', label: 'Data Analyst', desc: 'Insights, visualization & BI reporting', icon: '📊', color: 'emerald', accentColor: '#059669' },
  { id: 'ai', label: 'AI Engineer', desc: 'AI systems, models & deployment pipelines', icon: '🤖', color: 'orange', accentColor: '#f97316', category: 'Revamped Roadmaps' },
  { id: 'ads', label: 'AI & Data Scientist', desc: 'Machine learning, analytics & business intelligence', icon: '🧠', color: 'rose', accentColor: '#f43f5e', category: 'Revamped Roadmaps' },
  { id: 'openclaw', label: 'OpenClaw', desc: 'Competitive problem solving and interview practice', icon: '🦾', color: 'purple', accentColor: '#a855f7', category: 'New Roadmaps' },
  { id: 'leetcode', label: 'LeetCode', desc: 'Algorithm practice for technical interviews', icon: '🧩', color: 'amber', accentColor: '#f59e0b', category: 'New Roadmaps' },
  { id: 'csci', label: 'Computer Science', desc: 'Core algorithms, systems and theory', icon: '🎓', color: 'sky', accentColor: '#38bdf8', category: 'Skill Based Roadmaps' },
  { id: 'sql', label: 'SQL', desc: 'Query, model and optimize databases', icon: '🧾', color: 'cyan', accentColor: '#22d3ee', category: 'Skill Based Roadmaps' },
  { id: 'react', label: 'React', desc: 'Modern frontend UI development', icon: '⚛️', color: 'blue', accentColor: '#3b82f6', category: 'Skill Based Roadmaps' },
  { id: 'vue', label: 'Vue', desc: 'Progressive UI framework mastery', icon: '🟢', color: 'emerald', accentColor: '#22c55e', category: 'Skill Based Roadmaps' },
  { id: 'angular', label: 'Angular', desc: 'Enterprise UI architecture', icon: '🅰️', color: 'red', accentColor: '#ef4444', category: 'Skill Based Roadmaps' },
  { id: 'javascript', label: 'JavaScript', desc: 'Universal programming for the web', icon: '🟨', color: 'amber', accentColor: '#f59e0b', category: 'Skill Based Roadmaps' },
  { id: 'python', label: 'Python', desc: 'Versatile coding for apps, data and AI', icon: '🐍', color: 'green', accentColor: '#22c55e', category: 'Skill Based Roadmaps' },
  { id: 'ts', label: 'TypeScript', desc: 'Type-safe JavaScript at scale', icon: '📘', color: 'indigo', accentColor: '#6366f1', category: 'Skill Based Roadmaps' },
  { id: 'node', label: 'Node.js', desc: 'Backend JavaScript and server-side apps', icon: '⬢', color: 'lime', accentColor: '#84cc16', category: 'Skill Based Roadmaps' },
  { id: 'sysdesign', label: 'System Design', desc: 'Architect scalable systems and services', icon: '🏗️', color: 'rose', accentColor: '#f43f5e', category: 'Skill Based Roadmaps' },
  { id: 'java', label: 'Java', desc: 'Enterprise-grade application development', icon: '☕', color: 'orange', accentColor: '#fb923c', category: 'Skill Based Roadmaps' },
  { id: 'aspnet', label: 'ASP.NET Core', desc: 'Microsoft web apps and APIs', icon: '🧩', color: 'sky', accentColor: '#0ea5e9', category: 'Skill Based Roadmaps' },
  { id: 'spring', label: 'Spring Boot', desc: 'Java backend microservices', icon: '🌱', color: 'emerald', accentColor: '#22c55e', category: 'Skill Based Roadmaps' },
  { id: 'flutter', label: 'Flutter', desc: 'Cross-platform mobile UI development', icon: '🦋', color: 'cyan', accentColor: '#06b6d4', category: 'Skill Based Roadmaps' },
  { id: 'cpp', label: 'C++', desc: 'High-performance systems programming', icon: '💻', color: 'slate', accentColor: '#64748b', category: 'Skill Based Roadmaps' },
  { id: 'rust', label: 'Rust', desc: 'Safe, fast systems engineering', icon: '🦀', color: 'orange', accentColor: '#fb923c', category: 'Skill Based Roadmaps' },
  { id: 'go', label: 'Go', desc: 'Cloud-native backend services', icon: '🐹', color: 'blue', accentColor: '#3b82f6', category: 'Skill Based Roadmaps' },
  { id: 'design_arch', label: 'Design Architecture', desc: 'System and product architecture patterns', icon: '🧱', color: 'stone', accentColor: '#78716c', category: 'Skill Based Roadmaps' },
  { id: 'react_native', label: 'React Native', desc: 'Mobile apps with React skills', icon: '📱', color: 'indigo', accentColor: '#6366f1', category: 'Skill Based Roadmaps' },
  { id: 'design_system', label: 'Design System', desc: 'Reusable UI systems for teams', icon: '🎨', color: 'pink', accentColor: '#ec4899', category: 'Skill Based Roadmaps' },
  { id: 'prompt', label: 'Prompt Engineering', desc: 'Build reliable AI prompts and workflows', icon: '💬', color: 'purple', accentColor: '#a855f7', category: 'Skill Based Roadmaps' },
  { id: 'mongodb', label: 'MongoDB', desc: 'Document databases and NoSQL design', icon: '🍃', color: 'emerald', accentColor: '#22c55e', category: 'Skill Based Roadmaps' },
  { id: 'linux', label: 'Linux', desc: 'Command-line and system administration', icon: '🐧', color: 'slate', accentColor: '#475569', category: 'Skill Based Roadmaps' },
  { id: 'k8s', label: 'Kubernetes', desc: 'Container orchestration at scale', icon: '☸️', color: 'cyan', accentColor: '#06b6d4', category: 'Skill Based Roadmaps' },
  { id: 'docker', label: 'Docker', desc: 'Containers and local app environments', icon: '🐳', color: 'blue', accentColor: '#2563eb', category: 'Skill Based Roadmaps' },
  { id: 'aws', label: 'AWS', desc: 'Cloud services and infrastructure operating', icon: '☁️', color: 'orange', accentColor: '#f97316', category: 'Skill Based Roadmaps' },
  { id: 'terraform', label: 'Terraform', desc: 'Infrastructure as code for cloud platforms', icon: '🧱', color: 'emerald', accentColor: '#16a34a', category: 'Skill Based Roadmaps' },
  { id: 'dsa', label: 'Data Structures & Algorithms', desc: 'Essential coding interview fundamentals', icon: '🧠', color: 'sky', accentColor: '#38bdf8', category: 'Skill Based Roadmaps' },
  { id: 'redis', label: 'Redis', desc: 'In-memory caching and fast data stores', icon: '🧩', color: 'red', accentColor: '#ef4444', category: 'Skill Based Roadmaps' },
  { id: 'github', label: 'Git & GitHub', desc: 'Version control and collaboration workflows', icon: '🐱', color: 'slate', accentColor: '#64748b', category: 'Skill Based Roadmaps' },
  { id: 'php', label: 'PHP', desc: 'Server-side scripting and web platforms', icon: '🐘', color: 'purple', accentColor: '#8b5cf6', category: 'Skill Based Roadmaps' },
  { id: 'cloudflare', label: 'Cloudflare', desc: 'Edge networks, CDN, and performance', icon: '☁️', color: 'blue', accentColor: '#0ea5e9', category: 'Skill Based Roadmaps' },
  { id: 'ai_agents', label: 'AI Agents', desc: 'Build intelligent autonomous workflows', icon: '🤖', color: 'pink', accentColor: '#f472b6', category: 'Skill Based Roadmaps' },
  { id: 'nextjs', label: 'Next.js', desc: 'React apps with server rendering and edge routes', icon: '⟲', color: 'black', accentColor: '#000000', category: 'Skill Based Roadmaps' },
  { id: 'kotlin', label: 'Kotlin', desc: 'Modern Android and backend development', icon: '🅺', color: 'purple', accentColor: '#7c3aed', category: 'Skill Based Roadmaps' },
  { id: 'html', label: 'HTML', desc: 'Web markup and structure foundations', icon: '🌐', color: 'orange', accentColor: '#f97316', category: 'Skill Based Roadmaps' },
  { id: 'css', label: 'CSS', desc: 'Styles, layouts, and animations for the web', icon: '🎨', color: 'blue', accentColor: '#3b82f6', category: 'Skill Based Roadmaps' },
  { id: 'swift', label: 'Swift & Swift UI', desc: 'Apple apps with modern native UI', icon: '🐦', color: 'teal', accentColor: '#14b8a6', category: 'Skill Based Roadmaps' },
  { id: 'bash', label: 'Shell / Bash', desc: 'Terminal scripting and automation', icon: '🖥️', color: 'gray', accentColor: '#64748b', category: 'Skill Based Roadmaps' },
  { id: 'laravel', label: 'Laravel', desc: 'PHP framework for modern web apps', icon: '🌿', color: 'red', accentColor: '#ef4444', category: 'Skill Based Roadmaps' },
  { id: 'elasticsearch', label: 'Elasticsearch', desc: 'Search, logging, and analytics engines', icon: '🔎', color: 'amber', accentColor: '#f59e0b', category: 'Skill Based Roadmaps' },
  { id: 'wordpress', label: 'WordPress', desc: 'Build content-driven websites and blogs', icon: '🧱', color: 'blue', accentColor: '#2563eb', category: 'Skill Based Roadmaps' },
  { id: 'django', label: 'Django', desc: 'Python web apps with batteries included', icon: '🦉', color: 'emerald', accentColor: '#16a34a', category: 'Skill Based Roadmaps' },
  { id: 'ruby', label: 'Ruby', desc: 'Elegant web development and scripting', icon: '💎', color: 'red', accentColor: '#ef4444', category: 'Skill Based Roadmaps' },
  { id: 'rails', label: 'Ruby on Rails', desc: 'Productive web apps with convention over configuration', icon: '🚂', color: 'rose', accentColor: '#fb7185', category: 'Skill Based Roadmaps' },
  { id: 'claude', label: 'Claude Code', desc: 'AI-first coding and prompt workflows', icon: '🧠', color: 'purple', accentColor: '#8b5cf6', category: 'Skill Based Roadmaps' },
  { id: 'vibe', label: 'Vibe Coding', desc: 'Creative coding and maker workflows', icon: '🎶', color: 'pink', accentColor: '#f472b6', category: 'Skill Based Roadmaps' },
  { id: 'scala', label: 'Scala', desc: 'Functional JVM programming and data pipelines', icon: '📐', color: 'indigo', accentColor: '#4f46e5', category: 'Skill Based Roadmaps' },
  { id: 'fe_beginner', label: 'Frontend Beginner', desc: 'Start building UI with the web basics', icon: '🧑‍💻', color: 'blue', accentColor: '#3b82f6', category: 'Absolute Beginners' },
  { id: 'be_beginner', label: 'Backend Beginner', desc: 'Learn server-side logic and APIs', icon: '🖥️', color: 'violet', accentColor: '#8b5cf6', category: 'Absolute Beginners' },
  { id: 'do_beginner', label: 'DevOps Beginner', desc: 'Deploy apps and automated workflows', icon: '🛠️', color: 'cyan', accentColor: '#06b6d4', category: 'Absolute Beginners' },
  { id: 'github_beginner', label: 'Git & GitHub Beginner', desc: 'Version control fundamentals for developers', icon: '🐱', color: 'slate', accentColor: '#64748b', category: 'Absolute Beginners' },
  { id: 'de', label: 'Data Engineer', desc: 'Pipelines, warehousing & ETL systems', icon: '🏗️', color: 'amber', accentColor: '#f59e0b' },
  { id: 'an', label: 'Android', desc: 'Mobile apps for Android devices', icon: '🤖', color: 'lime', accentColor: '#84cc16' },
  { id: 'ml', label: 'Machine Learning', desc: 'Supervised and deep learning systems', icon: '📈', color: 'orange', accentColor: '#fb923c' },
  { id: 'pg', label: 'PostgreSQL', desc: 'Advanced relational database engineering', icon: '🗄️', color: 'sky', accentColor: '#38bdf8' },
  { id: 'ios', label: 'iOS', desc: 'Apple mobile apps and Swift development', icon: '📱', color: 'sky', accentColor: '#0ea5e9' },
  { id: 'bc', label: 'Blockchain', desc: 'Smart contracts & decentralized apps', icon: '⛓️', color: 'yellow', accentColor: '#eab308' },
  { id: 'qa', label: 'QA', desc: 'Testing, automation & quality control', icon: '🧪', color: 'lime', accentColor: '#a3e635' },
  { id: 'ux', label: 'UX Design', desc: 'Product experience and interface design', icon: '✨', color: 'pink', accentColor: '#ec4899' },
  { id: 'sa', label: 'Software Architect', desc: 'System design and scalable architecture', icon: '🏛️', color: 'slate', accentColor: '#64748b' },
  { id: 'cs', label: 'Cyber Security', desc: 'Threat protection and secure systems', icon: '🔒', color: 'red', accentColor: '#ef4444' },
  { id: 'tw', label: 'Technical Writer', desc: 'Documentation, guides and developer content', icon: '✍️', color: 'rose', accentColor: '#fb7185' },
  { id: 'gd', label: 'Game Developer', desc: 'Game mechanics, graphics and gameplay systems', icon: '🎮', color: 'purple', accentColor: '#a855f7' },
  { id: 'ssgd', label: 'Server Side Game Dev', desc: 'Backend architecture for multiplayer games', icon: '🕹️', color: 'fuchsia', accentColor: '#c026d3' },
  { id: 'mo', label: 'MLOps', desc: 'Operational machine learning pipelines and scaling', icon: '⚙️', color: 'teal', accentColor: '#14b8a6' },
  { id: 'pm', label: 'Product Manager', desc: 'Roadmaps, strategy and stakeholder alignment', icon: '🗺️', color: 'rose', accentColor: '#f43f5e' },
  { id: 'em', label: 'Engineering Manager', desc: 'Team leadership, process and delivery', icon: '👥', color: 'indigo', accentColor: '#6366f1' },
  { id: 'dr', label: 'Developer Relations', desc: 'Community, docs and advocacy for developer products', icon: '🗣️', color: 'blue', accentColor: '#2563eb' },
  { id: 'ba', label: 'BI Analyst', desc: 'Business intelligence, dashboards and reporting', icon: '📈', color: 'stone', accentColor: '#78716c' },
]

export const QUESTIONS: Record<GoalId, Question[]> = {
  ds: [
    { q: 'How comfortable are you with Python?', opts: ['Never used it', 'Basic scripts only', 'Pandas, NumPy daily', 'Advanced OOP & patterns'] },
    { q: 'Statistics knowledge level?', opts: ['High school basics', 'Mean, std, distributions', 'Hypothesis testing & p-values', 'Bayesian inference & advanced'] },
    { q: 'Machine learning experience?', opts: ['Total beginner', 'Watched tutorials', 'Built personal projects', 'Deployed models to production'] },
    { q: 'How well do you write SQL?', opts: ['Never written SQL', 'Basic SELECT queries', 'Joins, aggregations', 'Window functions & optimization'] },
    { q: 'Data visualization skills?', opts: ['Excel charts at best', 'Basic matplotlib', 'Seaborn & Plotly', 'Interactive dashboards'] },
  ],
  fe: [
    { q: 'HTML & CSS proficiency?', opts: ['Complete beginner', 'Basic layouts', 'Flexbox & Grid', 'Animations & architecture'] },
    { q: 'JavaScript experience?', opts: ['Never written JS', 'DOM manipulation', 'ES6+, async/await', 'Patterns & performance'] },
    { q: 'React knowledge?', opts: ['Never used React', 'Followed a tutorial', 'Built real projects', 'Hooks deep dive & optimization'] },
    { q: 'Git / version control?', opts: ['No experience', 'Basic commits & push', 'Branches & PRs', 'Rebasing, workflows'] },
    { q: 'Build tools & bundlers?', opts: ['No idea what these are', 'npm scripts only', 'Vite or Webpack basics', 'Custom configs & plugins'] },
  ],
  be: [
    { q: 'Server-side programming?', opts: ['No experience', 'Basics in one language', 'Built REST APIs', 'Microservices in production'] },
    { q: 'Database knowledge?', opts: ['None', 'Basic SQL queries', 'Relational design & indexes', 'Scaling, sharding, NoSQL'] },
    { q: 'API design experience?', opts: ['Never built one', 'Followed a guide', 'Shipped production APIs', 'Auth, rate limiting, versioning'] },
    { q: 'Cloud & DevOps exposure?', opts: ['None', 'Heard of AWS/GCP', 'Deployed something', 'CI/CD & infra as code'] },
    { q: 'System design understanding?', opts: ["What's that?", 'Know the concepts', 'Designed small systems', 'Large-scale distributed systems'] },
  ],
  ml: [
    { q: 'Mathematics background?', opts: ['High school only', 'Basic calc + linear algebra', 'Multivariable calc + linalg', 'Grad-level math'] },
    { q: 'Python & ML libraries?', opts: ['No Python', 'NumPy basics', 'scikit-learn projects', 'PyTorch or TensorFlow'] },
    { q: 'Model building experience?', opts: ['Never built one', 'Followed a tutorial', 'Independent projects', 'Novel architectures'] },
    { q: 'MLOps & deployment?', opts: ['No idea what MLOps is', 'Understand the concept', 'Deployed a model', 'Production pipelines running'] },
    { q: 'Research paper literacy?', opts: ["Can't parse papers", 'Can skim abstracts', 'Understand methodology', 'Reproduce papers from scratch'] },
  ],
  de: [
    { q: 'SQL proficiency?', opts: ['Beginner level', 'Standard queries', 'Complex queries & perf tuning', 'Query optimization & DDL'] },
    { q: 'Python for data work?', opts: ['No Python', 'Basic scripting', 'ETL scripts in prod', 'Full production pipelines'] },
    { q: 'Big data tools experience?', opts: ['None at all', 'Heard of Spark', 'Used Spark or Hadoop', 'Architected big data systems'] },
    { q: 'Cloud data services?', opts: ['No cloud exp', 'Know S3/GCS basics', 'Built cloud data pipelines', 'Multi-cloud data architecture'] },
    { q: 'Data modeling knowledge?', opts: ['No idea', 'Know what a star schema is', 'Built data warehouses', 'Designed dimensional models'] },
  ],
  pm: [
    { q: 'Product strategy experience?', opts: ['None', 'Know the frameworks', 'Created roadmaps', 'Led product strategy at a company'] },
    { q: 'Data & analytics skills?', opts: ['Excel only', 'Basic SQL', 'Dashboards & funnels', 'A/B testing, cohort analysis'] },
    { q: 'User research skills?', opts: ['None', 'Read about it', 'Conducted user interviews', 'Mixed methods & synthesis'] },
    { q: 'Technical literacy?', opts: ['Not technical at all', 'Understand tech basics', 'Read code & write specs', 'Can prototype & ship'] },
    { q: 'Stakeholder management?', opts: ['No work experience', 'Junior collaborator', 'Managed cross-functional work', 'Executive alignment'] },
  ],
  fs: [
    { q: 'Frontend development experience?', opts: ['None', 'Basic HTML/CSS', 'React/Vue frameworks', 'Advanced UI libraries'] },
    { q: 'Backend development skills?', opts: ['No backend experience', 'Basic Node.js/Express', 'REST APIs & databases', 'Microservices & scaling'] },
    { q: 'Database knowledge?', opts: ['None', 'Basic SQL queries', 'ORMs & migrations', 'Database design & optimization'] },
    { q: 'DevOps & deployment?', opts: ['No deployment experience', 'Basic hosting', 'CI/CD pipelines', 'Cloud infrastructure'] },
    { q: 'Version control & collaboration?', opts: ['No Git experience', 'Basic Git commands', 'Branching & PRs', 'Code reviews & workflows'] },
  ],
  do: [
    { q: 'Programming/scripting skills?', opts: ['None', 'Basic scripting', 'Python/Bash automation', 'Multiple languages'] },
    { q: 'Infrastructure knowledge?', opts: ['None', 'Basic servers', 'Cloud platforms', 'Infrastructure as code'] },
    { q: 'CI/CD experience?', opts: ['No CI/CD knowledge', 'Basic pipelines', 'Advanced automation', 'Multi-environment deployments'] },
    { q: 'Containerization skills?', opts: ['None', 'Basic Docker', 'Kubernetes orchestration', 'Container security'] },
    { q: 'Monitoring & logging?', opts: ['None', 'Basic monitoring', 'ELK stack', 'Observability platforms'] },
  ],
  cs: [
    { q: 'Networking fundamentals?', opts: ['None', 'Basic concepts', 'TCP/IP & protocols', 'Network security'] },
    { q: 'Security concepts?', opts: ['None', 'Basic awareness', 'Common vulnerabilities', 'Advanced threats'] },
    { q: 'Programming for security?', opts: ['None', 'Basic scripting', 'Python for security', 'Exploit development'] },
    { q: 'Tools & technologies?', opts: ['None', 'Basic tools', 'SIEM & firewalls', 'Penetration testing'] },
    { q: 'Compliance & standards?', opts: ['None', 'Basic awareness', 'Industry standards', 'Audit & compliance'] },
  ],
  ce: [
    { q: 'Cloud platform experience?', opts: ['None', 'Basic services', 'Multi-service architectures', 'Enterprise solutions'] },
    { q: 'Infrastructure as code?', opts: ['None', 'Basic templates', 'Terraform/Pulumi', 'Complex deployments'] },
    { q: 'Networking in cloud?', opts: ['None', 'Basic VPCs', 'Load balancing', 'Global networking'] },
    { q: 'Security in cloud?', opts: ['None', 'Basic IAM', 'Advanced security', 'Compliance frameworks'] },
    { q: 'Cost optimization?', opts: ['None', 'Basic monitoring', 'Optimization strategies', 'FinOps practices'] },
  ],
  md: [
    { q: 'Mobile development experience?', opts: ['None', 'Basic apps', 'Published apps', 'Complex applications'] },
    { q: 'Platform choice?', opts: ['None', 'iOS only', 'Android only', 'Cross-platform'] },
    { q: 'UI/UX for mobile?', opts: ['None', 'Basic layouts', 'Material/Human design', 'Advanced interactions'] },
    { q: 'Backend integration?', opts: ['None', 'Basic APIs', 'Real-time features', 'Offline capabilities'] },
    { q: 'App store deployment?', opts: ['None', 'TestFlight/Google Play Beta', 'Published apps', 'App store optimization'] },
  ],
  ux: [
    { q: 'Design software skills?', opts: ['None', 'Basic Figma/Sketch', 'Advanced prototyping', 'Design systems'] },
    { q: 'User research experience?', opts: ['None', 'Basic interviews', 'Usability testing', 'Research methodologies'] },
    { q: 'Visual design skills?', opts: ['None', 'Basic composition', 'Typography & color', 'Brand design'] },
    { q: 'Interaction design?', opts: ['None', 'Basic wireframes', 'Prototyping tools', 'Micro-interactions'] },
    { q: 'Design thinking?', opts: ['None', 'Basic process', 'User-centered design', 'Design leadership'] },
  ],
  se: [
    { q: 'Programming fundamentals?', opts: ['None', 'Basic syntax', 'Data structures', 'Algorithms'] },
    { q: 'Software development process?', opts: ['None', 'Basic coding', 'Version control', 'Agile methodologies'] },
    { q: 'System design?', opts: ['None', 'Basic architecture', 'Design patterns', 'Scalable systems'] },
    { q: 'Testing & quality?', opts: ['None', 'Basic testing', 'TDD & automation', 'Quality assurance'] },
    { q: 'Tools & technologies?', opts: ['None', 'IDE & Git', 'Build tools', 'DevOps integration'] },
  ],
  qa: [
    { q: 'Testing fundamentals?', opts: ['None', 'Manual testing', 'Test cases & scenarios', 'Test planning'] },
    { q: 'Automation skills?', opts: ['None', 'Basic scripts', 'Selenium/WebDriver', 'API testing'] },
    { q: 'Quality assurance knowledge?', opts: ['None', 'Basic QA', 'Quality metrics', 'Process improvement'] },
    { q: 'Bug tracking & tools?', opts: ['None', 'Basic Jira', 'Advanced workflows', 'Test management'] },
    { q: 'Performance testing?', opts: ['None', 'Basic load testing', 'Advanced performance', 'Monitoring tools'] },
  ],
  bc: [
    { q: 'Blockchain fundamentals?', opts: ['None', 'Basic concepts', 'Cryptography', 'Consensus mechanisms'] },
    { q: 'Smart contract development?', opts: ['None', 'Basic Solidity', 'Advanced contracts', 'Security auditing'] },
    { q: 'Web3 development?', opts: ['None', 'Basic dApps', 'DeFi protocols', 'NFT development'] },
    { q: 'Cryptocurrency knowledge?', opts: ['None', 'Basic trading', 'Technical analysis', 'Market dynamics'] },
    { q: 'Blockchain platforms?', opts: ['None', 'Ethereum basics', 'Multi-chain', 'Layer 2 solutions'] },
  ],
  ai: [
    { q: 'AI/ML fundamentals?', opts: ['None', 'Basic concepts', 'Machine learning', 'Deep learning'] },
    { q: 'Programming for AI?', opts: ['None', 'Python basics', 'ML libraries', 'Advanced frameworks'] },
    { q: 'AI system design?', opts: ['None', 'Basic models', 'Production systems', 'Scalable AI'] },
    { q: 'Data for AI?', opts: ['None', 'Data collection', 'Data preprocessing', 'Data pipelines'] },
    { q: 'AI ethics & deployment?', opts: ['None', 'Basic awareness', 'Responsible AI', 'Model deployment'] },
  ],
  da: [
    { q: 'Excel proficiency level?', opts: ['Never used Excel', 'Basic data entry', 'Formulas & charts', 'Advanced functions & macros'] },
    { q: 'Data analysis experience?', opts: ['None', 'Basic reporting', 'Pivot tables & dashboards', 'Statistical analysis'] },
    { q: 'SQL knowledge?', opts: ['Never written SQL', 'Basic queries', 'Joins & aggregations', 'Complex queries & optimization'] },
    { q: 'Visualization tools?', opts: ['Excel charts only', 'Basic Tableau/Power BI', 'Advanced dashboards', 'Custom visualizations'] },
    { q: 'Business intelligence skills?', opts: ['None', 'Basic reporting', 'KPI tracking', 'Predictive analytics'] },
  ],
  ba: [
    { q: 'Business analysis skills?', opts: ['None', 'Basic requirements', 'Process modeling', 'Requirements engineering'] },
    { q: 'Technical knowledge?', opts: ['None', 'Basic IT concepts', 'System analysis', 'Technical specifications'] },
    { q: 'Communication skills?', opts: ['None', 'Basic documentation', 'Stakeholder management', 'Presentation skills'] },
    { q: 'Tools & methodologies?', opts: ['None', 'Basic Excel', 'BPMN & UML', 'Agile & Waterfall'] },
    { q: 'Domain knowledge?', opts: ['None', 'Industry basics', 'Business processes', 'Industry expertise'] },
  ],
  dsop: [
    { q: 'Security in CI/CD?', opts: ['Never', 'Manual checks', 'Automated scans', 'Policy-as-code'] },
    { q: 'Infrastructure security?', opts: ['None', 'Basic firewalls', 'IAM & secrets', 'Zero trust'] },
    { q: 'Cloud compliance?', opts: ['No familiarity', 'Understand standards', 'Implement controls', 'Audit-ready systems'] },
    { q: 'Incident response?', opts: ['Never practiced', 'Know the steps', 'Ran a tabletop', 'Led response'] },
    { q: 'Application security?', opts: ['None', 'Aware of OWASP', 'Fixed common flaws', 'Built secure apps'] },
  ],
  ads: [
    { q: 'Data science tooling?', opts: ['None', 'Excel only', 'Python/pandas', 'End-to-end notebooks'] },
    { q: 'Modeling experience?', opts: ['None', 'Basic regression', 'Classification projects', 'Advanced models'] },
    { q: 'Business problem solving?', opts: ['Not sure', 'Support requests', 'KPI analysis', 'Data-driven strategy'] },
    { q: 'Statistics for data science?', opts: ['None', 'Basic metrics', 'Hypothesis testing', 'Bayesian methods'] },
    { q: 'Communication of findings?', opts: ['No experience', 'Basic charts', 'Reports and dashboards', 'Executive storytelling'] },
  ],
  an: [
    { q: 'Android development experience?', opts: ['None', 'Basic apps', 'Published app', 'Complex mobile system'] },
    { q: 'Kotlin/Java knowledge?', opts: ['None', 'Basic syntax', 'Android APIs', 'Architecture patterns'] },
    { q: 'UI design for mobile?', opts: ['None', 'Basic layouts', 'Material design', 'Custom components'] },
    { q: 'Device compatibility?', opts: ['None', 'Single device', 'Multiple screens', 'Adaptive support'] },
    { q: 'App deployment?', opts: ['Never', 'Play Store basics', 'Published app', 'Release pipelines'] },
  ],
  pg: [
    { q: 'PostgreSQL basics?', opts: ['None', 'SELECT queries', 'Joins & indexes', 'Advanced tuning'] },
    { q: 'Schema design?', opts: ['None', 'Flat tables', 'Normalized models', 'Data modeling best practices'] },
    { q: 'Performance optimization?', opts: ['None', 'Basic indexes', 'Query tuning', 'Partitioning & caching'] },
    { q: 'Replication & backup?', opts: ['None', 'Basic backup', 'Replication setup', 'High availability'] },
    { q: 'Extensions & tooling?', opts: ['None', 'Basic psql', 'PostGIS/pgBouncer', 'Advanced extension use'] },
  ],
  ios: [
    { q: 'iOS development experience?', opts: ['None', 'Storyboard apps', 'SwiftUI basics', 'App architecture'] },
    { q: 'Swift language comfort?', opts: ['None', 'Basic syntax', 'Swift APIs', 'Advanced patterns'] },
    { q: 'App lifecycle knowledge?', opts: ['None', 'Basic screens', 'Navigation', 'State management'] },
    { q: 'Testing mobile apps?', opts: ['Never', 'Manual testing', 'Unit tests', 'UI automation'] },
    { q: 'App store publishing?', opts: ['No idea', 'Know the process', 'Published app', 'Release management'] },
  ],
  sa: [
    { q: 'System design experience?', opts: ['None', 'Small apps', 'Scaled systems', 'Enterprise architecture'] },
    { q: 'Architecture patterns?', opts: ['None', 'Basic MVC', 'Microservices', 'Event-driven/DDD'] },
    { q: 'Technical leadership?', opts: ['None', 'Read about it', 'Guided peers', 'Led architecture decisions'] },
    { q: 'Performance & scaling?', opts: ['None', 'Basic caching', 'Load balancing', 'Resilient systems'] },
    { q: 'Cross-team collaboration?', opts: ['None', 'Worked alone', 'Aligned engineers', 'Owned cross-team delivery'] },
  ],
  tw: [
    { q: 'Writing experience?', opts: ['None', 'Personal notes', 'Internal docs', 'Published articles'] },
    { q: 'Technical clarity?', opts: ['None', 'Basic explanations', 'Tutorials', 'API documentation'] },
    { q: 'Audience empathy?', opts: ['None', 'Generic content', 'Developer-focused', 'Tailored guides'] },
    { q: 'Tools familiarity?', opts: ['None', 'Markdown only', 'Docs tooling', 'Docs frameworks'] },
    { q: 'Publication channels?', opts: ['None', 'Personal blog', 'Company blog', 'Developer community'] },
  ],
  gd: [
    { q: 'Game development experience?', opts: ['None', 'Simple prototypes', 'Published game', 'Complex game systems'] },
    { q: 'Engine knowledge?', opts: ['None', 'Unity/Unreal basics', 'Custom systems', 'Multiplayer engines'] },
    { q: 'Gameplay mechanics?', opts: ['None', 'Basic controls', 'Physics/AI', 'Advanced interaction'] },
    { q: 'Graphics pipeline?', opts: ['None', 'Sprites', 'Shaders', 'Rendering optimizations'] },
    { q: 'Performance tuning?', opts: ['None', 'Basic profiling', 'Memory tuning', 'Cross-platform optimization'] },
  ],
  ssgd: [
    { q: 'Game backend experience?', opts: ['None', 'Simple servers', 'Matchmaking', 'Real-time multiplayer'] },
    { q: 'Network programming?', opts: ['None', 'Basic sockets', 'UDP/TCP', 'Reliable real-time systems'] },
    { q: 'Scalable architecture?', opts: ['None', 'Single instance', 'Clustered servers', 'Globally distributed'] },
    { q: 'Security in games?', opts: ['None', 'Basic auth', 'Cheat prevention', 'Secure ranking systems'] },
    { q: 'Latency optimization?', opts: ['None', 'Basic sync', 'Prediction', 'Low-latency pipelines'] },
  ],
  mo: [
    { q: 'ML pipeline experience?', opts: ['None', 'Manual training', 'Automated pipelines', 'Continuous delivery'] },
    { q: 'Monitoring ML models?', opts: ['None', 'Basic metrics', 'Drift detection', 'Full observability'] },
    { q: 'Data validation?', opts: ['None', 'Basic checks', 'Schema validation', 'Data quality framework'] },
    { q: 'Model deployment?', opts: ['None', 'Basic endpoint', 'Container deployment', 'Managed serving'] },
    { q: 'Collaboration with teams?', opts: ['Never', 'Shared notebooks', 'Model review', 'Cross-team MLOps'] },
  ],
  em: [
    { q: 'People leadership?', opts: ['None', 'Mentored peers', 'Managed small team', 'Led multiple teams'] },
    { q: 'Delivery ownership?', opts: ['None', 'Basic project support', 'Delivered features', 'Owned launches'] },
    { q: 'Engineering process?', opts: ['None', 'Ad hoc', 'Sprint workflows', 'Operational excellence'] },
    { q: 'Career development?', opts: ['None', 'Informal feedback', 'Coached peers', 'Built growth plans'] },
    { q: 'Stakeholder influence?', opts: ['None', 'Team only', 'Cross-functional', 'Executive alignment'] },
  ],
  dr: [
    { q: 'Community experience?', opts: ['None', 'Attended events', 'Spoke at meetups', 'Built developer communities'] },
    { q: 'Content creation?', opts: ['None', 'Basic blog posts', 'Tutorials', 'Technical speaking'] },
    { q: 'Developer tools awareness?', opts: ['None', 'Used tools', 'Integrated tools', 'Advocated platforms'] },
    { q: 'Evangelism skills?', opts: ['None', 'Intro talks', 'Workshops', 'Large conferences'] },
    { q: 'Metrics & feedback?', opts: ['None', 'Guesswork', 'Basic signals', 'Data-driven programs'] },
  ],
}

export const GENERIC_QUESTIONS: Question[] = [
  { q: 'How much experience do you have with this topic?', opts: ['None', 'Learning basics', 'Built projects', 'Confident in practice'] },
  { q: 'How comfortable are you with related tools?', opts: ['Not familiar', 'Some exposure', 'Regularly use them', 'Can teach others'] },
  { q: 'Do you know how to apply this skill in real projects?', opts: ['No', 'Some examples', 'Project work', 'Yes, regularly'] },
  { q: 'How strong is your problem-solving with this area?', opts: ['Beginner', 'Intermediate', 'Advanced', 'Expert'] },
  { q: 'How ready are you to build a job-ready project?', opts: ['Not ready', 'Need guidance', 'Can follow a plan', 'Can lead a project'] },
]

export const GENERIC_ROADMAP: Roadmap = {
  phases: [
    {
      label: 'Fundamentals',
      color: '#3b82f6',
      modules: [
        {
          name: 'Core knowledge',
          hours: '18h',
          icon: '📘',
          skillIndex: 0,
          thresholdToShow: 2,
          resources: [{ title: 'Web Development Full Course', url: 'https://www.youtube.com/watch?v=3JluqTojuME', type: 'video', free: true }],
        },
        {
          name: 'Tools & workflows',
          hours: '16h',
          icon: '🛠️',
          skillIndex: 1,
          thresholdToShow: 2,
          resources: [{ title: 'Git & GitHub Crash Course', url: 'https://www.youtube.com/watch?v=RGOj5yH7evk', type: 'video', free: true }],
        },
      ],
    },
    {
      label: 'Practice',
      color: '#10b981',
      modules: [
        {
          name: 'Hands-on project',
          hours: '24h',
          icon: '🧩',
          skillIndex: 2,
          thresholdToShow: 3,
          resources: [{ title: 'freeCodeCamp: Responsive Web Design Certification', url: 'https://www.freecodecamp.org/learn/responsive-web-design/', type: 'course', free: true }],
        },
        {
          name: 'Problem solving',
          hours: '18h',
          icon: '🧠',
          skillIndex: 3,
          thresholdToShow: 2,
          resources: [{ title: 'freeCodeCamp: JavaScript Algorithms and Data Structures', url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/', type: 'course', free: true }],
        },
      ],
    },
    {
      label: 'Portfolio',
      color: '#f59e0b',
      modules: [
        {
          name: 'Deploy a showcase',
          hours: '20h',
          icon: '🚀',
          skillIndex: 4,
          thresholdToShow: 2,
          resources: [{ title: 'Deploy a Next.js App on Vercel', url: 'https://www.youtube.com/watch?v=7QKQd0M5QMI', type: 'video', free: true }],
        },
      ],
    },
  ],
  projectIdeas: [
    { title: 'Build a focused portfolio project', description: 'Create a demo that highlights the skills from this roadmap.', impact: 'A strong portfolio asset improves hiring visibility.' },
    { title: 'Document your work', description: 'Write concise process notes, architecture decisions, and results.', impact: 'Shows interviewers how you think and solve problems.' },
    { title: 'Publish a shareable demo', description: 'Deploy your project or record a quick walkthrough video.', impact: 'Makes it easy for recruiters to evaluate your skills.' },
  ],
}

export function getQuestions(goalId: GoalId): Question[] {
  return QUESTIONS[goalId] ?? GENERIC_QUESTIONS
}

export function getRoadmap(goalId: GoalId): Roadmap {
  return ROADMAPS[goalId] ?? GENERIC_ROADMAP
}

export const ROADMAPS: Record<GoalId, Roadmap> = {
  ds: {
    phases: [
      {
        label: 'Foundation',
        color: '#f59e0b',
        modules: [
          {
            name: 'Python for Data Science',
            hours: '20h',
            icon: '🐍',
            skillIndex: 0,
            thresholdToShow: 2,
            resources: [
              { title: 'Python for Everybody (Coursera)', url: 'https://www.coursera.org/specializations/python', type: 'course', free: true },
              { title: 'Kaggle Python Course', url: 'https://www.kaggle.com/learn/python', type: 'course', free: true },
            ],
          },
          {
            name: 'Statistics & Probability',
            hours: '25h',
            icon: '📐',
            skillIndex: 1,
            thresholdToShow: 2,
            resources: [
              { title: 'StatQuest with Josh Starmer', url: 'https://www.youtube.com/@statquest', type: 'video', free: true },
              { title: 'Khan Academy Statistics', url: 'https://www.khanacademy.org/math/statistics-probability', type: 'course', free: true },
            ],
          },
          {
            name: 'SQL for Data Analysis',
            hours: '15h',
            icon: '🗄️',
            skillIndex: 3,
            thresholdToShow: 2,
            resources: [
              { title: 'Mode SQL Tutorial', url: 'https://mode.com/sql-tutorial/', type: 'docs', free: true },
              { title: 'SQLZoo', url: 'https://sqlzoo.net/', type: 'course', free: true },
            ],
          },
        ],
      },
      {
        label: 'Core Skills',
        color: '#0d9488',
        modules: [
          {
            name: 'Pandas & NumPy',
            hours: '20h',
            icon: '🐼',
            skillIndex: 0,
            thresholdToShow: 3,
            resources: [
              { title: 'Pandas Documentation', url: 'https://pandas.pydata.org/docs/', type: 'docs', free: true },
              { title: 'Kaggle Pandas Course', url: 'https://www.kaggle.com/learn/pandas', type: 'course', free: true },
            ],
          },
          {
            name: 'Data Visualization',
            hours: '15h',
            icon: '📈',
            skillIndex: 4,
            thresholdToShow: 2,
            resources: [
              { title: 'Matplotlib & Seaborn Guide', url: 'https://seaborn.pydata.org/tutorial.html', type: 'docs', free: true },
              { title: 'Plotly Express Tutorial', url: 'https://plotly.com/python/plotly-express/', type: 'docs', free: true },
            ],
          },
          {
            name: 'Exploratory Data Analysis',
            hours: '20h',
            icon: '🔍',
            skillIndex: 0,
            thresholdToShow: 3,
            resources: [
              { title: 'Kaggle EDA Notebooks', url: 'https://www.kaggle.com/learn/data-cleaning', type: 'course', free: true },
            ],
          },
        ],
      },
      {
        label: 'Machine Learning',
        color: '#8b5cf6',
        modules: [
          {
            name: 'scikit-learn ML Models',
            hours: '30h',
            icon: '🤖',
            skillIndex: 2,
            thresholdToShow: 3,
            resources: [
              { title: 'scikit-learn User Guide', url: 'https://scikit-learn.org/stable/user_guide.html', type: 'docs', free: true },
              { title: 'ML Course by Andrew Ng (Coursera)', url: 'https://www.coursera.org/learn/machine-learning', type: 'course', free: false },
            ],
          },
          {
            name: 'Model Evaluation & Tuning',
            hours: '20h',
            icon: '⚖️',
            skillIndex: 2,
            thresholdToShow: 3,
            resources: [
              { title: 'Hands-On ML with scikit-learn', url: 'https://github.com/ageron/handson-ml3', type: 'book', free: true },
            ],
          },
          {
            name: 'Feature Engineering',
            hours: '15h',
            icon: '🔧',
            skillIndex: 2,
            thresholdToShow: 3,
            resources: [
              { title: 'Feature Engineering for ML (Kaggle)', url: 'https://www.kaggle.com/learn/feature-engineering', type: 'course', free: true },
            ],
          },
        ],
      },
      {
        label: 'Advanced',
        color: '#e11d48',
        modules: [
          {
            name: 'Deep Learning Basics',
            hours: '35h',
            icon: '🧠',
            skillIndex: 2,
            thresholdToShow: 4,
            resources: [
              { title: 'fast.ai Practical Deep Learning', url: 'https://course.fast.ai/', type: 'course', free: true },
              { title: 'Deep Learning Specialization', url: 'https://www.deeplearning.ai/', type: 'course', free: false },
            ],
          },
          {
            name: 'MLflow & Deployment',
            hours: '25h',
            icon: '🚀',
            skillIndex: 2,
            thresholdToShow: 4,
            resources: [
              { title: 'MLflow Documentation', url: 'https://mlflow.org/docs/latest/index.html', type: 'docs', free: true },
            ],
          },
          {
            name: 'Business Storytelling with Data',
            hours: '10h',
            icon: '📣',
            skillIndex: 4,
            thresholdToShow: 1,
            resources: [
              { title: 'Data Storytelling Guide (Google)', url: 'https://www.thinkwithgoogle.com/feature/data-storytelling/', type: 'article', free: true },
              { title: 'Storytelling with Data (book)', url: 'https://www.storytellingwithdata.com/', type: 'book', free: false },
            ],
          },
        ],
      },
    ],
  },
  da: {
    phases: [
      {
        label: 'Excel Foundations',
        color: '#f59e0b',
        modules: [
          {
            name: 'Excel Basics & Navigation',
            hours: '8h',
            icon: '📊',
            skillIndex: 0,
            thresholdToShow: 1,
            resources: [
              { title: 'Excel for Beginners Full Course', url: 'https://www.youtube.com/watch?v=rwbho0CgEAE', type: 'video', free: true },
              { title: 'Microsoft Excel Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=Vl0H-qTclOg', type: 'video', free: true },
            ],
          },
          {
            name: 'Data Entry & Formatting',
            hours: '6h',
            icon: '✏️',
            skillIndex: 0,
            thresholdToShow: 1,
            resources: [
              { title: 'Excel Data Entry & Formatting', url: 'https://www.youtube.com/watch?v=0f8aRIoQHpw', type: 'video', free: true },
            ],
          },
          {
            name: 'Basic Formulas & Functions',
            hours: '10h',
            icon: '🔢',
            skillIndex: 1,
            thresholdToShow: 2,
            resources: [
              { title: 'Excel Formulas & Functions Full Course', url: 'https://www.youtube.com/watch?v=6u0V8XTi2AQ', type: 'video', free: true },
              { title: 'Excel Functions You MUST Know', url: 'https://www.youtube.com/watch?v=3s7h2MHQtxc', type: 'video', free: true },
            ],
          },
        ],
      },
      {
        label: 'Data Analysis',
        color: '#10b981',
        modules: [
          {
            name: 'Pivot Tables & Charts',
            hours: '12h',
            icon: '📈',
            skillIndex: 2,
            thresholdToShow: 2,
            resources: [
              { title: 'Excel Pivot Tables Complete Guide', url: 'https://www.youtube.com/watch?v=9NUjHBNWe9M', type: 'video', free: true },
              { title: 'Excel Charts & Graphs Tutorial', url: 'https://www.youtube.com/watch?v=5-_-6b6Z3tE', type: 'video', free: true },
            ],
          },
          {
            name: 'Data Cleaning & Validation',
            hours: '8h',
            icon: '🧹',
            skillIndex: 1,
            thresholdToShow: 2,
            resources: [
              { title: 'Excel Data Cleaning Techniques', url: 'https://www.youtube.com/watch?v=8zL9wF5Z5q0', type: 'video', free: true },
            ],
          },
          {
            name: 'Advanced Formulas (VLOOKUP, INDEX)',
            hours: '10h',
            icon: '🔍',
            skillIndex: 2,
            thresholdToShow: 3,
            resources: [
              { title: 'VLOOKUP, HLOOKUP & INDEX MATCH', url: 'https://www.youtube.com/watch?v=d3BYVQ6xIE4', type: 'video', free: true },
              { title: 'Advanced Excel Formulas', url: 'https://www.youtube.com/watch?v=0f8aRIoQHpw', type: 'video', free: true },
            ],
          },
        ],
      },
      {
        label: 'Visualization & Reporting',
        color: '#8b5cf6',
        modules: [
          {
            name: 'Dashboard Creation',
            hours: '15h',
            icon: '📊',
            skillIndex: 3,
            thresholdToShow: 3,
            resources: [
              { title: 'Excel Dashboard Tutorial', url: 'https://www.youtube.com/watch?v=6u0V8XTi2AQ', type: 'video', free: true },
              { title: 'Interactive Excel Dashboards', url: 'https://www.youtube.com/watch?v=9NUjHBNWe9M', type: 'video', free: true },
            ],
          },
          {
            name: 'Power Query & Power Pivot',
            hours: '12h',
            icon: '⚡',
            skillIndex: 3,
            thresholdToShow: 3,
            resources: [
              { title: 'Power Query for Data Analysis', url: 'https://www.youtube.com/watch?v=5-_-6b6Z3tE', type: 'video', free: true },
            ],
          },
          {
            name: 'Data Visualization Best Practices',
            hours: '8h',
            icon: '📈',
            skillIndex: 2,
            thresholdToShow: 2,
            resources: [
              { title: 'Excel Data Visualization Tips', url: 'https://www.youtube.com/watch?v=3s7h2MHQtxc', type: 'video', free: true },
            ],
          },
        ],
      },
    ],
  },
  leetcode: {
    phases: [
      {
        label: 'Foundations',
        color: '#f59e0b',
        modules: [
          {
            name: 'Core Data Structures',
            hours: '18h',
            icon: '🧱',
            skillIndex: 0,
            thresholdToShow: 2,
            resources: [
              { title: 'LeetCode Data Structures Guide', url: 'https://leetcode.com/explore/learn/card/data-structure/', type: 'course', free: true },
              { title: 'Data Structures Easy to Advanced (YouTube)', url: 'https://www.youtube.com/watch?v=8hly31xKli0', type: 'video', free: true },
            ],
          },
          {
            name: 'Algorithm Patterns',
            hours: '20h',
            icon: '🧠',
            skillIndex: 1,
            thresholdToShow: 2,
            resources: [
              { title: 'LeetCode Algorithm Patterns', url: 'https://leetcode.com/explore/learn/card/recursion-i/', type: 'course', free: true },
              { title: 'NeetCode Pattern Playlist', url: 'https://www.youtube.com/watch?v=C7YcFW1lwSU', type: 'video', free: true },
            ],
          },
          {
            name: 'Time Complexity & Optimization',
            hours: '12h',
            icon: '⏱️',
            skillIndex: 0,
            thresholdToShow: 1,
            resources: [
              { title: 'Big O Notation Explained', url: 'https://www.youtube.com/watch?v=v4cd1O4zkGw', type: 'video', free: true },
            ],
          },
        ],
      },
      {
        label: 'Practice',
        color: '#10b981',
        modules: [
          {
            name: 'LeetCode Problem Sets',
            hours: '30h',
            icon: '🧩',
            skillIndex: 3,
            thresholdToShow: 3,
            resources: [
              { title: 'NeetCode 150 Problems', url: 'https://www.youtube.com/watch?v=0ppMbkwfB1A', type: 'video', free: true },
              { title: 'LeetCode Explore Learning Paths', url: 'https://leetcode.com/explore/learn/', type: 'course', free: true },
            ],
          },
          {
            name: 'Mock Interviews',
            hours: '18h',
            icon: '🎤',
            skillIndex: 4,
            thresholdToShow: 2,
            resources: [
              { title: 'Pramp Interview Practice', url: 'https://www.pramp.com/', type: 'course', free: true },
              { title: 'LeetCode Mock Interview Tips', url: 'https://www.youtube.com/watch?v=uyUbQ2Fz0sA', type: 'video', free: true },
            ],
          },
          {
            name: 'Problem Selection Strategy',
            hours: '10h',
            icon: '🎯',
            skillIndex: 3,
            thresholdToShow: 1,
            resources: [
              { title: 'How to Practice LeetCode', url: 'https://www.youtube.com/watch?v=tkcWKI1MyRc', type: 'video', free: true },
            ],
          },
        ],
      },
      {
        label: 'Interview Ready',
        color: '#8b5cf6',
        modules: [
          {
            name: 'Word Problem to Code',
            hours: '14h',
            icon: '✍️',
            skillIndex: 2,
            thresholdToShow: 2,
            resources: [
              { title: 'LeetCode Problem Solving Workflow', url: 'https://www.youtube.com/watch?v=rI8tNMsozo0', type: 'video', free: true },
            ],
          },
          {
            name: 'Code Readability & Debugging',
            hours: '12h',
            icon: '🛠️',
            skillIndex: 1,
            thresholdToShow: 2,
            resources: [
              { title: 'Clean Code for Interviews', url: 'https://www.youtube.com/watch?v=ke0atEc6FFY', type: 'video', free: true },
            ],
          },
          {
            name: 'Speed & Efficiency',
            hours: '10h',
            icon: '⚡',
            skillIndex: 3,
            thresholdToShow: 2,
            resources: [
              { title: 'LeetCode Optimization Tricks', url: 'https://www.youtube.com/watch?v=EEa-lYB2qwU', type: 'video', free: true },
            ],
          },
        ],
      },
    ],
  },
  fe: {
    phases: [
      {
        label: 'Foundation',
        color: '#f59e0b',
        modules: [
          { name: 'HTML & Semantic Markup', hours: '10h', icon: '🏗️', skillIndex: 0, thresholdToShow: 1,
            resources: [{ title: 'MDN HTML Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML', type: 'docs', free: true }] },
          { name: 'CSS Layouts & Flexbox', hours: '20h', icon: '🎨', skillIndex: 0, thresholdToShow: 2,
            resources: [
              { title: 'CSS Tricks Flexbox Guide', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/', type: 'docs', free: true },
              { title: 'Flexbox Froggy (Game)', url: 'https://flexboxfroggy.com/', type: 'course', free: true },
            ] },
          { name: 'JavaScript Fundamentals', hours: '30h', icon: '⚡', skillIndex: 1, thresholdToShow: 2,
            resources: [
              { title: 'javascript.info', url: 'https://javascript.info/', type: 'docs', free: true },
              { title: 'The Odin Project', url: 'https://www.theodinproject.com/', type: 'course', free: true },
            ] },
        ],
      },
      {
        label: 'Core Stack',
        color: '#3b82f6',
        modules: [
          { name: 'ES6+ & Async JS', hours: '20h', icon: '🔄', skillIndex: 1, thresholdToShow: 3,
            resources: [
              { title: 'ES6 Features Overview', url: 'https://es6.io/', type: 'course', free: false },
              { title: 'freeCodeCamp JavaScript Algorithms', url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/', type: 'course', free: true },
              { title: 'JavaScript Crash Course', url: 'https://www.youtube.com/watch?v=PkZNo7MFNFg', type: 'video', free: true },
            ] },
          { name: 'React Fundamentals', hours: '30h', icon: '⚛️', skillIndex: 2, thresholdToShow: 2,
            resources: [
              { title: 'React.dev Official Tutorial', url: 'https://react.dev/learn', type: 'docs', free: true },
              { title: 'MDN: React Tutorial', url: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started', type: 'docs', free: true },
              { title: 'React Crash Course (YouTube)', url: 'https://www.youtube.com/watch?v=bMknfKXIFA8', type: 'video', free: true },
            ] },
          { name: 'Git & Collaboration', hours: '10h', icon: '🌿', skillIndex: 3, thresholdToShow: 2,
            resources: [{ title: 'Learn Git Branching', url: 'https://learngitbranching.js.org/', type: 'course', free: true }] },
        ],
      },
      {
        label: 'Professional',
        color: '#10b981',
        modules: [
          { name: 'React Hooks & Patterns', hours: '25h', icon: '🪝', skillIndex: 2, thresholdToShow: 3,
            resources: [{ title: 'useHooks.com', url: 'https://usehooks.com/', type: 'docs', free: true }] },
          { name: 'State Management', hours: '20h', icon: '🗃️', skillIndex: 2, thresholdToShow: 3,
            resources: [{ title: 'Zustand Docs', url: 'https://docs.pmnd.rs/zustand/getting-started/introduction', type: 'docs', free: true }] },
          { name: 'Testing (Vitest + RTL)', hours: '15h', icon: '🧪', skillIndex: 1, thresholdToShow: 3,
            resources: [{ title: 'Testing Library Docs', url: 'https://testing-library.com/docs/', type: 'docs', free: true }] },
        ],
      },
      {
        label: 'Senior Level',
        color: '#8b5cf6',
        modules: [
          { name: 'Performance & Web Vitals', hours: '20h', icon: '⚡', skillIndex: 2, thresholdToShow: 4,
            resources: [{ title: 'web.dev Performance', url: 'https://web.dev/performance/', type: 'docs', free: true }] },
          { name: 'Design Systems', hours: '20h', icon: '🧩', skillIndex: 0, thresholdToShow: 3,
            resources: [{ title: 'Storybook Docs', url: 'https://storybook.js.org/docs', type: 'docs', free: true }] },
          { name: 'Build Tools & CI/CD', hours: '15h', icon: '🔩', skillIndex: 4, thresholdToShow: 3,
            resources: [{ title: 'Vite Documentation', url: 'https://vitejs.dev/guide/', type: 'docs', free: true }] },
        ],
      },
    ],
  },
  be: {
    phases: [
      {
        label: 'Foundation',
        color: '#f59e0b',
        modules: [
          { name: 'Programming Fundamentals', hours: '25h', icon: '💻', skillIndex: 0, thresholdToShow: 2,
            resources: [{ title: 'CS50 by Harvard', url: 'https://cs50.harvard.edu/', type: 'course', free: true }] },
          { name: 'HTTP & REST Concepts', hours: '10h', icon: '🌐', skillIndex: 2, thresholdToShow: 2,
            resources: [{ title: 'HTTP Fundamentals (MDN)', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP', type: 'docs', free: true }] },
          { name: 'SQL & Relational DBs', hours: '20h', icon: '🗄️', skillIndex: 1, thresholdToShow: 2,
            resources: [{ title: 'PostgreSQL Tutorial', url: 'https://www.postgresqltutorial.com/', type: 'docs', free: true }] },
        ],
      },
      {
        label: 'Core Development',
        color: '#8b5cf6',
        modules: [
          { name: 'Build REST APIs', hours: '30h', icon: '🔌', skillIndex: 2, thresholdToShow: 2,
            resources: [{ title: 'FastAPI Documentation', url: 'https://fastapi.tiangolo.com/', type: 'docs', free: true }] },
          { name: 'Auth & Security', hours: '20h', icon: '🔐', skillIndex: 2, thresholdToShow: 3,
            resources: [{ title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/', type: 'docs', free: true }] },
          { name: 'ORM & Data Modeling', hours: '15h', icon: '🗺️', skillIndex: 1, thresholdToShow: 3,
            resources: [{ title: 'Prisma Docs', url: 'https://www.prisma.io/docs/', type: 'docs', free: true }] },
        ],
      },
      {
        label: 'Infrastructure',
        color: '#0d9488',
        modules: [
          { name: 'Docker & Containers', hours: '20h', icon: '🐳', skillIndex: 3, thresholdToShow: 2,
            resources: [{ title: 'Docker Getting Started', url: 'https://docs.docker.com/get-started/', type: 'docs', free: true }] },
          { name: 'Cloud Fundamentals', hours: '25h', icon: '☁️', skillIndex: 3, thresholdToShow: 2,
            resources: [{ title: 'AWS Free Tier Tutorials', url: 'https://aws.amazon.com/getting-started/', type: 'course', free: true }] },
          { name: 'Caching & Redis', hours: '15h', icon: '⚡', skillIndex: 1, thresholdToShow: 3,
            resources: [{ title: 'Redis University', url: 'https://university.redis.com/', type: 'course', free: true }] },
        ],
      },
      {
        label: 'Scale & Architecture',
        color: '#e11d48',
        modules: [
          { name: 'System Design Patterns', hours: '30h', icon: '🏛️', skillIndex: 4, thresholdToShow: 3,
            resources: [{ title: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer', type: 'docs', free: true }] },
          { name: 'Message Queues (Kafka)', hours: '20h', icon: '📨', skillIndex: 3, thresholdToShow: 3,
            resources: [{ title: 'Kafka Quickstart', url: 'https://kafka.apache.org/quickstart', type: 'docs', free: true }] },
          { name: 'Observability & Logging', hours: '15h', icon: '👁️', skillIndex: 3, thresholdToShow: 3,
            resources: [{ title: 'OpenTelemetry Docs', url: 'https://opentelemetry.io/docs/', type: 'docs', free: true }] },
        ],
      },
    ],
  },
  ml: {
    phases: [
      {
        label: 'Math & Code',
        color: '#f59e0b',
        modules: [
          { name: 'Linear Algebra Essentials', hours: '25h', icon: '📐', skillIndex: 0, thresholdToShow: 2,
            resources: [{ title: '3Blue1Brown Essence of Linear Algebra', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab', type: 'video', free: true }] },
          { name: 'Calculus & Optimization', hours: '20h', icon: '📉', skillIndex: 0, thresholdToShow: 2,
            resources: [{ title: '3Blue1Brown Calculus', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr', type: 'video', free: true }] },
          { name: 'Python for ML', hours: '20h', icon: '🐍', skillIndex: 1, thresholdToShow: 2,
            resources: [{ title: 'Kaggle Python Course', url: 'https://www.kaggle.com/learn/python', type: 'course', free: true }] },
        ],
      },
      {
        label: 'Classical ML',
        color: '#f97316',
        modules: [
          { name: 'ML Algorithms Deep Dive', hours: '35h', icon: '🧮', skillIndex: 2, thresholdToShow: 2,
            resources: [{ title: 'StatQuest ML Videos', url: 'https://www.youtube.com/@statquest', type: 'video', free: true }] },
          { name: 'Feature Engineering', hours: '20h', icon: '🔧', skillIndex: 2, thresholdToShow: 3,
            resources: [{ title: 'Kaggle Feature Engineering', url: 'https://www.kaggle.com/learn/feature-engineering', type: 'course', free: true }] },
          { name: 'Model Evaluation', hours: '15h', icon: '⚖️', skillIndex: 2, thresholdToShow: 3,
            resources: [{ title: 'scikit-learn Model Evaluation', url: 'https://scikit-learn.org/stable/modules/model_evaluation.html', type: 'docs', free: true }] },
        ],
      },
      {
        label: 'Deep Learning',
        color: '#8b5cf6',
        modules: [
          { name: 'Neural Networks & PyTorch', hours: '40h', icon: '🧠', skillIndex: 1, thresholdToShow: 3,
            resources: [{ title: 'fast.ai Practical Deep Learning', url: 'https://course.fast.ai/', type: 'course', free: true }] },
          { name: 'Computer Vision', hours: '30h', icon: '👁️', skillIndex: 2, thresholdToShow: 3,
            resources: [{ title: 'PyTorch Vision Tutorial', url: 'https://pytorch.org/tutorials/intermediate/torchvision_tutorial.html', type: 'docs', free: true }] },
          { name: 'NLP & Transformers', hours: '35h', icon: '💬', skillIndex: 2, thresholdToShow: 3,
            resources: [{ title: 'Hugging Face Course', url: 'https://huggingface.co/learn/nlp-course/', type: 'course', free: true }] },
        ],
      },
      {
        label: 'MLOps',
        color: '#0d9488',
        modules: [
          { name: 'Experiment Tracking (MLflow)', hours: '20h', icon: '📊', skillIndex: 3, thresholdToShow: 2,
            resources: [{ title: 'MLflow Docs', url: 'https://mlflow.org/docs/latest/', type: 'docs', free: true }] },
          { name: 'Model Serving (FastAPI)', hours: '20h', icon: '🚀', skillIndex: 3, thresholdToShow: 2,
            resources: [{ title: 'FastAPI ML Serving Guide', url: 'https://fastapi.tiangolo.com/', type: 'docs', free: true }] },
          { name: 'Reading & Reproducing Papers', hours: '30h', icon: '📄', skillIndex: 4, thresholdToShow: 2,
            resources: [{ title: 'Papers With Code', url: 'https://paperswithcode.com/', type: 'docs', free: true }] },
        ],
      },
    ],
  },
  de: {
    phases: [
      {
        label: 'Foundation',
        color: '#f59e0b',
        modules: [
          { name: 'Advanced SQL', hours: '25h', icon: '🗄️', skillIndex: 0, thresholdToShow: 3,
            resources: [{ title: 'Mode Analytics SQL Tutorial', url: 'https://mode.com/sql-tutorial/', type: 'docs', free: true }] },
          { name: 'Python for ETL', hours: '20h', icon: '🐍', skillIndex: 1, thresholdToShow: 2,
            resources: [{ title: 'Real Python ETL Guide', url: 'https://realpython.com/python-etl/', type: 'docs', free: true }] },
          { name: 'Data Modeling Theory', hours: '15h', icon: '📐', skillIndex: 4, thresholdToShow: 2,
            resources: [
              { title: 'Kimball Data Warehouse Toolkit', url: 'https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/', type: 'book', free: false },
              { title: 'Data Modeling Concepts', url: 'https://www.red-gate.com/simple-talk/sql/database-administration/data-modeling-for-the-absolute-beginner/', type: 'article', free: true },
            ] },
        ],
      },
      {
        label: 'Pipeline Engineering',
        color: '#f59e0b',
        modules: [
          { name: 'Apache Airflow', hours: '25h', icon: '🌀', skillIndex: 1, thresholdToShow: 2,
            resources: [{ title: 'Airflow Documentation', url: 'https://airflow.apache.org/docs/', type: 'docs', free: true }] },
          { name: 'dbt for Transformations', hours: '20h', icon: '🔄', skillIndex: 1, thresholdToShow: 2,
            resources: [{ title: 'dbt Courses', url: 'https://courses.getdbt.com/', type: 'course', free: true }] },
          { name: 'Kafka & Streaming', hours: '25h', icon: '📨', skillIndex: 1, thresholdToShow: 3,
            resources: [{ title: 'Confluent Kafka Fundamentals', url: 'https://developer.confluent.io/courses/', type: 'course', free: true }] },
        ],
      },
      {
        label: 'Big Data',
        color: '#8b5cf6',
        modules: [
          { name: 'Apache Spark', hours: '35h', icon: '✨', skillIndex: 2, thresholdToShow: 2,
            resources: [{ title: 'Databricks Spark Training', url: 'https://www.databricks.com/learn/training', type: 'course', free: true }] },
          { name: 'Data Warehouse (Snowflake)', hours: '20h', icon: '❄️', skillIndex: 0, thresholdToShow: 3,
            resources: [{ title: 'Snowflake University', url: 'https://university.snowflake.com/', type: 'course', free: true }] },
          { name: 'Delta Lake & Lakehouse', hours: '20h', icon: '🏞️', skillIndex: 2, thresholdToShow: 3,
            resources: [{ title: 'Delta Lake Documentation', url: 'https://docs.delta.io/', type: 'docs', free: true }] },
        ],
      },
      {
        label: 'Cloud & Scale',
        color: '#0d9488',
        modules: [
          { name: 'Cloud Data Services', hours: '25h', icon: '☁️', skillIndex: 3, thresholdToShow: 2,
            resources: [{ title: 'GCP Data Engineering Path', url: 'https://cloud.google.com/learn/training/data-engineering', type: 'course', free: true }] },
          { name: 'Data Quality & Observability', hours: '15h', icon: '🔍', skillIndex: 2, thresholdToShow: 3,
            resources: [{ title: 'Great Expectations Docs', url: 'https://docs.greatexpectations.io/', type: 'docs', free: true }] },
          { name: 'CI/CD for Data Pipelines', hours: '15h', icon: '⚙️', skillIndex: 3, thresholdToShow: 3,
            resources: [{ title: 'GitHub Actions for Data', url: 'https://docs.github.com/en/actions', type: 'docs', free: true }] },
        ],
      },
    ],
  },
  pm: {
    phases: [
      {
        label: 'Foundation',
        color: '#f43f5e',
        modules: [
          { name: 'PM Frameworks & Strategy', hours: '20h', icon: '🗺️', skillIndex: 0, thresholdToShow: 2,
            resources: [
              { title: 'Product Management Guide (Reforge)', url: 'https://www.reforge.com/blog/product-management-guide', type: 'article', free: true },
              { title: 'Lenny\'s Newsletter', url: 'https://www.lennysnewsletter.com/', type: 'docs', free: false },
            ] },
          { name: 'User Research Methods', hours: '15h', icon: '👥', skillIndex: 2, thresholdToShow: 2,
            resources: [{ title: 'User Interviews Research Hub', url: 'https://www.userinterviews.com/ux-research-field-guide', type: 'docs', free: true }] },
          { name: 'Writing Product Specs', hours: '15h', icon: '📝', skillIndex: 0, thresholdToShow: 2,
            resources: [{ title: 'Product Spec Templates by Pragmatic', url: 'https://www.pragmaticinstitute.com/', type: 'docs', free: true }] },
        ],
      },
      {
        label: 'Analytics',
        color: '#f97316',
        modules: [
          { name: 'SQL for PMs', hours: '20h', icon: '🗄️', skillIndex: 1, thresholdToShow: 2,
            resources: [{ title: 'Mode SQL for Non-Developers', url: 'https://mode.com/sql-tutorial/', type: 'docs', free: true }] },
          { name: 'Metrics & North Star', hours: '15h', icon: '⭐', skillIndex: 1, thresholdToShow: 3,
            resources: [
              { title: 'Reforge Metrics Course', url: 'https://www.reforge.com/', type: 'course', free: false },
              { title: 'Measure What Matters Guide', url: 'https://www.whatmatters.com/', type: 'article', free: true },
            ] },
          { name: 'A/B Testing & Experiments', hours: '20h', icon: '🧪', skillIndex: 1, thresholdToShow: 3,
            resources: [{ title: 'Statsig A/B Testing Guide', url: 'https://statsig.com/blog', type: 'docs', free: true }] },
        ],
      },
      {
        label: 'Execution',
        color: '#8b5cf6',
        modules: [
          { name: 'Agile & Sprint Planning', hours: '15h', icon: '🏃', skillIndex: 0, thresholdToShow: 2,
            resources: [{ title: 'Atlassian Agile Coach', url: 'https://www.atlassian.com/agile', type: 'docs', free: true }] },
          { name: 'Prioritization Frameworks', hours: '10h', icon: '🎯', skillIndex: 0, thresholdToShow: 2,
            resources: [{ title: 'ProductPlan Prioritization Guide', url: 'https://www.productplan.com/learn/product-prioritization-techniques/', type: 'docs', free: true }] },
          { name: 'Technical Literacy for PMs', hours: '20h', icon: '💡', skillIndex: 3, thresholdToShow: 2,
            resources: [
              { title: 'Technical Skills for PMs (Exponent)', url: 'https://www.tryexponent.com/', type: 'course', free: false },
              { title: 'Tech for PMs Guide', url: 'https://www.productschool.com/blog/product-management/technical-product-manager/', type: 'article', free: true },
            ] },
        ],
      },
      {
        label: 'Leadership',
        color: '#0d9488',
        modules: [
          { name: 'Stakeholder Management', hours: '15h', icon: '🤝', skillIndex: 4, thresholdToShow: 2,
            resources: [
              { title: 'Influenced Without Authority (book)', url: 'https://www.amazon.com/Influencing-Without-Authority-Allan-Cohen/dp/0471609692', type: 'book', free: false },
              { title: 'Stakeholder Management Guide', url: 'https://www.mindtools.com/pages/article/newPPM_08.htm', type: 'article', free: true },
            ] },
          { name: 'Go-To-Market Strategy', hours: '20h', icon: '📣', skillIndex: 0, thresholdToShow: 3,
            resources: [{ title: 'Product-Led Growth Book', url: 'https://productled.com/book', type: 'book', free: true }] },
          { name: 'Executive Communication', hours: '10h', icon: '🎤', skillIndex: 4, thresholdToShow: 3,
            resources: [
              { title: 'Pyramid Principle (book)', url: 'https://www.amazon.com/Minto-Pyramid-Principle-Writing-Thinking/dp/0273710516', type: 'book', free: false },
              { title: 'Structured Communication Guide', url: 'https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-art-of-effective-communication', type: 'article', free: true },
            ] },
        ],
      },
    ],
  },
  fs: {
    phases: [
      {
        label: 'Frontend Foundation',
        color: '#6366f1',
        modules: [
          { name: 'HTML, CSS & JavaScript', hours: '30h', icon: '🌐', skillIndex: 0, thresholdToShow: 2,
            resources: [{ title: 'freeCodeCamp Web Development', url: 'https://www.freecodecamp.org/learn/responsive-web-design/', type: 'course', free: true }] },
          { name: 'React Framework', hours: '25h', icon: '⚛️', skillIndex: 0, thresholdToShow: 3,
            resources: [{ title: 'React Official Tutorial', url: 'https://react.dev/learn/tutorial-tic-tac-toe', type: 'docs', free: true }] },
        ],
      },
      {
        label: 'Backend & Full Stack',
        color: '#8b5cf6',
        modules: [
          { name: 'Node.js & Express', hours: '20h', icon: '🟢', skillIndex: 1, thresholdToShow: 2,
            resources: [{ title: 'Node.js Official Docs', url: 'https://nodejs.org/en/docs/', type: 'docs', free: true }] },
          { name: 'Database Integration', hours: '15h', icon: '🗄️', skillIndex: 2, thresholdToShow: 2,
            resources: [{ title: 'MongoDB University', url: 'https://university.mongodb.com/', type: 'course', free: true }] },
          { name: 'Deployment & DevOps', hours: '15h', icon: '🚀', skillIndex: 3, thresholdToShow: 2,
            resources: [{ title: 'Vercel Deployment Guide', url: 'https://vercel.com/docs', type: 'docs', free: true }] },
        ],
      },
    ],
  },
  do: {
    phases: [
      {
        label: 'Infrastructure Basics',
        color: '#06b6d4',
        modules: [
          { name: 'Linux & Shell Scripting', hours: '20h', icon: '🐧', skillIndex: 0, thresholdToShow: 2,
            resources: [{ title: 'Linux Journey', url: 'https://linuxjourney.com/', type: 'course', free: true }] },
          { name: 'Cloud Platforms (AWS/GCP)', hours: '25h', icon: '☁️', skillIndex: 2, thresholdToShow: 2,
            resources: [{ title: 'AWS Free Tier', url: 'https://aws.amazon.com/free/', type: 'platform', free: true }] },
        ],
      },
      {
        label: 'Automation & Tools',
        color: '#0891b2',
        modules: [
          { name: 'CI/CD Pipelines', hours: '20h', icon: '🔄', skillIndex: 2, thresholdToShow: 3,
            resources: [{ title: 'GitHub Actions Docs', url: 'https://docs.github.com/en/actions', type: 'docs', free: true }] },
          { name: 'Containerization (Docker)', hours: '15h', icon: '🐳', skillIndex: 3, thresholdToShow: 2,
            resources: [{ title: 'Docker Getting Started', url: 'https://docs.docker.com/get-started/', type: 'docs', free: true }] },
          { name: 'Monitoring & Logging', hours: '15h', icon: '📊', skillIndex: 4, thresholdToShow: 2,
            resources: [{ title: 'Prometheus Docs', url: 'https://prometheus.io/docs/', type: 'docs', free: true }] },
        ],
      },
    ],
  },
  cs: {
    phases: [
      {
        label: 'Security Fundamentals',
        color: '#dc2626',
        modules: [
          { name: 'Networking & Protocols', hours: '20h', icon: '🌐', skillIndex: 0, thresholdToShow: 2,
            resources: [{ title: 'Network Fundamentals (Cisco)', url: 'https://learningnetwork.cisco.com/s/learning-plan-detail-standard?ltui__urlRecordId=a1c3i0000005uz2AAA&ltui__urlRedirect=learning-plan-detail', type: 'course', free: true }] },
          { name: 'Cryptography Basics', hours: '15h', icon: '🔐', skillIndex: 1, thresholdToShow: 2,
            resources: [
              { title: 'Cryptography I (Coursera)', url: 'https://www.coursera.org/learn/crypto', type: 'course', free: false },
              { title: 'Crypto101 Free Book', url: 'https://crypto101.io/', type: 'book', free: true },
            ] },
        ],
      },
      {
        label: 'Security Tools & Practice',
        color: '#b91c1c',
        modules: [
          { name: 'Ethical Hacking', hours: '25h', icon: '🎯', skillIndex: 3, thresholdToShow: 2,
            resources: [{ title: 'OWASP WebGoat', url: 'https://owasp.org/www-project-webgoat/', type: 'tool', free: true }] },
          { name: 'Security Monitoring', hours: '20h', icon: '👁️', skillIndex: 2, thresholdToShow: 3,
            resources: [{ title: 'SIEM Fundamentals', url: 'https://www.splunk.com/en_us/training/free-courses/siem-fundamentals.html', type: 'course', free: true }] },
        ],
      },
    ],
  },
  ce: {
    phases: [
      {
        label: 'Cloud Fundamentals',
        color: '#0ea5e9',
        modules: [
          { name: 'AWS/Azure/GCP Basics', hours: '25h', icon: '☁️', skillIndex: 0, thresholdToShow: 2,
            resources: [
              { title: 'AWS Cloud Practitioner', url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/', type: 'certification', free: false },
              { title: 'AWS Cloud Practitioner Essentials', url: 'https://explore.skillbuilder.aws/learn/course/1573/aws-cloud-practitioner-essentials', type: 'course', free: true },
            ] },
          { name: 'Infrastructure as Code', hours: '20h', icon: '🏗️', skillIndex: 1, thresholdToShow: 2,
            resources: [{ title: 'Terraform Getting Started', url: 'https://learn.hashicorp.com/terraform', type: 'docs', free: true }] },
        ],
      },
      {
        label: 'Advanced Cloud',
        color: '#0284c7',
        modules: [
          { name: 'Cloud Architecture', hours: '20h', icon: '🏛️', skillIndex: 2, thresholdToShow: 3,
            resources: [{ title: 'AWS Well-Architected Framework', url: 'https://aws.amazon.com/architecture/well-architected/', type: 'docs', free: true }] },
          { name: 'Cloud Security', hours: '15h', icon: '🔒', skillIndex: 3, thresholdToShow: 2,
            resources: [{ title: 'Cloud Security Alliance', url: 'https://cloudsecurityalliance.org/', type: 'docs', free: true }] },
        ],
      },
    ],
  },
  md: {
    phases: [
      {
        label: 'Mobile Development Basics',
        color: '#16a34a',
        modules: [
          { name: 'iOS Development (Swift)', hours: '30h', icon: '📱', skillIndex: 0, thresholdToShow: 2,
            resources: [{ title: 'Apple Developer Tutorials', url: 'https://developer.apple.com/tutorials/app-dev-training/', type: 'docs', free: true }] },
          { name: 'Android Development (Kotlin)', hours: '30h', icon: '🤖', skillIndex: 0, thresholdToShow: 2,
            resources: [{ title: 'Android Developer Fundamentals', url: 'https://developer.android.com/courses/fundamentals-training/overview-v2', type: 'course', free: true }] },
        ],
      },
      {
        label: 'Advanced Mobile',
        color: '#15803d',
        modules: [
          { name: 'Cross-Platform (React Native)', hours: '25h', icon: '⚛️', skillIndex: 1, thresholdToShow: 3,
            resources: [{ title: 'React Native Docs', url: 'https://reactnative.dev/docs/getting-started', type: 'docs', free: true }] },
          { name: 'App Store Deployment', hours: '10h', icon: '📦', skillIndex: 4, thresholdToShow: 2,
            resources: [{ title: 'App Store Guidelines', url: 'https://developer.apple.com/support/app-store/', type: 'docs', free: true }] },
        ],
      },
    ],
  },
  ux: {
    phases: [
      {
        label: 'Design Fundamentals',
        color: '#ec4899',
        modules: [
          { name: 'Visual Design Principles', hours: '20h', icon: '🎨', skillIndex: 2, thresholdToShow: 2,
            resources: [
              { title: 'Material Design Introduction', url: 'https://material.io/design/introduction/', type: 'docs', free: true },
              { title: 'The Non-Designer\'s Design Book', url: 'https://www.amazon.com/Non-Designers-Design-Book-4th/dp/0133966151', type: 'book', free: false },
            ] },
          { name: 'Figma/Sketch Mastery', hours: '15h', icon: '✏️', skillIndex: 0, thresholdToShow: 2,
            resources: [{ title: 'Figma Tutorials', url: 'https://www.figma.com/resources/learn-design/', type: 'course', free: true }] },
        ],
      },
      {
        label: 'UX Research & Strategy',
        color: '#be185d',
        modules: [
          { name: 'User Research Methods', hours: '20h', icon: '🔍', skillIndex: 1, thresholdToShow: 2,
            resources: [{ title: 'User Research Hub', url: 'https://www.userresearch.blog/', type: 'blog', free: true }] },
          { name: 'Interaction Design', hours: '15h', icon: '👆', skillIndex: 3, thresholdToShow: 2,
            resources: [
              { title: 'Interaction Design Foundation', url: 'https://www.interaction-design.org/', type: 'course', free: false },
              { title: 'NN/g Interaction Design Articles', url: 'https://www.nngroup.com/topic/interaction-design/', type: 'article', free: true },
            ] },
        ],
      },
    ],
  },
  se: {
    phases: [
      {
        label: 'Programming Fundamentals',
        color: '#64748b',
        modules: [
          { name: 'Data Structures & Algorithms', hours: '40h', icon: '📊', skillIndex: 0, thresholdToShow: 2,
            resources: [{ title: 'CS50\'s Introduction to Computer Science', url: 'https://cs50.harvard.edu/college/2022/spring/', type: 'course', free: true }] },
          { name: 'Software Design Patterns', hours: '20h', icon: '🏗️', skillIndex: 2, thresholdToShow: 3,
            resources: [
              { title: 'Design Patterns (Gang of Four)', url: 'https://www.amazon.com/Design-Patterns-Object-Oriented-Addison-Wesley-Professional/dp/0201633612', type: 'book', free: false },
              { title: 'Refactoring Guru Design Patterns', url: 'https://refactoring.guru/design-patterns', type: 'docs', free: true },
              { title: 'Design Patterns in JavaScript', url: 'https://www.youtube.com/watch?v=v9ejT8FO-7I', type: 'video', free: true },
            ] },
        ],
      },
      {
        label: 'Development Practices',
        color: '#475569',
        modules: [
          { name: 'Version Control & Git', hours: '10h', icon: '🔀', skillIndex: 1, thresholdToShow: 2,
            resources: [{ title: 'Git Documentation', url: 'https://git-scm.com/doc', type: 'docs', free: true }] },
          { name: 'Testing & Quality Assurance', hours: '15h', icon: '🧪', skillIndex: 3, thresholdToShow: 2,
            resources: [
              { title: 'Testing JavaScript', url: 'https://testingjavascript.com/', type: 'course', free: false },
              { title: 'Kent C. Dodds Testing Library', url: 'https://testing-library.com/docs/intro', type: 'docs', free: true },
              { title: 'JavaScript Testing Crash Course', url: 'https://www.youtube.com/watch?v=r9HdJ8P1F5Y', type: 'video', free: true },
            ] },
        ],
      },
    ],
  },
  qa: {
    phases: [
      {
        label: 'Testing Fundamentals',
        color: '#65a30d',
        modules: [
          { name: 'Manual Testing Techniques', hours: '15h', icon: '📝', skillIndex: 0, thresholdToShow: 2,
            resources: [
              { title: 'ISTQB Foundation Level', url: 'https://www.istqb.org/', type: 'certification', free: false },
              { title: 'Software Testing Help Guide', url: 'https://www.softwaretestinghelp.com/what-is-software-testing/', type: 'docs', free: true },
            ] },
          { name: 'Test Case Design', hours: '10h', icon: '📋', skillIndex: 0, thresholdToShow: 3,
            resources: [{ title: 'Test Case Design Techniques', url: 'https://www.softwaretestinghelp.com/test-case-design-techniques/', type: 'docs', free: true }] },
        ],
      },
      {
        label: 'Automation & Tools',
        color: '#4d7c0f',
        modules: [
          { name: 'Selenium WebDriver', hours: '20h', icon: '🌐', skillIndex: 1, thresholdToShow: 2,
            resources: [{ title: 'Selenium Documentation', url: 'https://www.selenium.dev/documentation/', type: 'docs', free: true }] },
          { name: 'API Testing', hours: '15h', icon: '🔗', skillIndex: 1, thresholdToShow: 3,
            resources: [{ title: 'Postman API Testing', url: 'https://learning.postman.com/docs/testing/', type: 'docs', free: true }] },
        ],
      },
    ],
  },
  bc: {
    phases: [
      {
        label: 'Blockchain Fundamentals',
        color: '#eab308',
        modules: [
          { name: 'Cryptography & Security', hours: '20h', icon: '🔐', skillIndex: 0, thresholdToShow: 2,
            resources: [{ title: 'Bitcoin Whitepaper', url: 'https://bitcoin.org/bitcoin.pdf', type: 'paper', free: true }] },
          { name: 'Blockchain Technology', hours: '15h', icon: '⛓️', skillIndex: 0, thresholdToShow: 3,
            resources: [{ title: 'Blockchain Basics (IBM)', url: 'https://www.ibm.com/topics/blockchain', type: 'docs', free: true }] },
        ],
      },
      {
        label: 'Development & Applications',
        color: '#ca8a04',
        modules: [
          { name: 'Smart Contracts (Solidity)', hours: '25h', icon: '📄', skillIndex: 1, thresholdToShow: 2,
            resources: [{ title: 'CryptoZombies', url: 'https://cryptozombies.io/', type: 'course', free: true }] },
          { name: 'Web3 Development', hours: '20h', icon: '🌐', skillIndex: 2, thresholdToShow: 2,
            resources: [{ title: 'Web3.js Documentation', url: 'https://web3js.readthedocs.io/', type: 'docs', free: true }] },
        ],
      },
    ],
  },
  ai: {
    phases: [
      {
        label: 'AI/ML Foundations',
        color: '#a855f7',
        modules: [
          { name: 'Machine Learning Basics', hours: '30h', icon: '🤖', skillIndex: 0, thresholdToShow: 2,
            resources: [
              { title: 'Andrew Ng ML Course', url: 'https://www.coursera.org/learn/machine-learning', type: 'course', free: false },
            ] },
          { name: 'Mathematics for Machine Learning', hours: '25h', icon: '📐', skillIndex: 0, thresholdToShow: 2,
            resources: [
              { title: 'Mathematics for Machine Learning Specialization', url: 'https://www.coursera.org/specializations/mathematics-machine-learning', type: 'course', free: false },
              { title: '3Blue1Brown Essence of Linear Algebra', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab', type: 'video', free: true },
            ] },
          { name: 'Python for AI', hours: '20h', icon: '🐍', skillIndex: 1, thresholdToShow: 2,
            resources: [{ title: 'Python Data Science Handbook', url: 'https://jakevdp.github.io/PythonDataScienceHandbook/', type: 'book', free: true }] },
        ],
      },
      {
        label: 'Advanced AI',
        color: '#9333ea',
        modules: [
          { name: 'Deep Learning', hours: '25h', icon: '🧠', skillIndex: 2, thresholdToShow: 3,
            resources: [
              { title: 'Deep Learning Specialization', url: 'https://www.coursera.org/specializations/deep-learning', type: 'course', free: false },
              { title: 'fast.ai Practical Deep Learning', url: 'https://course.fast.ai/', type: 'course', free: true },
              { title: '3Blue1Brown Neural Networks', url: 'https://www.youtube.com/watch?v=aircAruvnKk', type: 'video', free: true },
            ] },
          { name: 'NLP & Transformers', hours: '30h', icon: '💬', skillIndex: 2, thresholdToShow: 3,
            resources: [
              { title: 'Hugging Face NLP Course', url: 'https://huggingface.co/learn/nlp-course/', type: 'course', free: true },
              { title: 'The Illustrated Transformer', url: 'https://jalammar.github.io/illustrated-transformer/', type: 'article', free: true },
            ] },
          { name: 'AI Ethics & Deployment', hours: '15h', icon: '⚖️', skillIndex: 4, thresholdToShow: 2,
            resources: [{ title: 'Responsible AI Practices', url: 'https://www.microsoft.com/en-us/ai/responsible-ai', type: 'docs', free: true }] },
        ],
      },
    ],
  },
  ba: {
    phases: [
      {
        label: 'Business Analysis Fundamentals',
        color: '#78716c',
        modules: [
          { name: 'Requirements Gathering', hours: '15h', icon: '📝', skillIndex: 0, thresholdToShow: 2,
            resources: [
              { title: 'BABOK Guide', url: 'https://www.iiba.org/business-analysis-resources/babok/', type: 'book', free: false },
              { title: 'IIBA Business Analysis Resources', url: 'https://www.iiba.org/business-analysis-resources/', type: 'docs', free: true },
            ] },
          { name: 'Process Modeling', hours: '20h', icon: '🔄', skillIndex: 0, thresholdToShow: 3,
            resources: [{ title: 'BPMN Tutorial', url: 'https://www.bpmn.org/', type: 'docs', free: true }] },
        ],
      },
      {
        label: 'Technical & Communication',
        color: '#57534e',
        modules: [
          { name: 'Technical Writing', hours: '15h', icon: '✍️', skillIndex: 2, thresholdToShow: 2,
            resources: [{ title: 'Technical Writing Course', url: 'https://developers.google.com/tech-writing', type: 'course', free: true }] },
          { name: 'Stakeholder Management', hours: '10h', icon: '🤝', skillIndex: 2, thresholdToShow: 3,
            resources: [
              { title: 'Communication Skills for Business Analysts', url: 'https://www.udemy.com/course/business-analysis-communication/', type: 'course', free: false },
              { title: 'Stakeholder Communication Guide', url: 'https://www.mindtools.com/pages/article/newPPM_84.htm', type: 'article', free: true },
            ] },
        ],
      },
    ],
  },
  dsop: {
    phases: [
      {
        label: 'Secure DevOps Basics',
        color: '#10b981',
        modules: [
          { name: 'Secure CI/CD', hours: '18h', icon: '🛠️', skillIndex: 0, thresholdToShow: 2,
            resources: [
              { title: 'DevSecOps Fundamentals', url: 'https://www.coursera.org/learn/devsecops', type: 'course', free: false },
              { title: 'OWASP DevSecOps', url: 'https://owasp.org/www-project-devsecops/', type: 'docs', free: true },
            ] },
          { name: 'Infrastructure Security', hours: '20h', icon: '🔐', skillIndex: 1, thresholdToShow: 2,
            resources: [{ title: 'OWASP DevSecOps', url: 'https://owasp.org/www-project-devsecops/', type: 'docs', free: true }] },
        ],
      },
      {
        label: 'Automation & Compliance',
        color: '#047857',
        modules: [
          { name: 'Policy as Code', hours: '15h', icon: '📜', skillIndex: 2, thresholdToShow: 3,
            resources: [{ title: 'OPA & Rego Guide', url: 'https://www.openpolicyagent.org/docs/latest/', type: 'docs', free: true }] },
          { name: 'Threat Modeling', hours: '12h', icon: '🕵️', skillIndex: 3, thresholdToShow: 2,
            resources: [{ title: 'Threat Modeling Course', url: 'https://www.microsoft.com/security/blog/2014/02/05/d4m-threat-modeling-tool/', type: 'docs', free: true }] },
        ],
      },
    ],
    projectIdeas: [
      { title: 'Build a secure deployment pipeline', description: 'Implement CI/CD with automated security scanning, secrets management and policy checks.', impact: 'Demonstrates end-to-end DevSecOps maturity to employers.' },
      { title: 'Create a threat modeling report', description: 'Map vulnerabilities for a sample application and recommend mitigation controls.', impact: 'Shows your ability to protect systems before they are built.' },
      { title: 'Deploy a compliance dashboard', description: 'Track security policy drift, vulnerability findings, and pipeline status in real time.', impact: 'Highlights your operations and governance skills for hiring managers.' },
    ],
  },
  ads: {
    phases: [
      {
        label: 'Data Science Fundamentals',
        color: '#f43f5e',
        modules: [
          { name: 'Statistical Modeling', hours: '22h', icon: '📊', skillIndex: 0, thresholdToShow: 2,
            resources: [
              { title: 'Statistics for Data Science', url: 'https://www.edx.org/course/data-science-statistics', type: 'course', free: false },
              { title: 'Khan Academy Statistics', url: 'https://www.khanacademy.org/math/statistics-probability', type: 'course', free: true },
              { title: 'StatQuest YouTube', url: 'https://www.youtube.com/@statquest', type: 'video', free: true },
            ] },
          { name: 'Machine Learning Pipelines', hours: '20h', icon: '🤖', skillIndex: 1, thresholdToShow: 2,
            resources: [{ title: 'ML Pipelines Guide', url: 'https://www.kubeflow.org/docs/', type: 'docs', free: true }] },
        ],
      },
      {
        label: 'Business Insights',
        color: '#c026d3',
        modules: [
          { name: 'Analytics Storytelling', hours: '18h', icon: '📈', skillIndex: 3, thresholdToShow: 2,
            resources: [
              { title: 'Data Storytelling Course', url: 'https://www.coursera.org/learn/data-storytelling', type: 'course', free: false },
              { title: 'Storytelling With Data blog', url: 'https://www.storytellingwithdata.com/blog', type: 'article', free: true },
            ] },
          { name: 'Deploying ML', hours: '18h', icon: '☁️', skillIndex: 4, thresholdToShow: 3,
            resources: [{ title: 'ML Deployment Guide', url: 'https://aws.amazon.com/machine-learning/what-is-machine-learning/', type: 'docs', free: true }] },
        ],
      },
    ],
    projectIdeas: [
      { title: 'Build a predictive business dashboard', description: 'Combine data visualization with a forecasting model to answer a strategic business question.', impact: 'Proves your ability to turn data into decisions.' },
      { title: 'Create a data science case study', description: 'Document the problem, model selection, performance, and business impact for a real dataset.', impact: 'Helps employers evaluate both your technical and storytelling skills.' },
      { title: 'Deploy an end-to-end analytics app', description: 'Deliver a web app that shows model results, dashboards, and insights in one place.', impact: 'Shows practical product thinking for data-driven roles.' },
    ],
  },
  an: {
    phases: [
      {
        label: 'Android App Basics',
        color: '#84cc16',
        modules: [
          { name: 'Kotlin Fundamentals', hours: '20h', icon: '🧩', skillIndex: 0, thresholdToShow: 2,
            resources: [{ title: 'Kotlin Bootcamp', url: 'https://developer.android.com/courses/kotlin-bootcamp', type: 'course', free: true }] },
          { name: 'Android UI', hours: '20h', icon: '📱', skillIndex: 1, thresholdToShow: 2,
            resources: [{ title: 'Android UI Toolkit', url: 'https://developer.android.com/jetpack/compose', type: 'docs', free: true }] },
        ],
      },
      {
        label: 'Publishing & Performance',
        color: '#4d7c0f',
        modules: [
          { name: 'App Store Deployment', hours: '12h', icon: '📦', skillIndex: 4, thresholdToShow: 2,
            resources: [{ title: 'Google Play Publishing', url: 'https://developer.android.com/distribute/console', type: 'docs', free: true }] },
          { name: 'Mobile Optimization', hours: '15h', icon: '⚡', skillIndex: 3, thresholdToShow: 3,
            resources: [{ title: 'Performance Optimization Guide', url: 'https://developer.android.com/topic/performance', type: 'docs', free: true }] },
        ],
      },
    ],
    projectIdeas: [
      { title: 'Build a polished Android app', description: 'Create an app with modern navigation, offline support, and performance tuning.', impact: 'Strong evidence of production-ready mobile skills.' },
      { title: 'Publish a Play Store beta', description: 'Deploy an app to Google Play beta and collect user feedback.', impact: 'Shows you understand mobile release workflows and quality.' },
      { title: 'Add analytics and crash reporting', description: 'Integrate monitoring to capture usage, metrics, and errors.', impact: 'Demonstrates professional app reliability awareness.' },
    ],
  },
  pg: {
    phases: [
      {
        label: 'PostgreSQL Fundamentals',
        color: '#38bdf8',
        modules: [
          { name: 'SQL Mastery', hours: '20h', icon: '🗄️', skillIndex: 0, thresholdToShow: 2,
            resources: [{ title: 'PostgreSQL Tutorial', url: 'https://www.postgresql.org/docs/current/tutorial.html', type: 'docs', free: true }] },
          { name: 'Schema & Indexing', hours: '18h', icon: '🧠', skillIndex: 1, thresholdToShow: 3,
            resources: [{ title: 'PostgreSQL Indexing', url: 'https://www.postgresql.org/docs/current/indexes.html', type: 'docs', free: true }] },
        ],
      },
      {
        label: 'Performance & Operations',
        color: '#0c4a6e',
        modules: [
          { name: 'Query Tuning', hours: '18h', icon: '⚡', skillIndex: 2, thresholdToShow: 3,
            resources: [{ title: 'EXPLAIN & ANALYZE', url: 'https://www.postgresql.org/docs/current/using-explain.html', type: 'docs', free: true }] },
          { name: 'Replication & Backup', hours: '15h', icon: '🛡️', skillIndex: 3, thresholdToShow: 2,
            resources: [{ title: 'PostgreSQL Replication', url: 'https://www.postgresql.org/docs/current/different-replication-solutions.html', type: 'docs', free: true }] },
        ],
      },
    ],
    projectIdeas: [
      { title: 'Build a production-grade DB schema', description: 'Design and implement a PostgreSQL schema for a real application.', impact: 'Shows your ability to craft normalized, performant data models.' },
      { title: 'Optimize slow queries', description: 'Take a sluggish dataset and tune indexes, queries, and execution plans.', impact: 'Proves your operational database performance skills.' },
      { title: 'Deploy a fault-tolerant cluster', description: 'Configure replication, failover, and backups for resilience.', impact: 'Demonstrates readiness for backend engineering and DBA roles.' },
    ],
  },
  ios: {
    phases: [
      {
        label: 'iOS App Fundamentals',
        color: '#0ea5e9',
        modules: [
          { name: 'Swift UI Basics', hours: '20h', icon: '🧩', skillIndex: 0, thresholdToShow: 2,
            resources: [{ title: 'Apple Swift Tutorials', url: 'https://developer.apple.com/tutorials/', type: 'course', free: true }] },
          { name: 'App Architecture', hours: '18h', icon: '🏗️', skillIndex: 1, thresholdToShow: 3,
            resources: [{ title: 'iOS App Architecture', url: 'https://developer.apple.com/documentation/', type: 'docs', free: true }] },
        ],
      },
      {
        label: 'Release & Testing',
        color: '#0369a1',
        modules: [
          { name: 'App Testing', hours: '15h', icon: '🧪', skillIndex: 3, thresholdToShow: 2,
            resources: [{ title: 'XCTest Guide', url: 'https://developer.apple.com/documentation/xctest', type: 'docs', free: true }] },
          { name: 'App Store Release', hours: '12h', icon: '🚀', skillIndex: 4, thresholdToShow: 2,
            resources: [{ title: 'App Store Connect', url: 'https://developer.apple.com/app-store-connect/', type: 'docs', free: true }] },
        ],
      },
    ],
    projectIdeas: [
      { title: 'Ship an iOS app prototype', description: 'Build a polished native app that highlights mobile UI and device features.', impact: 'A portfolio app gives recruiters a concrete example of your mobile skills.' },
      { title: 'Integrate native APIs', description: 'Use camera, location, or notifications in a real app experience.', impact: 'Demonstrates practical iOS platform knowledge employers want.' },
      { title: 'Publish a TestFlight build', description: 'Distribute your app to testers and gather feedback before final delivery.', impact: 'Shows you understand app release workflows and quality review.' },
    ],
  },
  sa: {
    phases: [
      {
        label: 'Architecture Foundation',
        color: '#64748b',
        modules: [
          { name: 'Design Patterns', hours: '20h', icon: '📐', skillIndex: 0, thresholdToShow: 2,
            resources: [
              { title: 'Design Patterns Book', url: 'https://www.amazon.com/Design-Patterns-Object-Oriented-Addison-Wesley-Professional/dp/0201633612', type: 'book', free: false },
              { title: 'Refactoring Guru Design Patterns', url: 'https://refactoring.guru/design-patterns', type: 'docs', free: true },
            ] },
          { name: 'System decomposition', hours: '18h', icon: '🧱', skillIndex: 2, thresholdToShow: 3,
            resources: [
              { title: 'Scalable System Design', url: 'https://www.educative.io/courses/grokking-the-system-design-interview', type: 'course', free: false },
              { title: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer', type: 'docs', free: true },
            ] },
        ],
      },
      {
        label: 'Scalable Systems',
        color: '#1e293b',
        modules: [
          { name: 'Microservices & APIs', hours: '18h', icon: '🕸️', skillIndex: 1, thresholdToShow: 3,
            resources: [{ title: 'Microservices Guide', url: 'https://martinfowler.com/microservices/', type: 'docs', free: true }] },
          { name: 'Reliability & scaling', hours: '15h', icon: '⛓️', skillIndex: 3, thresholdToShow: 2,
            resources: [
              { title: 'Site Reliability Engineering', url: 'https://landing.google.com/sre/book.html', type: 'book', free: true },
              { title: 'SRE Google Book Online', url: 'https://landing.google.com/sre/book.html', type: 'book', free: true },
            ] },
        ],
      },
    ],
    projectIdeas: [
      { title: 'Design a scalable service architecture', description: 'Create a service diagram and implementation plan for a high-volume application.', impact: 'Shows your ability to think beyond code and design systems engineers trust.' },
      { title: 'Build a technical design doc', description: 'Write a complete architecture proposal with tradeoffs and rollout strategy.', impact: 'Demonstrates communication and leadership for senior roles.' },
      { title: 'Prototype a fault-tolerant system', description: 'Implement a backend that handles failure cases, retries, and graceful degradation.', impact: 'Highlights your readiness for real-world system architecture work.' },
    ],
  },
  tw: {
    phases: [
      {
        label: 'Writing Fundamentals',
        color: '#fb7185',
        modules: [
          { name: 'Technical clarity', hours: '16h', icon: '✍️', skillIndex: 0, thresholdToShow: 2,
            resources: [{ title: 'Google Tech Writing', url: 'https://developers.google.com/tech-writing', type: 'course', free: true }] },
          { name: 'Audience research', hours: '14h', icon: '🧠', skillIndex: 2, thresholdToShow: 2,
            resources: [
              { title: 'Docs That Work', url: 'https://www.amazon.com/Docs-That-Work-Better-Informative/dp/0137080420', type: 'book', free: false },
              { title: 'Write the Docs Guides', url: 'https://www.writethedocs.org/guide/', type: 'docs', free: true },
            ] },
        ],
      },
      {
        label: 'Publishing & Promotion',
        color: '#be123c',
        modules: [
          { name: 'Content workflows', hours: '14h', icon: '🗂️', skillIndex: 3, thresholdToShow: 2,
            resources: [{ title: 'Developer Content Guide', url: 'https://www.writethedocs.org/', type: 'docs', free: true }] },
          { name: 'Portfolio writing', hours: '12h', icon: '📄', skillIndex: 4, thresholdToShow: 2,
            resources: [{ title: 'Writing for Engineers', url: 'https://developers.google.com/tech-writing', type: 'course', free: true }] },
        ],
      },
    ],
    projectIdeas: [
      { title: 'Publish a developer tutorial', description: 'Write a technical article that teaches an engineering concept end to end.', impact: 'Positions you as a strong communicator for technical roles.' },
      { title: 'Create API documentation', description: 'Document a sample API with examples, guides, and reference content.', impact: 'Shows your ability to make complex systems easy to use.' },
      { title: 'Build a writing portfolio', description: 'Collect your articles and docs in a polished online portfolio.', impact: 'Makes it easy for employers to assess your writing skills.' },
    ],
  },
  gd: {
    phases: [
      {
        label: 'Game Development Basics',
        color: '#a855f7',
        modules: [
          { name: 'Game engine fundamentals', hours: '20h', icon: '🎮', skillIndex: 0, thresholdToShow: 2,
            resources: [{ title: 'Unity Learn', url: 'https://learn.unity.com/', type: 'course', free: true }] },
          { name: 'Gameplay systems', hours: '18h', icon: '🕹️', skillIndex: 1, thresholdToShow: 3,
            resources: [{ title: 'Game Mechanics Guide', url: 'https://gameprogrammingpatterns.com/', type: 'docs', free: true }] },
        ],
      },
      {
        label: 'Production Game Build',
        color: '#7c3aed',
        modules: [
          { name: 'Graphics & animation', hours: '15h', icon: '✨', skillIndex: 2, thresholdToShow: 2,
            resources: [{ title: 'ShaderToy Tutorials', url: 'https://www.shadertoy.com/', type: 'course', free: true }] },
          { name: 'Game deployment', hours: '13h', icon: '🚀', skillIndex: 3, thresholdToShow: 2,
            resources: [{ title: 'Itch.io Publishing', url: 'https://itch.io/developers', type: 'docs', free: true }] },
        ],
      },
    ],
    projectIdeas: [
      { title: 'Build a complete game demo', description: 'Create a small game with polished mechanics, audio, and visual feedback.', impact: 'A playable demo is the strongest asset for a game developer portfolio.' },
      { title: 'Implement game systems', description: 'Develop inventory, AI, or physics systems with clear code structure.', impact: 'Shows your ability to build maintainable gameplay foundations.' },
      { title: 'Publish a playable build', description: 'Share your game on a public platform or demo site.', impact: 'Makes your work easy to evaluate by recruiters and peers.' },
    ],
  },
  ssgd: {
    phases: [
      {
        label: 'Game Backend Fundamentals',
        color: '#c026d3',
        modules: [
          { name: 'Networking basics', hours: '20h', icon: '🌐', skillIndex: 0, thresholdToShow: 2,
            resources: [{ title: 'Real-Time Multiplayer Guide', url: 'https://developer.mozilla.org/en-US/docs/Games/Techniques/Networking', type: 'docs', free: true }] },
          { name: 'Matchmaking & lobby systems', hours: '18h', icon: '🎯', skillIndex: 1, thresholdToShow: 2,
            resources: [{ title: 'Matchmaking architecture', url: 'https://aws.amazon.com/gamelift/', type: 'docs', free: true }] },
        ],
      },
      {
        label: 'Scale & reliability',
        color: '#86198f',
        modules: [
          { name: 'Low-latency servers', hours: '15h', icon: '⚡', skillIndex: 2, thresholdToShow: 3,
            resources: [{ title: 'Game server performance', url: 'https://heroiclabs.com/learn/', type: 'docs', free: true }] },
          { name: 'Security & anti-cheat', hours: '15h', icon: '🛡️', skillIndex: 3, thresholdToShow: 2,
            resources: [{ title: 'Secure game services', url: 'https://owasp.org/www-project-secure-game-services/', type: 'docs', free: true }] },
        ],
      },
    ],
    projectIdeas: [
      { title: 'Build a multiplayer game backend', description: 'Develop server logic for player sessions, matchmaking, and state synchronization.', impact: 'Shows you can support real-time games in production.' },
      { title: 'Optimize latency and throughput', description: 'Measure and improve network performance for a backend service.', impact: 'Proves you understand performance in game infrastructure.' },
      { title: 'Secure game sessions', description: 'Add authentication, anti-cheat checks, and reliable session handling.', impact: 'Highlights operational competence for server-side game roles.' },
    ],
  },
  mo: {
    phases: [
      {
        label: 'MLOps Fundamentals',
        color: '#14b8a6',
        modules: [
          { name: 'Model deployment pipelines', hours: '20h', icon: '🤖', skillIndex: 0, thresholdToShow: 2,
            resources: [
              { title: 'MLOps Basics', url: 'https://www.coursera.org/learn/machine-learning-pipeline', type: 'course', free: false },
              { title: 'Google MLOps Foundations', url: 'https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning', type: 'docs', free: true },
            ] },
          { name: 'Monitoring ML models', hours: '18h', icon: '📈', skillIndex: 2, thresholdToShow: 3,
            resources: [{ title: 'Model monitoring', url: 'https://mlflow.org/', type: 'docs', free: true }] },
        ],
      },
      {
        label: 'Scale & automation',
        color: '#0f766e',
        modules: [
          { name: 'Data validation', hours: '15h', icon: '🔍', skillIndex: 1, thresholdToShow: 2,
            resources: [{ title: 'Great Expectations', url: 'https://greatexpectations.io/', type: 'docs', free: true }] },
          { name: 'Continuous retraining', hours: '15h', icon: '🔄', skillIndex: 3, thresholdToShow: 2,
            resources: [{ title: 'Continuous training guide', url: 'https://www.Tensorflow.org/tfx', type: 'docs', free: true }] },
        ],
      },
    ],
    projectIdeas: [
      { title: 'Build an ML deployment pipeline', description: 'Deploy a model with monitoring, automated tests, and model versioning.', impact: 'Demonstrates production-ready MLOps skills that employers want.' },
      { title: 'Create an inference dashboard', description: 'Visualize model performance, drift, and predictions for stakeholders.', impact: 'Shows your ability to bridge ML and operational teams.' },
      { title: 'Automate model retraining', description: 'Implement a retraining workflow that triggers on data drift or schedule.', impact: 'Highlights your automation and lifecycle management capabilities.' },
    ],
  },
  em: {
    phases: [
      {
        label: 'Leadership Fundamentals',
        color: '#6366f1',
        modules: [
          { name: 'Team leadership', hours: '18h', icon: '👥', skillIndex: 0, thresholdToShow: 2,
            resources: [{ title: 'Engineering Manager Handbook', url: 'https://www.martinfowler.com/articles/manager-handbook.html', type: 'docs', free: true }] },
          { name: 'Delivery processes', hours: '18h', icon: '📅', skillIndex: 2, thresholdToShow: 3,
            resources: [{ title: 'Agile Delivery Practices', url: 'https://www.scrum.org/resources/what-is-scrum', type: 'docs', free: true }] },
        ],
      },
      {
        label: 'Career coaching & strategy',
        color: '#4f46e5',
        modules: [
          { name: 'Feedback culture', hours: '14h', icon: '💬', skillIndex: 3, thresholdToShow: 2,
            resources: [{ title: 'Effective Feedback Guide', url: 'https://hbr.org/2019/05/the-feedback-fallacy', type: 'article', free: true }] },
          { name: 'Roadmap alignment', hours: '14h', icon: '🗺️', skillIndex: 4, thresholdToShow: 3,
            resources: [{ title: 'Leadership Roadmaps', url: 'https://www.mindtools.com/pages/article/newLDR_90.htm', type: 'article', free: true }] },
        ],
      },
    ],
    projectIdeas: [
      { title: 'Lead a small product initiative', description: 'Own planning, delivery, and retrospectives for a team project.', impact: 'Shows hiring managers your ability to lead execution end-to-end.' },
      { title: 'Create a team growth plan', description: 'Document skills, gaps, and career paths for your engineering team.', impact: 'Demonstrates managerial maturity and people planning.' },
      { title: 'Run a post-mortem process', description: 'Design a blameless review and improvement plan after a delivery cycle.', impact: 'Highlights your operational leadership and continuous improvement mindset.' },
    ],
  },
  dr: {
    phases: [
      {
        label: 'Developer Relations Basics',
        color: '#2563eb',
        modules: [
          { name: 'Community building', hours: '18h', icon: '🗣️', skillIndex: 0, thresholdToShow: 2,
            resources: [{ title: 'DevRel Guide', url: 'https://developerrelations.com/', type: 'docs', free: true }] },
          { name: 'Content creation', hours: '16h', icon: '✍️', skillIndex: 1, thresholdToShow: 2,
            resources: [{ title: 'Technical Content Strategy', url: 'https://www.write the docs.org/', type: 'docs', free: true }] },
        ],
      },
      {
        label: 'Advocacy & feedback',
        color: '#1d4ed8',
        modules: [
          { name: 'Speaking & demos', hours: '16h', icon: '🎤', skillIndex: 3, thresholdToShow: 2,
            resources: [{ title: 'Talk Crafting Guide', url: 'https://www.toastmasters.org/', type: 'docs', free: true }] },
          { name: 'Developer research', hours: '14h', icon: '🔎', skillIndex: 4, thresholdToShow: 3,
            resources: [{ title: 'Developer Feedback Methods', url: 'https://developerrelations.com/', type: 'docs', free: true }] },
        ],
      },
    ],
    projectIdeas: [
      { title: 'Launch a developer community event', description: 'Organize a meetup or webinar that teaches your product or technology.', impact: 'Shows you can activate and grow developer audiences.' },
      { title: 'Write technical blog posts', description: 'Produce a series of tutorials or case studies for developer users.', impact: 'Demonstrates your content and product advocacy skills.' },
      { title: 'Build a developer onboarding flow', description: 'Create docs, sample code, and starter kits that help developers use a product.', impact: 'Highlights your ability to improve developer experience and adoption.' },
    ],
  },
}

export function computeRoadmap(goalId: GoalId, scores: number[]) {
  const roadmap = getRoadmap(goalId)
  const result = roadmap.phases.map(phase => ({
    ...phase,
    modules: phase.modules.map(mod => ({
      ...mod,
      recommended: scores[mod.skillIndex] < mod.thresholdToShow,
    })),
  }))
  const allModules = result.flatMap(p => p.modules)
  const recommended = allModules.filter(m => m.recommended)
  const totalHours = recommended.reduce((sum, m) => sum + parseInt(m.hours), 0)
  const weeks = Math.max(1, Math.ceil(totalHours / 10))
  return { phases: result, totalHours, weeks, recommended: recommended.length, total: allModules.length }
}
