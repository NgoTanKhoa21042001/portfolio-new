import './App.css'
import RoundFive from './components/roundeDesign/RoundFive'
import RoundFour from './components/roundeDesign/RoundFour'
import RoundOne from './components/roundeDesign/RoundOne'
import RoundThree from './components/roundeDesign/RoundThree'
import RoundTwo from './components/roundeDesign/RoundTwo'
import Home from './Home'

function App() {
  return (
    <h1 className='w-full h-screen font-bodyFont text-textColor bg-black relative overflow-hidden'>
      <div className='max-w-screen-2xl h-full mx-auto flex justify-center items-center'>
        <Home />
      </div>
      <div className='w-full h-full absolute top-0 left-0 z-10 '>
        <RoundOne />
        <RoundTwo />
        <RoundThree />
        <RoundFour />
        <RoundFive />
      </div>
    </h1>
  )
}

export default App
