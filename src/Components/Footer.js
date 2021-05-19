import React from "react";
import slika5 from "./slika5.svg";
import slika6 from "./slika6.jpg";


function Footer() {
  return (
    <div class="footer">
    <a href="https://hajduk.hr/"><img src={slika5} className="slika5" class="slika5"/></a>
    <a href="https://kk-split.com/"> <img src={slika6} className="slika6" class="slika6"/> </a> 
      <p class="tekst1">info:555-333<br></br>
        email:gradsplit@gmail.com<br></br>
        facebook:gradSplit<br></br>
        gradonačelnik:Andro Krstulović-Opara
        
      </p>
      <div class="prava">
    <p>
    Sva prava pridržana 2021 Darko Vidić
    </p>
    
    </div>
    
    </div>
  );
}

export default Footer;