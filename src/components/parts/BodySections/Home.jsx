import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Fade, Slide } from "react-awesome-reveal";

// importing reusable components
import TypingComponent from '../../reusable/TypingAnimation';
import BubbleText from '../../reusable/BubbleText';

// importing data from local files
import heroTextAnimateData from "../../../data/homeTextAnimateData.json";
import profileData from "../../../data/profileData.json";

const Home = () => {
  const [typingComponentInViewPort, setTypingComponentInViewPort] = useState(false)
  const handleComponentInViewPort = () => {
    setTypingComponentInViewPort(!typingComponentInViewPort);
  }

  return (
    <div
      className="lg:w-[1014px] pt-4 lg:flex items-center justify-around mx-auto mb-8 mt-24 md:mt-12"
    >

      {/* The welcome text */}
      <div className='justify-center font-AveriaLibre '>

        {/* Upper part - 4 texts and image */}
        <div className='flex flex-row w-fit mx-auto items-center'>
          
          {/* The display texts */}
          <div className='pr-4 lg:p-0'>
            <Slide direction='down'><Fade>
              <div className="flex text-2xl sm:text-4xl md:text-6xl text-fuchsia-500 ">
                Hey
              </div>
            </Fade></Slide>

            <Slide direction='down'><Fade>
              <div className="flex text-2xl sm:text-4xl lg:text-5xl text-fuchsia-500 ">
                There<span className="text-4xl sm:text-4xl md:text-6xl animate-[wave_1.3s_ease-in-out_infinite]">👋🏻</span>
              </div>
            </Fade></Slide>

            <Slide direction='down'><Fade>
              <h1 className='text-fuchsia-300 text-2xl sm:text-3xl md:text-4xl'>
                <p>I'm </p>
              </h1>
            </Fade></Slide>

            <Slide direction='down'><Fade>
              <div className="text-4xl sm:text-7xl md:text-8xl lg:text-8xl 
              font-semibold text-fuchsia-500 mt-2">
                <BubbleText text={profileData.name.firstName} />
              </div>
            </Fade></Slide>

            <Slide direction='down'><Fade>
              <div className="text-4xl sm:text-7xl md:text-8xl lg:text-8xl 
              font-semibold text-fuchsia-500 mt-2">
                <BubbleText text={profileData.name.lastName} />
              </div>
            </Fade></Slide>
          </div>

          {/* Hero Image */}
          <div className='lg:hidden  rounded-full border-2 border-purple-500'>
            <img
              className='max-w-24 2xsm:max-w-30 sm:max-w-60 md:w-72 rounded-full shadow-[0_0_50px_purple] hover:shadow-[0_0_80px_purple] transition duration-500'
              src={profileData.display_image}
            />
          </div>

        </div>

        {/* Typing Text Animation  */}
        <Fade
          onVisibilityChange={handleComponentInViewPort}
          delay={500} duration={1500} direction='down'
          className="p-2 sm:p-4 mt-4 rounded-2xl drop-shadow-xl w-fit mx-auto font-kalam
          text-xs  sm:text-xl text-fuchsia-100 bg-fuchsia-950 max-w-[460px] lg:w-[480px]"
        >
          <TypingComponent texts={heroTextAnimateData.data} speedTyping={60} speedDelete={50} />
        </Fade>

        {/* About Me Button */}
        <Slide direction='down' className='w-fit mx-auto'><Fade>
          <Link
            activeClass="active" spy={true} offset={-180} duration={1500} smooth={'easeOutBack'}
            className=''
            to='about'
          >
            <button
              className="w-[160px] flex justify-center mt-4 group rounded-lg
            bg-fuchsia-700 text-fuchsia-100 hover:text-fuchsia-50   
            transition-colors hover:bg-fuchsia-800 active:scale-95 py-2 px-4
            duration-500"
            >
              <p
                className='font-normal group-hover:font-bold transition-all duration-300'
              >About Me</p>
              <svg className='w-6 h-6 ml-2 fill-slate-400 group-hover:fill-white group-hover:translate-x-2 transition-transform duration-300'
                xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z" />
              </svg>
            </button>
          </Link>
        </Fade></Slide>

      </div>

      {/* Hero Image */}
      <Fade
        delay={500}
        duration={1500}
      >
        <div className='hidden lg:block rounded-full border-2 border-purple-500'>
          <img
            className='w-96 rounded-full shadow-[0_0_50px_purple] hover:shadow-[0_0_80px_purple] transition duration-500'
            src={profileData.display_image}
          />
        </div>
      </Fade>
    </div>
  )
}

export default Home