const express = require("express");
const path = require("path");

const app = express();

// Dossier du build Angular (client)
// Si besoin, adapte "browser" en fonction du contenu réel de dist/assignment-app
const distFolder = path.join(__dirname, "dist", "assignment-app", "browser");

// 1) Fichiers statiques (JS, CSS, assets...)
app.use(express.static(distFolder));

// 2) Catch-all : toutes les routes renvoient index.html, Angular gère le routing
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(distFolder, "index.html"));
});

// 3) Lancer le serveur
const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Frontend is running on port ${port}`);
});
