import React from 'react';
import Cute from '../assets/images/bg1.png';
import Friendly from '../assets/images/bg2.png';
import Rude from '../assets/images/bg3.png';
import heart from '../assets/images/heart-icon.svg';
import arrow from '../assets/images/right-arrow.svg';

const bots = [
  {
    src: Cute,
    number: '21',
    alt: 'Cute',
    name: '귀여운',
    rank: '1',
    text: '귀여운 봇이 어쩌구저저쩌구어쩌구저저쩌구어쩌구저저쩌구어쩌구저저쩌구',
  },
  {
    src: Friendly,
    number: '35',
    alt: 'Friendly',
    name: '친절한',
    rank: '2',
    text: '친절한 봇이 쩌구저저쩌구어쩌구저저쩌구어쩌구저저쩌구어쩌구저저쩌구어쩌구저저쩌구',
  },
  {
    src: Rude,
    number: '51',
    alt: 'Rude',
    name: '무례한',
    rank: '3',
    text: '무례한 봇이 구어쩌구저저쩌구어쩌구저저쩌구어쩌구저저쩌구어쩌구저저쩌구어쩌구저저쩌구',
  },
];
const BotCard = () => {
  return (
    <div className="flex flex-col items-center">
      {bots.map((bot, index) => (
        <div
          key={index}
          className="relative flex mb-[20px] min-h-[353px] ml-[20px] mr-[20px]"
        >
          <img
            src={bot.src}
            className="relative rounded-3xl z-0 w-auto h-[353px]"
          />
          <img
            src={arrow}
            className="w-[24px] h-[24px] absolute top-[29px] right-[20px]"
          />
          <div className="flex flex-col justify-end">
            <div className="absolute z-30 w-auto h-[50px] p-10 top-0 left-0 right-0 bottom-0">
              <div className="flex flex-row">
                <img
                  src={heart}
                  className="w-[11.4px] h-[10.5px] mt-[2px] mr-1"
                />
                <div className="text-white text-[12px] mb-[6px]">
                  {bot.number} ∙ 오늘 {bot.rank}위
                </div>
              </div>

              <div className="text-white text-[24px] whitespace-pre-line">
                {`${bot.name} 서담이`}
              </div>
            </div>

            <div className="absolute z-30 left-0 bottom-8 w-[100%] h-auto flex flex-row ">
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
              <div className="w-auto min-h-[60px] ml-[20px] mr-[20px]  text-white text-[14px] leading-[22px]">
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
