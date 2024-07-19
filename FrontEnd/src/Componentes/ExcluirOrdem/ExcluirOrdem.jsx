import React, { useState } from 'react';
import './ExcluirOrdem.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ExcluirOrdem() {
  const [ordemId, setOrdemId] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleExcluirOrdem = () => {
    if (!ordemId) {
      toast.error('Por favor, insira o ID da ordem de serviço.');
      return;
    }
    setShowConfirmModal(true);
  };

  const handleConfirmExclusao = async () => {
    try {
      const response = await axios.delete(`http://localhost:3001/api/ordem/${ordemId}`);
      if (response.status === 200) {
        toast.success('Ordem de serviço excluída com sucesso');
        setOrdemId('');
      } else {
        toast.error('Erro ao excluir a ordem de serviço');
      }
    } catch (error) {
      toast.error('Erro na solicitação');
      console.error('Erro na solicitação:', error);
    }
    setShowConfirmModal(false);
  };

  const handleCloseModal = () => {
    setShowConfirmModal(false);
  };

  return (
    <div className='PaginaExcluirOrdem'>
      <h2>Excluir Ordem de Serviço</h2>
      <div className="FormularioExcluir">
        <div>
          <label>ID da Ordem de Serviço:</label>
          <input
            type="text"
            value={ordemId}
            onChange={(e) => setOrdemId(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleExcluirOrdem}>Excluir Ordem de Serviço</button>
        </div>
      </div>

      {showConfirmModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Confirmar Exclusão</h3>
            <p>Tem certeza de que deseja excluir a ordem de serviço com o ID {ordemId}?</p>
            <div className="modal-actions">
              <button onClick={handleCloseModal}>Cancelar</button>
              <button onClick={handleConfirmExclusao}>Excluir</button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default ExcluirOrdem;
