import React, { useEffect, useState } from 'react'
import './Deal.css'
import './TimerCount.css'


const TimerCount = () => {

   const [days, setDays] = useState()
   const [hours, setHours] = useState()
   const [minutes, setMinutes] = useState()
   const [seconds, setSeconds] = useState()

   let interval;

   const countDown = () => {
     const destination = new Date ('september 15, 2024').getTime()
      interval = setInterval(() =>{
         const now = new Date ().getTime()
         const different = destination-now
         const days =Math.floor(different / (1000 * 60 * 60 * 24));

         const hours =Math.floor(different % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

         const minutes =Math.floor(different % (1000 * 60 * 60) / (1000 * 60));

         const seconds =Math.floor(different % (1000 * 60) / 1000);

         if(destination < 0) clearInterval(interval.current); 
            else{
                  setDays(days);
                  setHours(hours);
                  setMinutes(minutes);
                  setSeconds(seconds);
         }
      })
   }

   useEffect(() => {
    countDown()
   })

  return (
    <div className='time-wrapper'>
     <div className='time-data'>
     <div className='timer'>
       <h1>{days}</h1>
	   <h4>Days</h4> 
     </div>
     <span>:</span>
      </div>

      <div className='time-data'>
      <div className='timer'>
       <h1>{hours}</h1>
	   <h4>Hours</h4> 
     </div>
     <span>:</span>
      </div>

      <div className='time-data'>
      <div className='timer'>
       <h1>{minutes}</h1>
	   <h4>Minutes</h4> 
     </div>
     <span>:</span>
      </div>

      <div className='time-data'>
      <div className='timer'>
      <h1>{seconds}</h1>
	   <h4>Seconds</h4> 
      </div>
      </div>
      
    </div>
  )
}

export default TimerCount
