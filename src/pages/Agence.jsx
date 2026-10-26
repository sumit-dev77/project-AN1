import React from "react";

/**
 * Resume — BCA Student / Frontend Developer
 * Minimal two-column layout.
 * Tailwind-only, no external dependencies.
 */

const SKILLS = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "React Router",
  "Responsive Web Design",
  "UI Development",
  "Web Optimization",
  "C++",
  "Python (Basic)",
  "Git & GitHub",
  "VS Code",
];
const LANGUAGES = [
  { lang: "English", level: "Good" },
  { lang: "Hindi", level: "Fluent" },
  { lang: "Marathi", level: "Fluent" },
];

const PROJECTS = [
  {
    name: "React Profile UI",
    detail:
      "Built a social-media-style profile interface using React and CSS with reusable components, responsive layouts, profile statistics, buttons, and image-based UI elements.",
  },
  {
    name: "Personal Portfolio Website",
    detail:
      "Designed and developed a personal portfolio website to showcase web development skills, projects, and technical knowledge using HTML, CSS, JavaScript, and React.",
  },
  {
    name: "Responsive Web Interface",
    detail:
      "Created responsive web interfaces using HTML, CSS, JavaScript, and React, focusing on clean layouts, reusable components, and user-friendly design.",
  },
  {
    name: "SHAH Clothing E-Commerce Website",
    detail:
      "Developed a responsive fashion e-commerce website using React.js and Tailwind CSS with product categories, product details, search, size selection, quantity controls, shopping cart, checkout, and responsive mobile layouts.",
  },
];

function SideHeading({ children }) {
  return (
    <h2 className="text-[11px] font-bold tracking-[0.15em] text-emerald-800 mt-6 mb-2 first:mt-0">
      {children.toString().toUpperCase()}
    </h2>
  );
}

function SectionHeading({ children }) {
  return (
    <h2 className="text-[13px] font-bold tracking-[0.1em] text-neutral-900 uppercase border-b-2 border-emerald-800 pb-1.5 mt-6 mb-3 first:mt-0">
      {children}
    </h2>
  );
}

function ProjectBlock({ name, detail }) {
  return (
    <li className="text-[12.5px] leading-snug text-neutral-700 pl-3 relative">
      <span className="absolute left-0 text-emerald-800">–</span>
      <span className="font-bold text-neutral-900">{name}</span> — {detail}
    </li>
  );
}

export default function Agence() {
  return (
<div className="min-h-screen bg-neutral-200 py-8 px-4 flex flex-col items-center print:p-0 print:bg-white">

      <div className="w-full max-w-[850px] print:w-full bg-white shadow-lg print:shadow-none flex flex-col md:flex-row">

        {/* Sidebar */}
        <aside className="w-full md:w-[290px] shrink-0 bg-[#F4F2EE] px-6 py-8">

 {/* Profile Image */}
  <div className="flex justify-center mb-6">
    <img
      src="./photos1/imgs2.jpeg"   // replace with your actual image path or URL
      alt="Sumit Shah"
      className="w-32 object-cover h-42  border-1 border-emerald-800 shadow-md"
    />
  </div>
          <SideHeading>Contact</SideHeading>

          <div className="space-y-1 text-[12.5px] text-neutral-800">
            <p><a href="mailto:sumit17shah@gmail.com">sumit17shah@gmail.com</a></p>
            <p>+91 8862083300</p>
            <p>Pune, Maharashtra, India</p>
            <p>
              <a href="https://www.linkedin.com/in/sumit-shah-89618b3b1" target="_blank" rel="noopener noreferrer">
                Linkedin:linkedin.com/in/sumit-shah-89618b3b1
              </a>
            </p>
          <p>  <a href="https://github.com/sumit-dev77" target="_blank" rel="noopener noreferrer">
              Github:github.com/sumit-dev77
            </a>
            </p>
           <p> <a href="https://sumitshah17.netlify.app" target="_blank" rel="noopener noreferrer">
              Portfolio:sumitshah17.netlify.app
            </a>
            </p>
          </div>

          <SideHeading>Skills</SideHeading>

          <ul className="space-y-1 text-[12.5px] text-neutral-800">
            {SKILLS.map((skill) => (
              <li key={skill}>— {skill}</li>
            ))}
          </ul>

          <SideHeading>Languages</SideHeading>

          <ul className="space-y-1 text-[12.5px] text-neutral-800">
            {LANGUAGES.map((language) => (
              <li key={language.lang}>
                {language.lang} — {language.level}
              </li>
            ))}
          </ul>

          <SideHeading>Interests</SideHeading>

          <p className="text-[12px] text-neutral-600 leading-snug">
            Web development, UI design, technology, programming,
            and learning new development skills.
          </p>

        </aside>

        {/* Main */}
        <main className="flex-1 px-7 py-8">

          {/* Header */}
          <h1 className="text-[34px] font-bold text-neutral-900 leading-none">
            Sumit Shah
          </h1>

          <p className="text-[13px] font-bold tracking-[0.14em] text-emerald-800 uppercase mt-1.5 mb-4">
            Frontend Developer · BCA Student
          </p>

          {/* Summary */}
          <p className="text-[12.5px] leading-relaxed text-neutral-600">
            BCA student with a strong interest in frontend web development
            and user interface design. Skilled in HTML, CSS, JavaScript,
            and React.js, with basic knowledge of Python and C++. Experienced
            in building responsive web interfaces and React-based projects.
            Looking for an opportunity to gain practical experience and
            contribute to real-world development projects.
          </p>

          {/* Education */}
          <SectionHeading>Education</SectionHeading>

          <div className="mb-4">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <p className="text-[14px] text-neutral-900">
                <span className="font-bold">
                  Bachelor of Computer Applications (BCA)
                </span>
              </p>

              <span className="text-[11px] italic text-neutral-500">
                2024 — 2027
              </span>
            </div>

            <p className="text-[12.5px] text-emerald-800 font-bold mt-1">
              Sinhgad College of Arts and Commerce, Warje
            </p>

            <ul className="mt-1.5 space-y-1">

              <li className="text-[12.5px] leading-snug text-neutral-700 pl-3 relative">
                <span className="absolute left-0 text-emerald-800">–</span>
                Savitribai Phule Pune University (SPPU)
              </li>

              <li className="text-[12.5px] leading-snug text-neutral-700 pl-3 relative">
                <span className="absolute left-0 text-emerald-800">–</span>
                First Year CGPA: 8.86
              </li>

              <li className="text-[12.5px] leading-snug text-neutral-700 pl-3 relative">
                <span className="absolute left-0 text-emerald-800">–</span>
                Second Year CGPA: 8.62
              </li>

            </ul>
          </div>

          <div className="mb-4">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <p className="text-[14px] text-neutral-900">
                <span className="font-bold">
                  Higher Secondary Certificate (12th)
                </span>
              </p>

              <span className="text-[11px] italic text-neutral-500">
                Completed
              </span>
            </div>

            <ul className="mt-1.5 space-y-1">

              <li className="text-[12.5px] leading-snug text-neutral-700 pl-3 relative">
                <span className="absolute left-0 text-emerald-800">–</span>
                Percentage: 69%
              </li>

              <li className="text-[12.5px] leading-snug text-neutral-700 pl-3 relative">
                <span className="absolute left-0 text-emerald-800">–</span>
                Science stream with PCM
              </li>

            </ul>
          </div>

          {/* Projects */}
          <SectionHeading>Projects</SectionHeading>

          <ul className="space-y-2">
            {PROJECTS.map((project) => (
              <ProjectBlock
                key={project.name}
                name={project.name}
                detail={project.detail}
              />
            ))}
          </ul>

          {/* Technical Skills */}
          <SectionHeading>Technical Skills</SectionHeading>

          <ul className="space-y-1">

           <li className="text-[12.5px] leading-snug text-neutral-700 pl-3 relative">
            <span className="absolute left-0 text-emerald-800">–</span>
           React: React Router, Context API, reusable components, state management
           </li>

            <li className="text-[12.5px] leading-snug text-neutral-700 pl-3 relative">
              <span className="absolute left-0 text-emerald-800">–</span>
              Programming: C++, Python (Basic)
            </li>

            <li className="text-[12.5px] leading-snug text-neutral-700 pl-3 relative">
              <span className="absolute left-0 text-emerald-800">–</span>
              Development: Responsive Web Design, UI Development, Web Optimization 
            </li>

            <li className="text-[12.5px] leading-snug text-neutral-700 pl-3 relative">
              <span className="absolute left-0 text-emerald-800">–</span>
              Tools: Git, GitHub, VS Code
            </li>

          </ul>

          {/* Career Objective */}
          <SectionHeading>Career Objective</SectionHeading>

          <p className="text-[12.5px] leading-relaxed text-neutral-600">
            To begin my professional career in a growth-oriented organization
            where I can apply my frontend development skills, work on
            real-world projects, learn from experienced developers, and
            continuously improve my technical abilities.
          </p>

        </main>
      </div>
    </div>
  );
}