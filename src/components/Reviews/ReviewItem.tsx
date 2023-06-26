import React from 'react'

function ReviewItem () {
  return (
    <div className='w-full h-[620px] bg-secondary p-8 flex flex-col gap-10'>
      <div className='flex flex-row w-full gap-6'>
        <img
          className='w-28 h-auto'
          src='/images/character-review.png'
          alt=''
        />
        <div className='flex flex-col justify-between'>
          <div>
            <h1 className='text-5xl leading-none text-primary'>Joaozinho</h1>
            <h2 className='text-3xl leading-none text-primary'>Beta Tester</h2>
          </div>
          <div className='flex flex-row'>
            <img className='w-10 h-auto' src='/images/star-review.png' alt='' />
            <img className='w-10 h-auto' src='/images/star-review.png' alt='' />
            <img className='w-10 h-auto' src='/images/star-review.png' alt='' />
            <img className='w-10 h-auto' src='/images/star-review.png' alt='' />
            <img className='w-10 h-auto' src='/images/star-review.png' alt='' />
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-5xl'>Lorem Ipsum</h1>
        <h2 className='text-3xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{' '}
        </h2>
      </div>
    </div>
  )
}

export default ReviewItem
