const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const Order = require('./models/ordem');
const ordensRoutes = require('./routes/ordem.js');
const adicionarOrdensIniciais = require('./ListaDeOrdens/iniciaOrdem.js');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

// Rotas de autenticação
app.use('/api', userRoutes);

// Sincronizar com o banco de dados
sequelize.sync({ force: true }).then(async () => {
  console.log('Estamos conectados no banco de dados MySQL!');

  // Inicialização dos dados ao iniciar a API
  try {
    const ordensIniciais = adicionarOrdensIniciais(); // Chame a função corretamente

    // Adiciona as ordens iniciais à base de dados
    await Order.bulkCreate(ordensIniciais);

    // Rotas da API
    app.use('/api/ordem', ordensRoutes);

    // Inicia o servidor
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar a API:', error);
  }
}).catch(err => {
  console.error('Erro ao sincronizar com o banco de dados:', err);
});
