const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const Order = require('./models/order'); // Certifique-se de usar o nome correto do modelo
const userRoutes = require('./routes/userRoutes'); // Verifique o caminho correto

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

// Rotas de autenticação
app.use('/api', userRoutes);

// Sincronizar com o banco de dados
sequelize.sync({ force: true }).then(async () => {
  console.log('Conectado ao banco de dados MySQL!');

  // Inicialização dos dados ao iniciar a API
  try {
  
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar a API:', error);
  }
}).catch(err => {
  console.error('Erro ao sincronizar com o banco de dados:', err);
});
