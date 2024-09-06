import React, { useState } from 'react';
import backgroundImage from './assets/images/wedding-bg-img.png';

function RSVPForm() {
    const handleCopyClipBoard = async (text: String) => {
        try {
          await navigator.clipboard.writeText(text);
          alert('클립보드에 링크가 복사되었습니다.');
        } catch (e) {
          alert('복사에 실패하였습니다');
        }
    };
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        opacity:0.9,
        backgroundSize: 'cover', // 이미지가 요소 크기에 맞게 조정됨
        backgroundPosition: 'center', // 이미지가 가운데 정렬됨
        height: '100vh', // 페이지 전체 높이 사용
        width: '100%',
        fontFamily: 'NanumMyeongjo'
      }}
    >
        <br/>  
        <br/>
        <h1 style={{textAlign:'center'}}>- 마음 전하실 곳 -</h1>
        <br/>
        <p style={{textAlign:'center',fontSize:'17px'}}>비대면으로 축하해 주실 분들을 위해 </p>
        <p style={{textAlign:'center',fontSize:'17px'}}>계좌번호를 남깁니다.</p>
        <p style={{textAlign:'center',fontSize:'17px'}}>축하해 주셔서 진심으로 감사드립니다.</p>
        <br/>
        <h3 style={{textAlign:'center'}}>[한국] 국민은행&nbsp;
            <button style={{height:'2.25em', backgroundColor:'white', borderRadius:'20px'}} onClick={() => handleCopyClipBoard('503202-01-163609')}>한국 계좌번호 복사</button>
        </h3>
        <p style={{textAlign:'center'}}>계좌번호 : 503202-01-163609 예금주 구송림</p>
        <br/>
        <h3 style={{textAlign:'center'}}>[대만] 郵局&nbsp;
            <button style={{height:'2.25em', backgroundColor:'white', borderRadius:'20px'}} onClick={() => handleCopyClipBoard('0041081-0402014')}>대만 계좌번호 복사</button>
        </h3>
        <p style={{textAlign:'center'}}>계좌번호 : 0041081-0402014 예금주 具松林</p>

    </div>
  );
}

export default RSVPForm;
