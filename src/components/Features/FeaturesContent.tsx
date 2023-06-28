import React from 'react'
import FeatureItem from './FeatureItem'

var obj = [
  {
    image: '/images/feature-1.png',
    title: 'Morte',
    description: 'Cuidado com o monstro, se ele te pegar, ele vai te matar.'
  },
  {
    image: '/images/feature-2.png',
    title: 'Mistério',
    description:
      'Voce irá conseguir escapar da casa e desvendar os mistérios do jogo?'
  },
  {
    image: '/images/feature-3.png',
    title: 'Tochas',
    description:
      'Utilize as tochas pelo mapa para manter a criatura afastada. Mas cuidado, elas apagam.'
  },
  {
    image: '/images/feature-4.png',
    title: 'Luz',
    description:
      'Utilize da luz para iluminar o caminho e manter o monstro afastado.'
  },
  {
    image: '/images/feature-5.png',
    title: 'Criatura',
    description:
      'Você conseguirá ouvir a criatura quando ela estiver pelos arredores.'
  },
  {
    image: '/images/feature-6.png',
    title: 'Defesa',
    description:
      'Utilize a arma para espantar a criatura, mas fique de olho nas balas.'
  }
]

function FeaturesContent () {
  return (
    <>
      <div
        id='features'
        className='flex flex-col m-auto items-center mt-96 px-20 gap-20'
      >
        <div className='flex flex-col gap-8 w-full items-center'>
          <h1 className='text-white text-8xl'>Features</h1>
          <div className='w-full h-[1px] bg-white'></div>
        </div>
        <div className='grid grid-cols-1 gap-20 text-center md:grid-cols-[repeat(3,1fr)]'>
          {obj.map(item => (
            <FeatureItem
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default FeaturesContent
