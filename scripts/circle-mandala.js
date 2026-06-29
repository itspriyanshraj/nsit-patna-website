const sharp = require("sharp");
const path = require("path");

const root = path.resolve(__dirname, "..");
const src = path.join(root, "public", "images", "mandala.png");
const dest = path.join(root, "public", "images", "mandala-circle.png");

sharp(src)
  .metadata()
  .then((meta) => {
    const size = Math.max(meta.width, meta.height);
    // Pad to square then make circle
    const svg =
      `<svg width="${size}" height="${size}">` +
      `<defs><clipPath id="c"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}"/></clipPath></defs>` +
      `<rect width="${size}" height="${size}" fill="white" clip-path="url(#c)"/></svg>`;

    sharp(src)
      .resize({ width: size, height: size, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .composite([{ input: Buffer.from(svg), blend: "dest-in" }])
      .png()
      .toFile(dest)
      .then(() => console.log("Done:", dest))
      .catch((e) => console.error(e));
  });
