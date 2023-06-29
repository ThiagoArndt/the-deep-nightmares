import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import './Hero.css'
import { useRef } from 'react'
import { ParallaxConfig, useAdaptiveTriggers } from '../../utils/paralaxUtils'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'
function Hero (props: any) {
  function downloadFile (url: string) {
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download', fileName!)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }

  const storage = getStorage()
  const donwloadUrl = () =>
    getDownloadURL(
      ref(
        storage,
        'gs://the-deep-nightmare.appspot.com/The Deep Nightmare 1.2.zip'
      )
    )
      .then(url => {
        downloadFile(url)
      })
      .catch(error => {
        window.location.replace('https://www.omfgdogs.com/#')
      })

  const width = useAdaptiveTriggers({})
  const parallax = useRef<IParallax>(null!)

  return (
    <div className='App'>
      <Parallax
        ref={parallax}
        pages={ParallaxConfig[width].pages}
        key={width}
        style={{ top: '0', left: '0' }}
        className='animation'
      >
        <ParallaxLayer id='home' offset={0} speed={0.3}>
          <div className='animation_layer parallax' id='bg'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.15}>
          <div className='animation_layer parallax' id='first'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <div className='animation_layer parallax' id='second'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className='animation_layer parallax' id='third'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className='animation_layer parallax' id='logo'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <button onClick={donwloadUrl} id='btn'>
            Jogue Agora!
          </button>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          {props.children}
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default Hero

/*
 <div>
      <Parallax
        pages={2}
        style={{ top: '0', left: '0' }}
        className='h-[600px] block relative z-10'
      >
        <ParallaxLayer offset={0} speed={0.6}>
          <img
            src='/images/background-1.png'
            alt=''
            className='h-[800px] bg-[bottom_center] bg-[auto_1038px] bg-repeat-x w-full absolute'
          ></img>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <img
            src='/images/level-1.png'
            alt=''
            className='h-auto bottom-52 bg-[bottom_center] bg-[auto_1038px] bg-repeat-x w-full absolute'
          ></img>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <img
            src='/images/level-2.png'
            alt=''
            className='h-auto bg-[bottom_center] bg-[auto_1038px] bg-repeat-x w-full absolute'
          ></img>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <img
            src='/images/level-3.png'
            alt=''
            className='h-auto bg-[bottom_center] bottom-5 bg-repeat-x w-full absolute'
          ></img>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <img
            src='/images/logo.png'
            alt=''
            className='h-auto w-2/4 bg-[bottom_center] m-auto my-48 bg-repeat-x'
          ></img>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <button className='h-auto w-2/4 bg-[bottom_center] m-auto my-48 bg-repeat-x'>
            Jogue Agora
          </button>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          {props.children}
        </ParallaxLayer>
      </Parallax>
    </div>
*/
