// middleware/auth.js
const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  // Obtém o token do cabeçalho Authorization
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  // Verifica o token JWT
  jwt.verify(token, 'seu_segredo_jwt', (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Falha na autenticação do token' });
    }
    req.user = decoded; // Decodifica e adiciona o payload do token à requisição
    next(); // Continua para a próxima middleware ou rota
  });
}

module.exports = authMiddleware;
