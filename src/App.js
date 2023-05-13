import { useState } from "react";

const meno = "SP MIKRO";
const kod = "260";
const nazvy1 = ["Typ klímy", "Okolitá teplota", "Korózna kategória", "Krytie"];
const hodnoty1 = [
  {
    typ_klimy: "Mierna /Standard/",
    okolita_teplota: "-20°C ... +60°C",
    korozna_kategoria: "C3",
    krytie: "IP 65",
    cislo: "0",
  },

  {
    typ_klimy: "Tropická suchá a suchá /Tropics and Dry/",
    okolita_teplota: "-20°C ... +60°C",
    korozna_kategoria: "C3",
    krytie: "IP 65",
    cislo: "6",
  },
];

const nazvy2 = [
  "Elektrické pripojenie",
  "Napájacie napätie",
  "Schéma zapojenia",
];
const hodnoty2 = [
  {
    elektricke_pripojenie: "Vyvedené káble dĺžky 1 m",
    napatie: "230 V AC",
    schema: "Z594b, Z594c",
    cislo: "0",
  },

  {
    elektricke_pripojenie: "Vyvedené káble dĺžky 1 m",
    napatie: "220 V AC",
    schema: "Z594b, Z594c",
    cislo: "L",
  },

  {
    elektricke_pripojenie: "Vyvedené káble dĺžky 1 m",
    napatie: "24 V AC",
    schema: "Z594, Z594a",
    cislo: "3",
  },
];

const nazvy3 = [
  "Max. zaťažovací moment",
  "Doba prestavenia 50 Hz",
  "Doba prestavenia 60 Hz",
];
const hodnoty3 = [
  {
    moment: "8 Nm",
    doba1: "120 s/90°",
    doba2: "100 s/90°",
    cislo: "1",
  },
];

const nazvy4 = ["Dorazy", "Pracovný uhol"];
const hodnoty4 = [
  {
    dorazy: "Bez dorazov",
    uhol: "60°",
    cislo: "A",
  },
  {
    dorazy: "Bez dorazov",
    uhol: "90°",
    cislo: "B",
  },
  {
    dorazy: "Bez dorazov",
    uhol: "120°",
    cislo: "C",
  },
];

const nazvy5 = [
  "Vysielač polohy",
  "Zdroj",
  "Zapojenie",
  "Výstup",
  "Schéma zapojenia",
];
const hodnoty5 = [
  {
    poloha: "Bez vysielača",
    zdroj: "-",
    zapojenie: "-",
    vystup: "-",
    schema: "-",
    cislo: "A",
  },
  {
    poloha: "Odporový",
    zdroj: "Odporový",
    zapojenie: "-",
    vystup: "1x100 Ω",
    schema: "Z595",
    cislo: "B",
  },
  {
    poloha: "Odporový",
    zdroj: "Jednoduchý",
    zapojenie: "-",
    vystup: "1x1000 Ω",
    schema: "Z595",
    cislo: "E",
  },
  {
    poloha: "Odporový",
    zdroj: "Jednoduchý",
    zapojenie: "-",
    vystup: "1x2000 Ω",
    schema: "Z595",
    cislo: "F",
  },
  {
    poloha: "Elektronický - prúdový",
    zdroj: "Bez zdroja",
    zapojenie: "2-vodič",
    vystup: "4 - 20 mA",
    schema: "Z595a",
    cislo: "S",
  },
];

const nazvy6 = [
  "Mechanické pripojenie",
  "Veľkosť príruby",
  "Tvar dielca",
  "Rozmer dielca",
  "Rozmerový náčrt",
];
const hodnoty6 = [
  {
    pripojenie: "Príruba ISO 5211",
    velkost: "F04",
    tvar: "D-9",
    rozmer: "9x9",
    nacrt: "P-2126",
    cislo: "B",
  },
  {
    pripojenie: "Príruba ISO 5211",
    velkost: "F04",
    tvar: "L-9",
    rozmer: "9x9",
    nacrt: "P-2126",
    cislo: "T",
  },
  {
    pripojenie: "Príruba ISO 5211",
    velkost: "F04",
    tvar: "D-11",
    rozmer: "11x11",
    nacrt: "P-2126",
    cislo: "A",
  },
  {
    pripojenie: "Príruba ISO 5211",
    velkost: "F04",
    tvar: "L-11",
    rozmer: "11x11",
    nacrt: "P-2126",
    cislo: "S",
  },
  {
    pripojenie: "Príruba ISO 5211",
    velkost: "F04",
    tvar: "H-8",
    rozmer: "8x13",
    nacrt: "P-2126",
    cislo: "M",
  },
  {
    pripojenie: "Príruba ISO 5211",
    velkost: "F04",
    tvar: "H-9",
    rozmer: "9x14",
    nacrt: "P-2126",
    cislo: "G",
  },
  {
    pripojenie: "Príruba ISO 5211",
    velkost: "F04",
    tvar: "H-11",
    rozmer: "11x14",
    nacrt: "P-2126",
    cislo: "U",
  },
];

const nazvy7 = ["Kod", "Rozšírené vybavenie", "Schéma zapojenia"];
const hodnoty7 = [
  {
    kod: "A",
    vybavenie: "Nastavenie pracovného uhla na požadovanú hodnotu",
    schema: "-",
    cislo: "0",
    cislo1: "1",
  },
  {
    kod: "B",
    vybavenie: "2 prídavné polohové spínače S5, S6",
    schema: "Z594a, Z594c",
    cislo: "0",
    cislo1: "2",
  },
  {
    vybavenie:
      "Dovolené kombinácie a kódy Allowed combination and code: A+B=04",
  },
];

const obrazok =
  "http://www.regada.sk/public/media/image/picture/13_bd65c7f7f726cc31702ab1b627f62fd1.jpeg";

let initialCounters = ["x", "-", "x", "x", "x", "x", "x", "/", "x", "x"];

const App = () => {
  const [stlacene, setStlacene] = useState(initialCounters);

  function handleClick(elem, index) {
    const nextCounters = stlacene.map((c, i) => {
      if (i === index) {
        // Increment the clicked counter
        return elem;
      } else {
        if (index === 0 && elem === "0" && i === 2) {
          return "x";
        }
        // The rest haven't changed
        return c;
      }
    });
    setStlacene(nextCounters);
  }

  function handleSpecialClick(elem, elem2, index) {
    const nextCounters = stlacene.map((c, i) => {
      if (index !== 2) {
        if (i === 8) {
          // Increment the clicked counter
          return elem;
        } else if (i === 9) {
          return elem2;
        } else {
          // The rest haven't changed
          return c;
        }
      } else {
        return c;
      }
    });

    setStlacene(nextCounters);
  }

  return (
    <div className="obalena_tab1">
      <div>
        <div class="centrovak">
          <div class="tmavo_modry_obdlznik" id="tmavo_modry_obdlznik">
            <h1 class="biely_text">{meno}</h1>
            <h1 class="biely_text">
              Elektrický servopohon jednootáčkový / Electric part-turn actuator
            </h1>
          </div>
        </div>

        <div class="uvod">
          <img class="hlavny_obrazok" src={obrazok} />
          <div className="SK-text">
            <h3 className="SK-nadpis">Štandardné vybavenie:</h3>
            <ul>
              <li>Napájacie napätie 24 V AC, 230 V AC</li>
              <li>Elektrické pripojenie cez vyvedené káble</li>
              <li>2 polohové spínače</li>
              <li>Mechanické pripojenie prírubové ISO 5211</li>
              <li>Stupeň krytia IP 65</li>
            </ul>
          </div>
          <div className="SK-text">
            <h3 className="SK-nadpis">Standard equipment:</h3>
            <ul>
              <li>Voltage 24 V AC, 230 V AC</li>
              <li>Electrical cable connection</li>
              <li>2 position switches</li>
              <li>Mechanical connection - flange ISO 5211</li>
              <li>Protection code IP 65</li>
            </ul>
          </div>
        </div>

        <table id="objednavaci_kod">
          <tbody>
            <td id="order_code_label" class="mala_tab">
              Objednávací kód /Order code/
            </td>
            <td id="kod" class="mala_tab">
              {kod}.
            </td>
            {stlacene.map((ciselo) => {
              return <td className="mala_tab">{ciselo}</td>;
            })}
          </tbody>
        </table>

        <table className="prva_tabulka">
          <thead>
            <tr>
              {nazvy1.map((nazov) => {
                return <th>{nazov}</th>;
              })}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {hodnoty1.map((hodnota, index) => {
              return (
                <tr
                  key={index}
                  onClick={() => {
                    handleClick(hodnota.cislo, 0);
                  }}
                  className={stlacene[0] === hodnota.cislo ? "stisknute" : ""}
                >
                  <td>{hodnota.typ_klimy}</td>
                  <td>{hodnota.okolita_teplota}</td>
                  <td>{hodnota.korozna_kategoria}</td>
                  <td>{hodnota.krytie}</td>
                  <td className="last_element">{hodnota.cislo}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <table className="druha_tabulka">
          <thead>
            <tr>
              {nazvy2.map((nazov) => {
                return <th>{nazov}</th>;
              })}
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr
              onClick={() => {
                handleClick(hodnoty2[0].cislo, 2);
              }}
              className={stlacene[2] === hodnoty2[0].cislo ? "stisknute" : ""}
            >
              <td>{hodnoty2[0].elektricke_pripojenie}</td>
              <td>{hodnoty2[0].napatie}</td>
              <td>{hodnoty2[0].schema}</td>
              <td className="last_element">{hodnoty2[0].cislo}</td>
            </tr>
            <tr
              onClick={() => {
                handleClick(hodnoty2[1].cislo, 2);
              }}
              className={stlacene[2] === hodnoty2[1].cislo ? "stisknute" : ""}
            >
              <td>{hodnoty2[1].elektricke_pripojenie}</td>
              <td>{hodnoty2[1].napatie}</td>
              <td>{hodnoty2[1].schema}</td>
              <td className="last_element">{hodnoty2[1].cislo}</td>
            </tr>
            <tr
              onClick={() => {
                handleClick(stlacene[0] === "0" ? "x" : hodnoty2[2].cislo, 2);
              }}
              className={
                stlacene[0] === "0"
                  ? "zakaz"
                  : stlacene[2] === hodnoty2[2].cislo
                  ? "stisknute"
                  : ""
              }
            >
              {" "}
              <td>{hodnoty2[2].elektricke_pripojenie}</td>
              <td>{hodnoty2[2].napatie}</td>
              <td>{hodnoty2[2].schema}</td>
              <td className="last_element">{hodnoty2[2].cislo}</td>
            </tr>{" "}
          </tbody>
        </table>

        <table className="tretia_tabulka">
          <thead>
            <tr>
              {nazvy3.map((nazov) => {
                return <th>{nazov}</th>;
              })}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {hodnoty3.map((hodnota, index) => {
              return (
                <tr
                  key={index}
                  onClick={() => {
                    handleClick(hodnota.cislo, 3);
                  }}
                  className={stlacene[3] === hodnota.cislo ? "stisknute" : ""}
                >
                  <td>{hodnota.moment}</td>
                  <td>{hodnota.doba1}</td>
                  <td>{hodnota.doba2}</td>
                  <td className="last_element">{hodnota.cislo}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <table className="stvrta_tabulka">
          <thead>
            <tr>
              {nazvy4.map((nazov) => {
                return <th>{nazov}</th>;
              })}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {hodnoty4.map((hodnota, index) => {
              return (
                <tr
                  key={index}
                  onClick={() => {
                    handleClick(hodnota.cislo, 4);
                  }}
                  className={stlacene[4] === hodnota.cislo ? "stisknute" : ""}
                >
                  <td>{hodnota.dorazy}</td>
                  <td>{hodnota.uhol}</td>
                  <td className="last_element">{hodnota.cislo}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <table className="piata_tabulka">
          <thead>
            <tr>
              {nazvy5.map((nazov) => {
                return <th>{nazov}</th>;
              })}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {hodnoty5.map((hodnota, index) => {
              return (
                <tr
                  key={index}
                  onClick={() => {
                    handleClick(hodnota.cislo, 5);
                  }}
                  className={stlacene[5] === hodnota.cislo ? "stisknute" : ""}
                >
                  <td>{hodnota.poloha}</td>
                  <td>{hodnota.zdroj}</td>
                  <td>{hodnota.zapojenie}</td>
                  <td>{hodnota.vystup}</td>
                  <td>{hodnota.schema}</td>
                  <td className="last_element">{hodnota.cislo}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <table className="siesta_tabulka">
          <thead>
            <tr>
              {nazvy6.map((nazov) => {
                return <th>{nazov}</th>;
              })}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {hodnoty6.map((hodnota, index) => {
              return (
                <tr
                  key={index}
                  onClick={() => {
                    handleClick(hodnota.cislo, 6);
                  }}
                  className={stlacene[6] === hodnota.cislo ? "stisknute" : ""}
                >
                  <td>{hodnota.pripojenie}</td>
                  <td>{hodnota.velkost}</td>
                  <td>{hodnota.tvar}</td>
                  <td>{hodnota.rozmer}</td>
                  <td>{hodnota.nacrt}</td>
                  <td className="last_element">{hodnota.cislo}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <table className="siedma_tabulka">
          <thead>
            <tr>
              {nazvy7.map((nazov) => {
                return <th>{nazov}</th>;
              })}
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {hodnoty7.map((hodnota, index) => {
              return (
                <tr
                  key={index}
                  onClick={() => {
                    handleSpecialClick(hodnota.cislo, hodnota.cislo1, index);
                  }}
                  className={
                    stlacene[8] === hodnota.cislo &&
                    stlacene[9] === hodnota.cislo1
                      ? "stisknute"
                      : ""
                  }
                >
                  <td>{hodnota.kod}</td>
                  <td>{hodnota.vybavenie}</td>
                  <td>{hodnota.schema}</td>
                  <td className="last_element">{hodnota.cislo}</td>
                  <td className="last_element">{hodnota.cislo1}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;

/* <tr
className={stalacene["jeden"] ? "stisknute" : "nestisknute"}
onClick={Stlacit}
>
{hodnoty1.map((hodnota) => {
  return <td name="riadok1">{hodnota}</td>;
})}
</tr>
<tr
className={stalacene["dva"] ? "stisknute" : "nestisknute"}
onClick={Stlacit}
>
{hodnoty2.map((hodnota) => {
  return <td name="riadok2">{hodnota}</td>;
})}
</tr> */
