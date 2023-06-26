import Navbar from './components/Navbar/Navbar'

import GameInfoContent from './components/GameInfo/GameInfoContent'
import Hero from './components/Hero/Hero'
import FeaturesContent from './components/Features/FeaturesContent'

function App () {
  return (
    <>
      <Navbar />
      <Hero>
        <>
          <GameInfoContent />
          <FeaturesContent />
        </>
      </Hero>
    </>
  )
}

export default App
