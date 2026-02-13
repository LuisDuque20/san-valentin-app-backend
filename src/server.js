require('dotenv').config(); 
const app = require('./app');

const PORT = 3000;

app.use(cors({
  origin: "*"
}));


app.listen(PORT, () => {
  console.log(`💌 Servidor corriendo en http://localhost:${PORT}`);
});
