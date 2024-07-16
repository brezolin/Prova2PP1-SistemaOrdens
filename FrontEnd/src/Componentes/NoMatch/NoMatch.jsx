import React from 'react';
import './NoMatch.css';
function NoMatch() {
  
  return (
    <div className='error404'>
      <label className='label404'>404</label>
      <h1>Página não encontrada</h1>
      <p>Desculpe, a página que você está procurando não existe.</p>
    </div>
  );
}

export default NoMatch;