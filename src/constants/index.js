export const personalInfo = {
  name: "Sugatraj Sarwade",
  role: "Full Stack Developer",
  description: "I develop 3D visuals, user interfaces, and web applications",
  email: "contact@sugatrajsarwade.com", // Replace with your email
  location: "India", // Replace with your location
  github: "https://github.com/yourusername", // Replace with your GitHub
  linkedin: "https://linkedin.com/in/yourusername", // Replace with your LinkedIn
}

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

export const skills = [
  {
    name: "React JS",
    icon: "/icons/react.png", // We'll add these icons later
    level: "Advanced",
  },
  {
    name: "Three.js",
    icon: "/icons/threejs.png",
    level: "Intermediate",
  },
  {
    name: "JavaScript",
    icon: "/icons/javascript.png",
    level: "Advanced",
  },
  {
    name: "TypeScript",
    icon: "/icons/typescript.png",
    level: "Intermediate",
  },
  // Add more skills as needed
]

export const experiences = [
  {
    title: "Your Position",
    company_name: "Company Name",
    icon: "/company/company1.png",
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // Add more experiences
]

export const projects = [
  {
    name: "Project Name",
    description: "Project description goes here. Explain what the project does and what technologies were used.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      // Add more tags
    ],
    image: "/projects/project1.png",
    source_code_link: "https://github.com/",
    live_demo_link: "https://project-demo.com",
  },
  // Add more projects
]

export const testimonials = [
  {
    testimonial: "Client testimonial goes here.",
    name: "Client Name",
    designation: "Position",
    company: "Company",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  // Add more testimonials
]

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: "twitter",
  },
  // Add more social links
]

export const themes = {
  colors: {
    primary: "#915EFF",
    secondary: "#804dee",
    tertiary: "#050816",
    text: {
      primary: "#FFFFFF",
      secondary: "#dfd9ff",
      muted: "#aaa6c3",
    },
    background: {
      default: "#050816",
      paper: "#1d1836",
    },
  },
  gradients: {
    violet: "linear-gradient(-90deg, #804dee 0%, rgba(60, 51, 80, 0) 100%)",
  },
} 