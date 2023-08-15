import React from 'react';
import image1 from './images/IMG_0446-01.jpeg';
import { TypeAnimation } from 'react-type-animation';

export default function Section1() {
  return (
    <div className='section1 md:pt-40 md:pb-32' >
        <div className='columns-2 hidden sm:block'>
            <div className='text-white mt-32 mx-5  '>
            <TypeAnimation className='text-6xl inline-block text-left'
              sequence={[
                  'Prashanth', // Types 'One'
                  1000, // Waits 1s
                  'Web Developer', // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                  'Prashanth',
                  () => {
                  console.log('Sequence completed');
                  },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}

              // style={{ fontSize: '5em', display: 'inline-block' }}
              />

              <div className='text-white mt-16 text-3xl'>Passionate front-end developer with a proven <br/>track record of  exceptional results. </div>
            </div>
            <img className='w-[20rem] block mx-auto rounded-full mt-24' id='deskImg' src={image1} alt='img' />
            <div>   </div>
        </div>
        <div className='block mt-14 sm:hidden'>
            <img className='w-60 h-60 m-7 block mx-auto rounded-full ' src={image1} alt='img' />
            <div>
              <p className='text-white my-7 text-6xl '>Prashanth</p>
            </div>
            
            <p className='text-white m-3 text-lg '>Passionate front-end developer with a proven track record of exceptional results.  </p>
        </div>
    </div>
        
  );
}
