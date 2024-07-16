import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './DescricaoOrdem.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DescricaoOrdem() {
  const { id } = useParams();
  const [ordem, setOrdem] = useState({});

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3001/api/ordem/${id}`);
      if (response.status === 200) {
        toast.success('Ordem excluída com sucesso');
        setTimeout(() => {
          window.location.href = '/Listadeordens';
        }, 1000);
      } else {
        toast.error('Erro ao excluir a ordem');
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
      toast.error('Erro na solicitação');
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:3001/api/ordem/${id}`)
      .then((response) => {
        setOrdem(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar informações da ordem:', error);
        toast.error('Erro ao buscar informações da ordem');
      });
  }, [id]);

  return (
    <>
      <div className='DescricaoOrdem'>
        <h2>Informações da Ordem de Serviço</h2>
        <h3>Cliente: {ordem.cliente}</h3>
        <p>Contato: {ordem.contato || 'N/A'}</p>
        <p>Descrição do Problema: {ordem.descricaoDoProblema || 'N/A'}</p>
        <p>Data de Abertura: {new Date(ordem.dataAbertura).toLocaleString()}</p>
        <p>Status: {ordem.status}</p>
        <p>Técnico Responsável: {ordem.tecnicoResponsavel || 'N/A'}</p>
        <p>Descrição do Serviço: {ordem.descricaoDoServico || 'N/A'}</p>
        <p>Data de Fechamento: {ordem.dataFechamento ? new Date(ordem.dataFechamento).toLocaleString() : 'N/A'}</p>
        <p>Valor Total: {ordem.ValorTotal}</p>

        <div>
          <button type="button" id="btndelete" onClick={handleDelete}>Deletar</button>
          <Link to={`/alterarordem/${ordem.id}`}>
            <button type="button" id="btnalterar">Alterar</button>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default DescricaoOrdem;
