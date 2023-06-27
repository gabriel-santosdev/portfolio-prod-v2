import React, { useEffect, useState } from "react";
import { btns } from "../Data";
import { projects } from "../Data";
import { motion, AnimatePresence } from "framer-motion";
import GithubIcon from "../assets/github.png"
import WebIcon from "../assets/local-na-rede-internet.png"
import './index.css'
const Projects = () => {
  const [filterImages, setFilterImages] = useState(null);
  useEffect(() => {
    setFilterImages(projects);
  }, []);
  const handleClick = (e) => {
    let btnType = e.target.value;
    const newFilterImages = projects.filter(
      (project) => project.value === btnType
    );
    btnType !== "all"
      ? setFilterImages(newFilterImages)
      : setFilterImages(projects);
  };
  return (
    <div className="section" id="projects">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold">Projetos</h2>
        <div className=" w-14 h-[3px] rounded-sm bg-blue"></div>
      </div>
      <div className="mt-4 flex flex-wrap gap-8">
        {btns.map((btn) => {
          return (
            <button key={btn.id} value={btn.value} onClick={handleClick}>
              {btn.name}
            </button>
          );
        })}
      </div>
      <AnimatePresence>
        <motion.div className="grid sm:grid-cols-2 md:grid-cols-3 mt-12 gap-3 static">
          {filterImages &&
            filterImages.map((filterImage) => {
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.1 } }}
                  key={filterImage.id}
                >
                  <motion.a href={filterImage.link} target="_blank" >
                    <motion.div className="relative top-[135px] left-[80px] invisible hover:visible" >
                      <p className="font-bold  text-lg ">Visite o projeto:</p>
                      <motion.div className="flex ml-[16px]" >
                        <a>
                          <img src={GithubIcon} alt="Github Icon" className="w-[32px] h-[32px] m-2" />
                        </a>
                        <a >
                          <img src={WebIcon} alt="Web Icon" className="w-[37px] h-[37px] m-2" />
                        </a>
                      </motion.div>
                    </motion.div>
                    <motion.img src={filterImage.image} alt="" className="hover:opacity-20 transition-opacity" />
                  </motion.a>

                </motion.div>
              );
            })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Projects;
