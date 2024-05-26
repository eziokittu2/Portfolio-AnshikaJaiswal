import React, { useState } from 'react';
import { scroller } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
import NavbarButton from '../reusable/NavbarButton';
import Sidebar from './Sidebar';

import otherData from '../../data/otherData.json';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Callback function to receive the parameter from the child
  const onSidebarButtonClick = () => {
    setIsOpen(false);
  };

  // for using react-scroll and react-router at the same time
  const path = useLocation().pathname;
  const location = path.split('/')[1];
  const navigate = useNavigate();
  const scrollToSection = (section) => {
    // console.log(section);
    scroller.scrollTo(section, {
      duration: 1500,
      delay: 100,
      smooth: 'easeOutBack',
      offset: -180
    });
  };

  // method applied to the navbar buttons when not in the default page
  const goToHomeAndScroll = async (section) => {
    await navigate('/');
    await scroller.scrollTo(section, {
      duration: 1500,
      delay: 100,
      smooth: 'easeOutBack',
      offset: -180
    });
  };

  return (
    <>
      <div className="sticky top-0 z-30 flex bg-purple-900  h-20 text-slate-200 justify-between border-b-2 border-orange-500 text-xl font-AveriaLibre">
        <div className=" flex flex-row justify-between mx-auto w-[1014px] ">

          {/* Left part */}
          <div className='flex flex-row h-fit my-auto ml-2 text-2xl 2xsm:text-3xl sm:text-4xl font-bold'>
            <button
              onClick={() => { goToHomeAndScroll(otherData.navbarOptionLinks[0]) }}
              className="px-[10px] py-[6px] font-Parisienne font-bold bg-clip-text text-transparent bg-gradient-to-br from-orange-100 via-orange-400 to-orange-600 flex items-center border-b-4 border-t-2 border-orange-500 rounded-2xl shadow-[0_0_30px_purple] hover:shadow-[0_0_50px_purple] hover:shadow-pink-800">
              Anshika Jaiswal
            </button>

          </div>

          {/* Right Side */}
          <div className='my-auto mr-2'>

            {/* Hamburger sign */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-orange-500 focus:outline-none relative"
              >
                <svg
                  className={`w-10 h-10 transform transition-transform duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
                <svg
                  className={`w-10 h-10 absolute top-0 left-0 transform transition-transform duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            {/* navbar options */}
            <div className='hidden md:flex flex-row space-x-2 h-fit tracking-tighter text-[16px]'>
              {location === '' ? (
                <>
                  <NavbarButton myOnClick={() => { scrollToSection(otherData.navbarOptionLinks[0]) }} buttonName={otherData.navbarOptions[0]} />
                  <NavbarButton myOnClick={() => { scrollToSection(otherData.navbarOptionLinks[1]) }} buttonName={otherData.navbarOptions[1]} />
                  <NavbarButton myOnClick={() => { scrollToSection(otherData.navbarOptionLinks[2]) }} buttonName={otherData.navbarOptions[2]} />
                  <NavbarButton myOnClick={() => { scrollToSection(otherData.navbarOptionLinks[3]) }} buttonName={otherData.navbarOptions[3]} />
                  <NavbarButton myOnClick={() => { scrollToSection(otherData.navbarOptionLinks[4]) }} buttonName={otherData.navbarOptions[4]} />
                  <NavbarButton myOnClick={() => { scrollToSection(otherData.navbarOptionLinks[5]) }} buttonName={otherData.navbarOptions[5]} />
                  <NavbarButton myOnClick={() => { scrollToSection(otherData.navbarOptionLinks[6]) }} buttonName={otherData.navbarOptions[6]} />
                </>
              ) : (
                <>
                  <NavbarButton myOnClick={() => { goToHomeAndScroll(otherData.navbarOptionLinks[0]) }} buttonName={otherData.navbarOptions[0]} />
                  <NavbarButton myOnClick={() => { goToHomeAndScroll(otherData.navbarOptionLinks[1]) }} buttonName={otherData.navbarOptions[1]} />
                  <NavbarButton myOnClick={() => { goToHomeAndScroll(otherData.navbarOptionLinks[2]) }} buttonName={otherData.navbarOptions[2]} />
                  <NavbarButton myOnClick={() => { goToHomeAndScroll(otherData.navbarOptionLinks[3]) }} buttonName={otherData.navbarOptions[3]} />
                  <NavbarButton myOnClick={() => { goToHomeAndScroll(otherData.navbarOptionLinks[4]) }} buttonName={otherData.navbarOptions[4]} />
                  <NavbarButton myOnClick={() => { goToHomeAndScroll(otherData.navbarOptionLinks[5]) }} buttonName={otherData.navbarOptions[5]} />
                  <NavbarButton myOnClick={() => { goToHomeAndScroll(otherData.navbarOptionLinks[6]) }} buttonName={otherData.navbarOptions[6]} />
                </>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Transperant gradient - change the height acordingly*/}
      <div className="fixed top-20 z-30 h-32 w-full bg-gradient-to-b from-purple-950 via-purple-900/60 to-transparent pointer-events-none"></div>
      {isOpen && (<Sidebar onParameterChange={onSidebarButtonClick} />)}
    </>
  )
}

export default Navbar;