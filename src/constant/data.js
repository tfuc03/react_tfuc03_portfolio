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
    label: "Front-End: HTML, CSS, JavaScript (ES6+), React.js, Tailwind CSS",
  },
  {
    id: 2,
    label: "Tools & Workflow: Git/GitHub, VS Code, Vite, Docker, Figma.",
  },
  {
    id: 3,
    label: "Programming & Data: Java, C#, Python, NoSQL, MongoDB.",
  },
  {
    id: 4,
    label: "Design & Content Skills:Adobe Photoshop, Capcut.",
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

      {
        label: "Hands On React JS From Beginner to Expert",
        role: "ReactJS",
        time: "2025",
      },
      {
        label: "MongoDB - The Complete MongoDB Developer's Course",
        role: "MongoDB",
        time: "2025",
      },
      {
        label: "Mastering Docker Essentials - Hands-on DevOps",
        role: "Docker",
        time: "2025",
      },

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
        label: "Git and GitHub MasterClass: Git Workflow, Commands",
        role: "Github",
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
    text: "A project about Agency where client can find and contact with suitable Agency. It's look like Upwork, Fiverr... I created it with knowledge of ReactJS and Taiwindcss without AI. The interface is friendly and modern. I use Framer Motion and Toaster for effects and notifications. The project includes a service introduction, company profile, client testimonials, and essential resources—all designed to deliver a professional and user-friendly experience.",
    href: "https://react-agency-template.vercel.app/"
  },
  {
    id: 2,
    title: "Tfuc03 | Portfolio",
    src: "/images/portfolio-3.png",
    text: "This is my portfolio where I show my skills, projects. Using React, Tailwindcss and animation with Framer Motion without AI. This is a modern portfolio with respensive. I used Toaster to make popup notification and Web3Forms to get and send recruitment information to my personal email if the employer finds me suitable for them.",
    href: "https://react-tfuc03-portfolio.vercel.app/"
  },
  {
    id: 3,
    title: "Coffee Website – Modern Landing Page",
    src: "/images/portfolio-2.png",
    text: "Landing page with the idea of ​​a coffee shop. I used HTML, CSS and JS to create this website. Customers can see the products, the story of the shop as well as reviews and comments from customers who have experienced the service here. The interface is user-friendly, suitable for all device sizes (from Mobile to Desktop).",
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