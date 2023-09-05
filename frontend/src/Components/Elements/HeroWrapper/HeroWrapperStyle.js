import styled from 'styled-components';


export const HeroWrapperStyle = styled.div `
     margin-top: 0rem;
     .hero-image{
      margin: auto;
      width: 70%;
      display: flex;
      justify-content: flex-end;
      align-items: stretch;
      background-color: #F9C1B1;
      border: 2px solid #AD7A51;
     }
     .contents{
     max-width: 1200px;
     margin: 0 auto;
     display: grid;
     p {

     }
     h1 h4 {
          font-size: bold;
     }
  
     }
     .hero-image img {
      height: 100%;
     }
     .image{
      border-top: 17px solid #AD7A51;
      border-left: 17px solid #AD7A51;
      width: 500px;
      height: 300px;
}
.image-contain {
  object-fit: cover;
  object-position: center;
}

` 