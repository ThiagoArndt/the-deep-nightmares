import React from 'react'

function ReviewItem () {
  return (
    <div className='w-full h-auto bg-secondary p-8 flex flex-col gap-10'>
      <div className='flex flex-row w-full gap-6'>
        <img
          className='w-28 h-auto'
          src='/images/character-review.png'
          alt=''
        />
        <div className='flex flex-col justify-between'>
          <div>
            <h1 className='text-4xl leading-none text-primary 2xl:text-5xl'>
              Joaozinho
            </h1>
            <h2 className='text-3xl leading-none text-primary 2xl:text-4xl'>
              Beta Tester
            </h2>
          </div>
          <div className='flex flex-row w-10 h-auto 2xl:w-10 md:w-9'>
            <img src='/images/star-review.png' alt='' />
            <img src='/images/star-review.png' alt='' />
            <img src='/images/star-review.png' alt='' />
            <img src='/images/star-review.png' alt='' />
            <img src='/images/star-review.png' alt='' />
          </div>
        </div>
      </div>
      <div className='flex flex-col items-start gap-4 2xl:items-center sm:items-center'>
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
