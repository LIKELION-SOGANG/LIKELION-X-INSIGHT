import React, { useEffect, useState } from 'react';
import leftArrow from '../assets/images/left-arrow.svg';
import { ReactComponent as HeartIcon } from '../assets/images/heart-outline-icon.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { instance } from '../api/axios';
function ChatHeader() {
  const [isClickHeart, setIsClickHeart] = useState(false);
  const { id } = useParams();
  let nickname, engType, profileStyle;
  switch (id) {
    case '1':
      nickname = '귀여운 서담이';
      engType = 'Cute';
      profileStyle = "bg-[url('./assets/images/bg1.png')]";
      break;
    case '2':
      nickname = '친절한 서담이';
      engType = 'Friendly';
      profileStyle = "bg-[url('./assets/images/bg2.png')]";
      break;
    case '3':
      nickname = '무례한 서담이';
      engType = 'Tough';
      profileStyle = "bg-[url('./assets/images/bg3.png')]";
      break;
  }
  const navigate = useNavigate();
  const handleHeartClick = async () => {
    try {
      const res = await instance.post(`api/chatbot/${id}/like`);
      if (res?.status === 200) {
        setIsClickHeart(!isClickHeart);
      } else {
        alert('좋아요 누르는데 오류 발생!');
      }
    } catch (err) {
      console.log(err);
    }
  };
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
            <div
              className={`w-40 h-40 rounded-full bg-cover flex items-center ${profileStyle}`}
            >
              <p className="w-[100%] text-center font-[Playfair] italic">
                {engType}
              </p>
            </div>
            <h1 className="font-medium text-2xl">{nickname}</h1>
          </div>
        </div>
        <div className="ml-auto cursor-pointer">
          <HeartIcon
            fill={isClickHeart ? 'black' : 'none'}
            onClick={handleHeartClick}
          />
        </div>
      </nav>
    </header>
  );
}

export default ChatHeader;
