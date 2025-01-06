import { Button } from 'flowbite-react'
import React from 'react'

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className='flex-1 justify-center flex flex-col'>
        <h2 className='text-2xl'>Want to learn more about Javascript?</h2>
        <p className='text-gray-500 my-2'>Checkout these resources with 100 Javascript Projects</p>
        <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
          <a href="#" target='_blank' rel='noopener noreferrer'>
            Learn more
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://th.bing.com/th/id/OIP.-HHfqZ3bGRsZbIh8uZVu2AHaD4?w=303&h=180&c=7&r=0&o=5&pid=1.7" alt=''/>
      </div>
    </div>
  )
}
