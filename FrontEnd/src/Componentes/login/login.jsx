import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/login', {
        username,
        password,
      });
      localStorage.setItem('token', response.data.token);
      // Aqui você pode verificar se o usuário precisa ser redirecionado para a página de cadastro
      if (response.data.requiresRegistration) {
        navigate('/register'); // Redireciona para a página de cadastro
      } else {
        navigate('/'); // Redireciona para a página protegida após login bem-sucedido
      }
    } catch (error) {
      setError('Erro no login. Verifique suas credenciais.');
      console.error('Erro no login:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Usuário:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
      <div className="register-link">
        <p>Não tem uma conta? <a href="/register">Registre-se aqui</a></p>
      </div>
    </div>
  );
};

export default Login;
