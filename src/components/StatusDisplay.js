//File:StatusDisplay
//Description: Component which display status along with a color indication 

import React from 'react'

function StatusDisplay(props) {
  let bgcolor;
  let status;
  //depending on success, pending, failure set background to green, orange, and red
  if (props.message === 'success')
  {
    bgcolor = 'bg-green-500'
    status= 'Success'
  }
  else if (props.message ==='pending')
  {
    bgcolor = 'bg-orange-500'
    status = 'Pending'
  }
  else 
  {
    bgcolor = 'bg-red-500'
    status = 'Failed'
  }

  console.log("Status", status)
  return (
    <div className='inline-flex border rounded-full text-black font-semibold  text-100 items-center gap-2 p-2'>
        <div className={`w-3 h-3 ${bgcolor} rounded-full`}></div>
        <h5>{status}</h5>
    </div>
  )
}

export default StatusDisplay