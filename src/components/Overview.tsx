// src/components/Overview.tsx
import React from "react";

import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const Overview: React.FC = () => {
  const shaderGifs = [
    {
      src: `${process.env.PUBLIC_URL}/images/mandelbrot.gif`,
      title: "Mandelbrot Set",
    },
    {
      src: "https://res.cloudinary.com/storagemanagementcontainer/image/upload/v1731722339/portfolio/owl_ppb6ih.gif",
      title: "Owl",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/fidgetToy.gif`,
      title: "Fidget Toy",
    },
    { src: `${process.env.PUBLIC_URL}/images/milkers.gif`, title: "Milkers" },
    {
      src: `${process.env.PUBLIC_URL}/images/gene.gif`,
      title: "Gene Expression",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/butterfree.gif`,
      title: "Butterfree",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/binaryTree.gif`,
      title: "Binary Tree",
    },
    { src: `${process.env.PUBLIC_URL}/images/rattata.gif`, title: "Rattata" },
    { src: `${process.env.PUBLIC_URL}/images/poke.gif`, title: "Poke" },
    { src: `${process.env.PUBLIC_URL}/images/purugly.gif`, title: "Purugly" },
    {
      src: `${process.env.PUBLIC_URL}/images/growlithe.gif`,
      title: "Growlithe",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/chikorita.gif`,
      title: "Chikorita",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/grimLeaper.gif`,
      title: "Grim Leaper",
    },
    { src: `${process.env.PUBLIC_URL}/images/zap.gif`, title: "Zap" },
    {
      src: `${process.env.PUBLIC_URL}/images/horseSea.gif`,
      title: "Horse Sea",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/flowerGarden.gif`,
      title: "Flower Garden",
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      {/* Header with name and avatar */}
      <div className="flex items-center gap-6 mb-6">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900">Zakariya Osman</h1>
          <p className="text-lg text-gray-600 mb-4">Software Engineer</p>

          {/* Social Links */}
          <div className="flex gap-3">
            <a
              href="https://github.com/Zakariya-Osman"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/github-mark.png`}
                alt="GitHub"
                className="w-8 h-8 rounded shadow-sm hover:shadow-md"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/zakariyaosman/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/linkedin-icon.png`}
                alt="LinkedIn"
                className="w-8 h-8 rounded shadow-sm hover:shadow-md"
              />
            </a>
          </div>
        </div>
        <img
          src={
            "https://media.licdn.com/dms/image/v2/D5635AQGm3CGCqs1DNA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1705362277981?e=1736823600&v=beta&t=ilHk3uISsRw-DPfDxAVWSqxfzHQRKiYzxeQeIdGQegc"
          }
          alt="Zakariya Osman"
          className="w-24 h-24 rounded-full object-cover border-2 border-gray-200 shadow-lg"
        />
      </div>

      {/* Contact Info */}
      <div className="mb-6 text-gray-700 bg-white">
        <p className="mb-1 text-gray-700 flex items-center">
          <PhoneIcon className="h-5 w-5 mr-2" />
          (123) 456-7890
        </p>
        <p className="text-gray-700 flex items-center">
          <EnvelopeIcon className="h-5 w-5 mr-2" />
          zakaria.osman.dev.gmail.com
        </p>
      </div>

      {/* Overview content */}
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed">
          Hi! My name is Zakariya Osman, and I’m a software developer and
          aspiring data analyst skilled in Python, SQL, and full-stack tools
          like Next.js and Firebase. I specialize in building scalable systems,
          crafting data-driven solutions, and enhancing user experiences through
          innovative development.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
            Blockchain
          </span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
            React
          </span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
            TypeScript
          </span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
            Solidity
          </span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
            Web3
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {shaderGifs.map((gif, index) => (
            <div key={index} className="relative group">
              <img
                src={gif.src}
                alt={gif.title}
                className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
                <p className="text-center text-sm">{}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
