import { useState } from 'react'
import './App.css'
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

function App() {


  return (
    <section className="container">
      <div className="clock_content">
        <h1>Yakında Hizmetinizdeyiz</h1>
        <h3>Takipte Kalın</h3>
        <FlipClockCountdown
          className='flip-clock'
          to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
          labels={["GÜN", "SAAT", "DAKİKA", "SANİYE"]}
          duration={0.5}
        />
        {/* <button className="button">Notify Me</button> */}
      </div>
    </section>
  )
}

export default App
