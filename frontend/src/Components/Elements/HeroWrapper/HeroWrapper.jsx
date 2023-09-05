import { HeroWrapperStyle } from './HeroWrapperStyle';



export default function HeroWrapper() {
  return (
    <>
   <HeroWrapperStyle>
    <div className='hero-image'>
      <div className="contents">
      <p>Stor scene</p>
      <h4>28. april - 30. april 2023</h4>
      
      {/* <br> */}
      <h1>Fyrtøjet</h1>
      <p>BØRNETEATER</p>
      </div>
     <img class="image image-contain" src={require('../../../Assets/Images/Hero-image/Fyrtøjet.png')} alt="Hero" />
     </div>
   </HeroWrapperStyle>

   
   </>
  )
}
