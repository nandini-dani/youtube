import React, { useEffect, useState } from 'react';
import LiveChat from './LiveChat';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../utils/chatSlice';

const ChatMessage = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [message, setMessage] = useState('');
  //console.log('chat msg', chatMessages);
  useEffect(() => {
    const timer = setInterval(() => {
      //Api call
      //console.log('API call');
      dispatch(
        addChat({
          name: 'Nandini',
          message: 'Thankyou Baba',
        })
      );
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const addMessage = () => {
    dispatch(
      addChat({
        name: 'Mayank',
        message: message,
      })
    );
    setMessage('');
  };

  return (
    <div>
      <div className="ml-2 p-2 h-[400px] w-full border border-black rounded-lg shadow-lg bg-slate-50 overflow-y-scroll">
        <LiveChat name="Shiva" message="Mai tere sath hu ✨" />
        <div className="flex-col-reverse">
          {chatMessages?.map((msg, i) => (
            <LiveChat key={i} name={msg.name} message={msg.message} />
          ))}
        </div>
      </div>
      <div className="w-full flex relative">
        <input
          className="p-2 m-2 border w-full border-black "
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="m-2 p-2 absolute right-0" onClick={addMessage}>
          {' '}
          ➡️
        </button>
      </div>
    </div>
  );
};

export default ChatMessage;
