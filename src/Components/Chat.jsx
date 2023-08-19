import React, { useContext } from 'react'
import contact from "../Images/contact.png"
import dot from "../Images/dot.png"
import videocamera from "../Images/videocamera.png"
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../Context/ChatContext'

const Chat = () => {
  const {data} = useContext(ChatContext)

  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={contact} alt="" />
          <img src={dot} alt="" />
          <img src={videocamera} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat