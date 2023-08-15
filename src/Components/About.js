import React from 'react';

export default function About() {
  return (
    <div id='about' className='about my-20 p-[2rem] w-[100vw] md:py-[5rem]'>
        <div>
            <p className='text-5xl text-white'>About</p>
            <span className='text-white'>__________</span>
        </div>
        <div>
            <p className='text-white mx-10 my-5 text-lg'>
            Hi, I'm Prashanth T – a passionate web developer currently pursuing a B.Tech in Computer Science at Presidency University. I thrive on 
            turning ideas into interactive digital experiences. I enjoy crafting clean and dynamic web solutions using HTML, CSS, JavaScript, and 
            React JS.<br/>  <br/></p><p className='text-white mx-10 my-5 text-lg hidden sm:block' >
            With a focus on user-centric design, I've collaborated on projects like a user-friendly college club website and a static e-commerce 
            shop. Leadership roles and virtual internships have refined my teamwork, communication, and problem-solving skills. Let's team up to
            create impactful digital stories!
            </p>
        </div>
        
    </div>
  );
}
