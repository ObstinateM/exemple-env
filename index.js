const dotenv = require('dotenv'); // Import la lib de variable d'environnement
dotenv.config(); // Charge les valeurs du fichier .env (à la racine)
// Version compacte
// require('dotenv').config();

console.log(`Bonjour ${process.env.NOM} ${process.env.PRENOM} !`);
