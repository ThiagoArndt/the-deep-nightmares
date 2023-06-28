import React from 'react'
import ReviewItem from './ReviewItem'

const gameReviews = [
  {
    name: 'Zé',
    role: 'Desenvolvedor',
    title: 'Arrepiante',
    description:
      'Como beta tester do The Deep Nightmare, fiquei impressionado com a atmosfera aterrorizante e os enigmas intrigantes do jogo. A criatura misteriosa mantém a tensão constante, e a sensacão de perigo iminente é arrepiante. A necessidade de encontrar uma saida da casa enquanto evita ser capturado torna o jogo emocionante. Prepare-se para mergulhar em uma aventura sombria e cheia de suspense!',
    image: '/images/character-review-2.png'
  },
  {
    name: 'Hoffmann',
    role: 'Designer',
    title: 'Belo Enredo',
    description:
      'The Deep Nightmare oferece uma narrativa intrigante que envolve o jogador desde o inicio. A historia de Connor, o policial detetive, preso em uma casa misteriosa sem memoria, desperta curiosidade e o desejo de descobrir a verdade por trás dos eventos. Os enigmas e segredos revelados ao longo do jogo mantem o suspense e fazem voce querer explorar cada canto da casa. Prepare-se para desvendar os mistérios sombrios que aguardam por voce!',
    image: '/images/character-review-1.png'
  },
  {
    name: 'Xunda',
    role: 'Beta Tester',
    title: 'Aterrorizante',
    description:
      'Como um gamer hardcore, procuro jogos que me envolvam emocionalmente e oferecam um desafio real. The Deep Nightmare não decepciona. A criatura misteriosa é assustadora, e a necessidade constante de evitar ser capturado mantém o coracão acelerado. Os quebra-cabecas são desafiadores e recompensadores quando resolvidos. A combinacão de atmosfera aterrorizante, enigmas intrigantes e acão intensa torna este jogo um must-play!',
    image: '/images/character-review-3.png'
  }
]

function ReviewsContent () {
  return (
    <>
      <div
        id='reviews'
        className='flex flex-col m-auto items-center mt-96 px-5 gap-20 sm:px-20'
      >
        <div className='flex flex-col gap-8 w-full items-center'>
          <h1 className='text-white text-8xl'>Reviews</h1>
          <div className='w-full h-[1px] bg-white'></div>
        </div>
        <div className='flex flex-col gap-8 justify-between 2xl:px-0 xl:flex-row xl:gap-12 2xl:gap-24'>
          {gameReviews.map(item => (
            <ReviewItem
              title={item.title}
              role={item.role}
              name={item.name}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default ReviewsContent
