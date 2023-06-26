import React from 'react'

interface FeatureInterface {
  title: string
  description: string
  image: string
}

function FeatureItem (props: FeatureInterface) {
  return (
    <>
      <div className='flex flex-col gap-2 items-center justify-center'>
        <img className='w-72' src={props.image} alt='' />
        <h1 className='text-secondary text-5xl'>{props.title}</h1>
        <h2 className='text-white text-4xl '>{props.description}</h2>
      </div>
    </>
  )
}

export default FeatureItem
