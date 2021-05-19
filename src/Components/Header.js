import React from "react";
import slika1 from "./slika1.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div class="divheder">
      
          <ul class="tdbotuni">
          
  <li><Link to ="/Grad"><button class="botun">E-registar</button> </Link> </li>
  <li><Link to ="/Hiperveza"><button class="botun">Gradski Kotari</button></Link></li>
  <li><Link to ="/Pomocna"><button class="botun">Sportske ekipe</button></Link></li>
 
</ul>
      
        <div class="hedslika"> 
    
      <img src={slika1} className="slika1" />
</div>

    </div>
  );
}

export default Header;