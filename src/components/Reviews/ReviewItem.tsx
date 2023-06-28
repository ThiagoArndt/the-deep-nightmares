import React from 'react'

interface ReviewItemInterface {
  name: string
  role: string
  title: string
  description: string
  image: string
}

function ReviewItem (props: ReviewItemInterface) {
  return (
    <div className='w-full h-auto bg-secondary p-8 flex flex-col gap-10'>
      <div className='flex flex-row w-full gap-6'>
        <img className='w-28 h-auto' src={props.image} alt='' />
        <div className='flex flex-col justify-between'>
          <div>
            <h1 className='text-4xl leading-none text-primary 2xl:text-5xl'>
              {props.name}
            </h1>
            <h2 className='text-3xl leading-none text-primary 2xl:text-4xl'>
              {props.role}
            </h2>
          </div>
          <div className='flex flex-row w-10 h-auto 2xl:w-10 md:w-9'>
            <img src='/images/star-review.png' alt='' />
            <img src='/images/star-review.png' alt='' />
            <img src='/images/star-review.png' alt='' />
            <img src='/images/star-review.png' alt='' />
            {props.name == 'Hoffmann' ? (
              <img src='/images/star-black-review.png' alt='' />
            ) : (
              <img src='/images/star-review.png' alt='' />
            )}
          </div>
        </div>
      </div>
      <div className='flex flex-col items-start gap-4 2xl:items-center sm:items-center'>
        <h1 className='text-5xl'>{props.title}</h1>
        <h2 className='text-3xl'>{props.description}</h2>
      </div>
    </div>
  )
}

export default ReviewItem
