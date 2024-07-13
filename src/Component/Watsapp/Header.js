import React from 'react'

function Header({currentChat}) {
  return (
    <div>
        {currentChat && (
       <div className="chat-header">
            
            <div className="user-details">
              <div className="avtar">
                {/* <img
                  src=''
                  alt=""
                /> */}
              </div>
              <div className="username">
                {/* <h3>{currentChat.username}</h3> */}
                <h2>{currentChat.fname}</h2>
                
              </div>
            </div>
           
            
            </div>)}
          </div>
   
  )
}

export default Header
