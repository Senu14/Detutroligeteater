import styled from 'styled-components';


export const HeroWrapperStyle = styled.div `
     margin-top: 0rem;
.hero-image{
      margin: auto;
      width: 980px;
      height: 297px;
      display: flex;
      align-items:flex-end;
      left: -90px;
      border: 2px solid #AD7A51;
      margin-top: 30px;
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
          color: #333; 
     }
     .hero-date {
          opacity: 0.7;
          text-transform: uppercase;
          font-size: 20px;
          position: relative;
          right: -80px;
        color: #333; 
     }
     .contents h4 + hr {

  width: 130%; 
  height: 2px; 
  background-color: #333; 
  margin: 10px 0; 
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
          color: #333; 
     }
     .hero-image img {
      height: 100%;

     }
     .image{
      border: 13px solid #AD7A51;
      width: 500px;
      height: 300px;
}
.image-contain {
  object-fit: cover;
  object-position: center;
}
@media screen and (max-width: 760px){
     .hero-image{
          align-items: center;
          justify-content: center;
     }
     .content{
          margin: 0;
          justify-content: center;
     }

.contents hr {
   
    height: 2px;
    background-color: #333;
    margin-left: 10px 0;
    justify-content: center;
}
 img{
     display: none;
}


}

.title-hero{
          font-size: 35px;
          color: #D39D5B;
          position: relative;
          
     }
.p-hero{
     font-size: 19px;
     right: -100px;
         
}
.hero-date {
     font-size: 10px;
     right: -80px;
        
}
.small-text-up{
     text-transform: uppercase;
     font-size: 16px;
     position: relative;
     right: -120px;
     opacity: 0.5;
     color: #333; 
     }


` 
