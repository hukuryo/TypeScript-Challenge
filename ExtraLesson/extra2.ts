type Country = {
    name: string;
    capitalCity: string;
  };
   
  type Continent = {
    readonly name: string;
    readonly canada: Country;
    readonly us: Country;
    readonly mexico: Country;
  };
   
  const america: Continent = {
    name: "North American Continent",
    canada: {
      name: "Republic of Canada",
      capitalCity: "Ottawa",
    },
    us: {
      name: "United States of America",
      capitalCity: "Washington, D.C.",
    },
    mexico: {
      name: "United Mexican States",
      capitalCity: "Mexico City",
    },
  };


america.name = "African Continent";
america.canada = {
  name: "Republic of Côte d'Ivoire",
  capitalCity: "Yamoussoukro",
};

america.canada.name = "Republic of Côte d'Ivoire";
america.canada.capitalCity = "Yamoussoukro";