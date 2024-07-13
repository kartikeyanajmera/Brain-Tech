// ChatContainer.js
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import io from "socket.io-client";
import InputBar from "./InputBar";
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
// import vc from "../images/vcc.png";
// import search from "../images/search.png";
// import watsapp_dark from '../images/Add.png';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import { sendMessageRoute, getAllMessagesRoute } from "../context/APIRoutes";
import { v4 as uuidv4 } from "uuid";
import './Watsapp.css'
export default function ChatContainer({ currentChat, currentUser ,socket}) {
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);

  const socketRef = useRef();
  const scrollRef = useRef();
 
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" });
  }, [messages]);

  // useEffect(() => {
  //   const socketRef = io("http://localhost:9000");
  //   socketRef.current = socket;

  //   socketRef.on("connect", () => {
  //     socketRef.emit("add-user", currentUser._id);
  //   });

   

   
  // }, [currentUser]);

  useEffect(() => {
    async function fetchData() {
      if (currentChat && currentUser && currentUser._id) {
        const response = await axios.post(getAllMessagesRoute, {
          from: currentUser._id,
          to: currentChat._id,
        });
        setMessages(response.data);
      }
    }
    fetchData();
  }, [currentChat, currentUser]);

  const handleSendMsg = async (msg) => {
    if (!currentUser || !currentUser._id) {
      return;
    }
    await axios.post(sendMessageRoute, {
      from: currentUser._id,
      to: currentChat._id,
      message: msg,
    });
    socket.current.emit("send-msg", {
      from: currentUser._id,
      to: currentChat._id,
      message: msg,
    });
    const timestamp = new Date().toISOString(); // Update timestamp to current time
    const newMessage = msg.push({ fromSelf: true, message: msg, timestamp });
    setMessages([...messages, newMessage]);
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg) => {
        const timestamp = new Date().toISOString(); // Update timestamp to current time
        const newMessage = { fromSelf: false, message: msg, timestamp };
        setArrivalMessage(newMessage);
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  

  
  return (
    <>
    
      {currentChat && (
        
        <div className="chat-container">          
          <div className="chat-header">
          <h1>hii</h1>
            <div className="user-details">
              <div className="avtar">
                <img
                  src=''  alt="avtar"
                />
              </div>
              <div className="username">
                <h3>{currentChat.fname}</h3>
               console.log(currentChat.fname);
               <h3>hi</h3>
              </div>
            </div>
            
          </div>


         


          <div className="chat-messages">
            {messages.map((message) => (
              <div
                ref={scrollRef}
                key={uuidv4()}
                className={`message${
                  message.fromSelf ? " sended" : " recieved"
                }`}
              >
               
                
                <div
                  className="content"
                      
                >
                  <p>
                    {message.message}
                    {/* {highlightSearchTerm(message)} */}
                    <br />
                    <span>
                      {new Date(message.timestamp).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
              <InputBar handleSendMsg={handleSendMsg} />
        </div>
      )}
    </>
  );
}
