const importFiguras = require('./collectibles');

//console.log(importFiguras(1));

const unifiedCollectibles = [
    ...importFiguras(1),
    ...importFiguras(2),
    ...importFiguras(3),
  ]


//console.log(unifiedCollectibles);


const collectibles = {
  figuras: unifiedCollectibles,

  listFigures: function (array = this.figuras) {
    array.forEach(({marca, nombre, precio, stock}) => {
      console.log(`
      ---------------------------------
        MARCA: ${marca}
        NOMBRE: ${nombre}
        PRECIO: ${precio}
        STOCK: ${stock}
      ----------------------------------
      `)
    });
  },
  figuresByBrand : function(marca) {
    const figurasMarcas = this.figuras.filter((figura) => figura.marca === marca);
    this.listFigures(figurasMarcas)
  },
};



//console.log(collectibles.listFigures())
//collectibles.figuresByBrand('Hot Toys');


