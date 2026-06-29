const sharp = require("sharp");
const path = require("path");

const root = path.resolve(__dirname, "..");
const svgPath = path.join(root, "public", "images", "payment-illustration.svg");
const pngPath = path.join(root, "public", "images", "payment-illustration.png");

sharp(svgPath)
  .resize(600)
  .png()
  .toFile(pngPath)
  .then(() => console.log("Converted:", pngPath))
  .catch((err) => console.error("Error:", err));
