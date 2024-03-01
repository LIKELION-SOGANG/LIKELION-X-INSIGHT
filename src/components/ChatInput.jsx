import React, { forwardRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';
import { ReactComponent as SendIcon } from '../assets/images/send-icon.svg';
// eslint-disable-next-line react/display-name
const ChatInput = forwardRef(
  (
    {
      isSendIconBlack,
      setChatInput,
      chatInput,
      handleClickPostButton,
      isBlockChatInput,
    },
    ref,
  ) => {
    // 텍스트 1자 이상일 때 아이콘 검은색으로
    const sendIconColor = isSendIconBlack ? 'black' : '#D1D1D5';
    return (
      <div className="w-[100%] border-t border-neutral-300 flex-col justify-start items-center gap-[30px] inline-flex fixed bottom-0 left-0 z-10">
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
              disabled={isBlockChatInput}
            />
            <div
              className="cursor-pointer
          "
            >
              <SendIcon
                fill={sendIconColor}
                onClick={() => {
                  handleClickPostButton(chatInput);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
);
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
