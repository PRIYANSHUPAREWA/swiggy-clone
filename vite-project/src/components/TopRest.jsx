import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import Card from './Card';

function TopRest() {
   
      const[data,setData]=useState([]);

      const fetchTopRestaurant= async()=>{
      const response= await fetch('http://localhost:5000/top-restaurant-chains');
      const apidata= await response.json();
      setData(apidata);
      }

     useEffect(
       ()=>{
       fetchTopRestaurant();
       },[]
     )


  return (
    <div className='max-w-[1200px] mx-auto '>
    <div className='flex items-center justify-between'>
      <div className='font-bold text-[25px]'>Top restaurant chains in Delhi</div>
      <div className='flex'>
        <div className='cursor-pointer flex justify-center items-center w-[30px] 
        h-[30px] bg-[#e2e2e7] rounded-full mx-2' ><FaArrowLeft /> </div>
        <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px]
         bg-[#e2e2e7] rounded-full mx-2' ><FaArrowRight />  </div>
      </div>
    </div>
      <div className='flex gap-2 overflow-hidden'>
        {
            data.map(
                (d,i)=>{
                   return <Card {...d} key={i}/>
                }
            )
        }
        
      </div>
      <hr className='  my-[6] border-[1px]' />
    </div>
    
  )
}

export default TopRest