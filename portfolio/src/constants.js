// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';


// Project Section Logo's
import Jarvis from './assets/work_logo/Jarvis.png';
import GridWork from './assets/work_logo/GridWork.png';
import NoteNest from './assets/work_logo/NoteNest.png';
import ChatBot from './assets/work_logo/ChatBot.png';
import ChromeImageExtention from './assets/work_logo/ChromeImageExtention.png';
import Imago from './assets/work_logo/Imago.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML',logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];


  
  export const projects = [
    {
      id: 0,
      title: "Jarvis",
      description:
        "A powerful, voice-activated desktop assistant built using Python. By integrating advanced speech recognition and text-to-speech engines, the application interprets voice commands to automate system tasks, fetch live web data, and engage in intelligent, dynamic conversations.",
      image: Jarvis,
      tags: ["Python","Google API","pyttsx3","Speech Recognition","pyAudio"],
      github: "https://github.com/Hooriahoor/Jarvis",
    },
    {
      id: 1,
      title: "GridWork",
      description:
        "A highly responsive, frontend-driven operational dashboard built to simplify workforce record-keeping and administrative workflows. The project focuses heavily on complex client-side state management, interactive data rendering, and intuitive user interfaces.",
      image: GridWork,
      tags: ["React JS", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
     github: "https://github.com/Hooriahoor",
    },
    {
      id: 2,
      title: "NoteNest",
      description:
        "A lightweight, user-focused digital notebook built entirely with React.js. The application emphasizes quick data entry, seamless interface transitions, and clean text layout structures to ensure an optimal user experience for capturing ideas on the go.",
      image: NoteNest,
      tags: ["React JS", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Hooriahoor/note-app",
      
    },
    {
      id: 3,
      title: "ChatBot",
      description:
        "A highly interactive, frontend-driven conversational AI application built with React.js. The project focuses heavily on asynchronous state synchronization, handling streaming data chunking, and maintaining fluid UI animations during intense text operations.",
      image: ChatBot,
      tags: ["Google API", "HTML", "CSS","JavaScript"],
      github: "https://github.com/Hooriahoor/Gemini_chatapp",
    },
    {
      id: 4,
      title: "Chrome Extension Tool",
      description:
        "A highly optimized browser extension built using the Chrome Extensions Manifest V3 API. The tool injects seamlessly into the browser environment, giving users utility tools to scrape and manage visual assets across the web.",
      image: ChromeImageExtention,
      tags: ["JavaScript","Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/Hooriahoor/ChromeImageExtention",
    },
    {
      id: 5,
      title: "Imago - Gallery of Images",
      description:
        "A sleek, responsive React.js image discovery application powered by the Picsum Photos API. Features custom-built dynamic pagination, dynamic search-by-author filters, and a modern CSS masonry grid layout with fluid hover animations.",
      image: Imago,
      tags: ["React JS","API", "CSS","useState","useEffect", "Javascript"],
      github: "https://github.com/Hooriahoor",
    },
    {
      id: 6,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/Hooriahoor",
    },
  ];  