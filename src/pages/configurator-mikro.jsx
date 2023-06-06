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

const Configurator = () => {
  let zakazana_moznost = [
    ["0", "-", "L", "X", "A"],
    //   ["6", "-", "3", "x", "C"],
  ];
  const [stlacene, setStlacene] = useState(initialCounters);
  const [exceptionn, setExceptionn] = useState([]);
  const [zakaz, setZakaz] = useState(["^", "^"]);

  function handleClick(elem, index) {
    if (stlacene[index] === elem) {
      const nextCounters = stlacene.map((c, i) => {
        if (i === index) {
          // Increment the clicked counter
          return "x";
        } else {
          // The rest haven't changed
          return c;
        }
      });

      setStlacene(nextCounters);
      return 0;
    }

    // Kontrola
    let docasna_array = [...stlacene];
    docasna_array[index] = elem;
    setExceptionn([]);
    let count = 0;

    // hladanie zakazanej moznosti
    for (let i = 0; i < zakazana_moznost.length; i++) {
      let dlzka = zakazana_moznost[i].length;
      count = 0;

      for (let j = 0; j < dlzka; j++) {
        if (
          zakazana_moznost[i][j] === docasna_array[j] ||
          zakazana_moznost[i][j] === "X"
        ) {
          count++;
        } else {
          count = 0;
          break;
        }
      }

      // ked sa najde zakazana kombinacia NEPRIDAME NIC do stlacene
      if (count === dlzka) {
        setZakaz([elem, index]);
        setExceptionn(zakazana_moznost[i]);
        const nextCounters = stlacene.map((c, i) => {
          if (i === index) {
            // Increment the clicked counter
            return "x";
          } else {
            // The rest haven't changed
            return c;
          }
        });
        setStlacene(nextCounters);

        break;
      }
    }

    // Ked je zvolena platna moznost
    if (count === 0) {
      const nextCounters = stlacene.map((c, i) => {
        if (i === index) {
          // Increment the clicked counter
          return elem;
        } else {
          // The rest haven't changed
          return c;
        }
      });
      setZakaz(["^", "^"]);
      setStlacene(nextCounters);
    }
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
        <div className="centrovak">
          <div className="tmavo_modry_obdlznik" id="tmavo_modry_obdlznik">
            <h1 className="biely_text">{meno}</h1>
            <h1 className="biely_text">
              Elektrický servopohon jednootáčkový / Electric part-turn actuator
            </h1>
          </div>
        </div>

        <div className="uvod">
          <img className="hlavny_obrazok" src={obrazok} />
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
            <td id="order_code_label" className="mala_tab">
              Objednávací kód /Order code/
            </td>
            <td id="kod" className="mala_tab">
              {kod}.
            </td>
            {stlacene.map((ciselo) => {
              return <td className="mala_tab">{ciselo[0]}</td>;
            })}
          </tbody>
        </table>
        <p>0-LXA</p>

        <table className="prva_tabulka">
          <thead>
            <tr>
              {nazvy1.map((nazov) => {
                return <th key={nazov}>{nazov}</th>;
              })}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {hodnoty1.map((hodnota, index) => {
              let indexy = 0;
              return (
                <tr
                  key={index}
                  onClick={() => {
                    handleClick(hodnota.cislo, indexy);
                  }}
                  className={
                    hodnota.cislo === zakaz[0] && indexy === zakaz[1]
                      ? "nemozes"
                      : hodnota.cislo === exceptionn[indexy]
                      ? "zmen"
                      : hodnota.cislo === stlacene[indexy]
                      ? "stisknute"
                      : ""
                  }
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
                return <th key={nazov}>{nazov}</th>;
              })}
              <th></th>
            </tr>
          </thead>

          <tbody>
            {hodnoty2.map((hodnota, index) => {
              let indexy = 2;
              return (
                <tr
                  key={index}
                  onClick={() => {
                    handleClick(hodnota.cislo, indexy);
                  }}
                  className={
                    hodnota.cislo === zakaz[0] && indexy === zakaz[1]
                      ? "nemozes"
                      : hodnota.cislo === exceptionn[indexy]
                      ? "zmen"
                      : hodnota.cislo === stlacene[indexy]
                      ? "stisknute"
                      : ""
                  }
                >
                  <td>{hodnota.elektricke_pripojenie}</td>
                  <td>{hodnota.napatie}</td>
                  <td>{hodnota.schema}</td>
                  <td className="last_element">{hodnota.cislo}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <table className="tretia_tabulka">
          <thead>
            <tr>
              {nazvy3.map((nazov) => {
                return <th key={nazov}>{nazov}</th>;
              })}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {hodnoty3.map((hodnota, index) => {
              let indexy = 3;
              return (
                <tr
                  key={index}
                  onClick={() => {
                    handleClick(hodnota.cislo, indexy);
                  }}
                  className={
                    hodnota.cislo === zakaz[0] && indexy === zakaz[1]
                      ? "nemozes"
                      : hodnota.cislo === exceptionn[indexy]
                      ? "zmen"
                      : hodnota.cislo === stlacene[indexy]
                      ? "stisknute"
                      : ""
                  }
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
                return <th key={nazov}>{nazov}</th>;
              })}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {hodnoty4.map((hodnota, index) => {
              let indexy = 4;
              return (
                <tr
                  key={index}
                  onClick={() => {
                    handleClick(hodnota.cislo, indexy);
                  }}
                  className={
                    hodnota.cislo === zakaz[0] && indexy === zakaz[1]
                      ? "nemozes"
                      : hodnota.cislo === exceptionn[indexy]
                      ? "zmen"
                      : hodnota.cislo === stlacene[indexy]
                      ? "stisknute"
                      : ""
                  }
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
                return <th key={nazov}>{nazov}</th>;
              })}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {hodnoty5.map((hodnota, index) => {
              let indexy = 5;
              return (
                <tr
                  key={index}
                  onClick={() => {
                    handleClick(hodnota.cislo, indexy);
                  }}
                  className={
                    hodnota.cislo === zakaz[0] && indexy === zakaz[1]
                      ? "nemozes"
                      : hodnota.cislo === exceptionn[indexy]
                      ? "zmen"
                      : hodnota.cislo === stlacene[indexy]
                      ? "stisknute"
                      : ""
                  }
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
                return <th key={nazov}>{nazov}</th>;
              })}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {hodnoty6.map((hodnota, index) => {
              let indexy = 6;
              return (
                <tr
                  key={index}
                  onClick={() => {
                    handleClick(hodnota.cislo, 6);
                  }}
                  className={
                    hodnota.cislo === zakaz[0] && indexy === zakaz[1]
                      ? "nemozes"
                      : hodnota.cislo === exceptionn[indexy]
                      ? "zmen"
                      : hodnota.cislo === stlacene[indexy]
                      ? "stisknute"
                      : ""
                  }
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
                return <th key={nazov}>{nazov}</th>;
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

export default Configurator;
