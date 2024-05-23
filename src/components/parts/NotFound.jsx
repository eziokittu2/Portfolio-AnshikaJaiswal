import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='relative z-20'>
      <div className='flex flex-col items-center bg-black/80'>
        <div className="h-44 w-full bg-gradient-to-b from-purple-500/20 to-orange-100/20"></div>

        <div className='w-full bg-orange-100/20 h-[50px] h-xsm:h-[150px] h-sm:h-[300px] h-md:h-[550px] h-lg:h-[800px]'>
          <div className='mx-2 sm:mx-auto p-2 sm:p-4 text-purple-900 w-fit sm:w-11/12 lg:w-3/4 xl:w-3/5 2xl:w-1/2 text-center bg-orange-500/50 hover:bg-orange-500 rounded-lg group/about shadow-[0_0_5px_black] hover:shadow-[0_0_15px_black] transition duration-500'>
            <p className='text-6xl'>मुझे लगता है आप खो गए हैं</p>
            <p className='text-5xl'>(I think you are lost)</p>
            <p className='text-5xl'>यहां वापस आओ</p>
          </div>
        </div>

        <div className="h-44 w-full bg-gradient-to-b from-orange-100/20 to-orange-500/20"></div>
      </div>
    </div>
  )
}

export default NotFound