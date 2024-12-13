import React, { useEffect, useState } from 'react'
import { MdOutlineWbSunny } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";
import "./Darkmode.css"


function Darkmode() {
    const[mode,setMode]=useState("darkmode")
    function toggle(){
        if(mode==="darkmode")
            setMode("lightmode")
        else{
            setMode("darkmode")
        }
    }
    useEffect(()=>{
       document.body.className=mode;
    },[mode])
  return (
    <div >
      <button className='darkmodebtn' onClick={()=>{
        toggle()
      }}><IoSunnyOutline />
</button>
    </div>
  )
}

export default Darkmode
