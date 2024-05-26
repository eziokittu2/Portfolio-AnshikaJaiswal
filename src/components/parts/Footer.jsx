import React from 'react';

import profileData from '../../data/profileData.json';

const Footer = () => {
  return (
    <div className="relative z-20">
      <div className="px-4 sm:px-8 py-1 sm:py-4 bg-orange-500 border-t-2 border-purple-500 h-24 ">
        <div className='w-fit mx-auto flex h-full'>
          <div className='sm:w-[655px] md:w-[790px] lg:w-[1004px] flex flex-row flex-wrap gap-4 justify-center my-auto h-fit text-xl sm:text-2xl'>
            <p>Thanks for visiting my profile</p>
            {/* <div className='flex flex-col'>
              <p>Connect me over my socials</p>
              <div className='flex flex-row'>
                
              </div>
            </div> */}
            <div>Footer Section is being worked upon!</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;