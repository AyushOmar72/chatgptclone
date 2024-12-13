import React, { useContext, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import "./Sidebar.css"
import { dataContext } from '../../context/UserContext';


function Sidebar() {

const[extend,setExtend]=useState(false)
const{sent,prevPrompt}=useContext(dataContext)
  async function loadPrevPrompt(prompt) {
    sent(prompt)
  }
  return (
    <div className='sidebar'>

<GiHamburgerMenu id='ham' onClick={function() {setExtend(prev=>!prev)}} />
<div className='newchat' >

    
   <  FaPlus />
  {extend?<p>New chat</p>:null}
  </div>
  {prevPrompt.map((item,index)=>{
   return(<div className="recent" onCanPlay={()=>{loadPrevPrompt(item)}}>
    <FiMessageSquare />
    {extend?<p>{item.slice(0,10)+"..."}</p>:null}
  </div>)
  })}
 
    </div>
  )
}

export default Sidebar
