//File:CalendarSlider
//Description: Function component that displays 7 days of the week starting from sunday. The left button moves the calendar a week back and right  button moves the calendar a week forward

import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import React from 'react'
import { useState } from 'react';

const monthObj = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  };

function DateDisplay({startOfWeek, date}) {
//get current date and  month
let day = date.getDate()
let month = date.getMonth()

//get current month for the first day of the week
let weekMonth = startOfWeek.getMonth()

//if the current day belongs to a different month (occurs during start of month and end of month) change the text to grey
let textColor = (month===weekMonth) ? 'text-black' : 'text-gray-400'
return (<div className={`text-sm ${textColor}`} date={date}>{day}</div>)
}

//Component to be display when the week contains today date, today date will be highlighted in purple
function DateDisplayToday({startOfWeek, date, activeDate}) {

    let firstDate = date.getDate()
    let firstMonth = date.getMonth()
    let firstYear = date.getFullYear()

    let secondDate = activeDate.getDate()
    let secondMonth = activeDate.getMonth()
    let secondYear = activeDate.getFullYear()
    let highlight

    if (firstDate === secondDate && firstMonth === secondMonth && firstYear === secondYear)
    {
        highlight = 'bg-purple-400 text-gray-100 rounded-full'
    }
    else 
    {
        highlight = ''
    }


    let day = date.getDate()
    let month = date.getMonth()
    let weekMonth = startOfWeek.getMonth()
    let textColor = (month===weekMonth) ? 'text-black' : 'text-gray-400'
    return (<div className={`text-sm ${textColor} ${highlight}`}
     date={date}
    >{day}</div>)
    }

function CalendarSlider() {

 
  
  
  //initial date
  let date = new Date()
  let month = date.getMonth()
  let year = date.getFullYear()
  let highlightTodayDate = false

  //compute the day of the week
  let currentDay = date.getDay()
  
  //compute the most recent Sunday from date under consideration
  let mostRecentSunday = new Date(date)
  mostRecentSunday.setDate(date.getDate()-currentDay)
  
  let [startOfWeek, setStartOfWeek] = useState(mostRecentSunday)

  //change the start of week seven days back or forward depending on left and right click
  function handleClick(direction) {
   setStartOfWeek((prev)=>{
    let newDate = new Date()
    newDate.setTime(prev.getTime())
    if (direction === 'left')
    newDate.setDate(newDate.getDate()-7)
    else
    newDate.setDate(newDate.getDate()+7)
    console.log(newDate)
    return newDate
   })
  }

  let currentweek = [startOfWeek]

  for (let i = 1; i<=6; i++)
  {
    let newDate = new Date()
    newDate.setTime(startOfWeek.getTime())
    newDate.setDate(newDate.getDate()+i)
    currentweek.push(newDate)
  }

  month = startOfWeek.getMonth()
  year = startOfWeek.getFullYear()

  //check if today date is within the range of current week under consideration
  if (date >= currentweek[0] && date <= currentweek[6])
  {
    highlightTodayDate = true
  }
  else 
  {
    highlightTodayDate = false
  }

  return (
    <div className='mb-4'>
    <div className='flex justify-between items-center mb-5'>
        <h3 className='text-xl text-black font-semibold tracking-wide'>{monthObj[month]} {year}</h3>
        <div className='flex gap-3'> 
        <div className='border border-1 border-gray-400 rounded-full px-2 py-0.5 pb-1' onClick={()=>{handleClick('left')}}>
        <LeftOutlined className='text-purple-400  outline-gray-400 border-gray-400 text-sm'></LeftOutlined>
        </div>
        <div className='border border-1 border-gray-400 rounded-full px-2 py-0.5 pb-1' onClick={()=>{handleClick('rigth')}}>
        <RightOutlined className='text-purple-400 border-1 outline-gray-400 border-gray-400 text-sm'></RightOutlined>
        </div>
        </div>
    </div>
    <div className="container">
    <div className="grid grid-cols-7">
    <div className='text-gray-400'>Sun</div>   
    <div className='text-gray-400'>Mon</div>
    <div className='text-gray-400'>Tue</div> 
    <div className='text-gray-400'>Wed</div>
    <div className='text-gray-400'>Thurs</div>
    <div className='text-gray-400'>Fri</div>
    <div className='text-gray-400'>Sun</div>

    {(highlightTodayDate===false)?(currentweek.map((element)=>{
        return(<DateDisplay startOfWeek={startOfWeek} key={element}
            date={element} />)
    })):(currentweek.map((element)=>{
        return(<DateDisplayToday startOfWeek={startOfWeek}
            date={element} activeDate={date} key={element} />)
    }))}


    </div>
    </div>
    </div>
  )
}

export default CalendarSlider