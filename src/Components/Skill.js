import React from 'react';
import Cards from './Card';
import html from './images/174854.jpg';
import css from './images/Screenshot 2023-08-10 134318.png';
import js from './images/javascript.jpg';
import reactimg from '../logo.svg'; 
import java from './images/download.png';
import python from './images/images.png';
import sql from './images/mysql.png';
import frame from './images/bootstrap-vs-tailwind.jpg';


export default function Skill() {
  return (
    <div id='skill' className='mx-auto'>
        <p className='text-5xl text-white'>Skills</p>
        <span className='text-white'>_________</span>
        {/* <div className='hidden sm:block'>
            <div className='gap-7 my-7 sm:columns-4'>
                <Cards imgs={html} title="HTML"/>
                <Cards imgs={css} title="CSS"/>
                <Cards imgs={js} title="JavaScript"/>
                <Cards imgs={reactimg} title="ReactJS"/>
            </div>
            <div className='gap-7 my-7 sm:columns-4'>
                <Cards imgs={java} title="Java"/>
                <Cards imgs={python} title="Python"/>
                <Cards imgs={sql} title="MySQL"/>
                <Cards imgs={frame} title="Bootstap and Tailwind"/>
            </div>
        </div> */}
        <div className='columns-2'>
            <div>
                <span className='text-white block text-left text-xl'>HTML</span>
                <span className='text-white block text-left text-3xl'>- - - - - - </span>
                <span className='text-white block text-left text-xl'>HTML</span>
                <span className='text-white block text-left text-3xl'>- - - - - - </span>
                <span className='text-white block text-left text-xl'>HTML</span>
                <span className='text-white block text-left text-3xl'>- - - - - - </span>
                <span className='text-white block text-left text-xl'>HTML</span>
                <span className='text-white block text-left text-3xl'>- - - - - - </span>
            </div>
            <div className='my-7 sm:columns-2'>
                
                <Cards imgs={js} title="JavaScript"/>
                <Cards imgs={reactimg} title="ReactJS"/>
            </div>
            <div>

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
