import { useState } from "react";
import { FaSearch } from "react-icons/fa";
// const { MongoClient } = require("mongodb");

const nazvy = {
  62: "SO2",
  260: "SP MIKRO",
};

const klimy = {
  "0": "Mierna -20°C ... +60°C C3 IP 65",
  "6": "Tropická suchá a suchá -20°C ... +60°C C3 IP 65" 
}

const el_pripojeniaa = {
  "0": "Vyvedené káble dĺžky 1 m 230 V AC Z594b, Z594c",
  "L": "Vyvedené káble dĺžky 1 m 220 V AC Z594b, Z594c",
  "3": "Vyvedené káble dĺžky 1 m 24 V AC Z594, Z594a"
}

const momenty = {
  "1": "8 Nm 120 s/90° 100 s/90°",
}

const uhly = {
  "A": "Bez dorazov 60°",
  "B": "Bez dorazov 90°",
  "C": "Bez dorazov 120°"
}

const polohy = {
  "A": "Bez vysielača",
  "B": "Odporový Jednoduchý 1x100 Ω Z595",
  "E": "Odporový Jednoduchý 1x1000 Ω Z595",
  "F": "Odporový Jednoduchý 1x2000 Ω Z595",
  "S": "Elektronický - prúdový Bez zdroja 2-vodič 4 - 20 mA Z595a",

}

const pripojeniaa = {
  "B": "Príruba ISO 5211 F04 D-9 9x9 P-2126",
  "T": "Príruba ISO 5211 F04 L-9 9x9 P-2126",
  "A": "Príruba ISO 5211 F04 D-11 11x11 P-2126",
  "S": "Príruba ISO 5211 F04 L-11 11x11 P-2126",
  "M": "Príruba ISO 5211 F04 H-8 8x13 P-2126",
  "G": "Príruba ISO 5211 F04 H-9 9x14 P-2126",
  "U": "Príruba ISO 5211 F04 H-11 11x14 P-2126",
}



const zakaznicke = {
  "90": "8 Nm, 80 s/90° + 2 prídavné polohové prepínače",
  "DE": "Pripojenie ISO 5211/1 F 05 s otvorom pre plochý hriadeľ  V = 14 mm, U = 10mm",
  "GF": "Pripojenie s vyvedenými vodičmi, napájacie napätie 24V DC",
  "8G": "Pracovný uhol 125° bez pevných dorazov",
  "AH": "Prevodník 0-10V,bez zdroja, 2 prídavne polohové prepínače,",
  "AI": "Typ klímy 'Mierne', teplota okolia -30° - +60°C",
  "AJ": "Výhrevný odpor s tepelným spínačom  + 2 prídavné polohové prepínače",
  "01": "Nastavenie pracovného uhla na požadovanú hodnotu",
  "02": "2 prídavné polohové spínače S5, S6 Z594a, Z594c",
  "04": "Nastavenie pracovného uhla na požadovanú hodnotu, 2 prídavné polohové spínače S5, S6 Z594a, Z594c"
}



// 260.0-L1ABT/01

const SearchEngine = () => {
  const [input, setInput] = useState("");
  const [nazov, setNazov] = useState("");
  const [klima, setKlima] = useState("");
  const [el_pripojenie, setEl_Pripojenie] = useState("");
  const [moment, setMoment] = useState("");
  const [uhol, setuhol] = useState("");
  const [poloha, setPoloha] = useState("");
  const [pripojenie, setPripojenie] = useState("");
  const [koncovka, setKoncovka] = useState("");



  const handleChange = (value) => {
    if (value.includes(".")) {
      setNazov(value.slice(0, value.indexOf(".")));
      // fetchnut databazu

      if (value.length > 4) {
        setKlima(value[4]);
      } else {
        setKlima("");
      }
      if (value.length > 6) {
        setEl_Pripojenie(value[6]);
      } else {
        setEl_Pripojenie("");
      }
      if (value.length > 7) {
        setMoment(value[7]);
      } else {
        setMoment("");
      }
      if (value.length > 8) {
        setuhol(value[8]);
      } else {
        setuhol("");
      }
      if (value.length > 9) {
        setPoloha(value[9]);
      } else {
        setPoloha("");
      }
      if (value.length > 10) {
        setPripojenie(value[10]);
      } else {
        setPripojenie("");
      }
      if (value.length > 13) {
        setKoncovka(value[12] + value[13]);
      } else {
        setKoncovka("");
      }
    } else {
      setNazov("");
    }

    setInput(value);
  };

  return (
    <div className="desifrovac">
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          placeholder="Objednávaci kód..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <p>260.0-L1ABT/01</p>
      <p>260.X-L1ABT/AI</p>
      <p>260.0-L1AXT/AH</p>
      {nazov && <p><b>Názov: {nazvy[parseInt(nazov)]}</b></p>}
      {klima && <p>{klima} - {klimy[klima]}</p>}
      {el_pripojenie && (
        <div>
          <p>-</p>
          <p>{el_pripojenie} - {el_pripojeniaa[el_pripojenie]}</p>
        </div>
      )}
      {moment && <p>{moment} - {momenty[moment]}</p>}
      {uhol && <p>{uhol} - {uhly[uhol]}</p>}
      {poloha && <p>{poloha} - {polohy[poloha]}</p>}
      {pripojenie && <p>{pripojenie} - {pripojeniaa[pripojenie]}</p>}
      {koncovka && (
        <div>
          <p>/</p>
          <p>{koncovka} - {zakaznicke[koncovka]}</p>
        </div>
      )}
    </div>
  );
};

// 260.
//

export default SearchEngine;
