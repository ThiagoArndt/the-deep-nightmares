import Navbar from './components/Navbar/Navbar'

import GameInfoContent from './components/GameInfo/GameInfoContent'
import Hero from './components/Hero/Hero'
import FeaturesContent from './components/Features/FeaturesContent'
import ReviewsContent from './components/Reviews/ReviewsContent'
import CreditsContent from './components/Credits/CreditsContent'

function App () {
  return (
    <>
      <Navbar />
      <Hero>
        <>
          <GameInfoContent />
          <FeaturesContent />
          <ReviewsContent />
          <CreditsContent/>
        </>
      </Hero>
    </>
  )
}

export default App
