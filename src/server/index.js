const axios = require("axios");
const saveCsv = require("./save-csv");

const consultML = (product) => {
  const verProduto = !!product;
  if (verProduto === false) {
    console.log(`Não há produto: ${verProduto}`);
  } else {
    const consult = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;

    axios
      .get(consult)
      .then((response) => {
        const { results } = response.data;
        const itens = results.map((result, index) => {
          return {
            id: result.id,
            titulo: result.title,
            preco: result.price,
            linkproduto: result.permalink,
            thumby: result.thumbnail,
          };
        });
        const verifyItems = results.length;
        if (verifyItems === 0) {
          console.log("Não há resultado na consulta!");
        } else {
          //   console.log(itens);
          saveCsv(itens, product);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
};

module.exports = consultML;
