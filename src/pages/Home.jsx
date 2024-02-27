import React, { useEffect, useState } from 'react';
import BotCard from '../components/BotCard';
import Footer from '../components/Footer';
import chat_cute from '../assets/images/chat_cute.png';
import chat_tough from '../assets/images/chat_tough.png';
import Loading from './Loading';
function Home() {
  const data = {
    title: '연애 고수 서담이와 채팅하기',
    explain:
      '서담의 데이터를 활용하여 만든 \n 챗봇 서담이와 연애 상담을 시작해보세요!',
    alpha: '이런 답변을 받을 수 있어요!',
  };
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {' '}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              fontFamily: 'Playfair',
              fontSize: '24px',
              lineHeight: '22px',
              textAlign: 'center',
              marginTop: '70px',
              marginBottom: '70px',
              letterSpacing: '-0.8px',
            }}
          >
            <div
              style={{
                fontWeight: '700',
                fontSize: '24px',
                fontFamily: 'Noto-sans',
                letterSpacing: '-0.8px',
              }}
            >
              {data.title}
            </div>
            <div
              style={{
                fontFamily: 'Noto-sans',
                lineHeight: '30px',
                marginTop: '20px',
                fontSize: '18px',
                whiteSpace: 'pre-line',
              }}
            >
              {data.explain}
            </div>
          </div>
          <BotCard />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              marginTop: '188px',
              marginBottom: '145px',
              marginLeft: '20px',
              marginRight: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Noto-sans',
                fontSize: '20px',
                lineHeight: '22px',
                fontWeight: 700,
                textAlign: 'center',
                marginTop: '0px',
                marginBottom: '33px',
                letterSpacing: '-0.8px',
              }}
            >
              {data.alpha}
            </div>
            <img
              src={chat_cute}
              style={{ width: 'auto', height: 'auto', marginBottom: '33px' }}
            />
            <img src={chat_tough} style={{ width: 'auto', height: 'auto' }} />
          </div>
          <Footer />
        </>
      )}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'Playfair',
          fontSize: '24px',
          lineHeight: '22px',
          textAlign: 'center',
          marginTop: '70px',
          marginBottom: '70px',
          letterSpacing: '-0.8px',
        }}
      >
        <div
          style={{
            fontWeight: '700',
            fontSize: '24px',
            fontFamily: 'Noto-sans',
            letterSpacing: '-0.8px',
          }}
        >
          {data.title}
        </div>
        <div
          style={{
            fontFamily: 'Noto-sans',
            lineHeight: '30px',
            marginTop: '20px',
            fontSize: '18px',
            whiteSpace: 'pre-line',
          }}
        >
          {data.explain}
        </div>
      </div>
      <BotCard />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          marginTop: '188px',
          marginBottom: '145px',
          marginLeft: '20px',
          marginRight: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Noto-sans',
            fontSize: '20px',
            lineHeight: '22px',
            fontWeight: 700,
            textAlign: 'center',
            marginTop: '0px',
            marginBottom: '33px',
            letterSpacing: '-0.8px',
          }}
        >
          {data.alpha}
        </div>
        <img
          src={chat_cute}
          style={{ width: 'auto', height: 'auto', marginBottom: '33px' }}
        />
        <img src={chat_tough} style={{ width: 'auto', height: 'auto' }} />
      </div>
      <Footer />
    </>
  );
}

export default Home;
