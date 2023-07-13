import { useState } from "react";

const meno = "S0 2";
const kod = "062";
const nazvy1 = ["Typ klímy ", "Okolitá teplota", "Korózna kategória", "Krytie"];
const hodnoty1 = [
  {
    typ_klimy: "Mierna /Standard/",
    okolita_teplota: "-25°C ... +55°C",
    korozna_kategoria: "C3",
    krytie: "IP 67",
    cislo: "1",
  },
  {
    typ_klimy: "Mierna /Standard/",
    okolita_teplota: "-25°C ... +55°C",
    korozna_kategoria: "C3",
    krytie: "IP 68",
    cislo: "5",
  },

  {
    typ_klimy: "Tropická vlhká + ČOV /Tropics and Wet/",
    okolita_teplota: "-25°C ... +55°C",
    korozna_kategoria: "C4",
    krytie: "IP 67",
    cislo: "2",
  },
  {
    typ_klimy: "Chladná /Cold/",
    okolita_teplota: "-40°C ... +40°C",
    korozna_kategoria: "C3",
    krytie: "IP 67",
    cislo: "3",
  },
  {
    typ_klimy: "Tropická suchá a suchá /Tropical dry and Dry/",
    okolita_teplota: "-25°C ... +55°C",
    korozna_kategoria: "C3",
    krytie: "IP 67",
    cislo: "6",
  },
  {
    typ_klimy: "Morská /Sea/",
    okolita_teplota: "-50°C ... +40°C",
    korozna_kategoria: "C4",
    krytie: "IP 67",
    cislo: "7",
  },
  {
    typ_klimy: "Arktická /Arctic/",
    okolita_teplota: "-60°C ... +40°C",
    korozna_kategoria: "C3",
    krytie: "IP 67",
    cislo: "8",
  },
];

const nazvy2 = [
  "Elektrické pripojenie",
  "Napájacie napätie",
  "Schéma zapojenia",
];
const hodnoty2 = [
  {
    elektricke_pripojenie: "Na svorkovnicu",
    napatie: "230 V AC",
    schema: "Z404p",
    cislo: "0",
  },

  {
    elektricke_pripojenie: "Na svorkovnicu",
    napatie: "220 V AC",
    schema: "Z404p",
    cislo: "L",
  },

  {
    elektricke_pripojenie: "Na svorkovnicu",
    napatie: "3x400 V AC",
    schema: "Z78j",
    cislo: "1",
  },
  {
    elektricke_pripojenie: "Na svorkovnicu",
    napatie: "3x380 V AC",
    schema: "Z78j",
    cislo: "M",
  },
  {
    elektricke_pripojenie: "Na svorkovnicu",
    napatie: "24 V AC",
    schema: "Z507a, Z506a",
    cislo: "3",
  },
  {
    elektricke_pripojenie: "Na svorkovnicu",
    napatie: "24 V AC",
    schema: "Z503a, Z502a",
    cislo: "A",
  },
  {
    elektricke_pripojenie: "Na konektor",
    napatie: "230 V AC",
    schema: "Z404p",
    cislo: "5",
  },
  {
    elektricke_pripojenie: "Na konektor",
    napatie: "220 V AC",
    schema: "Z404p",
    cislo: "P",
  },
  {
    elektricke_pripojenie: "Na konektor",
    napatie: "3x400 V AC",
    schema: "Z78j",
    cislo: "7",
  },
  {
    elektricke_pripojenie: "Na konektor",
    napatie: "3x380 V AC",
    schema: "Z78j",
    cislo: "R",
  },
  {
    elektricke_pripojenie: "Na konektor",
    napatie: "24 V AC",
    schema: "Z507a, Z506a",
    cislo: "8",
  },
  {
    elektricke_pripojenie: "Na konektor",
    napatie: "24 V DC",
    schema: "Z503a, Z502a",
    cislo: "C",
  },
];

const nazvy3 = [
  "Vypínací moment",
  "Max. zataž. moment",
  "Vypínací moment",
  "Max. zataž. moment",
  "Vypínací moment",
  "Max. zataž. moment",
  "Rýchlosť prestavenia",
];
const hodnoty3 = [
  {
    vp1: "-",
    max1: "-",
    vp2: "-",
    max2: "-",
    vp3: "7.5 - 12 Nm",
    max3: "10 Nm",
    rychlost: "40 min-1",
    cislo: "U",
  },
  {
    vp1: "-",
    max1: "-",
    vp2: "-",
    max2: "-",
    vp3: "7.5 - 12 Nm",
    max3: "10 Nm",
    rychlost: "20 min-1",
    cislo: "V",
  },
  {
    vp1: "-",
    max1: "-",
    vp2: "-",
    max2: "-",
    vp3: "7.5 - 12 Nm",
    max3: "10 Nm",
    rychlost: "12.5 min-1",
    cislo: "W",
  },
  {
    vp1: "-",
    max1: "-",
    vp2: "-",
    max2: "-",
    vp3: "7.5 - 12 Nm",
    max3: "10 Nm",
    rychlost: "10 min-1",
    cislo: "Y",
  },
  {
    vp1: "7.5 - 12 Nm",
    max1: "10 Nm",
    vp2: "7.5 ÷ 12 Nm",
    max2: "10 Nm",
    vp3: "12 - 20 Nm",
    max3: "17 Nm",
    rychlost: "40 min-1",
    cislo: "A",
  },
  {
    vp1: "7.5 - 12 Nm",
    max1: "10 Nm",
    vp2: "7.5 ÷ 12 Nm",
    max2: "10 Nm",
    vp3: "12 - 20 Nm",
    max3: "17 Nm",
    rychlost: "20 min-1",
    cislo: "5",
  },
  {
    vp1: "7.5 - 12 Nm",
    max1: "10 Nm",
    vp2: "7.5 ÷ 12 Nm",
    max2: "10 Nm",
    vp3: "12 - 20 Nm",
    max3: "17 Nm",
    rychlost: "12.5 min-1",
    cislo: "6",
  },
  {
    vp1: "7.5 - 12 Nm",
    max1: "10 Nm",
    vp2: "7.5 ÷ 12 Nm",
    max2: "10 Nm",
    vp3: "12 - 20 Nm",
    max3: "17 Nm",
    rychlost: "10 min-1",
    cislo: "7",
  },
  {
    vp1: "15 - 25 Nm",
    max1: "21 Nm",
    vp2: "15 - 25 Nm",
    max2: "21 Nm",
    vp3: "24 - 40 Nm",
    max3: "34 Nm",
    rychlost: "20 min-1",
    cislo: "B",
  },
  {
    vp1: "15 - 25 Nm",
    max1: "21 Nm",
    vp2: "15 - 25 Nm",
    max2: "21 Nm",
    vp3: "24 - 40 Nm",
    max3: "34 Nm",
    rychlost: "20 min-1",
    cislo: "8",
  },
  {
    vp1: "15 - 25 Nm",
    max1: "21 Nm",
    vp2: "15 - 25 Nm",
    max2: "21 Nm",
    vp3: "24 - 40 Nm",
    max3: "34 Nm",
    rychlost: "20 min-1",
    cislo: "9",
  },
  {
    vp1: "24 - 40 Nm",
    max1: "34 Nm",
    vp2: "24 - 40 Nm",
    max2: "34 Nm",
    vp3: "36 - 60 Nm",
    max3: "50 Nm",
    rychlost: "12.5 min-1",
    cislo: "C",
  },
  {
    vp1: "24 - 40 Nm",
    max1: "34 Nm",
    vp2: "24 - 40 Nm",
    max2: "34 Nm",
    vp3: "36 - 60 Nm",
    max3: "50 Nm",
    rychlost: "10 min-1",
    cislo: "Z",
  },
  {
    vp1: "30 - 50 Nm",
    max1: "42 Nm",
    vp2: "30 - 50 Nm",
    max2: "42 Nm",
    vp3: "48 - 80 Nm",
    max3: "68 Nm",
    rychlost: "10 min-1",
    cislo: "D",
  },
  {
    vp1: "-",
    max1: "-",
    vp2: "24 - 40 Nm",
    max2: "34 Nm",
    vp3: "-",
    max3: "-",
    rychlost: "20 min-1",
    cislo: "L",
  },
  {
    vp1: "-",
    max1: "-",
    vp2: "36 - 60 Nm",
    max2: "50 Nm",
    vp3: "-",
    max3: "-",
    rychlost: "12.5 min-1",
    cislo: "M",
  },
  {
    vp1: "-",
    max1: "-",
    vp2: "48 - 80 Nm",
    max2: "68 Nm",
    vp3: "-",
    max3: "-",
    rychlost: "10 min-1",
    cislo: "N",
  },
  {
    vp1: "-",
    max1: "-",
    vp2: "-",
    max2: "-",
    vp3: "36 - 60 Nm",
    max3: "50 Nm",
    rychlost: "40 min-1",
    cislo: "R",
  },
  {
    vp1: "-",
    max1: "-",
    vp2: "-",
    max2: "-",
    vp3: "48 - 80 Nm",
    max3: "68 Nm",
    rychlost: "40 min-1",
    cislo: "P",
  },
  {
    vp1: "-",
    max1: "-",
    vp2: "-",
    max2: "-",
    vp3: "24 - 40 Nm",
    max3: "34 Nm",
    rychlost: "40 min-1",
    cislo: "S",
  },
  {
    vp1: "-",
    max1: "-",
    vp2: "-",
    max2: "-",
    vp3: "36 - 60 Nm",
    max3: "50 Nm",
    rychlost: "20 min-1",
    cislo: "E",
  },
];

const nazvy4 = [
  "Vyhotovenie ovládacej dosky",
  "Spínače",
  "Bez vysielača",
  "S odporovým vysielačom",
  "Schéma zapojenia",
];
const hodnoty4 = [
  {
    doska: "-",
    spinac: "S1/S2, S3/S4, S5/S6",
    vysielac: "0.5 ÷ 330",
    odpor: "0.84;1.5; 2.8; 5; 9; 16; 30; 55; 0.5 ÷ 330 100; 180; 330",
    schema: "Z403b",
    cislo: "1",
  },
  {
    doska: "-",
    spinac: "S1/S2, S3/S4,s tandem. spínačmi",
    vysielac: "0.5 ÷ 330",
    odpor: "0.84;1.5; 2.8; 5; 9; 16; 30; 55; 0.5 ÷ 330 100; 180; 330",
    schema: "Z461a",
    cislo: "K",
  },
  {
    doska: "-",
    spinac: "S1/S2, S3/S4, S5/S6",
    vysielac: "0.5 ÷ 330",
    odpor: "0.84;1.5; 2.8; 5; 9; 16; 30; 55; 0.5 ÷ 330 100; 180; 330",
    schema: "Z412r, Z505a, Z509a",
    cislo: "5",
  },
  {
    doska: "-",
    spinac: "S1/S2, S3/S4,s tandem. spínačmi",
    vysielac: "0.5 ÷ 330",
    odpor: "0.84;1.5; 2.8; 5; 9; 16; 30; 55; 0.5 ÷ 330 100; 180; 330",
    schema: "Z412f, Z504a, Z508a",
    cislo: "U",
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
    zdroj: "Bez vysielača",
    zapojenie: "-",
    vystup: "-",
    schema: "-",
    cislo: "A",
  },
  {
    poloha: "Odporový",
    zdroj: "Jednoduchý",
    zapojenie: "-",
    vystup: "1 x 100 Ω",
    schema: "Z5a",
    cislo: "B",
  },
  {
    poloha: "Odporový",
    zdroj: "Jednoduchý",
    zapojenie: "-",
    vystup: "1 x 2000 Ω",
    schema: "Z5a",
    cislo: "F",
  },
  {
    poloha: "Odporový",
    zdroj: "Dvojitý",
    zapojenie: "-",
    vystup: "2 x 100 Ω",
    schema: "Z6a",
    cislo: "K",
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
    pripojenie: "Príruba ISO 5210",
    velkost: "F07",
    tvar: "B3",
    rozmer: "Ø16",
    nacrt: "P-1377",
    cislo: "A",
  },
  {
    pripojenie: "Príruba ISO 5210",
    velkost: "F07",
    tvar: "B4",
    rozmer: "Ø25",
    nacrt: "P-1377",
    cislo: "B",
  },
  {
    pripojenie: "Príruba ISO 5210",
    velkost: "F07/F10(G0)",
    tvar: "A",
    rozmer: "Tr20x4 LH",
    nacrt: "ISO 5210, F10-A",
    cislo: "E",
  },
  {
    pripojenie: "Príruba ISO 5210",
    velkost: "F07/F10(G0)",
    tvar: "A",
    rozmer: "Tr25x5 LH",
    nacrt: "ISO 5210, F10-A",
    cislo: "H",
  },
  {
    pripojenie: "Príruba ISO 5210",
    velkost: "F07/F10(G0)",
    tvar: "A",
    rozmer: "Tr26x5 LH",
    nacrt: "ISO 5210, F10-A",
    cislo: "J",
  },
];

const nazvy7 = ["Kod", "Rozšírené vybavenie", "Schéma zapojenia"];
const hodnoty7 = [
  {
    kod: "B",
    vybavenie:
      "Nastavenie vypínacieho momentu na požadovanú hodnotu /Adjustment of switch-off torque to required value/",
    schema: "-",
    cislo: "0",
    cislo1: "3",
  },
  {
    kod: "C",
    vybavenie:
      "Nastavenie pracovných otáèok na požadovanú hodnotu /Adjustment of revolutions to required value/",
    schema: "-",
    cislo: "0",
    cislo1: "4",
  },
  {
    vybavenie:
      "Dovolené kombinácie a kódy Allowed combination and code: A+B=04",
  },
];

const obrazok =
  "http://www.regada.sk/public/media/image/picture/13_f716c99c608cc3fc2162331c57f6ae54.jpeg";

let initialCounters = ["x", "-", "x", "x", "x", "x", "x", "/", "x", "x"];

const Configurator = () => {
  let zakazana_moznost = [
    ["3", "-", "5"],
    ["3", "-", "P"],
    ["3", "-", "7"],
    ["3", "-", "R"],
    ["3", "-", "8"],
    ["3", "-", "C"],
    ["7", "-", "5"],
    ["7", "-", "P"],
    ["7", "-", "7"],
    ["7", "-", "R"],
    ["7", "-", "8"],
    ["7", "-", "C"],
    ["8", "-", "5"],
    ["8", "-", "P"],
    ["8", "-", "7"],
    ["8", "-", "R"],
    ["8", "-", "8"],
    ["8", "-", "C"],
    ["3", "-", "0", "X", "5"],
    ["3", "-", "L", "X", "5"],
    ["3", "-", "1", "X", "5"],
    ["3", "-", "M", "X", "5"],
    ["3", "-", "3", "X", "5"],
    ["3", "-", "A", "X", "5"],
    ["3", "-", "5", "X", "5"],
    ["3", "-", "P", "X", "5"],
    ["3", "-", "7", "X", "5"],
    ["3", "-", "R", "X", "5"],
    ["3", "-", "8", "X", "5"],
    ["3", "-", "C", "X", "5"],
    ["3", "-", "0", "X", "U"],
    ["3", "-", "L", "X", "U"],
    ["3", "-", "1", "X", "U"],
    ["3", "-", "M", "X", "U"],
    ["3", "-", "3", "X", "U"],
    ["3", "-", "A", "X", "U"],
    ["3", "-", "5", "X", "U"],
    ["3", "-", "P", "X", "U"],
    ["3", "-", "7", "X", "U"],
    ["3", "-", "R", "X", "U"],
    ["3", "-", "8", "X", "U"],
    ["3", "-", "C", "X", "U"],
    ["7", "-", "0", "X", "5"],
    ["7", "-", "L", "X", "5"],
    ["7", "-", "1", "X", "5"],
    ["7", "-", "M", "X", "5"],
    ["7", "-", "3", "X", "5"],
    ["7", "-", "A", "X", "5"],
    ["7", "-", "0", "X", "U"],
    ["7", "-", "L", "X", "U"],
    ["7", "-", "1", "X", "U"],
    ["7", "-", "M", "X", "U"],
    ["7", "-", "3", "X", "U"],
    ["7", "-", "A", "X", "U"],
    ["7", "-", "5", "X", "5"],
    ["7", "-", "P", "X", "5"],
    ["7", "-", "7", "X", "5"],
    ["7", "-", "R", "X", "5"],
    ["7", "-", "8", "X", "5"],
    ["7", "-", "C", "X", "5"],
    ["7", "-", "5", "X", "U"],
    ["7", "-", "P", "X", "U"],
    ["7", "-", "7", "X", "U"],
    ["7", "-", "R", "X", "U"],
    ["7", "-", "8", "X", "U"],
    ["7", "-", "C", "X", "U"],
    ["8", "-", "0", "X", "5"],
    ["8", "-", "L", "X", "5"],
    ["8", "-", "1", "X", "5"],
    ["8", "-", "M", "X", "5"],
    ["8", "-", "3", "X", "5"],
    ["8", "-", "A", "X", "5"],
    ["8", "-", "5", "X", "5"],
    ["8", "-", "P", "X", "5"],
    ["8", "-", "7", "X", "5"],
    ["8", "-", "R", "X", "5"],
    ["8", "-", "8", "X", "5"],
    ["8", "-", "C", "X", "5"],
    ["8", "-", "0", "X", "U"],
    ["8", "-", "L", "X", "U"],
    ["8", "-", "1", "X", "U"],
    ["8", "-", "M", "X", "U"],
    ["8", "-", "3", "X", "U"],
    ["8", "-", "A", "X", "U"],
    ["8", "-", "5", "X", "U"],
    ["8", "-", "P", "X", "U"],
    ["8", "-", "7", "X", "U"],
    ["8", "-", "R", "X", "U"],
    ["8", "-", "8", "X", "U"],
    ["8", "-", "C", "X", "U"],
    ["8", "-", "0", "X", "X", "S"],
    ["8", "-", "0", "X", "X", "T"],
    ["8", "-", "0", "X", "X", "V"],
    ["8", "-", "0", "X", "X", "Y"],
    ["8", "-", "0", "X", "X", "Q"],
    ["8", "-", "0", "X", "X", "U"],
    ["8", "-", "0", "X", "X", "W"],
    ["8", "-", "0", "X", "X", "Z"],
    ["8", "-", "0", "X", "X", "I"],
    ["8", "-", "0", "X", "X", "J"],
    ["8", "-", "0", "X", "X", "2"],
    ["8", "-", "0", "X", "X", "3"],
    ["8", "-", "L", "X", "X", "S"],
    ["8", "-", "L", "X", "X", "T"],
    ["8", "-", "L", "X", "X", "V"],
    ["8", "-", "L", "X", "X", "Y"],
    ["8", "-", "L", "X", "X", "Q"],
    ["8", "-", "L", "X", "X", "U"],
    ["8", "-", "L", "X", "X", "W"],
    ["8", "-", "L", "X", "X", "Z"],
    ["8", "-", "L", "X", "X", "I"],
    ["8", "-", "L", "X", "X", "J"],
    ["8", "-", "L", "X", "X", "2"],
    ["8", "-", "L", "X", "X", "3"],
    ["8", "-", "1", "X", "X", "S"],
    ["8", "-", "1", "X", "X", "T"],
    ["8", "-", "1", "X", "X", "V"],
    ["8", "-", "1", "X", "X", "Y"],
    ["8", "-", "1", "X", "X", "Q"],
    ["8", "-", "1", "X", "X", "U"],
    ["8", "-", "1", "X", "X", "W"],
    ["8", "-", "1", "X", "X", "Z"],
    ["8", "-", "1", "X", "X", "I"],
    ["8", "-", "1", "X", "X", "J"],
    ["8", "-", "1", "X", "X", "2"],
    ["8", "-", "1", "X", "X", "3"],
    ["8", "-", "M", "X", "X", "S"],
    ["8", "-", "M", "X", "X", "T"],
    ["8", "-", "M", "X", "X", "V"],
    ["8", "-", "M", "X", "X", "Y"],
    ["8", "-", "M", "X", "X", "Q"],
    ["8", "-", "M", "X", "X", "U"],
    ["8", "-", "M", "X", "X", "W"],
    ["8", "-", "M", "X", "X", "Z"],
    ["8", "-", "M", "X", "X", "I"],
    ["8", "-", "M", "X", "X", "J"],
    ["8", "-", "M", "X", "X", "2"],
    ["8", "-", "M", "X", "X", "3"],
    ["8", "-", "3", "X", "X", "S"],
    ["8", "-", "3", "X", "X", "T"],
    ["8", "-", "3", "X", "X", "V"],
    ["8", "-", "3", "X", "X", "Y"],
    ["8", "-", "3", "X", "X", "Q"],
    ["8", "-", "3", "X", "X", "U"],
    ["8", "-", "3", "X", "X", "W"],
    ["8", "-", "3", "X", "X", "Z"],
    ["8", "-", "3", "X", "X", "I"],
    ["8", "-", "3", "X", "X", "J"],
    ["8", "-", "3", "X", "X", "2"],
    ["8", "-", "3", "X", "X", "3"],
    ["8", "-", "A", "X", "X", "S"],
    ["8", "-", "A", "X", "X", "T"],
    ["8", "-", "A", "X", "X", "V"],
    ["8", "-", "A", "X", "X", "Y"],
    ["8", "-", "A", "X", "X", "Q"],
    ["8", "-", "A", "X", "X", "U"],
    ["8", "-", "A", "X", "X", "W"],
    ["8", "-", "A", "X", "X", "Z"],
    ["8", "-", "A", "X", "X", "I"],
    ["8", "-", "A", "X", "X", "J"],
    ["8", "-", "A", "X", "X", "2"],
    ["8", "-", "A", "X", "X", "3"],
    ["8", "-", "5", "X", "X", "S"],
    ["8", "-", "5", "X", "X", "T"],
    ["8", "-", "5", "X", "X", "V"],
    ["8", "-", "5", "X", "X", "Y"],
    ["8", "-", "5", "X", "X", "Q"],
    ["8", "-", "5", "X", "X", "U"],
    ["8", "-", "5", "X", "X", "W"],
    ["8", "-", "5", "X", "X", "Z"],
    ["8", "-", "5", "X", "X", "I"],
    ["8", "-", "5", "X", "X", "J"],
    ["8", "-", "5", "X", "X", "2"],
    ["8", "-", "5", "X", "X", "3"],
    ["8", "-", "P", "X", "X", "S"],
    ["8", "-", "P", "X", "X", "T"],
    ["8", "-", "P", "X", "X", "V"],
    ["8", "-", "P", "X", "X", "Y"],
    ["8", "-", "P", "X", "X", "Q"],
    ["8", "-", "P", "X", "X", "U"],
    ["8", "-", "P", "X", "X", "W"],
    ["8", "-", "P", "X", "X", "Z"],
    ["8", "-", "P", "X", "X", "I"],
    ["8", "-", "P", "X", "X", "J"],
    ["8", "-", "P", "X", "X", "2"],
    ["8", "-", "P", "X", "X", "3"],
    ["8", "-", "7", "X", "X", "S"],
    ["8", "-", "7", "X", "X", "T"],
    ["8", "-", "7", "X", "X", "V"],
    ["8", "-", "7", "X", "X", "Y"],
    ["8", "-", "7", "X", "X", "Q"],
    ["8", "-", "7", "X", "X", "U"],
    ["8", "-", "7", "X", "X", "W"],
    ["8", "-", "7", "X", "X", "Z"],
    ["8", "-", "7", "X", "X", "I"],
    ["8", "-", "7", "X", "X", "J"],
    ["8", "-", "7", "X", "X", "2"],
    ["8", "-", "7", "X", "X", "3"],
    ["8", "-", "R", "X", "X", "S"],
    ["8", "-", "R", "X", "X", "T"],
    ["8", "-", "R", "X", "X", "V"],
    ["8", "-", "R", "X", "X", "Y"],
    ["8", "-", "R", "X", "X", "Q"],
    ["8", "-", "R", "X", "X", "U"],
    ["8", "-", "R", "X", "X", "W"],
    ["8", "-", "R", "X", "X", "Z"],
    ["8", "-", "R", "X", "X", "I"],
    ["8", "-", "R", "X", "X", "J"],
    ["8", "-", "R", "X", "X", "2"],
    ["8", "-", "R", "X", "X", "3"],
    ["8", "-", "8", "X", "X", "S"],
    ["8", "-", "8", "X", "X", "T"],
    ["8", "-", "8", "X", "X", "V"],
    ["8", "-", "8", "X", "X", "Y"],
    ["8", "-", "8", "X", "X", "Q"],
    ["8", "-", "8", "X", "X", "U"],
    ["8", "-", "8", "X", "X", "W"],
    ["8", "-", "8", "X", "X", "Z"],
    ["8", "-", "8", "X", "X", "I"],
    ["8", "-", "8", "X", "X", "J"],
    ["8", "-", "8", "X", "X", "2"],
    ["8", "-", "8", "X", "X", "3"],
    ["8", "-", "C", "X", "X", "S"],
    ["8", "-", "C", "X", "X", "T"],
    ["8", "-", "C", "X", "X", "V"],
    ["8", "-", "C", "X", "X", "Y"],
    ["8", "-", "C", "X", "X", "Q"],
    ["8", "-", "C", "X", "X", "U"],
    ["8", "-", "C", "X", "X", "W"],
    ["8", "-", "C", "X", "X", "Z"],
    ["8", "-", "C", "X", "X", "I"],
    ["8", "-", "C", "X", "X", "J"],
    ["8", "-", "C", "X", "X", "2"],
    ["8", "-", "C", "X", "X", "3"],
    ["1", "-", "1", "X", "X", "K"],
    ["1", "-", "M", "X", "X", "K"],
    ["1", "-", "7", "X", "X", "K"],
    ["1", "-", "R", "X", "X", "K"],
    ["1", "-", "1", "X", "X", "P"],
    ["1", "-", "M", "X", "X", "P"],
    ["1", "-", "7", "X", "X", "P"],
    ["1", "-", "R", "X", "X", "P"],
    ["5", "-", "1", "X", "X", "K"],
    ["5", "-", "M", "X", "X", "K"],
    ["5", "-", "7", "X", "X", "K"],
    ["5", "-", "R", "X", "X", "K"],
    ["5", "-", "1", "X", "X", "P"],
    ["5", "-", "M", "X", "X", "P"],
    ["5", "-", "7", "X", "X", "P"],
    ["5", "-", "R", "X", "X", "P"],
    ["2", "-", "1", "X", "X", "K"],
    ["2", "-", "M", "X", "X", "K"],
    ["2", "-", "7", "X", "X", "K"],
    ["2", "-", "R", "X", "X", "K"],
    ["2", "-", "1", "X", "X", "P"],
    ["2", "-", "M", "X", "X", "P"],
    ["2", "-", "7", "X", "X", "P"],
    ["2", "-", "R", "X", "X", "P"],
    ["3", "-", "1", "X", "X", "K"],
    ["3", "-", "M", "X", "X", "K"],
    ["3", "-", "7", "X", "X", "K"],
    ["3", "-", "R", "X", "X", "K"],
    ["3", "-", "1", "X", "X", "P"],
    ["3", "-", "M", "X", "X", "P"],
    ["3", "-", "7", "X", "X", "P"],
    ["3", "-", "R", "X", "X", "P"],
    ["6", "-", "1", "X", "X", "K"],
    ["6", "-", "M", "X", "X", "K"],
    ["6", "-", "7", "X", "X", "K"],
    ["6", "-", "R", "X", "X", "K"],
    ["6", "-", "1", "X", "X", "P"],
    ["6", "-", "M", "X", "X", "P"],
    ["6", "-", "7", "X", "X", "P"],
    ["6", "-", "R", "X", "X", "P"],
    ["7", "-", "1", "X", "X", "K"],
    ["7", "-", "M", "X", "X", "K"],
    ["7", "-", "7", "X", "X", "K"],
    ["7", "-", "R", "X", "X", "K"],
    ["7", "-", "1", "X", "X", "P"],
    ["7", "-", "M", "X", "X", "P"],
    ["7", "-", "7", "X", "X", "P"],
    ["7", "-", "R", "X", "X", "P"],
    ["8", "-", "1", "X", "X", "K"],
    ["8", "-", "M", "X", "X", "K"],
    ["8", "-", "7", "X", "X", "K"],
    ["8", "-", "R", "X", "X", "K"],
    ["8", "-", "1", "X", "X", "P"],
    ["8", "-", "M", "X", "X", "P"],
    ["8", "-", "7", "X", "X", "P"],
    ["8", "-", "R", "X", "X"],
    ["1", "-", "3", "X", "X", "Q"],
    ["1", "-", "3", "X", "X", "U"],
    ["1", "-", "3", "X", "X", "W"],
    ["1", "-", "3", "X", "X", "Z"],
    ["1", "-", "3", "X", "X", "J"],
    ["1", "-", "3", "X", "X", "3"],
    ["1", "-", "A", "X", "X", "Q"],
    ["1", "-", "A", "X", "X", "U"],
    ["1", "-", "A", "X", "X", "W"],
    ["1", "-", "A", "X", "X", "Z"],
    ["1", "-", "A", "X", "X", "J"],
    ["1", "-", "A", "X", "X", "3"],
    ["1", "-", "8", "X", "X", "Q"],
    ["1", "-", "8", "X", "X", "U"],
    ["1", "-", "8", "X", "X", "W"],
    ["1", "-", "8", "X", "X", "Z"],
    ["1", "-", "8", "X", "X", "J"],
    ["1", "-", "8", "X", "X", "3"],
    ["1", "-", "C", "X", "X", "Q"],
    ["1", "-", "C", "X", "X", "U"],
    ["1", "-", "C", "X", "X", "W"],
    ["1", "-", "C", "X", "X", "Z"],
    ["1", "-", "C", "X", "X", "J"],
    ["1", "-", "C", "X", "X", "3"],
    ["5", "-", "3", "X", "X", "Q"],
    ["5", "-", "3", "X", "X", "U"],
    ["5", "-", "3", "X", "X", "W"],
    ["5", "-", "3", "X", "X", "Z"],
    ["5", "-", "3", "X", "X", "J"],
    ["5", "-", "3", "X", "X", "3"],
    ["5", "-", "A", "X", "X", "Q"],
    ["5", "-", "A", "X", "X", "U"],
    ["5", "-", "A", "X", "X", "W"],
    ["5", "-", "A", "X", "X", "Z"],
    ["5", "-", "A", "X", "X", "J"],
    ["5", "-", "A", "X", "X", "3"],
    ["5", "-", "8", "X", "X", "Q"],
    ["5", "-", "8", "X", "X", "U"],
    ["5", "-", "8", "X", "X", "W"],
    ["5", "-", "8", "X", "X", "Z"],
    ["5", "-", "8", "X", "X", "J"],
    ["5", "-", "8", "X", "X", "3"],
    ["5", "-", "C", "X", "X", "Q"],
    ["5", "-", "C", "X", "X", "U"],
    ["5", "-", "C", "X", "X", "W"],
    ["5", "-", "C", "X", "X", "Z"],
    ["5", "-", "C", "X", "X", "J"],
    ["5", "-", "C", "X", "X", "3"],
    ["2", "-", "3", "X", "X", "Q"],
    ["2", "-", "3", "X", "X", "U"],
    ["2", "-", "3", "X", "X", "W"],
    ["2", "-", "3", "X", "X", "Z"],
    ["2", "-", "3", "X", "X", "J"],
    ["2", "-", "3", "X", "X", "3"],
    ["2", "-", "A", "X", "X", "Q"],
    ["2", "-", "A", "X", "X", "U"],
    ["2", "-", "A", "X", "X", "W"],
    ["2", "-", "A", "X", "X", "Z"],
    ["2", "-", "A", "X", "X", "J"],
    ["2", "-", "A", "X", "X", "3"],
    ["2", "-", "8", "X", "X", "Q"],
    ["2", "-", "8", "X", "X", "U"],
    ["2", "-", "8", "X", "X", "W"],
    ["2", "-", "8", "X", "X", "Z"],
    ["2", "-", "8", "X", "X", "J"],
    ["2", "-", "8", "X", "X", "3"],
    ["2", "-", "C", "X", "X", "Q"],
    ["2", "-", "C", "X", "X", "U"],
    ["2", "-", "C", "X", "X", "W"],
    ["2", "-", "C", "X", "X", "Z"],
    ["2", "-", "C", "X", "X", "J"],
    ["2", "-", "C", "X", "X", "3"],
    ["3", "-", "3", "X", "X", "Q"],
    ["3", "-", "3", "X", "X", "U"],
    ["3", "-", "3", "X", "X", "W"],
    ["3", "-", "3", "X", "X", "Z"],
    ["3", "-", "3", "X", "X", "J"],
    ["3", "-", "3", "X", "X", "3"],
    ["3", "-", "A", "X", "X", "Q"],
    ["3", "-", "A", "X", "X", "U"],
    ["3", "-", "A", "X", "X", "W"],
    ["3", "-", "A", "X", "X", "Z"],
    ["3", "-", "A", "X", "X", "J"],
    ["3", "-", "A", "X", "X", "3"],
    ["3", "-", "8", "X", "X", "Q"],
    ["3", "-", "8", "X", "X", "U"],
    ["3", "-", "8", "X", "X", "W"],
    ["3", "-", "8", "X", "X", "Z"],
    ["3", "-", "8", "X", "X", "J"],
    ["3", "-", "8", "X", "X", "3"],
    ["3", "-", "C", "X", "X", "Q"],
    ["3", "-", "C", "X", "X", "U"],
    ["3", "-", "C", "X", "X", "W"],
    ["3", "-", "C", "X", "X", "Z"],
    ["3", "-", "C", "X", "X", "J"],
    ["3", "-", "C", "X", "X", "3"],
    ["6", "-", "3", "X", "X", "Q"],
    ["6", "-", "3", "X", "X", "U"],
    ["6", "-", "3", "X", "X", "W"],
    ["6", "-", "3", "X", "X", "Z"],
    ["6", "-", "3", "X", "X", "J"],
    ["6", "-", "3", "X", "X", "3"],
    ["6", "-", "A", "X", "X", "Q"],
    ["6", "-", "A", "X", "X", "U"],
    ["6", "-", "A", "X", "X", "W"],
    ["6", "-", "A", "X", "X", "Z"],
    ["6", "-", "A", "X", "X", "J"],
    ["6", "-", "A", "X", "X", "3"],
    ["6", "-", "8", "X", "X", "Q"],
    ["6", "-", "8", "X", "X", "U"],
    ["6", "-", "8", "X", "X", "W"],
    ["6", "-", "8", "X", "X", "Z"],
    ["6", "-", "8", "X", "X", "J"],
    ["6", "-", "8", "X", "X", "3"],
    ["6", "-", "C", "X", "X", "Q"],
    ["6", "-", "C", "X", "X", "U"],
    ["6", "-", "C", "X", "X", "W"],
    ["6", "-", "C", "X", "X", "Z"],
    ["6", "-", "C", "X", "X", "J"],
    ["6", "-", "C", "X", "X", "3"],
    ["7", "-", "3", "X", "X", "Q"],
    ["7", "-", "3", "X", "X", "U"],
    ["7", "-", "3", "X", "X", "W"],
    ["7", "-", "3", "X", "X", "Z"],
    ["7", "-", "3", "X", "X", "J"],
    ["7", "-", "3", "X", "X", "3"],
    ["7", "-", "A", "X", "X", "Q"],
    ["7", "-", "A", "X", "X", "U"],
    ["7", "-", "A", "X", "X", "W"],
    ["7", "-", "A", "X", "X", "Z"],
    ["7", "-", "A", "X", "X", "J"],
    ["7", "-", "A", "X", "X", "3"],
    ["7", "-", "8", "X", "X", "Q"],
    ["7", "-", "8", "X", "X", "U"],
    ["7", "-", "8", "X", "X", "W"],
    ["7", "-", "8", "X", "X", "Z"],
    ["7", "-", "8", "X", "X", "J"],
    ["7", "-", "8", "X", "X", "3"],
    ["7", "-", "C", "X", "X", "Q"],
    ["7", "-", "C", "X", "X", "U"],
    ["7", "-", "C", "X", "X", "W"],
    ["7", "-", "C", "X", "X", "Z"],
    ["7", "-", "C", "X", "X", "J"],
    ["7", "-", "C", "X", "X", "3"],
    ["8", "-", "3", "X", "X", "Q"],
    ["8", "-", "3", "X", "X", "U"],
    ["8", "-", "3", "X", "X", "W"],
    ["8", "-", "3", "X", "X", "Z"],
    ["8", "-", "3", "X", "X", "J"],
    ["8", "-", "3", "X", "X", "3"],
    ["8", "-", "A", "X", "X", "Q"],
    ["8", "-", "A", "X", "X", "U"],
    ["8", "-", "A", "X", "X", "W"],
    ["8", "-", "A", "X", "X", "Z"],
    ["8", "-", "A", "X", "X", "J"],
    ["8", "-", "A", "X", "X", "3"],
    ["8", "-", "8", "X", "X", "Q"],
    ["8", "-", "8", "X", "X", "U"],
    ["8", "-", "8", "X", "X", "W"],
    ["8", "-", "8", "X", "X", "Z"],
    ["8", "-", "8", "X", "X", "J"],
    ["8", "-", "8", "X", "X", "3"],
    ["8", "-", "C", "X", "X", "Q"],
    ["8", "-", "C", "X", "X", "U"],
    ["8", "-", "C", "X", "X", "W"],
    ["8", "-", "C", "X", "X", "Z"],
    ["8", "-", "C", "X", "X", "J"],
    ["8", "-", "C", "X", "X", "3"],
    ["1", "-", "1", "B", "X", "X", "D"],
    ["1", "-", "1", "B", "X", "X", "E"],
    ["1", "-", "1", "B", "X", "X", "F"],
    ["1", "-", "1", "B", "X", "X", "G"],
    ["1", "-", "1", "B", "X", "X", "H"],
    ["1", "-", "1", "B", "X", "X", "J"],
    ["1", "-", "1", "8", "X", "X", "D"],
    ["1", "-", "1", "8", "X", "X", "E"],
    ["1", "-", "1", "8", "X", "X", "F"],
    ["1", "-", "1", "8", "X", "X", "G"],
    ["1", "-", "1", "8", "X", "X", "H"],
    ["1", "-", "1", "8", "X", "X", "J"],
    ["1", "-", "1", "9", "X", "X", "D"],
    ["1", "-", "1", "9", "X", "X", "E"],
    ["1", "-", "1", "9", "X", "X", "F"],
    ["1", "-", "1", "9", "X", "X", "G"],
    ["1", "-", "1", "9", "X", "X", "H"],
    ["1", "-", "1", "9", "X", "X", "J"],
    ["1", "-", "X", "C", "X", "X", "D"],
    ["1", "-", "X", "C", "X", "X", "E"],
    ["1", "-", "X", "C", "X", "X", "F"],
    ["1", "-", "X", "C", "X", "X", "G"],
    ["1", "-", "X", "C", "X", "X", "H"],
    ["1", "-", "X", "C", "X", "X", "J"],
    ["1", "-", "X", "Z", "X", "X", "D"],
    ["1", "-", "X", "Z", "X", "X", "E"],
    ["1", "-", "X", "Z", "X", "X", "F"],
    ["1", "-", "X", "Z", "X", "X", "G"],
    ["1", "-", "X", "Z", "X", "X", "H"],
    ["1", "-", "X", "Z", "X", "X", "J"],
    ["1", "-", "X", "D", "X", "X", "D"],
    ["1", "-", "X", "D", "X", "X", "E"],
    ["1", "-", "X", "D", "X", "X", "F"],
    ["1", "-", "X", "D", "X", "X", "G"],
    ["1", "-", "X", "D", "X", "X", "H"],
    ["1", "-", "X", "D", "X", "X", "J"],
    ["1", "-", "X", "L", "X", "X", "D"],
    ["1", "-", "X", "L", "X", "X", "E"],
    ["1", "-", "X", "L", "X", "X", "F"],
    ["1", "-", "X", "L", "X", "X", "G"],
    ["1", "-", "X", "L", "X", "X", "H"],
    ["1", "-", "X", "L", "X", "X", "J"],
    ["1", "-", "X", "M", "X", "X", "D"],
    ["1", "-", "X", "M", "X", "X", "E"],
    ["1", "-", "X", "M", "X", "X", "F"],
    ["1", "-", "X", "M", "X", "X", "G"],
    ["1", "-", "X", "M", "X", "X", "H"],
    ["1", "-", "X", "M", "X", "X", "J"],
    ["1", "-", "X", "N", "X", "X", "D"],
    ["1", "-", "X", "N", "X", "X", "E"],
    ["1", "-", "X", "N", "X", "X", "F"],
    ["1", "-", "X", "N", "X", "X", "G"],
    ["1", "-", "X", "N", "X", "X", "H"],
    ["1", "-", "X", "N", "X", "X", "J"],
    ["1", "-", "X", "R", "X", "X", "D"],
    ["1", "-", "X", "R", "X", "X", "E"],
    ["1", "-", "X", "R", "X", "X", "F"],
    ["1", "-", "X", "R", "X", "X", "G"],
    ["1", "-", "X", "R", "X", "X", "H"],
    ["1", "-", "X", "R", "X", "X", "J"],
    ["1", "-", "X", "P", "X", "X", "D"],
    ["1", "-", "X", "P", "X", "X", "E"],
    ["1", "-", "X", "P", "X", "X", "F"],
    ["1", "-", "X", "P", "X", "X", "G"],
    ["1", "-", "X", "P", "X", "X", "H"],
    ["1", "-", "X", "P", "X", "X", "J"],
    ["1", "-", "X", "S", "X", "X", "D"],
    ["1", "-", "X", "S", "X", "X", "E"],
    ["1", "-", "X", "S", "X", "X", "F"],
    ["1", "-", "X", "S", "X", "X", "G"],
    ["1", "-", "X", "S", "X", "X", "H"],
    ["1", "-", "X", "S", "X", "X", "J"],
    ["1", "-", "X", "E", "X", "X", "D"],
    ["1", "-", "X", "E", "X", "X", "E"],
    ["1", "-", "X", "E", "X", "X", "F"],
    ["1", "-", "X", "E", "X", "X", "G"],
    ["1", "-", "X", "E", "X", "X", "H"],
    ["1", "-", "X", "E", "X", "X", "J"],
    ["1", "-", "X", "K", "X", "X", "D"],
    ["1", "-", "X", "K", "X", "X", "E"],
    ["1", "-", "X", "K", "X", "X", "F"],
    ["1", "-", "X", "K", "X", "X", "G"],
    ["1", "-", "X", "K", "X", "X", "H"],
    ["1", "-", "X", "K", "X", "X", "J"],
    ["1", "-", "X", "F", "X", "X", "D"],
    ["1", "-", "X", "F", "X", "X", "E"],
    ["1", "-", "X", "F", "X", "X", "F"],
    ["1", "-", "X", "F", "X", "X", "G"],
    ["1", "-", "X", "F", "X", "X", "H"],
    ["1", "-", "X", "F", "X", "X", "J"],
    ["1", "-", "X", "H", "X", "X", "D"],
    ["1", "-", "X", "H", "X", "X", "E"],
    ["1", "-", "X", "H", "X", "X", "F"],
    ["1", "-", "X", "H", "X", "X", "G"],
    ["1", "-", "X", "H", "X", "X", "H"],
    ["1", "-", "X", "H", "X", "X", "J"],
    ["1", "-", "X", "J", "X", "X", "D"],
    ["1", "-", "X", "J", "X", "X", "E"],
    ["1", "-", "X", "J", "X", "X", "F"],
    ["1", "-", "X", "J", "X", "X", "G"],
    ["1", "-", "X", "J", "X", "X", "H"],
    ["1", "-", "X", "J", "X", "X", "J"],
    ["1", "-", "X", "G", "X", "X", "D"],
    ["1", "-", "X", "G", "X", "X", "E"],
    ["1", "-", "X", "G", "X", "X", "F"],
    ["1", "-", "X", "G", "X", "X", "G"],
    ["1", "-", "X", "G", "X", "X", "H"],
    ["1", "-", "X", "G", "X", "X", "J"],
    ["1", "-", "M", "B", "X", "X", "D"],
    ["1", "-", "M", "B", "X", "X", "E"],
    ["1", "-", "M", "B", "X", "X", "F"],
    ["1", "-", "M", "B", "X", "X", "G"],
    ["1", "-", "M", "B", "X", "X", "H"],
    ["1", "-", "M", "B", "X", "X", "J"],
    ["1", "-", "M", "8", "X", "X", "D"],
    ["1", "-", "M", "8", "X", "X", "E"],
    ["1", "-", "M", "8", "X", "X", "F"],
    ["1", "-", "M", "8", "X", "X", "G"],
    ["1", "-", "M", "8", "X", "X", "H"],
    ["1", "-", "M", "8", "X", "X", "J"],
    ["1", "-", "M", "9", "X", "X", "D"],
    ["1", "-", "M", "9", "X", "X", "E"],
    ["1", "-", "M", "9", "X", "X", "F"],
    ["1", "-", "M", "9", "X", "X", "G"],
    ["1", "-", "M", "9", "X", "X", "H"],
    ["1", "-", "M", "9", "X", "X", "J"],
    ["1", "-", "7", "B", "X", "X", "D"],
    ["1", "-", "7", "B", "X", "X", "E"],
    ["1", "-", "7", "B", "X", "X", "F"],
    ["1", "-", "7", "B", "X", "X", "G"],
    ["1", "-", "7", "B", "X", "X", "H"],
    ["1", "-", "7", "B", "X", "X", "J"],
    ["1", "-", "7", "8", "X", "X", "D"],
    ["1", "-", "7", "8", "X", "X", "E"],
    ["1", "-", "7", "8", "X", "X", "F"],
    ["1", "-", "7", "8", "X", "X", "G"],
    ["1", "-", "7", "8", "X", "X", "H"],
    ["1", "-", "7", "8", "X", "X", "J"],
    ["1", "-", "7", "9", "X", "X", "D"],
    ["1", "-", "7", "9", "X", "X", "E"],
    ["1", "-", "7", "9", "X", "X", "F"],
    ["1", "-", "7", "9", "X", "X", "G"],
    ["1", "-", "7", "9", "X", "X", "H"],
    ["1", "-", "7", "9", "X", "X", "J"],
    ["1", "-", "R", "X", "X", "D", "X"],
    ["1", "-", "R", "B", "X", "X", "E"],
    ["1", "-", "R", "B", "X", "X", "F"],
    ["1", "-", "R", "B", "X", "X", "G"],
    ["1", "-", "R", "B", "X", "X", "H"],
    ["1", "-", "R", "B", "X", "X", "J"],
    ["1", "-", "R", "8", "X", "X", "D"],
    ["1", "-", "R", "8", "X", "X", "E"],
    ["1", "-", "R", "8", "X", "X", "F"],
    ["1", "-", "R", "8", "X", "X", "G"],
    ["1", "-", "R", "8", "X", "X", "H"],
    ["1", "-", "R", "8", "X", "X", "J"],
    ["1", "-", "R", "9", "X", "X", "D"],
    ["1", "-", "R", "9", "X", "X", "E"],
    ["1", "-", "R", "9", "X", "X", "F"],
    ["1", "-", "R", "9", "X", "X", "G"],
    ["1", "-", "R", "9", "X", "X", "H"],
    ["1", "-", "R", "9", "X", "X", "J"],
    ["5", "-", "1", "B", "X", "X", "D"],
    ["5", "-", "1", "B", "X", "X", "E"],
    ["5", "-", "1", "B", "X", "X", "F"],
    ["5", "-", "1", "B", "X", "X", "G"],
    ["5", "-", "1", "B", "X", "X", "H"],
    ["5", "-", "1", "B", "X", "X", "J"],
    ["5", "-", "1", "8", "X", "X", "D"],
    ["5", "-", "1", "8", "X", "X", "E"],
    ["5", "-", "1", "8", "X", "X", "F"],
    ["5", "-", "1", "8", "X", "X", "G"],
    ["5", "-", "1", "8", "X", "X", "H"],
    ["5", "-", "1", "8", "X", "X", "J"],
    ["5", "-", "1", "9", "X", "X", "D"],
    ["5", "-", "1", "9", "X", "X", "E"],
    ["5", "-", "1", "9", "X", "X", "F"],
    ["5", "-", "1", "9", "X", "X", "G"],
    ["5", "-", "1", "9", "X", "X", "H"],
    ["5", "-", "1", "9", "X", "X", "J"],
    ["5", "-", "X", "C", "X", "X", "D"],
    ["5", "-", "X", "C", "X", "X", "E"],
    ["5", "-", "X", "C", "X", "X", "F"],
    ["5", "-", "X", "C", "X", "X", "G"],
    ["5", "-", "X", "C", "X", "X", "H"],
    ["5", "-", "X", "C", "X", "X", "J"],
    ["5", "-", "X", "Z", "X", "X", "D"],
    ["5", "-", "X", "Z", "X", "X", "E"],
    ["5", "-", "X", "Z", "X", "X", "F"],
    ["5", "-", "X", "Z", "X", "X", "G"],
    ["5", "-", "X", "Z", "X", "X", "H"],
    ["5", "-", "X", "Z", "X", "X", "J"],
    ["5", "-", "X", "D", "X", "X", "D"],
    ["5", "-", "X", "D", "X", "X", "E"],
    ["5", "-", "X", "D", "X", "X", "F"],
    ["5", "-", "X", "D", "X", "X", "G"],
    ["5", "-", "X", "D", "X", "X", "H"],
    ["5", "-", "X", "D", "X", "X", "J"],
    ["5", "-", "X", "L", "X", "X", "D"],
    ["5", "-", "X", "L", "X", "X", "E"],
    ["5", "-", "X", "L", "X", "X", "F"],
    ["5", "-", "X", "L", "X", "X", "G"],
    ["5", "-", "X", "L", "X", "X", "H"],
    ["5", "-", "X", "L", "X", "X", "J"],
    ["5", "-", "X", "M", "X", "X", "D"],
    ["5", "-", "X", "M", "X", "X", "E"],
    ["5", "-", "X", "M", "X", "X", "F"],
    ["5", "-", "X", "M", "X", "X", "G"],
    ["5", "-", "X", "M", "X", "X", "H"],
    ["5", "-", "X", "M", "X", "X", "J"],
    ["5", "-", "X", "N", "X", "X", "D"],
    ["5", "-", "X", "N", "X", "X", "E"],
    ["5", "-", "X", "N", "X", "X", "F"],
    ["5", "-", "X", "N", "X", "X", "G"],
    ["5", "-", "X", "N", "X", "X", "H"],
    ["5", "-", "X", "N", "X", "X", "J"],
    ["5", "-", "X", "R", "X", "X", "D"],
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
          <div className="tmavo_modry_obdlznik1" id="tmavo_modry_obdlznik">
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
              <li>Napájacie napätie 230 V AC, 3x400 V AC</li>
              <li>Svorkovnicové pripojenie</li>
              <li>2 momentové spínače</li>
              <li>2 polohové spínače</li>
              <li>2 prídavné polohové spínače</li>
              <li>Mechanické pripojenie - príruba F10 (ISO 5210)</li>
              <li>Vyhrievací odpor</li>
              <li>Tepelný spínač vyhrievacieho odporu</li>
              <li>Miestny ukazovateľ polohy</li>
              <li>Ručné ovládanie</li>
              <li>Stupeň krytia IP 67</li>
            </ul>
          </div>
          <div className="SK-text">
            <h3 className="SK-nadpis">Standard equipment:</h3>
            <ul>
              <li>Voltage 230 V AC, 3x400 V AC</li>
              <li>Terminal board connection</li>
              <li>2 torque switches</li>
              <li>2 position switches</li>
              <li>2 additional position switches</li>
              <li>Mechanical connection - flange F10 (ISO 5210)</li>
              <li>Space heater</li>
              <li>Space heater's thermal switch</li>
              <li>Local position indicator</li>
              <li>Manual control</li>
              <li>Protection code IP 67</li>
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
        <p>5-XZXXJ</p>
        <p>1-18XXH</p>
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
                  <td>{hodnota.vp1}</td>
                  <td>{hodnota.max1}</td>
                  <td>{hodnota.vp2}</td>
                  <td>{hodnota.max2}</td>
                  <td>{hodnota.vp3}</td>
                  <td>{hodnota.max3}</td>
                  <td>{hodnota.rychlost}</td>
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
                  <td>{hodnota.doska}</td>
                  <td>{hodnota.spinac}</td>
                  <td>{hodnota.vysielac}</td>
                  <td>{hodnota.odpor}</td>
                  <td>{hodnota.schema}</td>
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
