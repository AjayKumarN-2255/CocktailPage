import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

import Navbar from './components/Navbar';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
       <Navbar/>
       <div className="h-screen w-full"></div>
       <div className="h-screen w-full"></div>
    </main>
  )
}

export default App
