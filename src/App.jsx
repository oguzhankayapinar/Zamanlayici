import { useState } from 'react'
import './App.css'
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import logo from './assets/murkaylogoo.png';

function App() {


  return (
    <section className="container">
      <div className="clock_content">
        <img src={logo} alt="Logo" width={350} />
        <h1>Yakında Hizmetinizdeyiz</h1>


        <FlipClockCountdown
          className='flip-clock'
          to={new Date().getTime() + 48 * 3600 * 1000 + 5000}
          labels={["GÜN", "SAAT", "DAKİKA", "SANİYE"]}
          duration={0.5}
          style={{ fccDigitBlockWidth: "20px" }}
        />
        {/* <button className="button">Notify Me</button> */}
      </div>
    </section>
  )
}

export default App
