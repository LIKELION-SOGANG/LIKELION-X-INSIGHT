import React from 'react';
import leftArrow from '../assets/images/left-arrow.svg';
import heartIcon from '../assets/images/heart-outline-icon.svg';
function ChatHeader() {
  return (
    <header className="flex h-[68px] bg-zinc-100 sticky top-0 left-0 w-[100%]">
      <nav className="flex items-center w-[100%] px-20">
        <div className="flex gap-18">
          <img src={leftArrow} alt="뒤로가기 버튼" />
          <div className="flex gap-10 items-center">
            <div className="w-[40px] h-[40px] bg-[url('./assets/images/chatbg1.svg')] rounded-full bg-cover flex items-center">
              <p className="w-[100%] text-center font-[Playfair] italic">
                Cute
              </p>
            </div>
            <h1 className="font-medium text-2xl">귀여운 서담이</h1>
          </div>
        </div>
        <img
          src={heartIcon}
          alt="챗봇 좋아요 아이콘"
          className="w-[24px] ml-auto"
        />
      </nav>
    </header>
  );
}

export default ChatHeader;
