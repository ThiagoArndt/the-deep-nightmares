import React from 'react'
import ReviewItem from './ReviewItem'

function ReviewsContent () {
  return (
    <>
      <div className='flex flex-col m-auto items-center mt-96 px-5 gap-20 sm:px-20'>
        <div className='flex flex-col gap-8 w-full items-center'>
          <h1 className='text-white text-8xl'>Reviews</h1>
          <div className='w-full h-[1px] bg-white'></div>
        </div>
        <div className='flex flex-col gap-28 justify-between sm:px-20 sm:flex-row'>
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
        </div>
      </div>
    </>
  )
}

export default ReviewsContent
