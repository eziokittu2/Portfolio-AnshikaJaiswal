// importing necessary library files
import React from "react";
import { Fade } from "react-awesome-reveal";

// importing reusable components
import SkillCard from '../../reusable/SkillCard';

// importing data from local files
import skillsData from "../../../data/skillsData.json";

const Skills = () => {
  const skills = skillsData.skills;

  return (
    <div
      className='bg-purple-500/20 p-2'
    >
      {/* All the content */}
      <div className="flex flex-col mx-2 sm:mx-auto p-2 sm:p-4 gap-8 
      sm:w-[655px] md:w-[790px] lg:w-[1004px] font-Roboto
      bg-purple-500/10 hover:bg-purple-200 rounded-lg group/g1
      shadow-[0_0_5px_black] hover:shadow-[0_0_15px_black] transition duration-500
      ">
        {/* Title of the section */}
        <Fade>
          <div className="flex text-purple-400 group-hover/g1:text-purple-900
          font-bold text-2xl sm:text-4xl text-center justify-center underline underline-offset-4">
            <p>Skills</p>
          </div>
        </Fade>

        {/* the grid consisting of all the skills */}
        <Fade>
          <div className=' mx-auto rounded-3xl'>
            <Fade>
              <div
                className=' grid grid-cols-3 gap-x-2 tracking-tighter text-h p-2 pr-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 2xl:grid-cols-10 mx-auto'>
                {skills.map((skill, num) => (
                  <SkillCard key={num} skillImageSrc={skill[1]} skillName={skill[0]} />
                ))}
              </div>
            </Fade>
          </div>
        </Fade>

      </div>

    </div>
  );
}

export default Skills;