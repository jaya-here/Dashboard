//File:Calendar.js
//Description:Container for profile menu, calendar, and upcoming meeting display

import React from 'react'
import { BellOutlined, ArrowRightOutlined, LaptopOutlined, VideoCameraOutlined, ClockCircleOutlined } from '@ant-design/icons'
import { Select, Button,Option, Dropdown, Avatar  } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
import { Imgarr } from './TransactionHistory'
import CalendarSlider from '../components/CalendarSlider'

function Profile() {
  //Profile component with profile picture, Name, and down arrow
  return ( <div className="flex items-center" onClick={(e) => e.preventDefault()}>
  <div className="flex-2/6 p-2">
  <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
  <Avatar size={20} icon={<UserOutlined />} />
  </div>
  </div>
   <div className="text-left flex-3/6">
   <h2 className='text-lg font-bold py-1'>Jhontosan</h2>
   </div>
   <div className='flex-1/6'>
   <DownOutlined></DownOutlined>
   </div>

</div>)
}


function Calendar() {

  let menu = [{
    key:'1',
    label:(
      <p>Home</p>
    )
  },
{
  key:'2',
  label:(
    <p>Profile</p>
  )
}]

const items = [
  {
    key: 1,
    label: ()=>{return (<p>Home</p>)}
  },
  {
    key:2,
    label: (<p>Privacy</p>)
  },
  {
    key:3,
    label: (<p>Logout</p>)
  }
]

  return (
    <section className='calendar p-8'>
      {/* Bell icon is created */}
        <div className='relative flex justify-between items-center mb-12'>
            <div className='relative'>
            <BellOutlined className='text-xl'></BellOutlined>
            <div className='absolute w-2.5 h-2.5 bg-purple-400 rounded-full right-0 top-0 z-10`'></div>
            </div>
            <Dropdown menu={{items,}}>
              <Profile></Profile>
            </Dropdown>
    
        </div>
        <p className='text-purple-400 text-left text-sm mb-4'>Premium Access</p>
        <h1 className='text-3xl font-medium text-left tracking-wide'>Take Back</h1>
        <h1 className='text-3xl font-medium text-left tracking-wide'>Your Creative</h1>
        <div className='flex'> 
        <h1 className='text-3xl font-medium text-left tracking-wide'>Control</h1>
        <div className='px-6'>
        <Imgarr count={4}></Imgarr>
        </div>
        </div>
        <div className='text-left my-4 mt-8'>
        <Select className='text-gray-400 tracking-wide'
         defaultValue="The Professional Platform"></Select>
         </div>
         <div className='block text-left'>
         <Button className='text-purple-400 border-b-2 text-left shadow-md mb-8' style={{width:'100%'}}>
          <div className='flex justify-between'>
          <p>Upgrade Now</p><ArrowRightOutlined className='text-md'></ArrowRightOutlined>
          </div>
          </Button>
         </div>
         <CalendarSlider></CalendarSlider>
        
        {/*Code to display upcoming meeting appointments*/}
         <div className="container mx-auto p-4">
         <div className="grid grid-cols-4 gap-2 items-center">
         <div className= "col-span-1 self-end">
         <div className="bg-gray-200 rounded-full flex items-center justify-center" style={{width:'4rem', height:'4rem'}}>
        <LaptopOutlined></LaptopOutlined>
        </div>
        </div>
        <div className="col-span-2 self-end  px-1 text-left">
        <h2 className='text-xs font-semibold py-1 text-left'>Meeting with Client</h2>
        <div className='flex gap-2'>
        <VideoCameraOutlined className='text-gray-400'></VideoCameraOutlined>
        <p className='text-sm text-gray-400'>Google Meet</p>
        </div>
        </div>
        <div className="col-span-1 text-gray-400 self-end">
        <div className='flex gap-2'>
        <ClockCircleOutlined/><p>05pm</p>
        </div> 
        </div>
    </div>
  </div>
  <div className="container mx-auto p-4">
         <div className="grid grid-cols-4 gap-2 items-center">
         <div className= "col-span-1 self-end">
         <div className="bg-gray-200 rounded-full flex items-center justify-center" style={{width:'4rem', height:'4rem'}}>
        <LaptopOutlined></LaptopOutlined>
        </div>
        </div>
        <div className="col-span-2 self-end  px-1 text-left">
        <h2 className='text-xs font-semibold py-1 text-left'>Meeting with Client</h2>
        <div className='flex gap-2'>
        <VideoCameraOutlined className='text-gray-400'></VideoCameraOutlined>
        <p className='text-sm text-gray-400'>Google Meet</p>
        </div>
        </div>
        <div className="col-span-1 text-gray-400 self-end">
        <div className='flex gap-2'>
        <ClockCircleOutlined/><p>05pm</p>
        </div> 
        </div>
    </div>
  </div>
  <div className="container mx-auto p-4">
         <div className="grid grid-cols-4 gap-2 items-center">
         <div className= "col-span-1 self-end">
         <div className="bg-gray-200 rounded-full flex items-center justify-center" style={{width:'4rem', height:'4rem'}}>
        <LaptopOutlined></LaptopOutlined>
        </div>
        </div>
        <div className="col-span-2 self-end  px-1 text-left">
        <h2 className='text-xs font-semibold py-1 text-left'>Meeting with Client</h2>
        <div className='flex gap-2'>
        <VideoCameraOutlined className='text-gray-400'></VideoCameraOutlined>
        <p className='text-sm text-gray-400'>Google Meet</p>
        </div>
        </div>
        <div className="col-span-1 text-gray-400 self-end">
        <div className='flex gap-2'>
        <ClockCircleOutlined/><p>05pm</p>
        </div> 
        </div>
    </div>
  </div> 
         
    </section>
  )
}

export default Calendar