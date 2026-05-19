export interface RoadmapNode {
  id: string
  label: string
  x: number
  y: number
  type: 'core' | 'recommended' | 'optional' | 'group'
  width?: number
  height?: number
  description?: string
  resources?: Array<{ title: string; url: string; free: boolean }>
}

export interface RoadmapEdge {
  from: string
  to: string
  style?: 'solid' | 'dashed'
}

export interface VisualRoadmap {
  id: string
  title: string
  accentColor: string
  canvasWidth: number
  canvasHeight: number
  nodes: RoadmapNode[]
  edges: RoadmapEdge[]
  /** Light yellow/tan “roadmap.sh” canvas; omit for dark theme. */
  theme?: 'roadmapLight'
}

export const VISUAL_ROADMAPS: Record<string, VisualRoadmap> = {
  fe: {
    id: 'fe',
    title: 'Frontend Development',
    accentColor: '#3b82f6',
    canvasWidth: 900,
    canvasHeight: 2200,
    nodes: [
      // Top
      { id: 'internet', label: 'Internet', x: 450, y: 60, type: 'core', width: 180, height: 44, description: 'How the web works fundamentally' },
      { id: 'http', label: 'How does HTTP work?', x: 720, y: 40, type: 'recommended', width: 200, height: 36, description: 'Request/response cycle, status codes, headers' },
      { id: 'dns', label: 'What is DNS?', x: 720, y: 90, type: 'recommended', width: 200, height: 36, description: 'Domain name resolution process' },
      { id: 'domain', label: 'Domain Names', x: 720, y: 140, type: 'recommended', width: 200, height: 36, description: 'TLDs, registrars, WHOIS' },
      { id: 'hosting', label: 'What is Hosting?', x: 720, y: 190, type: 'recommended', width: 200, height: 36, description: 'Types: shared, VPS, cloud, CDN' },
      { id: 'browsers', label: 'How Browsers Work', x: 720, y: 240, type: 'recommended', width: 200, height: 36, description: 'Rendering pipeline, JS engine' },

      // HTML
      { id: 'html', label: 'HTML', x: 450, y: 200, type: 'core', width: 180, height: 44 },
      { id: 'html_basics', label: 'Semantic HTML', x: 150, y: 190, type: 'recommended', width: 160, height: 36 },
      { id: 'forms', label: 'Forms & Validation', x: 150, y: 240, type: 'recommended', width: 160, height: 36 },
      { id: 'accessibility', label: 'Accessibility (a11y)', x: 150, y: 290, type: 'recommended', width: 160, height: 36 },
      { id: 'seo_basics', label: 'SEO Basics', x: 150, y: 340, type: 'optional', width: 160, height: 36 },

      // CSS
      { id: 'css', label: 'CSS', x: 450, y: 340, type: 'core', width: 180, height: 44 },
      { id: 'flexbox', label: 'Flexbox', x: 720, y: 320, type: 'recommended', width: 160, height: 36 },
      { id: 'grid', label: 'CSS Grid', x: 720, y: 368, type: 'recommended', width: 160, height: 36 },
      { id: 'responsive', label: 'Responsive Design', x: 720, y: 416, type: 'recommended', width: 160, height: 36 },
      { id: 'animations', label: 'Animations', x: 720, y: 464, type: 'optional', width: 160, height: 36 },

      // JS
      { id: 'js', label: 'JavaScript', x: 450, y: 480, type: 'core', width: 180, height: 44 },
      { id: 'dom', label: 'DOM Manipulation', x: 150, y: 460, type: 'recommended', width: 180, height: 36 },
      { id: 'fetch', label: 'Fetch API / Ajax', x: 150, y: 508, type: 'recommended', width: 180, height: 36 },
      { id: 'es6', label: 'ES6+ Features', x: 150, y: 556, type: 'recommended', width: 180, height: 36 },
      { id: 'modules', label: 'JS Modules (ESM)', x: 150, y: 604, type: 'recommended', width: 180, height: 36 },

      // Version Control
      { id: 'vcs', label: 'Version Control', x: 450, y: 620, type: 'core', width: 180, height: 44 },
      { id: 'git', label: 'Git', x: 720, y: 600, type: 'recommended', width: 130, height: 36 },
      { id: 'github', label: 'GitHub', x: 720, y: 648, type: 'recommended', width: 130, height: 36 },
      { id: 'gitlab', label: 'GitLab', x: 720, y: 648, type: 'optional', width: 130, height: 36 },

      // Package Managers
      { id: 'pkg', label: 'Package Managers', x: 450, y: 760, type: 'core', width: 180, height: 44 },
      { id: 'npm', label: 'npm', x: 300, y: 760, type: 'recommended', width: 90, height: 36 },
      { id: 'pnpm', label: 'pnpm', x: 300, y: 808, type: 'optional', width: 90, height: 36 },
      { id: 'yarn', label: 'yarn', x: 680, y: 760, type: 'optional', width: 90, height: 36 },

      // Frameworks
      { id: 'framework', label: 'Pick a Framework', x: 450, y: 900, type: 'core', width: 180, height: 44 },
      { id: 'react', label: 'React', x: 280, y: 880, type: 'recommended', width: 120, height: 36, description: 'Component-based UI, hooks, JSX', resources: [{ title: 'React Official Docs', url: 'https://react.dev', free: true }] },
      { id: 'vue', label: 'Vue.js', x: 280, y: 928, type: 'optional', width: 120, height: 36 },
      { id: 'svelte', label: 'Svelte', x: 640, y: 880, type: 'optional', width: 120, height: 36 },
      { id: 'angular', label: 'Angular', x: 640, y: 928, type: 'optional', width: 120, height: 36 },

      // CSS in JS / Preprocessors
      { id: 'styling', label: 'CSS Frameworks', x: 450, y: 1040, type: 'core', width: 180, height: 44 },
      { id: 'tailwind', label: 'Tailwind CSS', x: 280, y: 1020, type: 'recommended', width: 140, height: 36 },
      { id: 'sass', label: 'Sass / SCSS', x: 280, y: 1068, type: 'recommended', width: 140, height: 36 },
      { id: 'css_modules', label: 'CSS Modules', x: 640, y: 1020, type: 'optional', width: 140, height: 36 },

      // Build Tools
      { id: 'build', label: 'Build Tools', x: 450, y: 1180, type: 'core', width: 180, height: 44 },
      { id: 'vite', label: 'Vite', x: 280, y: 1160, type: 'recommended', width: 110, height: 36 },
      { id: 'webpack', label: 'Webpack', x: 640, y: 1160, type: 'optional', width: 110, height: 36 },
      { id: 'esbuild', label: 'esbuild', x: 640, y: 1208, type: 'optional', width: 110, height: 36 },

      // Testing
      { id: 'testing', label: 'Testing', x: 450, y: 1320, type: 'core', width: 180, height: 44 },
      { id: 'vitest', label: 'Vitest', x: 280, y: 1300, type: 'recommended', width: 120, height: 36 },
      { id: 'rtl', label: 'Testing Library', x: 280, y: 1348, type: 'recommended', width: 140, height: 36 },
      { id: 'cypress', label: 'Cypress (E2E)', x: 640, y: 1300, type: 'optional', width: 140, height: 36 },
      { id: 'playwright', label: 'Playwright', x: 640, y: 1348, type: 'optional', width: 140, height: 36 },

      // TypeScript
      { id: 'typescript', label: 'TypeScript', x: 450, y: 1460, type: 'core', width: 180, height: 44, description: 'Strongly typed JavaScript superset' },
      { id: 'ts_basics', label: 'Types & Interfaces', x: 280, y: 1440, type: 'recommended', width: 150, height: 36 },
      { id: 'ts_advanced', label: 'Generics & Utility Types', x: 630, y: 1440, type: 'optional', width: 185, height: 36 },

      // SSR / Meta-Frameworks
      { id: 'ssr', label: 'Meta-Frameworks', x: 450, y: 1600, type: 'core', width: 180, height: 44 },
      { id: 'nextjs', label: 'Next.js', x: 280, y: 1580, type: 'recommended', width: 120, height: 36 },
      { id: 'remix', label: 'Remix', x: 640, y: 1580, type: 'optional', width: 120, height: 36 },
      { id: 'astro', label: 'Astro', x: 640, y: 1628, type: 'optional', width: 120, height: 36 },

      // Performance
      { id: 'perf', label: 'Web Performance', x: 450, y: 1740, type: 'core', width: 180, height: 44 },
      { id: 'web_vitals', label: 'Core Web Vitals', x: 280, y: 1720, type: 'recommended', width: 150, height: 36 },
      { id: 'lazy', label: 'Lazy Loading', x: 280, y: 1768, type: 'recommended', width: 150, height: 36 },
      { id: 'caching', label: 'Caching Strategies', x: 630, y: 1720, type: 'optional', width: 160, height: 36 },

      // Final
      { id: 'pwa', label: 'Progressive Web Apps', x: 450, y: 1880, type: 'recommended', width: 200, height: 44 },
      { id: 'deploy', label: 'CI/CD & Deployment', x: 450, y: 1960, type: 'recommended', width: 200, height: 44 },
      { id: 'vercel', label: 'Vercel', x: 280, y: 1960, type: 'recommended', width: 100, height: 36 },
      { id: 'netlify', label: 'Netlify', x: 650, y: 1960, type: 'optional', width: 100, height: 36 },
    ],
    edges: [
      { from: 'internet', to: 'http', style: 'dashed' },
      { from: 'internet', to: 'dns', style: 'dashed' },
      { from: 'internet', to: 'domain', style: 'dashed' },
      { from: 'internet', to: 'hosting', style: 'dashed' },
      { from: 'internet', to: 'browsers', style: 'dashed' },
      { from: 'internet', to: 'html' },
      { from: 'html', to: 'html_basics', style: 'dashed' },
      { from: 'html', to: 'forms', style: 'dashed' },
      { from: 'html', to: 'accessibility', style: 'dashed' },
      { from: 'html', to: 'seo_basics', style: 'dashed' },
      { from: 'html', to: 'css' },
      { from: 'css', to: 'flexbox', style: 'dashed' },
      { from: 'css', to: 'grid', style: 'dashed' },
      { from: 'css', to: 'responsive', style: 'dashed' },
      { from: 'css', to: 'animations', style: 'dashed' },
      { from: 'css', to: 'js' },
      { from: 'js', to: 'dom', style: 'dashed' },
      { from: 'js', to: 'fetch', style: 'dashed' },
      { from: 'js', to: 'es6', style: 'dashed' },
      { from: 'js', to: 'modules', style: 'dashed' },
      { from: 'js', to: 'vcs' },
      { from: 'vcs', to: 'git', style: 'dashed' },
      { from: 'vcs', to: 'github', style: 'dashed' },
      { from: 'vcs', to: 'pkg' },
      { from: 'pkg', to: 'npm', style: 'dashed' },
      { from: 'pkg', to: 'pnpm', style: 'dashed' },
      { from: 'pkg', to: 'yarn', style: 'dashed' },
      { from: 'pkg', to: 'framework' },
      { from: 'framework', to: 'react', style: 'dashed' },
      { from: 'framework', to: 'vue', style: 'dashed' },
      { from: 'framework', to: 'svelte', style: 'dashed' },
      { from: 'framework', to: 'angular', style: 'dashed' },
      { from: 'framework', to: 'styling' },
      { from: 'styling', to: 'tailwind', style: 'dashed' },
      { from: 'styling', to: 'sass', style: 'dashed' },
      { from: 'styling', to: 'css_modules', style: 'dashed' },
      { from: 'styling', to: 'build' },
      { from: 'build', to: 'vite', style: 'dashed' },
      { from: 'build', to: 'webpack', style: 'dashed' },
      { from: 'build', to: 'esbuild', style: 'dashed' },
      { from: 'build', to: 'testing' },
      { from: 'testing', to: 'vitest', style: 'dashed' },
      { from: 'testing', to: 'rtl', style: 'dashed' },
      { from: 'testing', to: 'cypress', style: 'dashed' },
      { from: 'testing', to: 'playwright', style: 'dashed' },
      { from: 'testing', to: 'typescript' },
      { from: 'typescript', to: 'ts_basics', style: 'dashed' },
      { from: 'typescript', to: 'ts_advanced', style: 'dashed' },
      { from: 'typescript', to: 'ssr' },
      { from: 'ssr', to: 'nextjs', style: 'dashed' },
      { from: 'ssr', to: 'remix', style: 'dashed' },
      { from: 'ssr', to: 'astro', style: 'dashed' },
      { from: 'ssr', to: 'perf' },
      { from: 'perf', to: 'web_vitals', style: 'dashed' },
      { from: 'perf', to: 'lazy', style: 'dashed' },
      { from: 'perf', to: 'caching', style: 'dashed' },
      { from: 'perf', to: 'pwa' },
      { from: 'pwa', to: 'deploy' },
      { from: 'deploy', to: 'vercel', style: 'dashed' },
      { from: 'deploy', to: 'netlify', style: 'dashed' },
    ],
  },

  ds: {
    id: 'ds',
    title: 'Data Science',
    accentColor: '#0d9488',
    canvasWidth: 900,
    canvasHeight: 2000,
    nodes: [
      { id: 'python', label: 'Python', x: 450, y: 60, type: 'core', width: 180, height: 44 },
      { id: 'syntax', label: 'Syntax & Data Types', x: 720, y: 40, type: 'recommended', width: 190, height: 36 },
      { id: 'oop', label: 'OOP & Functions', x: 720, y: 88, type: 'recommended', width: 190, height: 36 },
      { id: 'fileio', label: 'File I/O', x: 720, y: 136, type: 'recommended', width: 190, height: 36 },

      { id: 'math', label: 'Mathematics', x: 450, y: 200, type: 'core', width: 180, height: 44 },
      { id: 'linalg', label: 'Linear Algebra', x: 150, y: 180, type: 'recommended', width: 160, height: 36 },
      { id: 'calculus', label: 'Calculus', x: 150, y: 228, type: 'recommended', width: 160, height: 36 },
      { id: 'stats', label: 'Statistics & Probability', x: 150, y: 276, type: 'recommended', width: 200, height: 36 },

      { id: 'sql', label: 'SQL', x: 450, y: 360, type: 'core', width: 180, height: 44 },
      { id: 'select', label: 'SELECT & Filtering', x: 720, y: 340, type: 'recommended', width: 180, height: 36 },
      { id: 'joins', label: 'Joins & Aggregations', x: 720, y: 388, type: 'recommended', width: 180, height: 36 },
      { id: 'window', label: 'Window Functions', x: 720, y: 436, type: 'recommended', width: 180, height: 36 },

      { id: 'numpy', label: 'NumPy', x: 350, y: 500, type: 'core', width: 140, height: 44 },
      { id: 'pandas', label: 'Pandas', x: 550, y: 500, type: 'core', width: 140, height: 44 },
      { id: 'arrays', label: 'Arrays & Matrices', x: 150, y: 500, type: 'recommended', width: 170, height: 36 },
      { id: 'df_ops', label: 'DataFrame Operations', x: 720, y: 500, type: 'recommended', width: 190, height: 36 },

      { id: 'viz', label: 'Data Visualization', x: 450, y: 640, type: 'core', width: 180, height: 44 },
      { id: 'matplotlib', label: 'Matplotlib', x: 280, y: 620, type: 'recommended', width: 140, height: 36 },
      { id: 'seaborn', label: 'Seaborn', x: 280, y: 668, type: 'recommended', width: 140, height: 36 },
      { id: 'plotly', label: 'Plotly', x: 640, y: 620, type: 'optional', width: 130, height: 36 },

      { id: 'eda', label: 'Exploratory Data Analysis', x: 450, y: 780, type: 'core', width: 210, height: 44 },
      { id: 'cleaning', label: 'Data Cleaning', x: 280, y: 760, type: 'recommended', width: 150, height: 36 },
      { id: 'feature_eng', label: 'Feature Engineering', x: 640, y: 760, type: 'recommended', width: 165, height: 36 },

      { id: 'ml', label: 'Machine Learning', x: 450, y: 920, type: 'core', width: 180, height: 44 },
      { id: 'supervised', label: 'Supervised Learning', x: 250, y: 900, type: 'recommended', width: 175, height: 36 },
      { id: 'unsupervised', label: 'Unsupervised Learning', x: 640, y: 900, type: 'recommended', width: 185, height: 36 },
      { id: 'sklearn', label: 'scikit-learn', x: 250, y: 948, type: 'recommended', width: 175, height: 36 },
      { id: 'eval', label: 'Model Evaluation', x: 640, y: 948, type: 'recommended', width: 185, height: 36 },

      { id: 'dl', label: 'Deep Learning', x: 450, y: 1080, type: 'core', width: 180, height: 44 },
      { id: 'nn', label: 'Neural Networks', x: 280, y: 1060, type: 'recommended', width: 155, height: 36 },
      { id: 'pytorch', label: 'PyTorch', x: 280, y: 1108, type: 'recommended', width: 155, height: 36 },
      { id: 'cnn', label: 'CNN (Computer Vision)', x: 630, y: 1060, type: 'optional', width: 185, height: 36 },
      { id: 'nlp', label: 'NLP & Transformers', x: 630, y: 1108, type: 'optional', width: 185, height: 36 },

      { id: 'mlops', label: 'MLOps', x: 450, y: 1240, type: 'core', width: 180, height: 44 },
      { id: 'mlflow', label: 'MLflow', x: 280, y: 1220, type: 'recommended', width: 130, height: 36 },
      { id: 'docker_ml', label: 'Docker', x: 280, y: 1268, type: 'recommended', width: 130, height: 36 },
      { id: 'fastapi_ml', label: 'FastAPI Serving', x: 630, y: 1220, type: 'recommended', width: 155, height: 36 },
      { id: 'cloud_ml', label: 'Cloud Platforms', x: 630, y: 1268, type: 'optional', width: 155, height: 36 },

      { id: 'communication', label: 'Communication & Impact', x: 450, y: 1400, type: 'recommended', width: 220, height: 44 },
      { id: 'notebooks', label: 'Jupyter Notebooks', x: 260, y: 1400, type: 'recommended', width: 170, height: 36 },
      { id: 'storytelling', label: 'Data Storytelling', x: 640, y: 1400, type: 'recommended', width: 160, height: 36 },
    ],
    edges: [
      { from: 'python', to: 'syntax', style: 'dashed' },
      { from: 'python', to: 'oop', style: 'dashed' },
      { from: 'python', to: 'fileio', style: 'dashed' },
      { from: 'python', to: 'math' },
      { from: 'math', to: 'linalg', style: 'dashed' },
      { from: 'math', to: 'calculus', style: 'dashed' },
      { from: 'math', to: 'stats', style: 'dashed' },
      { from: 'math', to: 'sql' },
      { from: 'sql', to: 'select', style: 'dashed' },
      { from: 'sql', to: 'joins', style: 'dashed' },
      { from: 'sql', to: 'window', style: 'dashed' },
      { from: 'sql', to: 'numpy' },
      { from: 'sql', to: 'pandas' },
      { from: 'numpy', to: 'arrays', style: 'dashed' },
      { from: 'pandas', to: 'df_ops', style: 'dashed' },
      { from: 'numpy', to: 'viz' },
      { from: 'pandas', to: 'viz' },
      { from: 'viz', to: 'matplotlib', style: 'dashed' },
      { from: 'viz', to: 'seaborn', style: 'dashed' },
      { from: 'viz', to: 'plotly', style: 'dashed' },
      { from: 'viz', to: 'eda' },
      { from: 'eda', to: 'cleaning', style: 'dashed' },
      { from: 'eda', to: 'feature_eng', style: 'dashed' },
      { from: 'eda', to: 'ml' },
      { from: 'ml', to: 'supervised', style: 'dashed' },
      { from: 'ml', to: 'unsupervised', style: 'dashed' },
      { from: 'ml', to: 'sklearn', style: 'dashed' },
      { from: 'ml', to: 'eval', style: 'dashed' },
      { from: 'ml', to: 'dl' },
      { from: 'dl', to: 'nn', style: 'dashed' },
      { from: 'dl', to: 'pytorch', style: 'dashed' },
      { from: 'dl', to: 'cnn', style: 'dashed' },
      { from: 'dl', to: 'nlp', style: 'dashed' },
      { from: 'dl', to: 'mlops' },
      { from: 'mlops', to: 'mlflow', style: 'dashed' },
      { from: 'mlops', to: 'docker_ml', style: 'dashed' },
      { from: 'mlops', to: 'fastapi_ml', style: 'dashed' },
      { from: 'mlops', to: 'cloud_ml', style: 'dashed' },
      { from: 'mlops', to: 'communication' },
      { from: 'communication', to: 'notebooks', style: 'dashed' },
      { from: 'communication', to: 'storytelling', style: 'dashed' },
    ],
  },

  be: {
    id: 'be',
    title: 'Backend Development',
    accentColor: '#8b5cf6',
    canvasWidth: 900,
    canvasHeight: 2100,
    nodes: [
      { id: 'lang', label: 'Pick a Language', x: 450, y: 60, type: 'core', width: 180, height: 44 },
      { id: 'nodejs', label: 'Node.js', x: 250, y: 50, type: 'recommended', width: 120, height: 36 },
      { id: 'python_be', label: 'Python', x: 250, y: 98, type: 'recommended', width: 120, height: 36 },
      { id: 'go', label: 'Go', x: 680, y: 50, type: 'optional', width: 90, height: 36 },
      { id: 'java', label: 'Java', x: 680, y: 98, type: 'optional', width: 90, height: 36 },
      { id: 'rust', label: 'Rust', x: 680, y: 146, type: 'optional', width: 90, height: 36 },

      { id: 'os', label: 'OS & Linux Basics', x: 450, y: 220, type: 'core', width: 180, height: 44 },
      { id: 'cli', label: 'Terminal & CLI', x: 280, y: 200, type: 'recommended', width: 155, height: 36 },
      { id: 'processes', label: 'Processes & Threads', x: 640, y: 200, type: 'recommended', width: 175, height: 36 },
      { id: 'networking', label: 'Networking Basics', x: 640, y: 248, type: 'recommended', width: 175, height: 36 },

      { id: 'db', label: 'Databases', x: 450, y: 380, type: 'core', width: 180, height: 44 },
      { id: 'postgres', label: 'PostgreSQL', x: 280, y: 360, type: 'recommended', width: 140, height: 36 },
      { id: 'mysql', label: 'MySQL', x: 280, y: 408, type: 'optional', width: 140, height: 36 },
      { id: 'mongodb', label: 'MongoDB', x: 630, y: 360, type: 'optional', width: 140, height: 36 },
      { id: 'redis_be', label: 'Redis', x: 630, y: 408, type: 'recommended', width: 140, height: 36 },

      { id: 'api', label: 'APIs', x: 450, y: 540, type: 'core', width: 180, height: 44 },
      { id: 'rest', label: 'REST API Design', x: 280, y: 520, type: 'recommended', width: 155, height: 36 },
      { id: 'graphql', label: 'GraphQL', x: 280, y: 568, type: 'optional', width: 155, height: 36 },
      { id: 'grpc', label: 'gRPC', x: 630, y: 520, type: 'optional', width: 130, height: 36 },
      { id: 'openapi', label: 'OpenAPI / Swagger', x: 630, y: 568, type: 'recommended', width: 165, height: 36 },

      { id: 'auth', label: 'Auth & Security', x: 450, y: 700, type: 'core', width: 180, height: 44 },
      { id: 'jwt', label: 'JWT / OAuth2', x: 280, y: 680, type: 'recommended', width: 140, height: 36 },
      { id: 'sessions', label: 'Sessions & Cookies', x: 280, y: 728, type: 'recommended', width: 165, height: 36 },
      { id: 'owasp', label: 'OWASP Top 10', x: 630, y: 680, type: 'recommended', width: 150, height: 36 },
      { id: 'ssl', label: 'HTTPS & TLS', x: 630, y: 728, type: 'recommended', width: 150, height: 36 },

      { id: 'caching', label: 'Caching', x: 450, y: 860, type: 'core', width: 180, height: 44 },
      { id: 'redis_cache', label: 'Redis Caching', x: 280, y: 840, type: 'recommended', width: 150, height: 36 },
      { id: 'cdn', label: 'CDN & Edge Caching', x: 630, y: 840, type: 'optional', width: 165, height: 36 },

      { id: 'devops', label: 'DevOps & CI/CD', x: 450, y: 1000, type: 'core', width: 180, height: 44 },
      { id: 'docker', label: 'Docker', x: 280, y: 980, type: 'recommended', width: 130, height: 36 },
      { id: 'k8s', label: 'Kubernetes', x: 280, y: 1028, type: 'optional', width: 130, height: 36 },
      { id: 'github_actions', label: 'GitHub Actions', x: 630, y: 980, type: 'recommended', width: 160, height: 36 },
      { id: 'cloud_be', label: 'Cloud (AWS/GCP)', x: 630, y: 1028, type: 'recommended', width: 160, height: 36 },

      { id: 'messaging', label: 'Message Queues', x: 450, y: 1160, type: 'recommended', width: 180, height: 44 },
      { id: 'kafka', label: 'Apache Kafka', x: 280, y: 1140, type: 'optional', width: 150, height: 36 },
      { id: 'rabbitmq', label: 'RabbitMQ', x: 630, y: 1140, type: 'optional', width: 150, height: 36 },

      { id: 'sysdesign', label: 'System Design', x: 450, y: 1300, type: 'core', width: 180, height: 44 },
      { id: 'scalability', label: 'Scalability Patterns', x: 280, y: 1280, type: 'recommended', width: 170, height: 36 },
      { id: 'microservices', label: 'Microservices', x: 280, y: 1328, type: 'optional', width: 170, height: 36 },
      { id: 'observability', label: 'Observability & Logs', x: 630, y: 1280, type: 'recommended', width: 175, height: 36 },
      { id: 'sla', label: 'SLAs & SLOs', x: 630, y: 1328, type: 'optional', width: 175, height: 36 },
    ],
    edges: [
      { from: 'lang', to: 'nodejs', style: 'dashed' }, { from: 'lang', to: 'python_be', style: 'dashed' },
      { from: 'lang', to: 'go', style: 'dashed' }, { from: 'lang', to: 'java', style: 'dashed' }, { from: 'lang', to: 'rust', style: 'dashed' },
      { from: 'lang', to: 'os' },
      { from: 'os', to: 'cli', style: 'dashed' }, { from: 'os', to: 'processes', style: 'dashed' }, { from: 'os', to: 'networking', style: 'dashed' },
      { from: 'os', to: 'db' },
      { from: 'db', to: 'postgres', style: 'dashed' }, { from: 'db', to: 'mysql', style: 'dashed' }, { from: 'db', to: 'mongodb', style: 'dashed' }, { from: 'db', to: 'redis_be', style: 'dashed' },
      { from: 'db', to: 'api' },
      { from: 'api', to: 'rest', style: 'dashed' }, { from: 'api', to: 'graphql', style: 'dashed' }, { from: 'api', to: 'grpc', style: 'dashed' }, { from: 'api', to: 'openapi', style: 'dashed' },
      { from: 'api', to: 'auth' },
      { from: 'auth', to: 'jwt', style: 'dashed' }, { from: 'auth', to: 'sessions', style: 'dashed' }, { from: 'auth', to: 'owasp', style: 'dashed' }, { from: 'auth', to: 'ssl', style: 'dashed' },
      { from: 'auth', to: 'caching' },
      { from: 'caching', to: 'redis_cache', style: 'dashed' }, { from: 'caching', to: 'cdn', style: 'dashed' },
      { from: 'caching', to: 'devops' },
      { from: 'devops', to: 'docker', style: 'dashed' }, { from: 'devops', to: 'k8s', style: 'dashed' }, { from: 'devops', to: 'github_actions', style: 'dashed' }, { from: 'devops', to: 'cloud_be', style: 'dashed' },
      { from: 'devops', to: 'messaging' },
      { from: 'messaging', to: 'kafka', style: 'dashed' }, { from: 'messaging', to: 'rabbitmq', style: 'dashed' },
      { from: 'messaging', to: 'sysdesign' },
      { from: 'sysdesign', to: 'scalability', style: 'dashed' }, { from: 'sysdesign', to: 'microservices', style: 'dashed' }, { from: 'sysdesign', to: 'observability', style: 'dashed' }, { from: 'sysdesign', to: 'sla', style: 'dashed' },
    ],
  },
}
