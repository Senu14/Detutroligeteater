import React from 'react';
import './Footer.scss';
// import { FaLinkedinSquare  } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
 

    <footer>
        <div className="main-footer">
          <div className="upper">
            <h4>ADRESSE</h4>
            <p>Det utrolige teater
               Havnegade 901
               9000 Aalborg
               EAN 5798003279845
               CVR 1001 0012
               Find vej på kort</p>
</div>
<div className="medium">
    <div className="first-box">
    <h4 className="first-title-ftr">BILLETSERVICE</h4>
               <p className="first-text-ftr">Se åbningstider
                  Billettelefon: +45 96 31 80 80
                  billet@dut.dk</p>
    </div>
    <div className="second-box">
    <h4 className="second-tite-ftr">ADMINISTRATION</h4>
                     <p className="second-text-ftr">Telefon: +45 96 31 80 90
                        adm@dut.dk</p>
    </div>


</div>

<div className="lower">

                <h4>PRAKTISK INFO</h4>
                  <p>Kontakt
                     Kom trygt i teatret
                     Presseside
                     Skoleforestillinger
                     Teatercaféen
                     Handelsbetingelser</p>

                     
          </div>
          
          <div className="medias">
            <FaFacebookSquare size={"2em"} />
            <FaFacebookSquare size={"2em"} />
            <FaFacebookSquare size={"2em"} />
            
           
            {/* <FaLinkedinSquare size={"2em"} />
            <FaInstagramSquare size={"2em"} /> */}
          </div>
          
        </div>
      </footer>
  
   
  );
}

export default Footer;