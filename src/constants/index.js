import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    starbucks,
    carrent,
    jobit,
    threejs,
    nextjs,
    chlogo,
    oldportf,
    twitterclone
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "Freelancer",
      icon: backend,
    },
    {
      title: "Data Scientist Student",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Full-Stack Freelancer Developer",
      company_name: "Cyber Horizon",
      icon: chlogo,
      iconBg: "#383E56",
      date: "November 2022 - Current",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Creating client-personalized web applications with backend utility.",
        "Custom services from individual one-pages to large-scale projects."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "He is very interested in Software Development and Data Science; being a great team player on any project related to such matters.",
      name: "Carlos Cypriano",
      designation: "Colleague",
      company: "IFRJ",
      image: "https://media.licdn.com/dms/image/D4D03AQHHABZY69Xsuw/profile-displayphoto-shrink_800_800/0/1677443752252?e=1686787200&v=beta&t=p822z6dkwpZDXZ2R4B3gQp_iz_qp6HynM0kHBkNc6Pw",
    }
  ];
  
  const projects = [
    {
      name: "Personal Portfolio (Old)",
      description:
        "Personal Full-Stack Portfolio with TailwindCSS, Sanity.io and Next.js",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "sanity.io",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: oldportf,
      source_code_link: "https://github.com/OberonMazer/Portfolio-Guilherme",
    },
    {
      name: "Twitter Clone",
      description:
        "A twitter clone using Next.js, Sanity CMS, Typescript, SSR, Tailwind and NextAuth",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "sanity.io",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "nextauth",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
      ],
      image: twitterclone,
      source_code_link: "https://github.com/OberonMazer/Twitter-Clone",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };