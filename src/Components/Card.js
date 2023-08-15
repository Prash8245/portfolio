import React from 'react';

export default function Cards(props) {
  return (
    <div className=' w-[18rem] aspect-auto block mx-auto sm:w-[9rem] lg:w-[14rem] hover:shadow-2xl hover:bg-gray-500'>
        <div className='p-2'>
            <img className='w-full h-36 rounded-lg' src={props.imgs} alt='skills' />
        </div>
        <div className='block p-5'>
            <p className='text-lg font-bold text-white' >{props.title}</p>
        </div>
    </div>
  );
}
