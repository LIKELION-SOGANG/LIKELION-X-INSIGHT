import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';
import { ReactComponent as SendIcon } from '../assets/images/send-icon.svg';
import { instance } from '../api/axios';
import { useParams } from 'react-router-dom';
import { promptMessage } from '../util/prompt';
import { useRecoilState } from 'recoil';
import { myAnswerListAtom, myChatListAtom } from '../state/atom';
function ChatInput({ isSendIconBlack, setChatInput, chatInput }) {
  // 텍스트 1자 이상일 때 아이콘 검은색으로
  const sendIconColor = isSendIconBlack ? 'black' : '#D1D1D5';
  const { id } = useParams();
  const [myChatListState, setMyChatListState] = useRecoilState(myChatListAtom);
  const [myAnswerListState, setMyAnswerListState] =
    useRecoilState(myAnswerListAtom);
  const handleClickPostButton = async () => {
    // 채팅 목록 상태 및 로컬 저장소 업데이트
    const updatedChatList = [...myChatListState, chatInput];
    setMyChatListState(updatedChatList);
    localStorage.setItem('myChatList', JSON.stringify(updatedChatList));
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
      message2: chatInput,
      top_n: 0.92,
      temperature: 0.2,
    };

    const res = await instance.post('api/chatbot', body);

    // 응답 목록 상태 및 로컬 저장소 업데이트
    const updatedAnswerList = [
      ...myAnswerListState,
      res.data.messages[0].message,
    ];
    setMyAnswerListState(updatedAnswerList);
    localStorage.setItem('myAnswerList', JSON.stringify(updatedAnswerList));

    // 채팅 입력 지우기
    setChatInput('');
  };

  return (
    <div className="w-[100%] border-t border-neutral-300 flex-col justify-start items-center gap-[30px] inline-flex fixed bottom-0 left-0">
      <div className="w-full lg:w-[400px] mx-auto bg-neutral-50 p-20">
        <div className="pl-px pt-px pb-[5px] justify-center w-[100%] inline-flex items-center">
          <MessageTextArea
            className="text-neutral-500 text-[15px] leading-tight inline-block w-[100%] mr-[37px]"
            placeholder={'무엇이든 물어보세요...'}
            rows={1}
            value={chatInput}
            onChange={(e) => {
              setChatInput(e.target.value);
            }}
            maxRows={5}
          />
          <div
            className="cursor-pointer
          "
          >
            <SendIcon fill={sendIconColor} onClick={handleClickPostButton} />
          </div>
        </div>
      </div>
    </div>
  );
}
const MessageTextArea = styled(TextareaAutosize)`
  width: 100%;
  outline: none;
  border: none;
  resize: none;
  border-radius: 1.2rem;
  padding: 0.3rem;
  font-size: 1.5rem;
  color: black;
  overflow: visible;
  background-color: rgba(250, 250, 250, 1);
  font-style: normal;
  font-weight: 400;
  line-height: 110%; /* 1.76rem */
  &:focus {
    border: none;
    outline: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
export default ChatInput;
