import React, { useState } from 'react'
import { Card ,CardDescription,CardHeader } from './ui/card'
import { FaXbox } from "react-icons/fa";

function getDate(){
  const  today = new Date();
  const month = today.toLocaleString("de",{month:'short'}) 
  const year = today.getFullYear();
  const date = today.getDate();
  return ` ${date} ${month} ${year}`
}

function CardUi() {
  const [curentDate , setCurrentDate]=useState(getDate())
  return (
    <div className='flex '>
      <div className=''>
         <Card className='bg-black'>
             <CardHeader className='flex '>
             <FaXbox className='text-white  bg-fuchsia-700 w-11 h-8'/>
             <div className='text-white'> {curentDate}</div>
             </CardHeader>
             <CardDescription className='text-white'>Winner</CardDescription>
             <CardHeader className='text-white'>MSMI Media UX Award</CardHeader>
             <CardHeader className='text-white'>2018-19</CardHeader>
             <CardDescription>toronto,canada</CardDescription>
         </Card>
      </div>
      <div className=' '>
         <Card className='bg-black'>
             <CardHeader className='flex'>
             <FaXbox className='text-white  bg-fuchsia-700 w-11 h-8'/>
             <div className='text-white'> {curentDate}</div>
             </CardHeader>
             <CardDescription className='text-white'>Winner</CardDescription>
             <CardHeader className='text-white'>MSMI Media UX Award</CardHeader>
             <CardHeader className='text-white'>2018-19</CardHeader>
             <CardDescription>toronto,canada</CardDescription>
         </Card>
      </div>
      <div className='flex '>
         <Card className='bg-black'>
             <CardHeader className='flex'>
             <FaXbox className='text-white  bg-fuchsia-700 w-11 h-8'/>
             <div className='text-white'> {curentDate}</div>
             </CardHeader>
             <CardDescription className='text-white'>Winner</CardDescription>
             <CardHeader className='text-white'>MSMI Media UX Award</CardHeader>
             <CardHeader className='text-white'>2018-19</CardHeader>
             <CardDescription>toronto,canada</CardDescription>
         </Card>
      </div>
      <div className='flex '>
         <Card className='bg-black'>
             <CardHeader className='flex'>
             <FaXbox className='text-white  bg-fuchsia-700 w-11 h-8'/>
             <div className='text-white'> {curentDate}</div>
             </CardHeader>
             <CardDescription className='text-white'>Winner</CardDescription>
             <CardHeader className='text-white'>MSMI Media UX Award</CardHeader>
             <CardHeader className='text-white'>2018-19</CardHeader>
             <CardDescription>toronto,canada</CardDescription>
         </Card>
      </div>
    </div>
  )
}

export default CardUi