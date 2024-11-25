import React from 'react';
import { Database, Globe, Server, Cloud, Code, Terminal } from 'lucide-react';

const skills = [
  {
    category: "Frontend Development",
    icon: Globe,
    technologies: ["TypeScript", "React", "React Native"],
    description: "Building responsive and intuitive user interfaces"
  },
  {
    category: "Backend Development",
    icon: Server,
    technologies: ["Node.js", "Python", "GraphQL"],
    description: "Creating robust server-side applications"
  },
  {
    category: "Cloud Services",
    icon: Cloud,
    technologies: ["Firebase", "Google Cloud Platform"],
    description: "Deploying and managing cloud infrastructure"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6 mx-auto">
                <skill.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">{skill.category}</h3>
              <p className="text-gray-600 text-center mb-6">{skill.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}