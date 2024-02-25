import React from 'react';
import BotCard from '../components/BotCard';
import Footer from '../components/Footer';

function Home() {
  const data = {
    title: '연애 고수 서담이와 채팅하기',
    explain:
      '서담의 데이터를 활용하여 만든 \n 챗봇 서담이와 연애 상담을 시작해보세요!',
    alpha:
      "경영 데이터 학회 '인사이트'와 IT 창업 동아리 '멋쟁이 사자처럼'이 협업해서  만든 프로젝트입니다.",
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
