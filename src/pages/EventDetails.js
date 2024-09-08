import React, {useState} from 'react';
import backgroundImage from './assets/images/wedding-bg-img.png';

function EventDetails() {
    const [url, setUrl] = useState('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.5746451564805!2d120.4903282409402!3d22.669642429490082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e178583b1911f%3A0x7a7a888598c4e142!2z6a6q6a2a5a625peP6aOv5bqXLeWxj-adsemkqCBGaXNoIEhvdGVsIFBpbmd0dW5n!5e0!3m2!1sko!2skr!4v1725605414205!5m2!1sko!2skr');
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
      <h1 style={{textAlign:'center'}}>- 일&nbsp;&nbsp;&nbsp;자 -</h1>
      <p style={{textAlign:'center'}}>2024年 10月 19日(土) 오전 11:00</p>
      <br/>  
      <br/>  
      <h1 style={{textAlign:'center'}}>- 오시는 길 -</h1>
      <br/>
      <p style={{paddingLeft:'5px', fontSize:20}}>대만 핑동 FISH HOTEL</p>
      <p style={{paddingLeft:'5px', fontSize:15}}>No. 255號, Minsheng Rd, Pingtung City, Pingtung County, Taiwan 900</p>
      <div style={{margin:5, textAlign:'center'}}>
        <iframe src={url} style={{border:0, width:'350px', height:'200px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}

export default EventDetails;
