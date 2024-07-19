import React, { useState, useEffect } from 'react';
import './AlterarOrdem.css'; 
import axios from 'axios';
import InputMask from 'react-input-mask';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function AlterarOrdem() {
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/ordem/${id}`);
        const { dataAbertura, dataFechamento, ...rest } = response.data;
  
        
        const initialValues = {
          ...rest,
          dataAbertura: dataAbertura ? dataAbertura.slice(0, 16) : '', 
          dataFechamento: dataFechamento ? dataFechamento.slice(0, 16) : '', 
        };
  
        setInitialValues(initialValues);
      } catch (error) {
        console.error('Erro ao buscar informações da ordem:', error);
      }
    };
  
    fetchOrder();
  }, [id]);

  const validationSchema = Yup.object().shape({
    cliente: Yup.string().required('O nome do Cliente é obrigatório'),
    contato: Yup.string().matches(
      /^(\(\d{3}\)\s*\d{9})?$/,
      'O formato do contato deve ser "(DDD) XXXXX-XXXX"'
    ),
    descricaoDoProblema: Yup.string(),
    dataAbertura: Yup.date().required('A data de abertura é obrigatória'),
    status: Yup.string()
      .required('O status é obrigatório')
      .oneOf(['Em aberto', 'Finalizado'], 'O status deve ser "Em aberto" ou "Finalizado"'),
    tecnicoResponsavel: Yup.string(),
    descricaoDoServico: Yup.string(),
    dataFechamento: Yup.date().nullable(),
    ValorTotal: Yup.number().nullable().positive('O valor total deve ser um número positivo'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      if (!values.dataFechamento) {
        delete values.dataFechamento;
      }
      
      const response = await axios.put(`http://localhost:3001/api/ordem/${id}`, values);
      toast.success('Ordem alterada com sucesso', {
        position: 'top-right',
        autoClose: 1500,
      });
      setTimeout(() => {
        window.location.href = '/Listadeordens'; 
      }, 1000);
    } catch (error) {
      console.error('Erro ao alterar a ordem:', error);
      toast.error('Erro ao alterar a ordem', {
        position: 'top-right',
        autoClose: 1500,
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (!initialValues) {
    return <div>Carregando...</div>;
  }

  return (
    <div className='container mt-5'>
      <h2>Alterar Ordem de Serviço</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="mt-4">
            <div className="form-group">
              <label htmlFor="cliente">Cliente:</label>
              <Field type="text" id="cliente" name="cliente" className="form-control" />
              <ErrorMessage name="cliente" component="div" className="text-danger" />
            </div>

            <div className="form-group">
              <label htmlFor="contato">Contato:</label>
              <Field name="contato">
                {({ field }) => (
                  <InputMask
                    {...field}
                    mask="(099)999999999"
                    placeholder="(DDD) 12345-6789"
                    className="form-control"
                  />
                )}
              </Field>
              <ErrorMessage name="contato" component="div" className="text-danger" />
            </div>

            <div className="form-group">
              <label htmlFor="descricaoDoProblema">Descrição do Problema:</label>
              <Field as="textarea" id="descricaoDoProblema" name="descricaoDoProblema" className="form-control" />
              <ErrorMessage name="descricaoDoProblema" component="div" className="text-danger" />
            </div>

            <div className="form-group">
              <label htmlFor="tecnicoResponsavel">Técnico Responsável:</label>
              <Field type="text" id="tecnicoResponsavel" name="tecnicoResponsavel" className="form-control" />
              <ErrorMessage name="tecnicoResponsavel" component="div" className="text-danger" />
            </div>

            <div className="form-group">
              <label htmlFor="ValorTotal">Valor Total:</label>
              <Field type="number" id="ValorTotal" name="ValorTotal" className="form-control" />
              <ErrorMessage name="ValorTotal" component="div" className="text-danger" />
            </div>

            <div className="form-group">
              <label htmlFor="descricaoDoServico">Descrição do Serviço:</label>
              <Field as="textarea" id="descricaoDoServico" name="descricaoDoServico" className="form-control" />
              <ErrorMessage name="descricaoDoServico" component="div" className="text-danger" />
            </div>

            <div className="form-group">
              <label htmlFor="dataAbertura">Data de Abertura:</label>
              <Field type="datetime-local" id="dataAbertura" name="dataAbertura" className="form-control" />
              <ErrorMessage name="dataAbertura" component="div" className="text-danger" />
            </div>

            <div className="form-group">
              <label htmlFor="dataFechamento">Data de Fechamento:</label>
              <Field type="datetime-local" id="dataFechamento" name="dataFechamento" className="form-control" />
              <ErrorMessage name="dataFechamento" component="div" className="text-danger" />
            </div>

            <div className="form-group">
              <label htmlFor="status">Status:</label>
              <Field as="select" id="status" name="status" className="form-control">
                <option value="Em aberto">Em aberto</option>
                <option value="Finalizado">Finalizado</option>
              </Field>
              <ErrorMessage name="status" component="div" className="text-danger" />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                Adicionar Ordem de Serviço
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
}

export default AlterarOrdem;
