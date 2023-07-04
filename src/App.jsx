import './App.css'
import RoundOne from './components/roundeDesign/RoundOne'
import RoundTwo from './components/roundeDesign/RoundTwo'

function App() {
  return (
    <h1 className='w-full h-screen font-bodyFont text-textColor bg-black relative'>
      <div className='w-full h-full absolute top-0 left-0 z-10 '>
        <RoundOne />
        <RoundTwo />
      </div>
    </h1>
  )
}

export default App
