import React, { useContext } from 'react'
import "./ChatSection.css"
import Darkmode from '../Darkmode/Darkmode'
import { LuSendHorizonal } from "react-icons/lu";
import { dataContext } from '../../context/UserContext';
import user from "../../assets/user.png"
import ai from "../../assets/ai.png"


function ChatSection() {
  let{sent,input,setInput,showResult,resultData,recentPrompt,loading}=useContext(dataContext)
  return (
    <div className='hey' id="chatsection">
      <div className='topsection'>
        {!showResult? <div className='heading'>
          <span>Hello Sir,</span>
          <span>I'am Your Assistant</span>
          <span>What Can I help You...?</span>
         
         

        </div>:<div className='result'>
          <div className="userbox">
            <img src={user} alt='' width="80px" />
            <p>{recentPrompt}</p>
          </div>
          <div className="aibox">
            <img src={ai} alt='' width="60px"/>
            {loading?<div className='loader'>
            <hr />
            <hr />
            <hr />
            </div>
            :
            <p>{resultData}</p>}
          </div>
          </div>}
       

      </div>
      <div className='bottomsection'>
      <input onChange={(e)=>{setInput(e.target.value)}} className='input' type='text' placeholder='Enter a Prompt' value={input} />
      {input? <button className='sendbtn' onClick={()=>{sent(input)}}><LuSendHorizonal /> </button>:null}
      
      
      <Darkmode/>
      </div>
      
      
    </div>
  )
}

export default ChatSection
