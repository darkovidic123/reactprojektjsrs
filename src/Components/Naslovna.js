
import React from "react";

import Header from "./Header.js";
import Footer from "./Footer.js";
import slika3 from "./slika3.jpg";
import slika4 from "./slika4.jpg";

function Naslovna() {
  return (
    <div>
        <h1 class="naslov">Grad Split</h1>
      <table border="0" className="tablica" width="100%">
        <tr>
          <td class="tdheder" colspan="3">
            <Header></Header>
          </td>
          </tr>
          
         
      </table>
      <br></br>
      <h3 class="osnova">Osnovno o našem gradu</h3>
      
      <p class="tekst">Split je najveći grad u Dalmaciji, te po broju stanovnika i drugi najveći grad u Hrvatskoj,<br></br> a predstavlja gospodarsko i 
        kulturno središte Dalmacije. Smješten je na središnjem dijelu <br></br>istočne obale
         Jadranskog mora, omeđen Kaštelanskim zaljevom sa 
        zapada i sjevera, a <br></br> Bračkim kanalom s juga te prostorno
         pokriva veći dio Splitskog poluotoka koji se spaja s<br></br> kopnom svojom sjevernom i istočnom stranom.</p>
         <p class="tekst2">
         Gradsko središte, smješteno s istočne strane poluotoka Marjan koji je danas<br></br> zaštićena park-šuma, čini starovjekovna 
         Dioklecijanova palača iz 4. stoljeća<br></br> (pod UNESCO-vom zaštitom od 26. listopada 1979. godine), što je<br></br> jedinstven primjer u 
        svijetu.
          Ako želite saznati više o povijesti Splita<br></br> kliknite <a href="https://visitsplit.com/hr/398/kratka-povijest" class="link">OVDJE.</a>
         </p>
         <br></br>
         <div class="gradani">
         <h3 class="marjan">
           Marjan
         </h3>
         <table border="0" className="tablica2" width="100%" height="350px">
   <tr>
     <td class="td" width="50%" height="350px">
     Marjan je brdo, vrh splitskog poluotoka i park šuma. Najviši vrh se zove Telegrin,<br></br>
     po telegrafskoj stanici iz Napoleonovog doba. Dug je oko 3,5 km, a najveća širina<br></br> 1,5 km. Ukupna je površine 
           oko 340 ha (polovica je pokrivena borovom šumom)<br></br> i čini prirodni valobran Kaštelanskom zaljevu. Issejski 
           Grci su na njemu imali<br></br> naseobine oko 2. st. p.n.e. Na njemu je sedam crkvica  ili njihovih ostataka. Od<br></br> 1573. 
           godine je na istočnim padinama ustanovljeno Židovsko groblje, s oko 700<br></br> starih grobova (spomenik prve kategorije). 
           Odatle je 1852. g. počelo pošumljavanje<br></br> Marjana, a idejni začetnik je bio profesor Juraj Kolombatović. Godine 2005. je<br></br> osnovana 
           Javna ustanova za upravljanje Park šumom Marjan. Na vrhu je<br></br> Prirodoslovni muzej u sklopu kojeg je 1924. godine 
           osnovan Zoološki vrt te 1926.g.<br></br> i Meteorološki opservatorij. S južne strane u Vili Dalmacija djeluje <br></br>MEDILS - 
           Mediteranski institut za istraživanje života, a sa zapadne je Muzej<br></br> hrvatskih arheoloških spomenika.
            Čak 24 razna sportska društva i udruge nose<br></br> ime Marjan.
            </td>
            <td>
           <img src={slika3} className="slika3" />
         </td>
            </tr>
            <h3 class="duje">
           Katedrala svetog Duje
         </h3>
            </table>
            <table border="0" className="tablica2" width="100%" height="300px">
              <tr>
                <td class="tde" width="50%" height="300px">
          
Među europskim katedralama splitska se nalazi u najstarijoj građevini na svijetu koja se upotrebljava kao katedrala 
– Mauzoleju cara Dioklecijana. U njoj povijest izmiruje antičku i kršćansku srednjovjekovnu baštinu. Sredinom 7. 
stoljeća postaje katedrala s oltarima i relikvijama Svetog Dujma i Svetog Staša.
Na inicijativu splitskog nadbiskupa Markantuna de Dominisa (1560.-1624.) početkom 17. stoljeća je 
srušen istočni dio zida mauzoleja i dograđen kor, čime je katedrala proširena. Poznata je po drvenim vratima 
koje je izradio domaći majstor Andrija Buvina 1214. godine, izrezbarivši u orahovini 28 prizora Isusova života. 
Katedralu krasi i remek djelo Jurja Dalmatinca - oltar sv. Staša.
Gradnja zvonika je počela oko 1257. godine i trajala je do sredine 16. stoljeća. Zato je on kombinacija 
romaničkog i gotičkog graditeljstva.<br></br><br></br><br></br><br></br>
                </td>
                <td  class="td" width="50%" height="300px">
                <img src={slika4} className="slika4" /><br></br><br></br>
                </td>
              </tr>
              </table>
              <table class="tablica3" >
                <tr>
                  <td>
                <Footer></Footer>
                </td>
                </tr>
              </table>
              
         </div>


    </div>
    
   
  );
}

export default Naslovna;