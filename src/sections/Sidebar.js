//File: Sidebar
//Description: Default sidebar menu to be displayed in large screens

import React from 'react'
import { HomeOutlined } from '@ant-design/icons'
import { BarChartOutlined } from '@ant-design/icons'
import { CompassOutlined } from '@ant-design/icons'
import { ShoppingOutlined } from '@ant-design/icons'
import { MessageOutlined } from '@ant-design/icons'
import { SettingOutlined } from '@ant-design/icons'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { FolderOutlined } from '@ant-design/icons'
import CalendarSlider from '../components/CalendarSlider'

let exploreArr = [
    {icon:HomeOutlined,
    text:'Home'},
    {
    icon:BarChartOutlined,
    text:'Analytic' 
    },
    {
    icon:CompassOutlined,
    text:'Explore'
    },
    {icon:ShoppingOutlined,
    text:'Shop'},
    {
    icon:MessageOutlined,
    text:'Inbox'
    }
]

let toolsArr = [
    {icon:SettingOutlined,
    text:'Setting'},
    {
    icon:QuestionCircleOutlined,
    text:'Help' 
    }
]

let projectArr = [
    {text: 'Amazon'},
    {text: 'Invinity HQ'}
]

const IconDispay = ({Icon, text}) => 
{

    return (
        <div className='flex justify-center sm:justify-center md:justify-center lg:justify-start items-center gap-3 mb-4 text-gray-600'>
        <Icon></Icon>
        <p>{text}</p>
        </div>
    )
}


export default function Sidebar() {
  return (
    //Passes down the AntDesign Icon and text to displayed as input
    <div className='panel text-center sm:text-center md:text-center lg:text-left lg:pt-5'>
        {exploreArr.map((element)=>{
            return (<IconDispay Icon={element.icon} key={element.text}
            text={element.text}></IconDispay>)
        })}
        <p className='text-gray-400 tx-sm mb-2'>Tools</p>
        {toolsArr.map((element)=>{
            return (<IconDispay Icon={element.icon} key={element.text}
            text={element.text}></IconDispay>)
        })}
         <p className='text-gray-400 tx-sm mb-2'>Projects</p>
         {projectArr.map((element)=>{
            return (<IconDispay Icon={FolderOutlined} key={element.text}
            text={element.text}></IconDispay>)
        })}
    </div>
  )
}
