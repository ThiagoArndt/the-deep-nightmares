import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GameInfoContent from './components/GameInfoContent'

function App () {
  return (
    <>
      <Navbar />
      <Hero>
        <>
          <GameInfoContent />
        </>
      </Hero>
    </>
  )
}

export default App
