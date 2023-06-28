import React from 'react'
import GameInfo from './GameInfo'

function GameInfoContent () {
  return (
    <div className='flex flex-col gap-48 mt-28 md:mt-0 2xl:mt-20'>
      <GameInfo
        title='O Jogo'
        description='The Deep Nightmare é um jogo de suspense e mistério em que o jogador assume o papel de Connor, um policial detetive que se acorda preso em uma casa sem se lembrar de nada, com uma criatura intrigante e maligna. O objetivo de Connor é escapar da casa resolvendo uma série de puzzles desafiadores enquanto evita ser capturado pela criatura. O jogo proporciona uma experiencia imersiva e intensa, com elementos de suspense, enigmas intrigantes e uma atmosfera aterrorizante.'
        reverse={false}
        image='/images/game-info-1.png'
      />
      <GameInfo
        title='Objetivos do jogo'
        description='Escapar da casa: O principal objetivo do jogador é ajudar Connor a encontrar uma saída da casa, resolvendo os diferentes tipos de puzzles e evitando ao máximo a criatura.
        Descobrir a verdade: Ao explorar a casa e resolver os enigmas, o jogador descobrirá o motivo de estar na casa e o segredo por trás do monstro.'
        reverse={true}
        image='/images/game-info-2.png'
      />
    </div>
  )
}

export default GameInfoContent
