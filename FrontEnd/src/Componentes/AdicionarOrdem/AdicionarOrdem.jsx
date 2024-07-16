import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import InputMask from 'react-input-mask';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdicionarOrdem() {
  const initialValues = {
    cliente: '',
    contato: '',
    descricaoDoProblema: '',
    dataAbertura: '',
    status: 'Em aberto',
    tecnicoResponsavel: '',
    descricaoDoServico: '',
    dataFechamento: '',
    ValorTotal: "0.00"
  };

  const validationSchema = Yup.object().shape({
    cliente: Yup.string().required('O nome do Cliente é obrigatório'),
    contato: Yup.string().matches(/^(\(\d{3}\)\s*\d{9})$/, 'O formato do contato deve ser "(DDD)XXXXXXXXX"'),
    descricaoDoProblema: Yup.string(),
    dataAbertura: Yup.date().required('A data de abertura é obrigatória'),
    status: Yup.string().oneOf(['Em aberto', 'Finalizado'], 'O status deve ser "Em aberto" ou "Finalizado"'),
    tecnicoResponsavel: Yup.string(),
    descricaoDoServico: Yup.string(),
    dataFechamento: Yup.date(),
    ValorTotal: Yup.number()
      .typeError('O valor deve ser um número')
      .positive('O valor deve ser positivo'),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    axios
      .post('http://localhost:3001/api/ordem', values)
      .then((response) => {
        const ordemAdicionada = response.data;
        console.log('Ordem adicionada com sucesso:', ordemAdicionada);
        resetForm();

        toast.success('Ordem adicionada com sucesso', {
          position: 'top-right',
          autoClose: 3000,
        });
      })
      .catch((error) => {
        if (error.response) {
          console.error('Erro no servidor:', error.response.data);
        } else if (error.request) {
          console.error('Erro na solicitação:', error.request);
        } else {
          console.error('Erro desconhecido:', error.message);
        }

        toast.error('Erro ao adicionar a Ordem', {
          position: 'top-right',
          autoClose: 3000,
        });
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="container mt-5">
      <h2>Adicionar Ordem de Serviço</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
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
              <Field
                as="textarea"
                id="descricaoDoProblema"
                name="descricaoDoProblema"
                className="form-control"
              />
              <ErrorMessage
                name="descricaoDoProblema"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="tecnicoResponsavel">Técnico Responsável:</label>
              <Field
                type="text"
                id="tecnicoResponsavel"
                name="tecnicoResponsavel"
                className="form-control"
              />
              <ErrorMessage
                name="tecnicoResponsavel"
                component="div"
                className="text-danger"
              />
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
              <button type="submit" className="btn btn-primary">Adicionar Ordem de Serviço</button>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
}

export default AdicionarOrdem;
