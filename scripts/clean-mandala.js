/* eslint-disable @typescript-eslint/no-require-imports */
const sharp = require("sharp");
const path = require("path");

const root = path.resolve(__dirname, "..");
const src = path.join(root, "public", "images", "mandala.png");
const dest = path.join(root, "public", "images", "mandala-clean.png");

sharp(src)
  .ensureAlpha()
  .raw()
  .toBuffer()
  .then((data) => {
    const out = Buffer.alloc(data.length);
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i], g = data[i + 1], b = data[i + 2];
      out[i] = r;
      out[i + 1] = g;
      out[i + 2] = b;
      // White/near-white pixels become transparent
      const isWhite = r > 230 && g > 230 && b > 230;
      out[i + 3] = isWhite ? 0 : 255;
    }
    return sharp(out, {
      raw: { width: 1653, height: 952, channels: 4 },
    }).png().toFile(dest);
  })
  .then(() => console.log("Done:", dest))
  .catch((e) => console.error(e));
