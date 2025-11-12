type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Semantic Cofounder Finder',
    description:
      'A semantic search engine that helps founders discover compatible cofounders using vector similarity and natural-language queries. Built with Next.js, Supabase pgvector, and OpenAI embeddings.',
    link: 'https://your-demo-or-video-link.com',
    video: 'https://your-demo-video-url.com',
    id: 'project1',
  },
  {
    name: 'AI Video Interview Analyzer',
    description:
      'An AI-powered video interview simulator that records sessions, transcribes speech, and evaluates tone and body language for feedback. Uses Whisper + GCP Vision + React video components.',
    link: 'https://your-demo-or-video-link.com',
    video: 'https://your-demo-video-url.com',
    id: 'project2',
  },
  {
    name: 'Video Resume Builder',
    description:
      'Tool for creating short, sequential video responses to job or startup questions — a modern take on the video résumé. Integrates Next.js, Supabase storage, and lightweight AI captioning.',
    link: 'https://your-demo-or-video-link.com',
    video: 'https://your-demo-video-url.com',
    id: 'project3',
  },
  {
    name: 'AI Workflow Sandbox',
    description:
      'Visual tool to prototype and chain AI model calls — an experimental playground for applied AI pipelines. Migrated from Replicate to GCP to optimize cost and latency.',
    link: 'https://your-demo-or-video-link.com',
    video: 'https://your-demo-video-url.com',
    id: 'project4',
  },
];


export const WORK_EXPERIENCE: WorkExperience[] = [
   {
    company: 'Olade',
    title: 'AI Engineer',
  start: 'Mar 2023',
end: 'Present',
    link: 'https://olade.ca',
    id: 'work1',

  },
  {
    company: 'Novi Connect',
    title: 'Senior Full-Stack Engineer',
     start: 'Jun 2022',
 end: 'Jan 2023',
    link: '',
    id: 'work2',

  },
 
  {
    company: 'Virtue App',
    title: 'Senior Full-Stack Engineer',
    start: 'Mar 2021',
    end: 'Apr 2022',
    link: '',
    id: 'work3',

  },
  {
    company: 'MDAlly',
    title: 'Full-Stack Engineer',
    start: 'Jun 2020',
    end: 'Nov 2021',
    link: '',
    id: 'work4',

  },
];


export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'What 1,000+ Hours and a 4.98 Uber Rating Taught Me About Product-Market Fit',
    description:
      'Lessons on incentives, feedback loops, and user obsession from 1,000 hours behind the wheel.',
    link: '/blog/uber-product-market-fit',
    uid: 'blog-1',
  },
  {
    title: 'The Only Way to Beat Uber Is to Fix the One Thing They Ignore',
    description:
      'Exploring the silent gap in Uber’s product strategy — and what it teaches about customer intimacy and emotional UX.',
    link: '/blog/beat-uber-by-fixing-the-gap',
    uid: 'blog-2',
  },
  {
    title: 'How 2,000 Uber Rides Made Me a Better Engineer',
    description:
      'Driving taught me more about system design, patience, and feedback loops than any tech job ever did.',
    link: '/blog/uber-taught-me-engineering',
    uid: 'blog-3',
  },
  {
    title: 'Why the Uber Product Is Almost Perfect',
    description:
      'A breakdown of Uber’s product architecture through the lens of incentives, data, and trust design.',
    link: '/blog/why-uber-product-is-perfect',
    uid: 'blog-4',
  },
  {
    title: 'How I Built a Semantic Cofounder Finder with AI',
    description:
      'From embeddings to vector search — lessons in building an AI people search engine that actually worked.',
    link: '/blog/semantic-cofounder-finder',
    uid: 'blog-5',
  },
  {
    title: 'AI Is the Easy Part — Everything Else Is Product Work',
    description:
      'What I learned after shipping multiple AI projects: it’s not the model, it’s the feedback loop.',
    link: '/blog/ai-is-the-easy-part',
    uid: 'blog-6',
  },
  {
    title: 'The 3-Year Gap That Taught Me Everything About Resilience',
    description:
      'Rebuilding after career stagnation — lessons on discipline, self-belief, and the cost of persistence.',
    link: '/blog/resilience-gap-story',
    uid: 'blog-7',
  },
  {
    title: 'Building the Future of Video Resumes with AI',
    description:
      'Rethinking professional storytelling through interactive video, AI, and UX design.',
    link: '/blog/video-resume-ai',
    uid: 'blog-8',
  },
  {
    title: 'Latency, Cost, and Sanity: Lessons from AI Inference in Production',
    description:
      'What I learned scaling inference on GCP and AWS — and how to balance cost, speed, and reliability.',
    link: '/blog/ai-inference-lessons',
    uid: 'blog-9',
  },
];



export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/LanreDaDev',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/lanreadebayo_',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/lanreadebayoweb/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/mr.lanreadebayo/',
  },
]

export const EMAIL = 'hello@lanreadebayo.com'
