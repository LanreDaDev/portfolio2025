
type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
  publishedAt: string
}

type SocialLink = {
  label: string
  link: string
}






export const BLOG_POSTS: BlogPost[] = [
  {
  title: 'Uber\'s Fatal Flaw: When Your Best Customer Becomes Your Biggest Liability',
  description:
   'Uber built an empire by solving 2012\'s problems with 2012\'s logic. The world moved on. Uber didn\'t. An analysis of the structural misalignment that makes Uber vulnerable to disruption by the very market it created.',
  link: '/blog/uber-fatal-flaw-defined',
  publishedAt: '2025-12-16',
  uid: 'blog-uber-flaw-defined',
},
  {
  title: '2,000+ Uber Rides Later: A Different Take on Product-Market Fit',
  description:
    'A professional Uber driver\'s journey from burnout to building a sustainable system. What I learned about product-market fit, emotional labor, and the hidden engine of scale.',
  link: '/blog/uber-pmf-alternate',
  publishedAt: '2025-12-11',
  uid: 'blog-uber-pmf-alternate',
},
  {
  title: 'I Spent a Year Trying to Hack Uber. I Found Its Fatal Flaw.',
  description:
    'A software engineer attempts to reverse-engineer the ride-sharing system. What I discovered about Uber\'s algorithm—and its perfection—changed how I think about systems design.',
  link: '/blog/uber-fatal-flaw',
  publishedAt: '2025-12-05',
  uid: 'blog-uber-flaw',
}

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

export const EMAIL = 'lanre@olade.com'
