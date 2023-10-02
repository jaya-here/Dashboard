//File:AnalyticChart.js
//Description: Create a bar char to reflect profits made over a month

import React from 'react'
import {Popover} from 'antd'
import './AnalyticChart.css'
import create from '@ant-design/icons/lib/components/IconFont';

function AnalyticChart() {
    //return percentage of amount to be display when hovering over the dashboard
    const content = (numerator, denominator)=>(
        <div className='text-gray-100'>
          <p>{(numerator/denominator)*100}%</p>
        </div>
      );

      //Initialise values for bar chart y axis
      const values = [
        {
            numerator: 1,
            denominator: 4
            
        },
        {
            numerator: 2,
            denominator: 5
        },
        {
            numerator: 4,
            denominator: 5
        },
        {
            numerator: 2,
            denominator: 4
            
        },
        {
            numerator: 2,
            denominator: 5
        },
        {
            numerator: 4,
            denominator: 5
        }

      ]

//function which return the numerator/denominator ratio in string form such as 1/4 for setting the h parameter
function createString(index) {
    let str = `${values[index].numerator}\/${values[index].denominator}`
    return str
}

function percentage(index) {
    let number = values[index].numerator/values[index].denominator*100
    let percentage = Number(number.toFixed(2))
    return percentage+'%'
}

let output = values.map((element, index)=>{
    return percentage(index)
})

console.log(output)

  return (
    <div className='w-90% ml-5'>
        <div className="grid grid-rows-4 gap-4 relative">
        <div className='grid grid-cols-10 gap-3 items-center'>
        <div className="text-gray-400 p-4 col-span-1">
        60
        </div>
        <div className='col-span-9 border-t-2 border-dashed border-t-gray'>
        </div>
        </div>
        <div className='grid grid-cols-10 gap-3 items-center'>
        <div className="text-gray-400 p-4 col-span-1">
        40
        </div>
        <div className='col-span-9 border-t-2 border-dashed border-t-gray'>
        </div>
        </div>
        <div className='grid grid-cols-10 gap-3 items-center'>
        <div className="text-gray-400 p-4 col-span-1">
        20
        </div>
        <div className='col-span-9 border-t-2 border-dashed border-t-gray'>
        </div>
        </div>
        {/*Each chart component is wrapper with a Ant Design Popover element to display the corresponding percentage when hovered*/}
        <Popover content={content(values[0].numerator, values[0].denominator)} overlayInnerStyle={{backgroundColor:'black', color:"white"}}>
        <div className={`absolute bottom-7 left-12 bg-purple-400 h-${createString(1)} w-14 rounded-md`} style={{height:output[0]}}>
        </div>
        </Popover>
        <Popover content={content(values[1].numerator, values[1].denominator)} overlayInnerStyle={{backgroundColor:'black', color:"white"}}>
        <div className={`absolute bottom-7 left-28 bg-gray-400 h-${createString(1)} w-14 rounded-md`} style={{height:output[1]}}>
        </div>
        </Popover>
        <Popover content={content(values[2].numerator, values[2].denominator)} overlayInnerStyle={{backgroundColor:'black', color:"white"}}>
        <div className={`absolute bottom-7 bg-purple-400 h-${createString(2)} w-14 rounded-md`} style={{left:'11rem', height:output[2]}}>
        </div>
        </Popover>
        <Popover content={content(values[3].numerator, values[3].denominator)} overlayInnerStyle={{backgroundColor:'black', color:"white"}}>
        <div className={`absolute bottom-7 bg-gray-400 h-${createString(3)} w-14 rounded-md`} style={{left:'15rem', height:output[3]}}>
        </div>
        </Popover>
        <Popover content={content(values[4].numerator, values[4].denominator)} overlayInnerStyle={{backgroundColor:'black', color:"white"}}>
        <div className={`absolute bottom-7 bg-purple-400 h-${createString(4)} w-14 rounded-md`} style={{left:'19rem', height:output[4]}}>
        </div>
        </Popover>
        <Popover content={content(values[5].numerator, values[5].denominator)} overlayInnerStyle={{backgroundColor:'black', color:"white"}}>
        <div className={`absolute bottom-7  bg-gray-400 h-${createString(5)} w-14 rounded-md`} style={{left:'23rem', height:output[5]}}>
        </div>
        </Popover>
        
</div>
<div className="grid grid-rows-1 gap-4 relative">
        <div className='grid grid-cols-10 gap-3 items-center'>
        <div className="text-gray-400 p-0 col-span-1">
        </div>
        <div className='col-span-9 text-gray-400 flex justify-between text-sm'>
            <div>1-10 Aug</div>
            <div>11-20 Aug</div>
            <div>21-31 Aug</div>
            <div>1-10 Sep</div>
        </div>
        </div>
        
</div>
    </div>
  )
}

export default AnalyticChart