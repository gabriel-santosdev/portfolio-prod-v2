import React from "react";
import hero from "../assets/hero.jpeg";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div className="section flex justify-center items-center" id="home">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden shadow-heroSadow border-[20px] border-solid border-ghostWhite">
          <img
            src={hero}
            alt="hero-img"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-grey sm:text-[1.25rem] mb-4">Desenvolvedor Front-End</div>
          <h2 className="text-[2rem] sm:text-[3rem] font-bold mb-4">
            Gabriel Santos
          </h2>
          <p className="opacity-80 text-[0.9rem]">
            Como entusiasta de tecnologia, meu foco é o desenvolvimento web. Busco soluções interativas e com design atrativo, visando a melhor experiência do usuário. Formado em Análise e Desenvolvimento de Sistemas pela UNINOVE (Universidade Nove de Julho).
          </p>
          <div className="flex mt-4 gap-4">
            <a
              href="https://www.linkedin.com/in/devgabrielsantos/"
              target="_blank"
              className="py-2 px-4 border-[2px] border-solid border-blue text-[0.9rem] rounded-[2.2rem] shadow-md"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/gabriel-santosdev"
              target="_blank"
              className="py-2 px-4 border-[2px] border-solid border-black text-[0.9rem] rounded-[2.2rem] shadow-md"
            >
              Github
            </a>
            <a
              href="#contact"
              className="py-2 px-4 border-[2px] border-solid border-grey text-[0.9rem] rounded-[2.2rem] shadow-md"
            >
              Contato
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
