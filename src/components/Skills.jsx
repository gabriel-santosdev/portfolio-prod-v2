import React from "react";
import { skills } from "../Data";
const Skills = () => {
    return (
        <div className="section" id="skills">
            <div className="mb-8">
                <h2 className="text-[1.5rem] font-bold ">Conhecimentos</h2>
                <div className="w-14 h-[3px] bg-blue rounded-sm"></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
                {skills.map((skills) => {
                    return (
                        <div
                            key={skills.id}
                            className="flex gap-4 p-4 hover:bg-slate-300 rounded-lg"
                        >
                            <div className="text-blue text-[2rem]">{skills.icon}</div>
                            <div>
                                <h3 className="text-xl font-bold">{skills.title}</h3>
                                <p className="opacity-100 mt-4 text-[0.9rem]">
                                    {skills.text}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

export default Skills;