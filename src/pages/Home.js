import React from 'react';
import backgroundImage from './assets/images/wedding-intro.png';

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', // 이미지가 요소 크기에 맞게 조정됨
        backgroundPosition: 'center', // 이미지가 가운데 정렬됨
        height: '100vh', // 페이지 전체 높이 사용
        width: '100%',
      }}
    >
    </div>
  );
}

export default Home;
