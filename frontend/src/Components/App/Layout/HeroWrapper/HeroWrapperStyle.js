import styled from 'styled-components';


export const HeroWrapperStyle = styled.div `
     margin-top: 0rem;
     .hero-image{
      margin: auto;
      width: 980px;
      height: 397px;
            display: flex;
      align-items:flex-end;
      left: -70px;

      border: 2px solid #AD7A51;
     }
     .contents{
     max-width: 1200px;
     margin: 0 auto;
     h1 h4 {
          font-size: bold;
     }
  
     }
     .small-text-up{
          text-transform: uppercase;
          font-size: 16px;
          position: relative;
          right: -240px;
          opacity: 0.5;
     }
     .hero-date{
          opacity: 0.7;
          text-transform: uppercase;
          font-size: 20px;
          position: relative;
          right: -80px;
     }
     .title-hero{
          font-size: 65px;
          color: #D39D5B;
          position: relative;
          right: -90px;
     }
     .p-hero{
          opacity: 0.6;
          font-size: 29px;
          text-transform: uppercase;
          margin-bottom: 28px;
          position: relative;
          right: -150px;
     }
     .hero-image img {
      height: 100%;

     }
     .image{
      border: 13px solid #AD7A51;
      border: 13px solid #AD7A51;
      width: 500px;
      height: 300px;
}
.image-contain {
  object-fit: cover;
  object-position: center;
}

` 