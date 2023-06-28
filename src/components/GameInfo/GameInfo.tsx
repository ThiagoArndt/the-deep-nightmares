import React from 'react'

interface GameInfoInterface {
  reverse: boolean
  image: string
  title: string
  description: string
}

function GameInfo (props: GameInfoInterface) {
  return (
    <div
      id='info'
      className='grid grid-cols-1 gap-12 px-[5%] md:px-20 md:grid-cols-2'
    >
      <img
        className={`order-1 ${props.reverse ? 'md:order-2' : 'md:order-1'}`}
        src={`${props.image}`}
        alt=''
      />
      <div
        className={`flex flex-col gap-4 order-2 ${
          props.reverse ? 'md:order-1' : 'md:order-2'
        }`}
      >
        <h1 className='text-secondary text-7xl md:text-8xl'>{props.title}</h1>
        <h2 className='text-white text-4xl'>{props.description}</h2>
      </div>
    </div>
  )
}

export default GameInfo
