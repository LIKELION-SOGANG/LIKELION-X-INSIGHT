import React from 'react';
import sendIcon from '../assets/images/send-icon.svg';
function ChatInput() {
  return (
    <div className="w-[100%] h-[66px] p-5 border-t border-neutral-300 flex-col justify-start items-center gap-[30px] inline-flex fixed bottom-0 left-0">
      <div className="w-[400px] h-[66px] mx-auto bg-neutral-50 p-20">
        <div className="pl-px pt-px pb-[5px] justify-center items-start w-[100%] inline-flex">
          <input
            className="text-neutral-500 text-[15px] leading-tight inline-block w-[100%]"
            placeholder={'무엇이든 물어보세요...'}
          />
          <img src={sendIcon} alt="보내기 버튼" />
        </div>
      </div>
    </div>
  );
}
const MessageTextArea = styled(TextareaAutosize)`
  width: 100%;
  padding: 1.2rem 1.5rem;
  outline: none;
  border: none;
  resize: none;
  border-radius: 1.2rem;
  background-color: ${Grey6};
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 110%; /* 1.76rem */
  &:focus {
    border: none;
    outline: none;
  }
`;
export default ChatInput;
