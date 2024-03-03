import React, { useEffect, useRef, useState } from 'react';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { promptMessage } from '../util/prompt';
import { instance } from '../api/axios';

import {
  myAnswerListAtom1,
  myAnswerListAtom2,
  myAnswerListAtom3,
  myChatListAtom1,
  myChatListAtom2,
  myChatListAtom3,
} from '../state/atom';
import { useRecoilState } from 'recoil';
import { mergeArrays } from '../util/mergeArray';
function ChatMainSection() {
  // 채팅 텍스트
  const { id } = useParams();
  const [chatInput, setChatInput] = useState('');
  const [isBlockChatInput, setIsBlockChatInput] = useState(false);
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
  const [myChatListState, setMyChatListState] = useRecoilState(
    id === '1'
      ? myChatListAtom1
      : id === '2'
        ? myChatListAtom2
        : myChatListAtom3,
  );
  const [myAnswerListState, setMyAnswerListState] = useRecoilState(
    id === '1'
      ? myAnswerListAtom1
      : id === '2'
        ? myAnswerListAtom2
        : myAnswerListAtom3,
  );
  const handleClickPostButton = async (str) => {
    const updatedChatList = [...myChatListState, str];
    setMyChatListState(updatedChatList);
    localStorage.setItem(
      id === '1' ? 'myChatList1' : id === '2' ? 'myChatList2' : 'myChatList3',
      JSON.stringify(updatedChatList),
    );
    window.scrollBy(0, 400);
    const body = {
      model: 'ft:gpt-3.5-turbo-1106:personal:tutorial:8q57HluT',
      role1: 'system',
      message1:
        id === '1'
          ? promptMessage.cute
          : id === '2'
            ? promptMessage.friendly
            : promptMessage.rude,
      role2: 'user',
      message2: str,
      top_n: 0.92,
      temperature: 0.2,
      max_tokens: 1000,
      frequency_penalty: 1.5,
    };
    setChatInput('');
    setIsBlockChatInput(true);
    setMyAnswerListState([...myAnswerListState, '답변 생성 중...']);
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth', // 부드럽게 스크롤하려면 추가합니다.
      });
    }, 100);
    try {
      const res = await instance.post('api/chatbot', body);
      if (res?.status === 500) {
        setMyAnswerListState([
          ...myAnswerListState,
          '다른 질문을 해주시겠어요? ㅠㅠ 대답을 하기가 좀 어렵네요.',
        ]);
        localStorage.setItem(
          id === '1'
            ? 'myAnswerList1'
            : id === '2'
              ? 'myAnswerList2'
              : 'myAnswerList3',
          JSON.stringify([
            ...myAnswerListState,
            '다른 질문을 해주시겠어요? ㅠㅠ 대답을 하기가 좀 어렵네요.',
          ]),
        );
        setTimeout(() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth', // 부드럽게 스크롤하려면 추가합니다.
          });
        }, 1);
        return;
      }
      // 응답 목록 상태 및 로컬 저장소 업데이트
      setIsBlockChatInput(false);
      const updatedAnswerList = [
        ...myAnswerListState,
        res.data.messages[0].message,
      ];
      setMyAnswerListState(updatedAnswerList);
      localStorage.setItem(
        id === '1'
          ? 'myAnswerList1'
          : id === '2'
            ? 'myAnswerList2'
            : 'myAnswerList3',
        JSON.stringify(updatedAnswerList),
      );
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth', // 부드럽게 스크롤하려면 추가합니다.
        });
      }, 1);
    } catch (err) {
      setMyAnswerListState([
        ...myAnswerListState,
        '다른 질문을 해주시겠어요? ㅠㅠ 대답을 하기가 좀 어렵네요.',
      ]);
      setIsBlockChatInput(false);
      localStorage.setItem(
        id === '1'
          ? 'myAnswerList1'
          : id === '2'
            ? 'myAnswerList2'
            : 'myAnswerList3',
        JSON.stringify([
          ...myAnswerListState,
          '다른 질문을 해주시겠어요? ㅠㅠ 대답을 하기가 좀 어렵네요.',
        ]),
      );
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth', // 부드럽게 스크롤하려면 추가합니다.
        });
      }, 1);
      return;
    }
  };
  const exampleMessage = [
    '이번 달 안에 여자친구를 사귀고 싶어. 뭐부터 하는게 좋을까?',
    '연인에게 100일 기념일 선물로 어떤 걸 줘야 할지 고민이야. 어떤 걸 줘야 할까?',
  ];
  const handleClickExampleMessage = (idx) => {
    setChatInput(exampleMessage[idx]);
    handleClickPostButton(exampleMessage[idx]);
  };
  const pressEnter = (e) => {
    if (e.nativeEvent.isComposing) {
      return; // 조합 중이므로 동작을 막는다.
    }
    if (e.key === 'Enter' && e.shiftKey) {
      // [shift] + [Enter] 치면 걍 리턴
      return;
    } else if (e.key === 'Enter') {
      if (window.innerWidth < 500) {
        return;
      }
      handleClickPostButton(chatInput);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
    });
  }, []);
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
        isBlockChatInput={isBlockChatInput}
        pressEnter={pressEnter}
        isSendIconBlack={chatInput?.length !== 0 ? true : false}
        handleClickPostButton={handleClickPostButton}
      />
      {id === '1' ? (
        myChatList1 && myChatList1.length !== 0 ? (
          mergeArrays(myChatList1, myAnswerList1)?.map((item, idx) => (
            <ChatBubble text={item} key={idx} isMyMessage={idx % 2 === 0} />
          ))
        ) : (
          <>
            <ChatBubble
              text={exampleMessage[0]}
              isExample={true}
              isMyMessage={true}
              onClick={() => {
                handleClickExampleMessage(0);
              }}
            />
            <ChatBubble
              text={exampleMessage[1]}
              isExample={true}
              isMyMessage={true}
              onClick={() => {
                handleClickExampleMessage(1);
              }}
            />
          </>
        )
      ) : id === '2' ? (
        myChatList2 && myChatList2.length !== 0 ? (
          mergeArrays(myChatList2, myAnswerList2)?.map((item, idx) => (
            <ChatBubble text={item} key={idx} isMyMessage={idx % 2 === 0} />
          ))
        ) : (
          <>
            <ChatBubble
              text={
                '이번 달 안에 여자친구를 사귀고 싶어. 뭐부터 하는게 좋을까?'
              }
              isExample={true}
              isMyMessage={true}
              onClick={() => {
                handleClickExampleMessage(0);
              }}
            />
            <ChatBubble
              text={
                '연인에게 100일 기념일 선물로 어떤 걸 줘야 할지 고민이야. 어떤 걸 줘야 할까?'
              }
              isExample={true}
              isMyMessage={true}
              onClick={() => {
                handleClickExampleMessage(1);
              }}
            />
          </>
        )
      ) : myChatList3 && myChatList3.length !== 0 ? (
        mergeArrays(myChatList3, myAnswerList3)?.map((item, idx) => (
          <ChatBubble text={item} key={idx} isMyMessage={idx % 2 === 0} />
        ))
      ) : (
        <>
          <ChatBubble
            text={'이번 달 안에 여자친구를 사귀고 싶어. 뭐부터 하는게 좋을까?'}
            isExample={true}
            isMyMessage={true}
            onClick={() => {
              handleClickExampleMessage(0);
            }}
          />
          <ChatBubble
            text={
              '연인에게 100일 기념일 선물로 어떤 걸 줘야 할지 고민이야. 어떤 걸 줘야 할까?'
            }
            isExample={true}
            isMyMessage={true}
            onClick={() => {
              handleClickExampleMessage(1);
            }}
          />
        </>
      )}
    </main>
  );
}

export default ChatMainSection;
