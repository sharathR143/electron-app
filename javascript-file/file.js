const fs = require("fs");
const path = require("path");

const XLSX = require("xlsx");

const directoryPath = path.join(
  __dirname,
  "..",
  "xlData",
  "O24-A0_PQE_HDR_reg_man.xlsx"
);
// path.join(directoryPath, file);
const workbook = XLSX.readFile(directoryPath);
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

const headers = jsonData[0];
console.log("Headers:", headers);
jsonData.shift();
console.log(jsonData);
