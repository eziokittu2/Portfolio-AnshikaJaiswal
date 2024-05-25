import React from 'react'

const About = () => {
  return (
    <div className='bg-orange-500/20 '>
      <div
        className='mx-2 sm:mx-auto p-2 sm:p-4 
        sm:w-[655px] md:w-[790px] lg:w-[1004px]
        bg-orange-500/10 hover:bg-orange-900 rounded-lg group/about
        shadow-[0_0_5px_black] hover:shadow-[0_0_15px_black] transition duration-500'
      >
        {/* All the content */}
        <div className='flex flex-col text-justify'>

          {/* Heading */}
          <div className='text-center'>About Me</div>

          {/* Body */}
          <div></div>

          {/* Footer */}
          <div></div>

        </div>
      </div>
    </div>
  )
}

export default About