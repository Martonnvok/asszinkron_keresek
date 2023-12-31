export const urlapLeiro = {
  vnev: {
    megjelenes: "Vezetéknév",
    tipus: "text",
    value: "",
    placeholder: "vezetéknév",
    regex: "[A-Z][a-z]{2,15}", 
    validalas: "Név nagybetűvel kezdődik, legalább 3 karakter!"
  },
  knev: {
    megjelenes: "Keresztnév",
    tipus: "text",
    value: "",
    placeholder: "keresztnév",
    regex: "[A-Z][a-z]{2,15}", 
    validalas: "Név nagybetűvel kezdődik, legalább 3 karakter!"
  },
  szulEv: {
    megjelenes: "Születési év",
    tipus: "number",
    value: "2000",
    regex: {
      min: 1900,
      max: 2023,
    },
    validalas: "1000 és 2023 között kell legyen a szám!"
  },
};