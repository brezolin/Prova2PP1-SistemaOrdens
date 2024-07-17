const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const ordemRoutes = require('./routes/ordemRoutes');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.use('/api', userRoutes);
app.use('/api', ordemRoutes);

sequelize.sync().then(async () => {
  console.log('Conectado ao banco de dados MySQL!');

  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
}).catch(err => {
  console.error('Erro ao sincronizar com o banco de dados:', err);
});
