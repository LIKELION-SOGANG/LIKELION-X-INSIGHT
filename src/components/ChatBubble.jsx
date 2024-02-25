import React from 'react';

function ChatBubble({ text, isMyMessage }) {
  const chatBubbleStyle = isMyMessage
    ? 'ml-20 bg-black text-blue-200'
    : 'mr-20 bg-zinc-100';

  return (
    <div className={`px-18 py-16 rounded-[10px] relative ${chatBubbleStyle}`}>
      <p className="text-2xl leading-[21px]">{text}</p>
      {!isMyMessage && (
        <div className="w-[32px] h-[32px] rounded-[100%] bg-black flex items-center justify-center absolute bottom-[3px] left-[-40px]">
          <p className="text-blue-200 font-[Playfair] text-center text-[20px] italic">
            C
          </p>
        </div>
      )}
    </div>
  );
}

export default ChatBubble;
