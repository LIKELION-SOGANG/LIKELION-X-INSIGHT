import React from 'react';
import { useParams } from 'react-router-dom';
function ChatBubble({ text, isMyMessage, isExample, onClick }) {
  const { id } = useParams();
  let avatar, avatarColor, exampleColor;
  switch (id) {
    case '1':
      avatar = 'C';
      avatarColor = 'text-blue-200';
      exampleColor = 'bg-blue-200';
      break;
    case '2':
      avatar = 'F';
      avatarColor = 'text-zinc-300';
      exampleColor = 'bg-zinc-300';
      break;
    case '3':
      avatar = 'T';
      avatarColor = 'text-orange-400';
      exampleColor = 'bg-orange-400';
      break;
  }
  const chatBubbleStyle = isMyMessage
    ? `ml-20 text-blue-200 self-end ${isExample ? exampleColor : 'bg-black'}`
    : 'mr-20 bg-zinc-100 self-start';
  return (
    <div
      className={`px-18 py-16 rounded-[10px] relative ${chatBubbleStyle}`}
      onClick={onClick}
    >
      <p
        className={`text-2xl leading-[21px] ${isExample ? 'text-black' : isMyMessage && avatarColor}`}
      >
        {text}
      </p>
      {!isMyMessage && (
        <div className="w-[32px] h-[32px] rounded-[100%] bg-black flex items-center justify-center absolute bottom-[3px] left-[-40px]">
          <p
            className={`font-[Playfair] text-center text-[20px] italic max-w-[100%] ${avatarColor}`}
          >
            {avatar}
          </p>
        </div>
      )}
    </div>
  );
}

export default ChatBubble;
