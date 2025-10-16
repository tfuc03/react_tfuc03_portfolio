import {
  RiFacebookBoxFill,
  RiGithubFill,
  RiLinkedinFill,
} from "@remixicon/react";

export const navItems = [
  {
    id: 1,
    label: "Home",
    href: "#home",
  },
  {
    id: 2,
    label: "About me",
    href: "#about",
  },
  {
    id: 3,
    label: "Resume",
    href: "#resume",
  },
  {
    id: 4,
    label: "Projects",
    href: "#projects",
  },
  {
    id: 5,
    label: "Contact",
    href: "#contact",
  },
];

export const heroIcons = [
  // {
  //   id: 1,
  //   icon: RiLinkedinFill,
  // },
  {
    id: 2,
    icon: RiFacebookBoxFill,
    href: "https://www.facebook.com/pham.nguyen.trong.phuc.2025"
  },
  {
    id: 3,
    icon: RiGithubFill,
    href: "https://github.com/tfuc03"
  },
];

export const aboutItems = [
  {
    id: 1,
    label: "Front-End: HTML, CSS, JavaScript (ES6+), React.js, Next.js, Tailwind CSS",
  },
  {
    id: 2,
    label: "Tools & Workflow: Git/GitHub, VS Code, Vite, Docker (basic), Postman, Figma.",
  },
  {
    id: 3,
    label: "Programming & Data: Java, C#, Python, OOP, SQL, MongoDB.",
  },
  {
    id: 4,
    label: "Design & Content Skills:Adobe Photoshop (basic), Content Creation.",
  },
  {
    id: 5,
    label: "Soft Skills: Fast Learning, Teamwork, Communication, Problem-solving, Adaptability, Time Management.",
  },
];

export const ResumeItems = [
  {
    id: 1,
    title: "Projects & Activities",
    list: [
      {
        role: "Front-end Developer",
        label: "Agency System Web App (Mini Version)",
        time: "2025",
      },
      {
        label: "Coffee Website – Modern Landing Page",
        role: "Front-end Developer",
        time: "2025",
      },
      {
        label: "React Portfolio template",
        role: "Front-end Developer",
        time: "2025",
      },
    ],
  },
  {
    id: 2,
    title: "Education",
    list: [
      {
        label: "Ho Chi Minh City University of Foreign Languages – Information Technology (Huflit)",
        role: "Software Engineering",
        time: "2021",
      },
 
    ],
  },
  {
    id: 3,
    title: "Certification",
    list: [
     // {
     //   label: "515",
     //   role: "Toeic Certification",
     //   time: "2024",
     // },
      {
        label: "Intermediate Python on Datacamp",
        role: "Python",
        time: "2025",
      },
      {
        label: "Data Manipulation with pandas",
        role: "Python",
        time: "2025",
      },
 
    ],
  },
];

export const ProjectsItems = [
  {
    id: 1,
    title: "Agency System Web App (Mini Version)",
    src: "/images/portfolio-1.png",
    text: "Developed a sleek and responsive web application using React.js with Tailwind CSS for modern UI design and React Hot Toast for real-time notifications. The project features a service showcase, company introduction, client testimonials, and essential resources—all crafted to deliver a professional, user-friendly experience. This work demonstrates not only strong technical skills but also a focus on building digital solutions that truly align with client needs.",
    href: "https://react-agency-template.vercel.app/"
  },
  {
    id: 2,
    title: "Tfuc03 | Portfolio",
    src: "/images/portfolio-3.png",
    text: "A modern, responsive portfolio built with React, Tailwind CSS, and Framer Motion, designed to highlight my projects with smooth, engaging animations. Beyond showcasing my work, it serves as a professional hub where recruiters and collaborators can easily connect with me. This project reflects my focus on clean design, performance, and user experience, while demonstrating my ability to combine creativity with functionality.",
    href: "https://react-tfuc03-portfolio.vercel.app/"
  },
  {
    id: 3,
    title: "Coffee Website – Modern Landing Page",
    src: "/images/portfolio-2.png",
    text: "Crafted a sleek and responsive coffee landing page using pure HTML, CSS, and JavaScript, blending aesthetic design with seamless interactivity. Features a striking hero section, smooth navigation, and engaging CTAs that elevate the brand’s digital presence. This project showcases not only solid front-end fundamentals but also a strong eye for design, storytelling, and user experience.",
    href: "https://coffee-website-ipv-1.vercel.app/"
  },
  
  // {
  //   id: 4,
  //   title: "RemoveBG",
  //   src: "/images/portfolio-2.png",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur temporibus asperiores, quia adipisci repellendus",
  //   href: ""
  // },
];

export const contactItems = [
  {
    id: 1,
    label: "Email:",
    link: " phamphucdev1n@gmail.com",
  },
  {
    id: 2,
    label: "Phone:",
    link: " +84 3847 643 82",
  },
  {
    id: 3,
    label: "Location:",
    link: " Tan Phu, Ho Chi Minh City",
  },
];