import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navegacao from './Componentes/Navegacao/Navegacao';
import NoMatch from './Componentes/NoMatch/NoMatch';
import Login from './Componentes/Login/Login';
import Register from './registro/registro';
import Home from './Componentes/Home/Home';
import ListaDeOrdens from './Componentes/ListaDeOrdens/ListadeOrdens';
import DescricaoOrdem from './Componentes/DescricaoDasOrdem/DescricaoOrdem';
import AdicionarOrdem from './Componentes/AdicionarOrdem/AdicionarOrdem';
import ExcluirOrdem from './Componentes/ExcluirOrdem/ExcluirOrdem';
import AlterarOrdem from './Componentes/AlterarOrdem/AlterarOrdem';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token'); 

  return isAuthenticated ? (
    <Element {...rest} />
  ) : (
    <Navigate to="/login" replace />
  );
};

const App = () => {
  const location = useLocation();

  const hideNavbarRoutes = ['/login', '/register'];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navegacao />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRoute element={Home} />} />
        <Route path="/home" element={<PrivateRoute element={Home} />} />
        <Route path="/listadeordens" element={<PrivateRoute element={ListaDeOrdens} />} />
        <Route path="/descricao/:id" element={<PrivateRoute element={DescricaoOrdem} />} />
        <Route path="/adicionarordem" element={<PrivateRoute element={AdicionarOrdem} />} />
        <Route path="/deletarordem" element={<PrivateRoute element={ExcluirOrdem} />} />
        <Route path="/alterarordem/:id" element={<PrivateRoute element={AlterarOrdem} />} />
        

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default App;
