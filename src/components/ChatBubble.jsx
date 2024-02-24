import React from 'react';

function ChatBubble({ text, isMyMessage }) {
  const chatBubbleStyle = isMyMessage
    ? 'ml-20 bg-black text-blue-200 '
    : 'mr-20 bg-zinc-100 ';
  return (
    <div className={`px-18 py-16 rounded-[10px] ${chatBubbleStyle}`}>
      <p className="text-2xl leading-[21px]">{text}</p>
    </div>
  );
}

export default ChatBubble;
