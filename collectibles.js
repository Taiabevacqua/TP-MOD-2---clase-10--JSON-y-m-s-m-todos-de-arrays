const fs = require('fs');

const importFiguras = (figuras) => {
      return JSON.parse(fs.readFileSync(`./datos/figuras${figuras}.json`,'utf-8'));
};


module.exports = importFiguras



