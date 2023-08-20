import React from 'react';
import {Link} from 'react-router-dom';
import data from './data.json';
import pro1 from './images/My_project-1-removebg-preview.png';
import pro2 from './images/My_project-2-removebg-preview.png';
import pro3 from './images/My_project-3-removebg-preview.png';

export default function Projects() {
  return (
    <div className='my-10' id='project' >
        <p className='text-5xl text-white'>Projects</p>
        <div className='text-white'>_____________</div>
        <div className='sm:my-24'>
          <div className='my-10 sm:columns-2 '>
              <img className='w-[25rem] block mx-auto' src={pro1}  alt='pro' />
              <div className='pt-7'>
                <p className='text-3xl text-white sm:text-left sm:text-xl'><b>College Clubs and Society Website</b></p>
                <p className='text-base sm:text-lg text-white sm:text-left my-10'>Developed and implemented a user-friendly website for our college Clubs and 
                society, improving the communication and Engaging among students. I worked on this project with a team of 5 members,
                utilizing HTML, CSS, JavaScript and Bootstrap. </p>
                <div>
                  <div className='text-center sm:text-left'>
                    <Link className='text-white bg-sky-600 p-3 rounded-md' to="/project" state={data[0]}>Know more</Link> 
                  </div>
                </div>                
              </div>
            </div>
            <div className='my-10 sm:columns-2 '>
              <img className='w-[25rem] block mx-auto' src={pro2}  alt='pro' />
              <div className='pt-7'>
                <p className='text-3xl text-white sm:text-left sm:text-xl'><b>Static Travels Website</b></p>
                <p className='text-base sm:text-lg text-white sm:text-left my-10'> Developed a static and Simple travels website that developed individually. 
                It consist of different locations and package for the travels.</p>
                  <div>
                  <div className='text-center sm:text-left'>
                    <Link className='text-white bg-sky-600 p-3 rounded-md' to="/project" state={data[1]}>Know more</Link> 
                  </div>
                  </div>
              </div>
            </div>
            <div className='my-10 sm:columns-2 '>
              <img className='w-[25rem] block mx-auto' src={pro3}  alt='pro' />
              <div className='pt-7'>
                <p className='text-3xl text-white sm:text-left sm:text-xl'><b>Static E-Commerce Website</b></p>
                <p className='text-base sm:text-lg text-white sm:text-left my-10'> Developed a static and Simple e-commerce website that I developed for my 
                front end development mini project . It consist of a shop list with 100 items which can be filtered based on their category. </p>
                  <div>
                  <div className='text-center sm:text-left'>
                    <Link className='text-white bg-sky-600 p-3 rounded-md' to="/project" state={data[2]}>Know more</Link> 
                  </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
  );
}
