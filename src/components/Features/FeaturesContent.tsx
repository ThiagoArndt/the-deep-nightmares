import React from 'react'
import FeatureItem from './FeatureItem'
function FeaturesContent () {
  return (
    <>
      <div className='flex flex-col m-auto items-center mt-96 px-20 gap-20'>
        <div className='flex flex-col gap-8 w-full items-center'>
          <h1 className='text-white text-8xl'>Features</h1>
          <div className='w-full h-[1px] bg-white'></div>
        </div>
        <div className='grid grid-cols-1 gap-20 text-center md:grid-cols-[repeat(3,1fr)]'>
          <FeatureItem
            image='/images/feature-1.png'
            title='Morte'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          />
          <FeatureItem
            image='/images/feature-2.png'
            title='Misterio'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          />
          <FeatureItem
            image='/images/feature-3.png'
            title='Tochas'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          />

          <FeatureItem
            image='/images/feature-4.png'
            title='Luz'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          />
          <FeatureItem
            image='/images/feature-5.png'
            title='Criatura'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          />
          <FeatureItem
            image='/images/feature-6.png'
            title='Defesa'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          />
        </div>
      </div>
    </>
  )
}

export default FeaturesContent
