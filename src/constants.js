// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

// Experience Section Logo's
import foroTurismo from "./assets/company_logo/foroTurismo.png";
import CODEQ from "./assets/company_logo/codeq.png";

// Project Section Logo's
import HTrack from "./assets/company_logo/htrack.png";

// Education Section Logo's
import UPB from "./assets/education_logo/UPB.png";
import CCC from "./assets/education_logo/ccc.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: CODEQ,
    role: "Software Developer",
    company: "Comisión del Deporte de Quintana Roo (CODEQ)",
    date: "May 2025 - September 2025",
    desc: "Built an HR management system handling 200+ employee records with secure validation. Automated payroll (1,000+ PDF/XML payslips), added role-based access with 3 levels, and developed a KPI dashboard, improving HR efficiency by 40%.",
    skills: [
      "Laravel",
      "React",
      "Tailwind CSS",
      "MySQL",
      "REST APIs",
      "PDF/XML automation",
    ],
  },
  {
    id: 1,
    img: foroTurismo,
    role: "Software Developer",
    company:
      "Universidad Politécnica de Bacalar – Foro Internacional de Turismo",
    date: "May 2024 - September 2024",
    desc: "Engineered an event registration system for 500+ participants, automating certificates, badges, and QR code check-ins—reducing manual workload by 70% and accelerating access by 40%. Developed an admin dashboard for workshops, users, and reports to streamline coordination.",
    skills: ["Laravel", "Bootstrap", "MySQL", "REST APIs", "QR/PDF automation"],
  },
];

export const education = [
  {
    id: 0,
    img: UPB, // replace with your uni logo if available
    school: "Universidad Politécnica de Bacalar",
    date: "Sept 2022 - Present",
    desc: "Pursuing a Bachelor's degree in Software Engineering. Focused on full-stack web and mobile application development, database management, and software engineering practices.",
    degree: "Bachelor of Software Engineering",
  },
  {
    id: 1,
    img: CCC, // replace with your high school logo if available
    school: "Corozal Community College",
    date: "Sept 2017 - Jun 2021",
    desc: "Completed high school education with a strong foundation in science, mathematics, and technology. Actively engaged in academic and extracurricular activities that fostered problem-solving, teamwork, and leadership skills.",
    degree: "High School Diploma",
  },
];

export const projects = [
  {
    id: 0,
    title: "Health Track",
    description:
      "A cross-platform mobile app for patients to log glucose and blood pressure with historical insights. Includes role-based access for relatives and doctors, real-time alerts for abnormal readings, and a patient–doctor chat system with notifications.",
    image: HTrack,
    tags: ["Flutter", "Firebase", "REST APIs", "SQLite", "Notifications"],
    github: "https://github.com/JavDevvv/Health_Track",  
    webapp: "",  
  },
];
