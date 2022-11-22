

import {useIdleTimer} from 'react-idle-timer'
import React,{useRef} from 'react'

const IdleTimer = () => {
    const idleTimerRef=useRef(null)
  const idleTimer=useIdleTimer({
    ref:idleTimerRef,
    timeout:5*1000,
    onIdle:onIdle

  })

  const onIdle=()=>{
     console.log("user idle")
  }
  return (
    <div>
      
    </div>
  )
}

export default IdleTimer
