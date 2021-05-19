import React from "react";
import Forma from "./Forma";
import slika16 from "./slika16.jpg";
import slika17 from "./slika17.jpg";
import slika18 from "./slika18.jpg";
import { Link } from "react-router-dom";

function Grad() {
  return <div><h1 class="registar">Registar za glasanje</h1>
  <p class="registar">Ispunite kako bi se registrirali za glasanje</p><br></br>
  
  <div>
  <Forma></Forma>
    </div>
    <h3 class="registar">Glavni kandidati za gradonačelnika</h3>
    <table border="0" className="tablica4" width="100%">
   <tr>
     <td class="split">
     <h5>Ivica Puljak(CENTAR)<br>
     </br><br></br>
     <img src={slika18} className="slika18" /></h5>
     </td></tr><tr>
     <td class="split">
       <h5>Vice Mihanović(HDZ)<br></br><br></br>
       <img src={slika17} className="slika17" /></h5>
     </td></tr><tr>
     <td class="split"> <h5>Željko Kerum(HGS)<br></br><br></br>
     <img src={slika16} className="slika16" /></h5></td>
   </tr><br></br>
   <Link to ="/"><button class="povratak2">Povratak na početnu</button><br></br><br></br></Link>
    </table>
  
  </div>;
}


export default Grad;
