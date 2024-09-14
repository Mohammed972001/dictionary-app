import React, { useState } from 'react';

  const Accordion = ({ title, children,}) => {
const [isopen,setopen]=useState(false)
function onhover(){
  setopen(!isopen);
}


  return (
  <div className='border-b-2 border-t-2 border-solid  border-sky-500 '>
  
  <label className='flex flex-col bg-white cursor-pointer 
   border-l-2 border-r-2 border-solid   border-sky-500 p-2'>
  <div  className='flex justify-between' onClick={onhover}>
  <span>{title}</span>
  <span>{isopen ? '-' :'+'}</span>
  </div>
  <div className={`overflow-hidden transition-all duration-300 
  ${isopen ? 'max-h-screen' : 'max-h-0'}`}>
  <p>{children}</p>
</div>
  </label>
 
  </div>
  );
};
export default Accordion;