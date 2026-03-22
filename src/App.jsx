import { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

gsap.registerPlugin(useGSAP);
//gsap.registerPlugin(ScrollTrigger, useGSAP)


function App() {
  
  const container = useRef();

  useGSAP(() => {
      gsap.from(".box", {
        x: 300,
        opacity: 0, 
        stagger: 0.1, 
        rotation: "+=360",
      });
  }, { scope: container }) // <-- scope


  return (
    <>
      <h1>Gsap on React</h1>
      <div ref={container}>
        <div className="boxes">
         <div className='box a'>a</div>
          <div className='box b'>b</div>
          <div className='box c'>c</div> 
        </div>
        
      </div>
    </>
  )
}

export default App
