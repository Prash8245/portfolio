import React from 'react';
import { useLocation } from 'react-router-dom';

export default function ProjectInfo() {
    const location = useLocation();
    const data = location.state;
  return (
    <div>
        <p className='text-3xl sm:text-5xl my-10 text-white text-center'>{data.title}</p>
        <div>
            <img className='block mx-auto w-4/5 sm:w-1/2 ' src={data.image} alt="project" />
        </div>
        <div>
            <p className='p-7 text-white text-lg text-center '>
                {data.description}
            </p>
        </div>
        <div className='flex justify-center my-10 p-5'>
            <div className='hidden sm:block text-center mx-5'>
                <a href={data.demo} className='text-white bg-sky-600 p-3 rounded-md w-4'  target='blank'>Demo</a> 
            </div>
            <div className='text-center mx-5'>
                <a href={data.code} className='text-white bg-sky-600 p-3 rounded-md w-4'  target='blank'>Code</a> 
            </div>
        </div> 
        <div>
            <p className='text-3xl my-10 text-white text-center'>Gallery</p>
        </div>
        <div className='columns-1 sm:columns-3 gap-5 p-5 m-5'>
            {
                data.imageSet.map((element,index)=>{
                    return(
                        <div key={index}>
                            <img className='block mx-auto object-contain p-2' src={element} alt="projectgallery" />
                        </div>
                    )
                },[])
            }
        </div>
    </div>
  );
}
