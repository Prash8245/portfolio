import React from 'react';
import data from './data.json'; 

export default function Certification() {
    const certificates = data[3];

  return (
    <div id='certificate'>
        <div>
            <p className='text-5xl text-white'>Certification</p>
            <div className='text-white'>_____________</div>
        </div>
        <div className='columns-1 sm:columns-3 gap-5 p-5 m-5'>
            {
                certificates.Certifications.map((element,index)=>{
                    return(
                        <div className='p-3' key={index}>
                            <img className='block mx-auto object-contain p-2 h-[18rem]' src={element.image} alt="Certificategallery" />
                            <p className='text-2xl text-white'>{element.title}</p>
                        </div>
                    )
                },[])
            }
        </div>
    </div>
  );
}
