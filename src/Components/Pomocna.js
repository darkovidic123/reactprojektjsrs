import React from "react";
import slika19 from "./slika19.jpg";
import slika20 from "./slika20.jpg";
import { Link } from "react-router-dom";
function Pomocna() {
  return (
  
  <div>
    <h1 class="naslov">HNK Hajduk</h1><br></br>
<table  border="0" className="tablica" width="50%" height="350px">
  <tr>
    <td>
    Hrvatski nogometni klub Hajduk Split (HNK Hajduk Split) je hrvatski nogometni klub iz Splita. Najveće je športsko društvo u Splitu i jedno od većih u Hrvatskoj. Domaće utakmice igra na Gradskom stadionu u Poljudu. Kroz bogatu povijest klub je osvojio 18 prvenstava u pet država, 
    15 nacionalnih kupova i 5 superkupova, a najveći europski uspjesi su mu tri četvrtzavršnice Lige prvaka te po jedna poluzavršnica Kupa UEFA i Kupa pobjednika kupova.

Hajduk je u veljači 1911. u Pragu osnovala skupina splitskih studenata. Oko kluba su se okupljali prohrvatski, 
puntarski građani, pristaše sjedinjenja kraljevine Dalmacije s kraljevinom Hrvatskom i Slavonijom. Odatle i pridjev Hrvatski u 
nazivu kluba, Hrvatski grb kao dio Hajdukovog grba te zastava kluba sa crvenom i plavom bojom te bijelim natpisom Hajduk u sredini.
 Tradicionalna boja dresa je bijela s plavim donjim dijelom što simbolizira bijelo jedro broda i plavu boju Jadranskog mora. 
 Nadimci kluba su Bili, Hajduci,
 Majstori s mora. Godine 2011. Hajduk je velikom proslavom obilježio 100 godina od osnutka.<br></br><br></br>
 <a href="https://hajduk.hr/"><img src={slika19} className="slika19" /></a>
</td>
 </tr>
 </table>
    <h1 class="naslov">KK Split</h1>
    <table  border="0" className="tablica" width="50%" height="350px">
      <tr>
        <td>
        Košarkaška tradicija u Splitu je duga više od 60 godina. Klub je osnovan 1945. godine u Splitu kao dio FD Hajduk. U početku je košarka igrana među mladima Splita za dušu, za zabavu.

"Split" je osvojio 3 titule europskog prvaka, 2 puta je bio pobjednik Kupa Radivoja Koraća, 7 puta prvak države te 10 puta 
osvajač nacionalnog kupa. Nema puno klubova u Europi koji se mogu pohvaliti s ovakvim dostignućima.

Prvi naslov je došao šezdesetih godina kada se klub zvao Jugoplastika, po imenu ondašnjeg sponzora.
Klub je stigao do svoje prve završnice Eurolige 1972. godine. U završnici u Tel Avivu, talijanski prvak Ignis bio je bolji doslovno za jedan ubačaj, ali je klub ovom završnicom najavio velike mogućnosti u Europi u narednom razdoblju. To se i obistinilo. Četiri godine kasnije Jugoplastika osvaja svoj prvi europski naslov, Kup Radivoja Koraća. Naredne godine žuti su ponovili taj uspjeh.
<br></br><br></br>
 <a href="https://kk-split.com/"><img src={slika20} className="slika20" /></a>
        </td>
      </tr>

<br></br><br></br>
      <Link to ="/"><button class="povratak1">Povratak na početnu</button><br></br><br></br></Link>
    </table>
    
    
    
    
    </div>
    
    
    
    
    
    
    );
}

export default Pomocna;
