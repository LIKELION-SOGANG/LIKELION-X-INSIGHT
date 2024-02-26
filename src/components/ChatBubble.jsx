import React from 'react';
import { useParams } from 'react-router-dom';
function ChatBubble({ text, isMyMessage }) {
  const { id } = useParams();
  let avatar, avatarColor;
  switch (id) {
    case '1':
      avatar = 'C';
      avatarColor = 'text-blue-200';
      break;
    case '2':
      avatar = 'F';
      avatarColor = 'text-zinc-300';
      break;
    case '3':
      avatar = 'T';
      avatarColor = 'text-orange-400';
      break;
  }
  const chatBubbleStyle = isMyMessage
    ? 'ml-20 bg-black text-blue-200 self-end'
    : 'mr-20 bg-zinc-100 self-start';

  return (
    <div className={`px-18 py-16 rounded-[10px] relative ${chatBubbleStyle}`}>
      <p className={`text-2xl leading-[21px] ${isMyMessage && avatarColor}`}>
        {text}
      </p>
      {!isMyMessage && (
        <div className="w-[32px] h-[32px] rounded-[100%] bg-black flex items-center justify-center absolute bottom-[3px] left-[-40px]">
          <p
            className={`${avatarColor} font-[Playfair] text-center text-[20px] italic max-w-[100%]`}
          >
            {avatar}
          </p>
        </div>
      )}
    </div>
  );
}

export default ChatBubble;
