import React, { useState } from 'react';
import leftArrow from '../assets/images/left-arrow.svg';
import { ReactComponent as HeartIcon } from '../assets/images/heart-outline-icon.svg';
import { useNavigate } from 'react-router-dom';
function ChatHeader() {
  const [isClickHeart, setIsClickHeart] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="flex h-[68px] bg-zinc-100 sticky top-0 left-0 w-[100%] z-10 border-b-1 border-solid border-neutral-300">
      <nav className="flex items-center w-[100%] px-20">
        <div className="flex gap-18">
          <img
            src={leftArrow}
            alt="뒤로가기 버튼"
            className="cursor-pointer"
            onClick={() => {
              navigate('/');
            }}
          />
          <div className="flex gap-10 items-center">
            <div className="w-[40px] h-[40px] bg-[url('./assets/images/chatbg1.svg')] rounded-full bg-cover flex items-center">
              <p className="w-[100%] text-center font-[Playfair] italic">
                Cute
              </p>
            </div>
            <h1 className="font-medium text-2xl">귀여운 서담이</h1>
          </div>
        </div>
        <div className="ml-auto cursor-pointer">
          <HeartIcon
            fill={isClickHeart ? 'black' : 'none'}
            onClick={() => {
              setIsClickHeart(!isClickHeart);
            }}
          />
        </div>
      </nav>
    </header>
  );
}

export default ChatHeader;
