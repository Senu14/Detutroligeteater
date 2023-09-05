import React from 'react';
import './Footer.scss';
// import { FaLinkedinSquare  } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className='lille-footer'>
    <footer>
    <footer>
        <div className="main-footer">
          <div className="C&R">
            <h4>ADRESSE</h4>
            <p>Det utrolige teater
               Havnegade 901
               9000 Aalborg
               EAN 5798003279845
               CVR 1001 0012
               Find vej på kort</p>


               <h4>BILLETSERVICE</h4>
               <p>Se åbningstider
                  Billettelefon: +45 96 31 80 80
                  billet@dut.dk</p>


                <h4>PRAKTISK INFO</h4>
                  <p>Kontakt
                     Kom trygt i teatret
                     Presseside
                     Skoleforestillinger
                     Teatercaféen
                     Handelsbetingelser</p>

                     <h4>ADMINISTRATION</h4>
                     <p>Telefon: +45 96 31 80 90
                        adm@dut.dk</p>
          </div>
          <div className="Medias">
            <FaFacebookSquare size={"2em"} />
           
            {/* <FaLinkedinSquare size={"2em"} />
            <FaInstagramSquare size={"2em"} /> */}
          </div>
          <div className="footerNav">
            <ul>
              <li>
                {" "}
                <Link to="/">Forside</Link>{" "}
              </li>
              <li>
                <a href="/destinationer">F&E</a>
              </li>
              <li>
                <a href="/vaerelser">Skuespillere</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </footer>
    </div>
  );
}

export default Footer;