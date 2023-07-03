import { ImPencil } from "react-icons/im";
import { BsShop, BsCodeSlash } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai"
import { FaCss3Alt, FaReact, FaUser } from "react-icons/fa";
import { SiTypescript, SiJavascript } from "react-icons/si"
import { MdOutlineScreenSearchDesktop } from "react-icons/md"
import { TbSpeakerphone } from "react-icons/tb";

import crud_project from "./assets/CRUD.png";
import cmc_project from "./assets/cmc_projeto.png";
import githubfinder_project from "./assets/Github-Finder.png";
import organo_project from "./assets/Organo.png";
import project5 from "./assets/project5.jpg";
import project6 from "./assets/project6.jpg";
import project7 from "./assets/project7.jpg";

import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GoMailRead } from "react-icons/go";

export const navLinks = [
  {
    id: 1,
    text: "Ínicio",
    href: "home",
  },
  {
    id: 2,
    text: "Projetos",
    href: "projects",
  },
  {
    id: 3,
    text: "Serviços",
    href: "services",
  },
  {
    id: 4,
    text: "Conhecimentos",
    href: "skills",
  },
  {
    id: 5,
    text: "Contato",
    href: "contact",
  },
];

export const services = [
  {
    id: 1,
    icon: <ImPencil />,
    title: "UX/UI Design",
    text: "Foco em criar interfaces intuitivas e visualmente atraentes, transformando ideias em designs funcionais e envolventes, garantindo a melhor experiência para os usuários. "
  },
  {
    id: 2,
    icon: <FaUser />,
    title: "UX Writting",
    text: " Design e conteúdos com foco na melhor experiência dos usuários. "
  },
  {
    id: 3,
    icon: <BsCodeSlash />,
    title: "Desenvolvimento",
    text: "Desenvolvo sites profissionais, blogs, portfólios, landing pages e e-commerce."
  },
  {
    id: 4,
    icon: <MdOutlineScreenSearchDesktop />,
    title: "SEO",
    text: "Aumento da visibilidade nos mecanismos de busca por meio de estratégias como pesquisa de palavras-chave, otimização de conteúdo e construção de links para melhorar o posicionamento orgânico nos resultados de pesquisa."
  },
];

export const skills = [
  {
    id: 1,
    icon: <AiFillHtml5 />,
    title: "HTML 5",
    text: ""
  },
  {
    id: 2,
    icon: <FaCss3Alt />,
    title: "CSS 3",
    text: ""
  },
  {
    id: 3,
    icon: <SiTypescript />,
    title: "TypeScript",
    text: ""
  },
  {
    id: 4,
    icon: <SiJavascript />,
    title: "JavaScript",
    text: ""
  },
  {
    id: 5,
    icon: <FaReact />,
    title: "React.JS",
    text: ""
  },
  {
    id: 6,
    icon: <BsCodeSlash />,
    title: "Next.JS",
    text: ""
  },
];

export const btns = [
  { id: 1, name: "Todos", value: "all" },
  { id: 2, name: "UI/UX", value: "ui/ux" },
  { id: 3, name: "Web Design", value: "web design" },
];

export const projects = [
  {
    id: 1,
    image: crud_project,
    value: "web design",
    linkGithub: "https://github.com/gabriel-santosdev/crudjs",
    linkWeb: "https://crudview.netlify.app/",
  },
  {
    id: 2,
    image: cmc_project,
    value: "ui/ux",
    linkGithub: "https://github.com/gabriel-santosdev/cmcservicoseletricos",
    linkWeb: "https://cmcservicoseletricos.netlify.app/",
  },
  {
    id: 3,
    image: githubfinder_project,
    value: "ui/ux",
    linkGithub: "https://github.com/gabriel-santosdev/github-finder",
    linkWeb: "https://github-finder1.netlify.app/",
  },
  {
    id: 4,
    image: organo_project,
    value: "web design",
    linkGithub: "https://github.com/gabriel-santosdev/ORGANO",
    linkWeb: "",
  },
  {
    id: 5,
    image: project5,
    value: "ui/ux",
    linkGithub: "www.google.com",
    linkWeb: "www.linkedin.com",
  },
  {
    id: 6,
    image: project6,
    value: "all",
    linkGithub: "www.google.com",
    linkWeb: "www.linkedin.com",
  },
  {
    id: 7,
    image: project7,
    value: "all",
    linkGithub: "www.google.com",
    linkWeb: "www.linkedin.com",
  },
];


export const contacts = [
  {
    id: 1,
    icon: <TfiHeadphoneAlt />,
    text: "+55 (11) 97655-2081",
  },

  {
    id: 3,
    icon: <GoMailRead />,
    text: "gabrieljorgesilvasantos@outlook.com",
  },
];
