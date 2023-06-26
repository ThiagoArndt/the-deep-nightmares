import Navbar from './components/Navbar/Navbar'

import GameInfoContent from './components/GameInfo/GameInfoContent'
import Hero from './components/Hero/Hero'
import FeaturesContent from './components/Features/FeaturesContent'
import ReviewsContent from './components/Reviews/ReviewsContent'

function App () {
  return (
    <>
      <Navbar />
      <Hero>
        <>
          <GameInfoContent />
          <FeaturesContent />
          <ReviewsContent />
        </>
      </Hero>
    </>
  )
}

export default App
