//File: Header
//Description: Banner with profile picture and good morning text.

import React from 'react'
import {SearchOutlined, UserOutlined} from '@ant-design/icons'
import { Avatar} from 'antd';



function Header() {
  return (
    <div className="flex items-center w-100% justify-items-stretch mb-4">
    <div className="flex-1/5 p-2">
    <div className="relative h-20 w-20 bg-blue-500 rounded-full flex items-center justify-center profile-pic">
    <Avatar size={64} icon={<UserOutlined />} />
    <p className="absolute right-[-10px] top-0 bg-purple-400 text-white py-2 px-3 rounded-full text-xs z-10 border-solid border-4 border-gray-100">3</p>
  </div>
    </div>
    <div className="text-left flex-3/5 w-full px-4">
      <h2 className='text-3xl font-bold py-1'>Good Evening Team!</h2>
      <p className='text-sm text-gray-400'>Have an in-depth look at all the metrics within your dashboard!</p>
    </div>
    <div className='flex-1/5'>
    <SearchOutlined className='px-3 py-3 bg-gray-100 rounded-full'/>
    </div>

    </div>
  )
}

export default Header