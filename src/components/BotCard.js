import React, { useEffect, useState } from 'react';
import Cute from '../assets/images/bg1.png';
import Friendly from '../assets/images/bg2.png';
import Rude from '../assets/images/bg3.png';
import heart from '../assets/images/heart-icon.svg';
import arrow from '../assets/images/right-arrow.svg';
import { useNavigate } from 'react-router-dom';
import { instance } from '../api/axios';

const bots = [
  {
    src: Cute,
    number: '21',
    id: 1,
    alt: 'Cute',
    name: '귀여운',
    text: '귀여운 서담이가 MBTI 테스트를 하면 F가 100%로 나올 걸요? 당신의 질문에 애교 있는 말투로 대답해요.',
  },
  {
    src: Friendly,
    number: '35',
    alt: 'Friendly',
    id: 2,
    name: '친절한',
    text: '친절한 서담이는 귀엽지는 않지만 정중하고 배려심 깊은 말투로 당신의 질문에 대답을 할 거에요. ',
  },
  {
    src: Rude,
    number: '51',
    alt: 'Tough',
    id: 3,
    name: '까칠한',
    text: '너 혹시 T야..? 까칠한 서담이는 직설적인 말투를 사용하여 당신의 질문에 간결한 답변을 제공해요. ',
  },
];
const BotCard = () => {
  const [chatbots, setChatbots] = useState([
    {
      chatbotId: 3,
      chatbotName: '챗봇3',
      chatbotLike: 4,
      chatbotRanking: 1,
    },
    {
      chatbotId: 2,
      chatbotName: '챗봇2',
      chatbotLike: 2,
      chatbotRanking: 2,
    },
    {
      chatbotId: 1,
      chatbotName: '챗봇1',
      chatbotLike: 1,
      chatbotRanking: 3,
    },
  ]);
  useEffect(() => {
    fetchChatbots();
  }, []);
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/chat/${id}`);
  };
  const fetchChatbots = () => {
    instance
      .get(`/api/chatbot`)
      .then((response) => {
        if (response.data.success) {
          setChatbots(response.data.response);
        }
      })
      .catch((error) => {
        console.log(error);
        alert('봇 불러오기 실패');
      });
  };

  const combinedData = chatbots.map((chatbot) => {
    const botData = bots.find((bot) => bot.id - 1 === chatbot.chatbotId - 1);
    return {
      ...chatbot,
      ...(botData || {}),
    };
  });
  combinedData.sort((a, b) => a.chatbotId - b.chatbotId);
  return (
    <div className="flex flex-col items-center">
      {combinedData.map((bot, index) => (
        <div
          key={index}
          className="relative flex mb-[20px] min-h-[353px] ml-[20px] mr-[20px] cursor-pointer"
          onClick={() => handleNavigate(bot.id)}
        >
          <img
            src={bot.src}
            className="relative rounded-3xl z-0 w-auto h-[353px]"
          />
          <img
            src={arrow}
            className="z-50 w-[24px] h-[24px] absolute top-[29px] right-[20px]"
            style={{ cursor: 'pointer' }}
          />
          <div className="flex flex-col justify-end">
            <div className="absolute z-30 w-auto h-[50px] p-20 top-0 left-0 right-0 bottom-0">
              <div className="flex flex-row">
                <img
                  src={heart}
                  className="w-[11.4px] h-[10.5px] mt-[2px] mr-1"
                />
                <div className="text-white text-[12px] mb-[6px]">
                  {bot.chatbotLike} ∙ 오늘 {bot.chatbotRanking}위
                </div>
              </div>

              <div className="text-white text-[24px] whitespace-pre-line">
                {`${bot.name} 서담이`}
              </div>
            </div>

            <div className="absolute z-30 left-0 bottom-8 w-[100%] h-auto mb-[10px] flex flex-row ">
              <div className="relative bg-black min-w-[60px] h-[60px] rounded-full ml-[20px]">
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color:
                      index % 3 === 0
                        ? '#B3C9F9'
                        : index % 3 === 1
                          ? '#D4C5DD'
                          : '#FC6D48',
                    fontFamily: 'Playfair',
                    fontStyle: 'italic',
                    lineHeight: '22px',
                    fontSize: '15px',
                    fontWeight: '400',
                    letterSpacing: '-0.8px',
                  }}
                >
                  {bot.alt}
                </div>
              </div>
              <div className="w-auto min-h-[60px] ml-[20px] mr-[20px]  text-white text-[14px] leading-[22px] whitespace-pre-line">
                {bot.text}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BotCard;
