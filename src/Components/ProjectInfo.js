import React from 'react';
import { useLocation } from 'react-router-dom';

export default function ProjectInfo() {
    const location = useLocation();
    const data = location.state;
  return (
    <div>
        <p className='text-5xl my-10 text-white text-center'>{data.title}</p>
        <div>
            <img className='block mx-auto w-4/5 sm:w-1/2  ' src={data.image} alt="project" />
        </div>
        <div>
            <p className='p-7 text-white text-lg'>
                {data.description}
            </p>
        </div>
        <div>
            <p className='text-3xl my-10 text-white text-center'>Gallery</p>
        </div>
        <div className='columns-3 gap-5 p-5 m-5'>
            {
                data.imageSet.map((element,index)=>{
                    return(
                        <div>
                            <img className='block mx-auto object-contain p-2' src={element} alt="projectgallery" />
                            {console.log(element)}
                        </div>
                    )
                },[])
            }
        </div>
    </div>
  );
}
