import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BsMinecart } from "react-icons/bs";

function Header() {
    const [toggle, setToggle]=useState(false);
    
    const showSideMenu=()=>{
        setToggle(true);
    }
    const hideSideMenu=()=>{
      setToggle(false);
    }
    const links=[
         {
           icon:<IoIosSearch/>,
           name:"Search"
         },
         {
          icon:<RiDiscountPercentLine/>,
          name:"Offer",
          sup:"New"
        },
        {
          icon:  <IoHelpBuoyOutline/>,
          name:"Help"
        },
        {
          icon:<CgProfile />,
          name:"Sign In"
        },
        {
          icon:<BsMinecart />,
          name:"Cart"
        },
        
    ]
  return (
    <>
      <div className='black-overlay w-full h-full fixed duration-500 ' onClick={hideSideMenu} style={{
        opacity:toggle?1:0,
        visibility:toggle?'visible':'hidden'
      }}>
         <div onClick={(e)=>{
          e.stopPropagation();
         }}
         className='w-[500px] bg-white h-full absolute duration-[400ms]'
         style={{
          left:toggle?'0%' : '100%'
         }}>

         </div>
      </div>
    <header className='p-[15px] shadow-xl text-[#686b78]'>
       <div className='max-w-[1200px] mx-auto  flex items-center'>
         <div className='w-[100px]'>
            <img src="images/logo.png " className='w-full' alt="" />
         </div>
         <div>
          <span className='font-bold  border-b-[3px] border-[black]'>Karol Bagh</span> 
          New Delhi, Delhi, India <RxCaretDown onClick={showSideMenu}  fontSize={25} 
          className='inline text-[#fc8019] cursor-pointer'/> 
         </div>
         <nav className=' hidden md:flex list-none gap-5 ml-auto text-[18px] font-semibold'>
          {
            links.map(
              (link, index)=>{
               return  <li key={index} className=' cursor-pointer flex gap-2 hover:text-[#fc8019] items-center'>
                     {link.icon}
                     {link.name}
                     <sup>{link.sup}</sup>
                </li>
              }
            )
          }
         </nav>
       </div>
    </header>
    </>
  )
}

export default Header