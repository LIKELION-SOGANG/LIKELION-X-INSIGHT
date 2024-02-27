import React, { useRef, useState } from 'react';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import {
  myAnswerListAtom1,
  myAnswerListAtom2,
  myAnswerListAtom3,
  myChatListAtom1,
  myChatListAtom2,
  myChatListAtom3,
} from '../state/atom';
import { mergeArrays } from '../util/mergeArray';
function ChatMainSection() {
  // 채팅 텍스트
  const { id } = useParams();
  const [chatInput, setChatInput] = useState('');
  const myChatList1 = useRecoilValue(myChatListAtom1);
  const myAnswerList1 = useRecoilValue(myAnswerListAtom1);
  const myChatList2 = useRecoilValue(myChatListAtom2);
  const myAnswerList2 = useRecoilValue(myAnswerListAtom2);
  const myChatList3 = useRecoilValue(myChatListAtom3);
  const myAnswerList3 = useRecoilValue(myAnswerListAtom3);
  const scrollContainerRef = useRef();
  let firstMessage;
  switch (id) {
    case '1':
      firstMessage =
        '안녕하세요. 저는 귀여운 서담이에용. 서담이한테 질문을 하면 친절하게 답해드릴게용 헤헷큥 ><';

      break;
    case '2':
      firstMessage =
        '안녕하세요. 저는 친절한 서담이에요. 서담이한테 질문을 하면 친절하게 답해드릴게요 ㅎㅎ';
      break;
    case '3':
      firstMessage =
        '안녕하세요. 저는 까칠한 서담이에요. 저는 당신의 기분과는 상관없이 있는 그대로 말씀 드리는 편이에요.';
      break;
  }
  return (
    <main
      className="border-t-2 border-slate-800 pr-16 pl-62 py-20 min-h-120 flex flex-col gap-[16px] mt-[67px] mb-[60px]"
      ref={scrollContainerRef}
    >
      <ChatBubble text={firstMessage} isMyMessage={false} />
      <ChatInput
        ref={scrollContainerRef}
        chatInput={chatInput}
        setChatInput={setChatInput}
        isSendIconBlack={chatInput?.length !== 0 ? true : false}
      />
      {id === '1'
        ? myChatList1 &&
          myChatList1.length !== 0 &&
          mergeArrays(myChatList1, myAnswerList1)?.map((item, idx) => (
            <ChatBubble text={item} key={idx} isMyMessage={idx % 2 === 0} />
          ))
        : id === '2'
          ? myChatList2 &&
            myChatList2.length !== 0 &&
            mergeArrays(myChatList2, myAnswerList2)?.map((item, idx) => (
              <ChatBubble text={item} key={idx} isMyMessage={idx % 2 === 0} />
            ))
          : myChatList3 &&
            myChatList3.length !== 0 &&
            mergeArrays(myChatList3, myAnswerList3)?.map((item, idx) => (
              <ChatBubble text={item} key={idx} isMyMessage={idx % 2 === 0} />
            ))}
    </main>
  );
}

export default ChatMainSection;
