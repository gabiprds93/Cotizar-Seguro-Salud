import React from 'react'

const StepHeader = ({ title, subtitle }) => {
  return(
     <div>
       <h2>
        <span className='txt-black'>{title[0]}</span> <span className='txt-red'>{title[1]}</span> 
       </h2>
       <p className='txt-gray'>{subtitle}</p>
     </div>
  )
}

export default StepHeader