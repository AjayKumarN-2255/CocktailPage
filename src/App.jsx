import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

import Navbar from './components/Navbar';
import Hero from './components/Hero';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-screen flex justify-between">
        <p className='max-w-2xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi odit ab pariatur repellat.
          Assumenda vero veritatis eaque quibusdam magnam libero.
          Eum dolor assumenda sed doloremque sint officia deleniti ullam id.
        </p>

        <pm className='max-w-2xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi odit ab pariatur repellat.
          Assumenda vero veritatis eaque quibusdam magnam libero.
          Eum dolor assumenda sed doloremque sint officia deleniti ullam id.
        </pm>
      </div>
      <div className="h-screen"></div>
    </main>
  )
}

export default App
