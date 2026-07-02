import { Icons } from "@/components/icons";
import { HomeIcon, icons, FileText, FolderGit2 } from "lucide-react";
import { SiLeetcode } from "react-icons/si";


export const DATA = {
  name: "Prince Kumar",
  initials: "Pk",
  url: "",
  location: "Patna, India",
  description: "Capable of handling end-to-end fullstack projects and codebases.",
  avatarUrl: "/photo.png",
  skills: [
    {text:"Next.js", icons: "nextjs.png"}, 
    {text:"Javascript", icons: "javascript.png"}, 
    {text:"Typescript", icons: "typescript.png"}, 
    {text:"C/C++", icons: "cpp.png"}, 
    {text:"React.js", icons: "react.png"}, 
    {text:"Redux", icons: "redux.png"}, 
    {text:"Node.js", icons: "nodejs.png"}, 
    {text:"Express.js", icons: "expressjs.png"}, 
    {text:"MongoDB", icons: "mongodb.png"}, 
    {text:"PostgreSQL", icons: "postgresql.png"}, 
    {text:"Prisma", icons: "prisma.png"}, 
    {text:"Tailwind CSS", icons: "tailwindcss.png"}, 
    {text:"Postman", icons: "postman.png"}, 
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }, 
  ],
  navbardocs:[
    { href: "/Prince_Resume.pdf", icon: FileText, newtab: true, label: "Resume" },
    { href: "https://leetcode.com/u/pr0217291/", icon: SiLeetcode, newtab: true, label: "LeetCode" },
    { href: "#projects", icon: FolderGit2, newtab: false, label: "Projects" },
  ], 
  contact: {
    email: "princekr969@outlook.com",
    tel: "9508619642",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/princekr969",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/prince-kumar-83a81528b/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:princekr969@outlook.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Software Developer (Summer Colloquium)",
      href: "",
      badges: [],
      location: "ABV-IIITM Gwalior $|$ SLDC Odisha Project",
      title: "Web Development Intern",
      logoUrl: "",
      start: "May 2026",
      end: "Present",
      description:[
    // \resumeItem{Revamped the daily reporting module with \textbf{dynamic date-range selection}, eliminating hardcoded month/year constraints and cutting report generation friction for end users.}
    // \resumeItem{Developed and integrated an \textbf{Hour-Ahead Load Forecasting model} into the \texttt{new\_prediction\_models} pipeline, extending real-time grid analytics with sub-hourly predictive capabilities.}
        "Architected a centralized API abstraction layer for the SLDC Odisha frontend, decoupling data-fetching logic from UI components and reducing redundant service calls across 10+ modules.",
        "Revamped the daily reporting module with dynamic date-range selection, eliminating hardcoded month/year constraints and cutting report generation friction for end users.",
        "Developed and integrated an Hour-Ahead Load Forecasting model into the new_prediction_models pipeline, extending real-time grid analytics with sub-hourly predictive capabilities.",
      ],
      technologies: ["React", "Node.js", "Tailwind CSS", "PostgreSQL", "Postman"],
    },
    {
      company: "Sangillence",
      href: "",
      badges: [],
      location: "Remote",
      title: "Tech-Lead",
      logoUrl: "/sangillence.png",
      start: "Oct 2025",
      end: "March 2026",
      description:[
        "Created Sangillence to host an Open Book Olympiad, addressing rote learning limitations by building a React-based platform with interactive 3D content that evaluates application-based skills over memorization.",
        "Designed and implemented Olympiad student registration and on-site identity verification systems, including secure form authentication and live photo capture for participant validation.",
      ],
      technologies: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Apps script"],
    },
    {
      company: "Bluestock Fintech",
      href: "",
      badges: [],
      location: "Remote",
      title: "Web Development Intern",
      logoUrl: "/bluestock.png",
      start: "May 2025",
      end: "June 2025",
      description:[
        "Built a production-ready IPO web app using Node.js, REST API, and PostgreSQL.",
        "Created a responsive front-end with React, CSS, JavaScript, and Bootstrap.",
        "Developed features such as IPO listing, search / filter, and document download (RHP/DRHP).",
        "Designed secure admin panel for managing IPO data and file uploads.",
        "Followed system and UI/UX designs via Figma; tested APIs using Postman.",
      ],
      technologies: ["React", "Node.js", "Tailwind CSS", "PostgreSQL", "Bootstrap", "Figma", "Postman"],
    },
    
  ],
  education: [
    {
      school: "Atal Bihari Vajpayee Indian Institute of Information Technology and Management",
      href: "",
      degree: "B.Tech in Computer Science",
      details: "Coursework: Object Oriented Programming, Data Structures and Algorithms, Database Systems, Theory of Computation, Operating System, Computer Organization and Architecture, Computer Networks, Microprocessor and Interfacing, Compiler Design",
      logoUrl: "/iiitm-logo.jpg", 
      start: "Aug 2023",
      end: "Present",
    },
  ],
  certificates: [
    {
      title: "Dynamic Programming Camp",
      issuer: "AlgoUniversity",
      date: "",
      credentialUrl: "",
      logoUrl: "/algouniversity.png",
      imageUrl: "/dp-camp-cert.png",
    },
  ],
  projects: [
    {
  title: "Code-Buddy",
  href: "https://github.com/princekr969/Code-Buddy",
  dates: "Feb 2026 - Feb 2026",
  active: true,
  description:
    "Built a real-time collaborative code editor with live cursor tracking and instant sync using Yjs CRDT and Socket.IO. Integrated Monaco Editor with multi-file tab navigation and JDoodle API for 25+ language code execution with JWT auth and in-editor chat.",
  technologies: [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Socket.IO",
    "Yjs",
    "Monaco Editor",
    "JDoodle API",
    "JWT",
  ],
  links: [
    {
      type: "Live",
      href: "/",
      icon: <Icons.external className="size-3" />,
    },
    {
      type: "Source",
      href: "https://github.com/princekr969/Code-Buddy",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/code-buddy.png",
  video: "",
},
    {
      title: "Sangillence",
      href: "https://sangillence.com/", 
      dates: "Sept 2025 - Present",
      active: true,
      description:"Developed Sangillence to transform traditional testing through React-based Open Book Olympiads with interactive 3D content. Created full-stack registration and identity verification systems featuring secure forms and live photo validation.",
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Apps script"
      ],
      links: [
        {
          type: "Live",
          href: "https://sangillence.com/",
          icon: <Icons.external className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/princekr969/Sangillence", 
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sangillence1.png", 
      video: "",
    },
    {
      title: "EdTech Platform",
      href: "https://github.com/princekr969/Winter-Project-Edtech", 
      dates: "", 
      active: false,
      description:"Built a secure MERN-stack education platform with JWT/OAuth 2.0 auth, Cloudinary media handling, reusable React forms, and protected backend APIs (password hashing, CORS, cookies).",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "OAuth 2.0",
        "Multer",
        "Cloudinary",
        "Redux",
        "React Hook Form",
        "React Router"
      ],
      links: [
        {
          type: "Live",
          href: "",
          icon: <Icons.external className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/princekr969/Winter-Project-Edtech", 
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/edumaxi.png", 
      video: "",
    },
  ],
} as const;