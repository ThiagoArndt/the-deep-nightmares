import React from 'react'
import GameInfo from './GameInfo'

function GameInfoContent () {
  return (
    <div className='flex flex-col gap-48 mt-28 md:mt-0'>
      <GameInfo reverse={false} image='/images/game-info-1.png' />
      <GameInfo reverse={true} image='/images/game-info-2.png' />
    </div>
  )
}

export default GameInfoContent
