import React, { useState } from 'react'
// import Picker from'emoji-picker-react';
// import {IoMdSend} from 'react-icons/io';
// import {BsEmojiSmileFill} from 'react-icons/bs';
// import Attach from'../images/attach.png';
import SendIcon from '@mui/icons-material/Send';
// import './Watsapp.css'

export default function ChatInput({handleSendMsg}) {
  const [msg,setMsg]=useState('');
  
 const sendChat = async(e) => {
    e.preventDefault();
    if (msg.trim().length > 0) { // Check if there's a message or an image
      handleSendMsg(msg); // Pass the image to the send message function
      setMsg('');
         }

    const config = {
      headers:{
        'Content-Type':'multipart/form-data'
      }
    }

    // const res = await axios.post(imageapi,formData,config); 
    // console.log(res);
  }

  return (
    <div className='chat-Input'>
        <div className="button-container">
          <div className='head'>
            {/* <span>hi</span> */}
      
      
        </div>
        </div>
       <form className='input-container' onSubmit={sendChat}>
        <input type='text' placeholder='Type your message' value={msg} onChange={(e)=>setMsg(e.target.value)}/>
        <button className='submit'>
            {/* <IoMdSend/> */}
            <SendIcon/>
        </button>
       </form>
    </div>
  )
}
