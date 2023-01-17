const ObjectsToCsv = require("objects-to-csv");
const { app, shell } = require("electron");
const fs = require("fs");

// const dir = __dirname + "/Reports-MercadoLivre";
const dir = app.getPath("documents") + `\ReportsMercadoLivre`;
const timestamp = new Date().getTime();

const saveCsv = async (data, prd) => {
  const productName = prd.replace(" ", "");
  const csv = new ObjectsToCsv(data);
  const fileCsv = `${dir}/Relatorio-${productName}-${timestamp}.csv`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  await csv.toDisk(fileCsv);
  setTimeout(() => {
    // console.log(`Relatorio em: ${dir}`);
    shell.openPath(dir);
  }, 300);
};

module.exports = saveCsv;
