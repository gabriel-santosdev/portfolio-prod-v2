import { ImPencil } from "react-icons/im";
import { BsShop, BsHeart, BsWatch, BsStar } from "react-icons/bs";
import { BiCoffeeTogo } from "react-icons/bi";
import { TiDeviceDesktop } from "react-icons/ti";
import { TbSpeakerphone } from "react-icons/tb";

import project1 from "./assets/Studio_projeto.png";
import project2 from "./assets/cmc_projeto.png";
import project3 from "./assets/project3.jpg";
import project4 from "./assets/project4.jpg";
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
    text: "Contato",
    href: "contact",
  },
];

export const services = [
  {
    id: 1,
    icon: <ImPencil />,
    title: "",
    text: ""
  },
  {
    id: 2,
    icon: <BsShop />,
    title: "",
    text:""
  },
  {
    id: 3,
    icon: <TiDeviceDesktop />,
    title: "Desenvolvimento",
    text:""
  },
  {
    id: 4,
    icon: <TbSpeakerphone />,
    title: "",
    text:""
  },
];
export const serviceFinishes = [
  {
    id: 1,
    icon: <BsHeart />,
    text: "Happy Clients",
    amount: 566,
  },
  {
    id: 2,
    icon: <BsWatch />,
    text: "Working Hours",
    amount: 5335,
  },
  {
    id: 3,
    icon: <BsStar />,
    text: "Awards Won",
    amount: 13,
  },
  {
    id: 4,
    icon: <BiCoffeeTogo />,
    text: "Coffee Consumed",
    amount: 1189,
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
    image: project1,
    value: "web design",
    linkGithub: "www.google.com",
    linkWeb: "www.google.com",
  },
  {
    id: 2,
    image: project2,
    value: "ui/ux",
    link:"www.google.com",
  },
  {
    id: 3,
    image: project3,
    value: "ui/ux",
    link:"",
  },
  {
    id: 4,
    image: project4,
    value: "web design",
    link:"",
  },
  {
    id: 5,
    image: project5,
    value: "ui/ux",
    link:"",
  },
  {
    id: 6,
    image: project6,
    value: "marketing",
    link:"",
  },
  {
    id: 7,
    image: project7,
    value: "marketing",
    link:"",
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
