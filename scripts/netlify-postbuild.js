// scripts/netlify-postbuild.js
// Generates index.html for Netlify SPA deployment after the Vite/Nitro build.
// Auto-discovers correct hashed CSS/JS filenames from .output/public/assets/
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", ".output", "public");
const assetsDir = path.join(outDir, "assets");

const files = fs.readdirSync(assetsDir);
const cssFile = files.find((f) => f.startsWith("styles-") && f.endsWith(".css"));
const jsFile = files.find((f) => f.startsWith("index-") && f.endsWith(".js"));

if (!cssFile || !jsFile) {
  console.error("Could not find built assets:", files);
  process.exit(1);
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Tishya Consultancy Pvt. Ltd. - Immigration and education consultancy." />
  <meta property="og:title" content="Tishya Consultancy Pvt. Ltd." />
  <meta property="og:type" content="website" />
  <title>Tishya Consultancy Pvt. Ltd.</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" />
  <link rel="stylesheet" href="/assets/${cssFile}" />
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/assets/${jsFile}"></script>
</body>
</html>`;

fs.writeFileSync(path.join(outDir, "index.html"), html);
console.log("Created index.html with css=" + cssFile + " js=" + jsFile);
