// path: src/components/Projects.tsx
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {title: "Spectra",
    date: "Jan 2024 - Present",
    description: "Integrated React Hooks API to simplify functional components, reducing prop-drilling and improving developer and user experience. Developed TypeScript ReactJS applications using MUI, with a focus on app management, debugging, security, and GraphQL integration. Created API endpoints and implemented backend logic, including SQL stored procedures, tables, models, and services.Developed and maintained scalable backend services using Scala. Built RESTful APIs and integrated third-party services. Collaborated on cloud-based deployments using AWS and GCP",
    technologies: ["ReactJS", "GraphQL", "TypeScript", "ExpressJS", "SCSS", "Heroku", "PostgreSQL", "Scala", "Functional Programming", "RESTful APIs", "AWS", "GCP", "PostgreSQL"],
    link: "https://www.spectra.theater/studios"
  },
  {title: "genaigraphics",
    date: "Jul 2023 - Oct 2023",
    description: "Application merges WebGL technology with Three.js for 3D rendering and Azure ML for AI chat functionalities, empowers users to interact with realistic 3D models that demonstrate step-by-step procedures. The goal is to provide intuitive visual aids that simplify the setup process reduce user errors, and enhance overall user satisfaction 👾.",
    technologies: ["React", "Python", "Threejs", "Typescript", "Astro", "Azure-ml", "Ai-prompts"],
    link: "https://mollybeach.github.io/genaigraphics/agent/"
  },
  {
    title: "ihaehada",
    date: "Mar 2020 - Dec 2020",
    description: "Learn Korean language application. Browse the Ihaehada collection of words and phrases.",
    technologies: ["Vue", "JavaScript", "Firebase"],
    link: "https://ihaehada.firebaseapp.com"
  },
  {
    title: "CryptoGene",
    date: "Mar 2020 - Dec 2020",
    description: "DApp/Web3JS app converting DNA data from Ancestry.com into NFTs.",
    technologies: ["React", "Web3.js", "Solidity", "GLSL", "Firebase"],
    link: "https://chromagenetic.firebaseapp.com"
  },
];

const Projects: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
        />
      ))}
    </div>
  );
};

export default Projects;
