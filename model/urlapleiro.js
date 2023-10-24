export const urlapLeiro = {
    nev: {
      megjelenes: "Név",
      tipus: "text",
      value: "",
      placeholder: "Valaki vagyok",
      regex: "[A-Z][a-z]{2,15}", //pattern is lehet
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