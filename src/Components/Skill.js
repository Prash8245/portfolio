import React from 'react';
import Cards from './Card';
import reactimg from '../logo.svg'; 
import java from './images/download.png';
import python from './images/images.png';
import sql from './images/mysql.png';


export default function Skill() {
  return (
    <div id='skill' className='mx-auto'>
        <div className='mb-24'>
            <p className='text-5xl text-white'>Skills</p>
            <span className='text-white'>_________</span>
        </div>
        
        
        <div className='columns-2 hidden sm:block'>
            <div className='p-2 m-2 ms-16'>
                <span className='text-white block text-left ms-5 text-xl'>HTML</span>
                <div className='h-[5px] w-[50%] bg-white m-5'>
                    <div className='h-[100%] relative w-[100%] bg-orange-300' ></div>
                </div>
                <span className='text-white block text-left ms-5 text-xl'>CSS</span>
                <div className='h-[5px] w-[50%] bg-white m-5'>
                    <div className='h-[100%] relative w-[100%] bg-orange-300' ></div>
                </div>
                <span className='text-white block text-left ms-5 text-xl'>JavaScript</span>
                <div className='h-[5px] w-[50%] bg-white m-5'>
                    <div className='h-[100%] relative w-[80%] bg-orange-300' ></div>
                </div>
                <span className='text-white block text-left ms-5 text-xl'>MySQL</span>
                <div className='h-[5px] w-[50%] bg-white m-5'>
                    <div className='h-[100%] relative w-[80%] bg-orange-300' ></div>
                </div>
                <span className='text-white block text-left ms-5 text-xl'>Bootstrap and Tailwind</span>
                <div className='h-[5px] w-[50%] bg-white m-5'>
                    <div className='h-[100%] relative w-[80%] bg-orange-300' ></div>
                </div>
                
            </div>
            <div className='my-7 block mx-auto sm:columns-2'>
                <Cards imgs={python} title="Python"/>
                <Cards imgs={reactimg} title="ReactJS"/>
                <Cards imgs={java} title="Java"/>
                <Cards imgs={sql} title="MySQL"/>
            </div>
            
        </div>
        <div className='block sm:hidden'>
            <Cards imgs={reactimg} title="ReactJS"/>
            <Cards imgs={java} title="Java"/>
            <Cards imgs={python} title="Python"/>
        </div>
        
 
        
    </div>
  );
}
