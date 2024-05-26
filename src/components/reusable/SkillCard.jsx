import React, {useState} from 'react'
// import { Fade} from "react-awesome-reveal";

function SkillCard({skillName, skillImageSrc}) {
  const [buttonHovered, setButtonHovered] = useState(false);
  const handleButtonNotHovered = () => {
    setButtonHovered(false);
  };
  const handleButtonHovered = () => {
    setButtonHovered(true);
  };
  return (
    <button 
      onMouseEnter={handleButtonHovered}
      onMouseLeave={handleButtonNotHovered}
    >
      {/* <Fade delay={100}> */}
      <div
        className='w-full h-[60px] 2xsm:h-[100px] sm:h-[140px]
          cursor-default
          flex flex-col justify-center
          bg-purple-500/30 hover:bg-purple-100
          border-2 border-purple-100/20 hover:border-purple-400
          transition-all duration-500 rounded-lg 
          shadow-[0_0_8px_black] hover:shadow-[0_0_24px_purple]
          m-1 '
        >
        {/* image of skill */}
        <div className='w-fit h-fit place-self-center'>
          <img 
            className={`w-full rounded-t-lg  ${buttonHovered ?
              'h-[30px] 2xsm:h-[50px] sm:h-[70px] transition-all duration-1000':
              'h-[20px] 2xsm:h-[60px] sm:h-[80px] transition-all duration-1000'
            }`}
            src={skillImageSrc}
            alt='skill'
          />
        </div>

        {/* title of skill */}
        <div className={
          `flex items-center justify-center w-full  rounded-b-lg
          ${buttonHovered ? 
            'h-[30px] 2xsm:h-[50px] sm:h-[60px] -translate-y-1/4 bg-purple-950 transition-all duration-1000' : 
            'h-[40px] 2xsm:h-[40px] sm:h-[60px] bg-purple-100'}
          `}>
          <p className={`overflow-visible
          text-center text-xs 2xsm:text-lg sm:text-xl xl:text-2xl
          ${buttonHovered ?'leading-5 font-bold text-purple-200 transition-all duration-500' : ' leading-4 text-purple-950'}`}>
            {skillName}
          </p>
        </div>
      </div>
      {/* </Fade> */}
    </button>
  )
}

export default SkillCard