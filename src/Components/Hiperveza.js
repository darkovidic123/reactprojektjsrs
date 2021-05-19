import React from "react";
import { Link } from "react-router-dom";
import slika7 from "./slika7.jpg";
import slika8 from "./slika8.jpg";
import slika9 from "./slika9.jpg";
import slika10 from "./slika10.jpg";
import slika11 from "./slika11.jpg";
import slika12 from "./slika12.jpg";
import slika13 from "./slika13.jpg";
import slika14 from "./slika14.jpg";
import slika15 from "./slika15.jpg";

function Hiperveza() {
  return (
  <div>
    <h1 class="kotari">Gradski kotari</h1>
    <Link to ="/"><button class="povratak">Povratak na početnu</button><br></br><br></br></Link>
    <table border="0" className="tablica4" width="100%" >
    <tr>
      <td class="tdhiper">
      <h3 class="naslov">Bačvice</h3><br></br>
     <a href="https://www.split.hr/gradska-uprava/kotari-i-mjesni-odbori/gradski-kotari/bacvice"> <img src={slika7} className="slika7" /></a>
      </td>
      <td class="tdhiper">
      <h3 class="naslov">Blatine</h3>
      <a href="https://www.split.hr/gradska-uprava/kotari-i-mjesni-odbori/gradski-kotari/blatine-skrape"><img src={slika8} className="slika7" /></a>
      </td>
      <td class="tdhiper">
      <h3 class="naslov">Spinut</h3>
      <a href="https://www.split.hr/gradska-uprava/kotari-i-mjesni-odbori/gradski-kotari/gradski-kotar-spinut/osnovne-informacije"><img src={slika11} className="slika7" /></a>
    
      </td>
    </tr>
    <tr>
      <td class="tdhiper">
      <h3 class="naslov">Mertojak</h3>
      <a href="https://www.split.hr/gradska-uprava/kotari-i-mjesni-odbori/gradski-kotari/mertojak"> <img src={slika10} className="slika7" /></a>
      </td>
      <td class="tdhiper">
      <h3 class="naslov">Gripe</h3>
      <a href="https://www.split.hr/gradska-uprava/kotari-i-mjesni-odbori/gradski-kotari/gripe"> <img src={slika12} className="slika7" /></a>
      </td>
      <td class="tdhiper">
      <h3 class="naslov">Sućidar</h3>
      <a href="https://www.split.hr/gradska-uprava/kotari-i-mjesni-odbori/gradski-kotari/sucidar"> <img src={slika9} className="slika7" /></a>
      </td>
    </tr>
    <tr>
      <td class="tdhiper">
      <h3 class="naslov">Varoš</h3>
      <a href="https://www.split.hr/gradska-uprava/kotari-i-mjesni-odbori/gradski-kotari/varos"> <img src={slika14} className="slika7" /></a>
      </td>
      <td class="tdhiper">
      <h3 class="naslov">Trstenik</h3>
      <a href="https://www.split.hr/gradska-uprava/kotari-i-mjesni-odbori/gradski-kotari/trstenik"> <img src={slika13} className="slika7" /></a>
      </td>
      <td class="tdhiper">
      <h3 class="naslov">Žnjan</h3>
      <a href="https://www.split.hr/gradska-uprava/kotari-i-mjesni-odbori/gradski-kotari/znjan"> <img src={slika15} className="slika7" /></a>
      </td>
    </tr>
    </table>
    
    
    
    </div>
    );
}

export default Hiperveza;
