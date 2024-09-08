import React from 'react';
import backgroundImage from './assets/images/wedding-bg-img.png';

function InvitationLetter() {

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
      <h1 style={{textAlign:'center'}}>- 초대의 말씀 -</h1>
      <br/>  
      <p style={{textAlign:'center',fontSize:'17px'}}>친애하는 동역자님께</p>
      <p style={{textAlign:'center',fontSize:'17px'}}>한없이 부족한 자가 사별의 아픔을 딛고 </p>
      <p style={{textAlign:'center',fontSize:'17px'}}>재혼하여 새출발을 하려합니다.</p>
      <p style={{textAlign:'center',fontSize:'17px'}}>부디 참석하시어 </p>
      <p style={{textAlign:'center',fontSize:'17px'}}>자리를 빛내주시면 감사하겠습니다. </p>
      <br/>
      <p style={{textAlign:'center', fontWeight:'bold'}}>- 구송림 & 주야덕 드림 -</p>
    </div>
  );
}

export default InvitationLetter;
