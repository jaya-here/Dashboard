//File: Transaction History
//Description: Display the purchases made by clients

import React from 'react'
import { DatePicker} from 'antd'
import {Select, Button, Avatar} from 'antd'
import { UserOutlined } from '@ant-design/icons'
import StatusDisplay from '../components/StatusDisplay'

//Component that return a set of images that overlap each other
export const Imgarr = ({count}) => {
  if (count === 1)
  {
    return (<div className='flex relative'>
    <div className='w-16 h-16 bg-pink-300 border-4 border-white rounded-full'></div>
    </div>)
  }
  else if (count === 2)
  {
    return (<div className='flex relative'>
    <div className='w-16 h-16 bg-pink-300 border-4 border-white rounded-full'></div>
    <div className='w-16 h-16 bg-blue-300 border-4 border-white rounded-full absolute left-5'></div>
    </div>)
  }
  else if (count === 3)
  {
    return (<div className='flex relative'>
    <div className='w-16 h-16 bg-pink-300 border-4 border-white rounded-full'></div>
    <div className='w-16 h-16 bg-blue-300 rounded-full border-4 border-white absolute left-5'></div>
    <div className='w-16 h-16 bg-yellow-300 rounded-full border-4 border-white absolute left-10'></div>
  </div>)
  }
  else if (count > 3) //when number of images exceeds three three circles are display with the last circle displaying the total number of images
  {
    return (<div className='flex relative'>
    <div className='w-16 h-16 bg-pink-300 border-4 border-white rounded-full'></div>
    <div className='w-16 h-16 bg-blue-300 border-4 border-white rounded-full absolute left-5'></div>
    <div className='w-16 h-16 bg-black rounded-full border-4 border-white text-white absolute left-10 text-center'><p className='translate-y-4 text-xl font-medium'>{`+${count}`}</p></div>
  </div>)
  }
  
}

//Code for each line item of the grid which will display name, email, status, date, amount, and number of people involved
const DataEntry = ({name,email,status,date,price,count})=>{
  return (<div className="grid grid-cols-6 gap-4 text-left border-b-2 border-b-gray-200 items-center w-600 h-300">
  <div className="px-3 py-8 text-gray-400 col-span-2 items-center">
  <div className="flex items-center">
  <div className="flex-2/5 pr-2">
  <div className="h-20 w-20 bg-blue-500 rounded-full flex items-center justify-center">
  <Avatar size={64} icon={<UserOutlined />} />
  </div>
  </div>
   <div className="text-left flex-3/5">
   <h2 className='text-lg font-bold py-1'>{name}</h2>
   <p className='text-sm text-gray-400'>{email}</p>
   </div>

</div>
  </div>
  <div className="px-4 py-8 text-gray-400 col-span-1">
  <StatusDisplay message={status}></StatusDisplay>
  </div>
  <div className="px-4 py-8 text-gray-400 col-span-1">
  <h4 className='text-black font-semibold text-md'>{date}</h4>
  </div>
  <div className="px-4 py-8 text-gray-400 col-span-1">
  <h4 className='text-black font-semibold text-lg'>{price}</h4>
  </div>
  <div className="px-4 py-8 text-gray-400 col-span-1">
  <Imgarr count={count}></Imgarr>
  </div>
  </div>)
}
export default function TransactionHistory() {

  //Initialising values to be displayed
  let dataEntryArr = [{
    name:'Flyod Jontosan',
    email:'johntosan@gmail.com',
    status:'success',
    date:'Nov 02, 2021',
    price:'$100,00',
    count:4
    },
    {name:'Flyod Jontosan',
    email:'johntosan@gmail.com',
    status:'pending',
    date:'Nov 02, 2021',
    price:'$100,00',
    count:3
  }
  ]


  return (
    <div className='section-th'>
        <div className='flex justify-between mb-3'>
            <h2 className='text-2xl font-medium'>Transaction History</h2>
            <DatePicker.MonthPicker placeholder="Month" className='text-md text-black'/>
        </div>
        <div className='flex gap-3'>
        <Select defaultValue="Recipient" className='flex-1/3 text-gray-700'></Select>
        <Select defaultValue="Amount" className='flex-1/3'></Select>
        <Select defaultValue="Status" className='flex-1/3'></Select>
        </div>
        <div className="container p-4">
        <div className="grid grid-cols-6 gap-4 text-left shadow-sm border-b-2 border-b-gray-200">
        <div className="p-4 text-gray-400 col-span-2">
        Customer
        </div>
        <div className="p-4 text-gray-400 col-span-1">
        Status
        </div>
        <div className="p-4 text-gray-400 col-span-1">
        Date
        </div>
        <div className="p-4 text-gray-400 col-span-1">
        Invoice
        </div>
        <div className="p-4 text-gray-400 col-span-1">
        People
        </div>
        </div>
        {dataEntryArr.map((element,index)=>{
          return (
            <DataEntry
            key={index}
            name={element.name}
            email={element.email}
            status={element.status}
            date={element.date}
            price={element.price}
            count={element.count}></DataEntry>
          )
        })}
        </div>

    </div>
  )
}
