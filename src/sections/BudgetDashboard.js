//File: BudgetDashboard.js
//Description: Building the monthly revenue display

import React from 'react'

const BudgetElement = ({revenue, increase, previousMonth})=>{
 return ( <div className='w-1/2 sm:w-1/3 md:w-1/3 lg:w-1/3'>
 <div className='flex items-center text-left'>
 {/*Display picture*/} 
 <div className='flex-1/3'>
 <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center"></div>
 </div>
 <div className='flex-2/3 p-2'>
{/*Display numerical information*/}
 <p className='text-gray-200 text-sm mb-1'>Monthly Revenue</p>
 <div className='flex items-center gap-2 mb-1'>
 <h3 className='inline-block text-white font-semibold text-xl'>{revenue}</h3> {' '} <p className='inline-block bg-white text-purple-400 text-xs font-bold p-1 rounded-full'>{increase}</p>
 </div>
 <p className='text-gray-200 text-sm mb-1'>Previous month <span className='text-white text-sm font-semibold'>{previousMonth}</span></p>
 </div>
 </div>
 </div>)
}

function BudgetDashboard() {
  //Initialise Budget values to be displayed
  let budgetArr = [{
    revenue:'$3,500',
    increase:'+2.4%',
    previousMonth:'$1.7k'
  },
  {
    revenue:'$6,750',
    increase:'+1.4%',
    previousMonth:'$3.1k'
  },
  {
    revenue:'$10,900',
    increase:'+4.3%',
    previousMonth:'$8.9k'
  }
]
  // returns three stats items to be displayed with purple background
  return (
    <section className='section-budget'>
        <div className='flex flex-wrap bg-purple-500 items-center p-5 m-1 rounded-lg justify-start sm:justify-evenly md:justify-evenly lg:justify-evenly'>
        {budgetArr.map((element)=>{
          return (<BudgetElement
          key={element.revenue}
          revenue={element.revenue}
          increase={element.increase}
          previousMonth={element.previousMonth}></BudgetElement>)
        })}

        </div>

    </section>
  )
}

export default BudgetDashboard