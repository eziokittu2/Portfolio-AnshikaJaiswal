import React, { useState } from 'react';
import { scroller } from 'react-scroll';
import { Fade } from "react-awesome-reveal";
import { useLocation, useNavigate } from 'react-router-dom';
import NavbarButton from '../reusable/NavbarButton';
import otherData from '../../data/otherData.json';

const Sidebar = ({ onParameterChange }) => {
  const [sidebarButtonClicked, setSidebarbuttonClicked] = useState(false);
  // const handleButtonClick = () => {
  //   onParameterChange();
  // };
  const handleButtonClick = () => {
    setSidebarbuttonClicked(true);
    setTimeout(() => {
      onParameterChange();
    }, 700);
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
    <div className={`md:hidden fixed w-screen top-20 z-30  transition-all duration-700 ease-in-out opacity-100 bg-purple-900/90 text-white border-b-2 border-orange-500 flex justify-around p-4 ${sidebarButtonClicked ? 'opacity-0' : 'opacity-100'}`}>
      <Fade duration={700} className=''>
        <div className='grid grid-cols-2 xsm:grid-cols-3 sm:grid-cols-6 gap-x-4 gap-y-4 font-AveriaLibre text-xl'>
          {location === '' ? (
            <>
              <NavbarButton myOnClick={() => { scrollToSection(otherData.navbarOptionLinks[0]); handleButtonClick() }} buttonName={otherData.navbarOptions[0]} />
              <NavbarButton myOnClick={() => { scrollToSection(otherData.navbarOptionLinks[1]); handleButtonClick() }} buttonName={otherData.navbarOptions[1]} />
              <NavbarButton myOnClick={() => { scrollToSection(otherData.navbarOptionLinks[2]); handleButtonClick() }} buttonName={otherData.navbarOptions[2]} />
              <NavbarButton myOnClick={() => { scrollToSection(otherData.navbarOptionLinks[3]); handleButtonClick() }} buttonName={otherData.navbarOptions[3]} />
              <NavbarButton myOnClick={() => { scrollToSection(otherData.navbarOptionLinks[4]); handleButtonClick() }} buttonName={otherData.navbarOptions[4]} />
              <NavbarButton myOnClick={() => { scrollToSection(otherData.navbarOptionLinks[5]); handleButtonClick() }} buttonName={otherData.navbarOptions[5]} />
              <NavbarButton myOnClick={() => { scrollToSection(otherData.navbarOptionLinks[6]); handleButtonClick() }} buttonName={otherData.navbarOptions[6]} extraClasses={'col-span-2 xsm:col-span-3 sm:col-span-6'} />
            </>
          ) : (
            <>
              <NavbarButton myOnClick={() => { goToHomeAndScroll(otherData.navbarOptionLinks[0]); handleButtonClick() }} buttonName={otherData.navbarOptions[0]} />
              <NavbarButton myOnClick={() => { goToHomeAndScroll(otherData.navbarOptionLinks[1]); handleButtonClick() }} buttonName={otherData.navbarOptions[1]} />
              <NavbarButton myOnClick={() => { goToHomeAndScroll(otherData.navbarOptionLinks[2]); handleButtonClick() }} buttonName={otherData.navbarOptions[2]} />
              <NavbarButton myOnClick={() => { goToHomeAndScroll(otherData.navbarOptionLinks[3]); handleButtonClick() }} buttonName={otherData.navbarOptions[3]} />
              <NavbarButton myOnClick={() => { goToHomeAndScroll(otherData.navbarOptionLinks[4]); handleButtonClick() }} buttonName={otherData.navbarOptions[4]} />
              <NavbarButton myOnClick={() => { goToHomeAndScroll(otherData.navbarOptionLinks[5]); handleButtonClick() }} buttonName={otherData.navbarOptions[5]} />
              <NavbarButton myOnClick={() => { goToHomeAndScroll(otherData.navbarOptionLinks[6]); handleButtonClick() }} buttonName={otherData.navbarOptions[6]} extraClasses={'col-span-2 xsm:col-span-3 sm:col-span-6'} />
            </>
          )}
        </div>
      </Fade>
    </div>
  );
};

export default Sidebar;

