import React, { useEffect, useState } from 'react';
import '../style/Marquee.css';
import { instance } from '../api/axios';

const Footer = () => {
  const [visitNum, setVisitNum] = useState({ total_visit: 0, today_visit: 0 });
  useEffect(() => {
    const fetchData = async () => {
      const res = await instance.get('/api/');
      setVisitNum(res?.data?.response);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="marquee">
        <div>
          <span>Likelion ✽ Insight</span>
          <span>Likelion ✽ Insight</span>
        </div>
      </div>
      <div className="w-auto h-[150px] p-[20px] bg-black">
        <div className="flex flex-col">
          <div className="text-white ">
            <div className="flex flex-row">
              <div style={{ fontWeight: '700', fontSize: '14px' }}>Total</div>
              <div
                style={{
                  fontWeight: '400',
                  fontSize: '14px',
                  marginLeft: '4px',
                }}
              >
                {visitNum.total_visit}
              </div>
            </div>{' '}
          </div>

          <div className="text-white ">
            <div className="flex flex-row mt-[8px]">
              <div
                style={{
                  fontWeight: '700',
                  fontSize: '14px',
                  fontFamily: 'Noto-sans',
                  lineHeight: '22px',
                }}
              >
                Today
              </div>
              <div
                style={{
                  fontWeight: '400',
                  fontSize: '14px',
                  fontFamily: 'Noto-sans',
                  lineHeight: '22px',
                  marginLeft: '4px',
                }}
              >
                {visitNum.today_visit}
              </div>
            </div>{' '}
          </div>
          <div
            style={{
              minHeight: '40px',
              marginTop: '20px',
              fontSize: '14px',
              lineHeight: '24px',
              color: 'white',
            }}
          >
            © Insight & Likelion Sogang <br />
            All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
