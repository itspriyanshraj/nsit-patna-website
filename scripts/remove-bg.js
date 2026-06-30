/* eslint-disable @typescript-eslint/no-require-imports */
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const root = path.resolve(__dirname, "..");
const src = path.join(root, "public", "images", "mandala-circle.png");
const tmp = path.join(root, "public", "images", "mandala-circle-tmp.png");

sharp(src)
  .raw()
  .toBuffer()
  .then((data) => {
    const out = Buffer.alloc(data.length);
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
      if (a === 0) continue;
      const avg = (r + g + b) / 3;
      if (avg > 200) {
        out[i] = r;
        out[i + 1] = g;
        out[i + 2] = b;
        out[i + 3] = Math.round(((255 - avg) / 55) * 255);
      } else {
        out[i] = r;
        out[i + 1] = g;
        out[i + 2] = b;
        out[i + 3] = 255;
      }
    }
    return sharp(out, {
      raw: { width: 1653, height: 1653, channels: 4 },
    }).png().toFile(tmp);
  })
  .then(() => {
    fs.unlinkSync(src);
    fs.renameSync(tmp, src);
    console.log("Done: bg removed");
  })
  .catch((e) => console.error(e));
