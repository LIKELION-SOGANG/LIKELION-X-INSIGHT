import React from 'react';
import sendIcon from '../assets/images/send-icon.svg';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';
function ChatInput() {
  return (
    <div className="w-[100%] p-5 pb-[20px] border-t border-neutral-300 flex-col justify-start items-center gap-[30px] inline-flex fixed bottom-0 left-0">
      <div className="w-[320px] h-[66px] mx-auto bg-neutral-50 p-20">
        <div className="pl-px pt-px pb-[5px] justify-center items-start w-[100%] inline-flex">
          <MessageTextArea
            className="text-neutral-500 text-[15px] leading-tight inline-block w-[100%]"
            placeholder={'무엇이든 물어보세요...'}
            rows={1}
            maxRows={4}
          />
          <img src={sendIcon} alt="보내기 버튼" />
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
  font-size: 1.6rem;
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
`;
export default ChatInput;
