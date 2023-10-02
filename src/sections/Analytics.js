import React from 'react'
import { CaretUpOutlined} from '@ant-design/icons'
import { Select } from 'antd'
import AnalyticChart from '../components/AnalyticChart'

function Analytics() {

  //options for select menu
  let options=[
    {
      value: 'month',
      label: 'Month',
    },
    {
      value: 'week',
      label: 'Week',
    },
    {
      value: 'year',
      label: 'Year',
    }
  ]

  return (
    //creating two section to display analytics //overflow is set to scroll in mobile devices
    <div className='section-analytics flex border-1 border-gray-400 rounded-md shadow-md p-7 mb-4 items-center overflow-scroll sm:overflow-hidden md:overflow-hidden lg:overflow-hidden'>
        {/* Bold display of metrics */}
        <div className='flex-1/2 text-left'>
        <h3 className='font-bold text-xl mb-1'>Total Sales & Cost</h3>
        <p className='text-xs text-gray-400'>Last 60 days</p>
        <div className='text-left'>
            <div className='flex gap-4 items-end mt-10 mb-2'>
            <h3 className='text-purple-400 text-4xl font-bold'>$956.82k</h3>
            <div className="flex bg-green-200 text-green-400 text-xs font-bold self-center rounded-full p-1">
            <CaretUpOutlined className='text-green-400'/><p>+5.4%</p></div>
            </div>
            <p className='text-sm text-green-400'>+8.20k <span className='text-gray-400'>prev. 60 days</span></p>
        </div>

        </div>
        {/*Chart*/}
        <div className='flex-1/2'>
        <div className='w-90% ml-8'>
        <div className='flex justify-between'>
          <div className='flex gap-1 items-center'>
          <h3 className='font-bold text-md'>Analytic</h3>
          <p className='text-xs text-green-500 pt-0.5'>+5.4%</p>
          </div>
          <div>
          <Select defaultValue="Month" options={options}></Select>
          </div>
        </div>
        </div>
        <AnalyticChart></AnalyticChart>  
        </div>

    </div>
  )
}

export default Analytics