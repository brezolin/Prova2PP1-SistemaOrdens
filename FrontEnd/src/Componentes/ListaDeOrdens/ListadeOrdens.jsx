import React, { useState, useEffect } from 'react';
import './ListadeOrdens.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ListaDeOrdens() {
  const [ordens, setOrdens] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/api/ordem')
      .then((response) => {
        const data = response.data;
        // Ordenando as ordens por data de abertura (da mais antiga para a mais recente)
        data.sort((a, b) => new Date(a.dataAbertura) - new Date(b.dataAbertura));
        setOrdens(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar ordens de serviço:', error);
        toast.error('Erro ao buscar ordens de serviço');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleDelete = async (idOrdem) => {
    try {
      const response = await axios.delete(`http://localhost:3001/api/ordem/${idOrdem}`);
      if (response.status === 200) {
        toast.success('Ordem excluída com sucesso');
        setOrdens(ordens.filter(ordem => ordem.id !== idOrdem));
      } else {
        console.error('Erro ao excluir a ordem');
        toast.error('Erro ao excluir a ordem');
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
      toast.error('Erro na solicitação');
    }
  };

  const filteredOrders = ordens.filter(ordem =>
    ordem.cliente.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="lista-de-ordem">
      <h2>Ordens de Serviço:</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar por cliente..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      {isLoading ? (
        <p className='loading'>Carregando ordens de serviço...</p>
      ) : (
        <ul className="lista-de-ordens">
          {filteredOrders.map((ordem) => (
            <li key={ordem.id} className="li_Lista">
              <div>
                <Link to={`/descricao/${ordem.id}`} className="titulo-ordem">
                  {new Date(ordem.dataAbertura).toLocaleDateString()} - {ordem.cliente}
                </Link>
                <div className='status'>
                  <span className={ordem.status === 'Finalizado' ? 'finalizado' : 'em-aberto'}>
                    Status: {ordem.status}
                  </span>
                </div>
              </div>
              <div>
                <button type="button" id="btndelete" onClick={() => handleDelete(ordem.id)}>Deletar</button>
                <Link to={`/alterarordem/${ordem.id}`}>
                  <button type="button" id="btnalterar">Alterar</button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
      <ToastContainer />
    </div>
  );
}

export default ListaDeOrdens;
