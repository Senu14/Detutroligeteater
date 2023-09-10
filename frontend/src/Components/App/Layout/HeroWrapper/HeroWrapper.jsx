import { HeroWrapperStyle } from './HeroWrapperStyle';



export default function HeroWrapper() {
  return (
    <>
   <HeroWrapperStyle>
    <div className='hero-image'>
      <div className="contents">
      <p className="small-text-up">Stor scene</p>
      <h4 className="hero-date">28. april - 30. april 2023</h4>
      <hr />
     
      <h1 className="title-hero">Fyrtøjet</h1>
      <p className="p-hero">BØRNETEATER</p>
      </div>
     <img class="image image-contain" src={require('../../../../Assets/Images/Hero-image/Fyrtøjet.png')} alt="Hero" />
     </div>
   </HeroWrapperStyle>

   
   </>
  )
}
