import React, { useEffect, useState } from 'react'
import {Sidebar} from 'flowbite-react'
import {HiUser} from 'react-icons/hi'
import {HiArrowRight} from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'

export default function DashSidebar() {
    const location = useLocation()
  const [tab, setTab] = useState('')
  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    if(tabFromUrl){
      setTab(tabFromUrl);  
    }
  },[location.search])
  return (
    <Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
            {/* <Link to='/dashboard?tab=profile'> */}
            <Sidebar.Item href="/dashboard?tab=profile" active={tab === 'profile'} icon={HiUser} label={'User'} labelColor='dark' >
                Profile
            </Sidebar.Item>
            {/* </Link> */}
            <Sidebar.Item icon={HiArrowRight} className='cursor-pointer' >
                Log Out
            </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
