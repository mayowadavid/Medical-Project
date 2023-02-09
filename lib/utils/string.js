import { v4 as uuidv4 } from "uuid";

const convertPriceToCommaSeparatedString = (price, fixedDp = 0) => {
  const priceStr = parseFloat(price).toFixed(fixedDp).toString().split(".");
  priceStr[0] = priceStr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return priceStr.join(".");
};

const convertSpacingToHyphen = (str) => {
  return str.replace(/\s/g, "-");
};

const convertToTitleCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
};

const generateAsterisk = (num = 12) => {
  return new Array(num).fill("*").join("");
};

const generateRandomId = () => {
  return uuidv4();
};

export {
  convertPriceToCommaSeparatedString,
  convertSpacingToHyphen,
  convertToTitleCase,
  generateAsterisk,
  generateRandomId,
};
