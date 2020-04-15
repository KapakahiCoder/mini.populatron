const fs = require("fs");
const neatCsv = require("neat-csv");

module.exports = {
  totalPopulation(onFinished) {
    fs.readFile("cities.csv", async (err, data) => {
      const census = await neatCsv(data);
      let population = 0;
      let pop = [];
      for (let country of census) {
        pop.push(country.population);
      }
      for (let i = 0; i < pop.length; i++) {
        population += parseInt(pop[i]);
      }
      onFinished(population);
    });
  },
};
