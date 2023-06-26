import React from 'react'

interface GameInfoInterface {
  reverse: boolean
  image: string
}

function GameInfo (props: GameInfoInterface) {
  return (
    <div className='grid grid-cols-1 gap-12 px-[5%] sm:px-20 sm:grid-cols-2'>
      <img
        className={`order-1 ${props.reverse ? 'sm:order-2' : 'sm:order-1'}`}
        src={`${props.image}`}
        alt=''
      />
      <div
        className={`flex flex-col gap-4 order-2 ${
          props.reverse ? 'sm:order-1' : 'sm:order-2'
        }`}
      >
        <h1 className='text-secondary text-7xl sm:text-8xl'>Lorem Ipsum</h1>
        <h2 className='text-white text-4xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident.
        </h2>
      </div>
    </div>
  )
}

export default GameInfo
