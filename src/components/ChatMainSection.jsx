import React, { useState } from 'react';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';
function ChatMainSection() {
  // 채팅 텍스트
  const [chatInput, setChatInput] = useState('');
  return (
    <main className="border-t-2 border-slate-800 pr-16 pl-62 py-20 min-h-120 flex flex-col gap-[16px] mb-[60px]">
      <ChatBubble
        text="안녕하세요. 저는 귀여운 서담이에요. 서담이한테 질문을 하면 친절하게 답해드릴게용 헤헷큥 ><"
        isMyMessage={false}
      />
      <ChatBubble
        text="남사친과 단둘이 여행가는 여자친구에 대해 어떻게 생각해?"
        isMyMessage={true}
      />
      <ChatBubble
        text="물론, 사람마다 연애 스타일이 다르긴 하지만, 서로의 경계를 지키는 건 중요해. 만약 여친이 이해 못 하고 네 마음을 무시한다면, 진짜 잘 맞는 사람 찾는 것도 방법이 될 수 있어. 누구나 자기 파트너가 다른 이성과 너무 가깝게 지내는 걸 좋아하지 않아. 네 걱정, 네 마음, 다 이해해. 그리고 이런 상황에서 너만의 기준을 가지는 것도 중요해. 너의 감정도 중요하니까, 네가 편안하게 느낄 수 있는 관계를 유지하는 게 최고야."
        isMyMessage={false}
      />
      <ChatBubble
        text="물론, 사람마다 연애 스타일이 다르긴 하지만, 서로의 경계를 지키는 건 중요해. 만약 여친이 이해 못 하고 네 마음을 무시한다면, 진짜 잘 맞는 사람 찾는 것도 방법이 될 수 있어. 누구나 자기 파트너가 다른 이성과 너무 가깝게 지내는 걸 좋아하지 않아. 네 걱정, 네 마음, 다 이해해. 그리고 이런 상황에서 너만의 기준을 가지는 것도 중요해. 너의 감정도 중요하니까, 네가 편안하게 느낄 수 있는 관계를 유지하는 게 최고야."
        isMyMessage={true}
      />

      <ChatBubble text="ㅎㅇㅎㅇ" isMyMessage={false} />
      <ChatInput
        chatInput={chatInput}
        setChatInput={setChatInput}
        isSendIconBlack={chatInput.length > 0 ? true : false}
      />
    </main>
  );
}

export default ChatMainSection;
