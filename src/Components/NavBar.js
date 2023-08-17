import React from 'react';
// import logo from './images/IMG_0449-01.jpg.jpeg';

export default function componentName() {
  var i = 1;
  var menu = ()=>{
    
    if(i%2 !== 0){
      console.log("Odd : "+i);
      document.getElementById("menuList").style.display = "block";
      i++;
    }
    else{
      console.log("even : "+i);
      document.getElementById("menuList").style.display = "none";
      i++;      
    }
    
  }

  return (
    <div>
      <div className='navbar sm:fixed'>
        <div className='logo'>
            {/* <img src={logo} alt="logo" className='rounded-full' /> */}
            <p className='text-4xl text-white'>Portfolio</p>
        </div>
        <div className='flex'>
          <div className='mt-4 me-2 hidden md:block'>
              <ul>
                  <li> <a href='/'> Home</a></li>
                  <li><a href='#about'>About</a></li>
                  <li><a href='#project'>Projects</a></li>
                  <li><a href='#certificate'>Certification</a></li>
              </ul>
          </div>
          <div className='mt-9 me-5 block md:hidden cursor-pointer'>
            {/* Mobile menu button */}
              <span className='text-white' onClick={menu} >  &#9776; </span>
          </div>
        </div>
    </div>
    <div>
        <ul id="menuList" className='hidden transition-all'>
          <li> <a href='#home'> Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#project'>Projects</a></li>
          <li><a href='#certificate'>Certification</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </div>
    </div>
    
  );
}
