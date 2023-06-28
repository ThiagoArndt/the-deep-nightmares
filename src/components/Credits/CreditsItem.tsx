import React from 'react'

function CreditsItem(props:any) {
  return (
  
    <div className="text-white flex flex-row items-center gap-3">
        <img className='w-32' src={props.image} alt=''></img>
        <div>
        <h1 className='text-5xl'>{props.name}</h1>
        <h2 className='text-3xl'>{props.role}</h2>
        </div>
        </div>
    
  )
}

export default CreditsItem
