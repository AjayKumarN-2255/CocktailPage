import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <div className='bg-red-950 p-10 text-white text-xl font-bold'>
      App
    </div>
  )
}

export default App
