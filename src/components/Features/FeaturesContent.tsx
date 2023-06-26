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
        <div className='grid grid-cols-1 gap-20 text-center sm:grid-cols-[repeat(3,1fr)]'>
          <FeatureItem
            image='/images/feature-1.png'
            title='Lorem Ipsum'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          />
          <FeatureItem
            image='/images/feature-2.png'
            title='Lorem Ipsum'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          />
          <FeatureItem
            image='/images/feature-3.png'
            title='Lorem Ipsum'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          />

          <FeatureItem
            image='/images/feature-1.png'
            title='Lorem Ipsum'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          />
          <FeatureItem
            image='/images/feature-2.png'
            title='Lorem Ipsum'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          />
          <FeatureItem
            image='/images/feature-3.png'
            title='Lorem Ipsum'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          />
        </div>
      </div>
    </>
  )
}

export default FeaturesContent
