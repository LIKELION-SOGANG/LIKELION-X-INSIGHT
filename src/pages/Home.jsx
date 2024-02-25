import React from 'react';
import BotCard from '../components/BotCard';
import Footer from '../components/Footer';

function Home() {
  const data = {
    title: '연애 고수 서담이와 채팅하기',
    explain: '서비스 설명',
    alpha:
      '서비스 부가설명 어쩌구 저쩌구 반복 어쩌구 저쩌구 반복어쩌구 저쩌구 반복어쩌구 저쩌구 반복',
  };
  return (
    <>
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
          marginBottom: '103px',
          letterSpacing: '-0.8px',
        }}
      >
        <div className="mb-[20px]">{data.title}</div>
        <div className="">{data.explain}</div>
      </div>
      <BotCard />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'Playfair',
          fontSize: '24px',
          lineHeight: '22px',
          textAlign: 'center',
          marginTop: '70px',
          marginBottom: '110px',
          letterSpacing: '-0.8px',
        }}
      >
        {data.alpha}
      </div>
      <Footer />
    </>
  );
}

export default Home;
