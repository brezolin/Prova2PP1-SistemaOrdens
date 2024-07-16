import React from "react";
import './home.css'


const Home = () => {
    return (
        <div>
            <div className="Paginainicial">
            Seja Bem Vindo ao Meu Site, valido como avaliação 2 da disciplina PPI1
            </div>
            <ul className="Funcionalidades">
                <label >Front-end:</label>
                <li>Dividir a aplicação em componentes React</li>
                <li>Utilizar estados com React Hooks</li>
                <li>Fazer o gerenciando rotas com React Router (deve ter pelo menos 2 rotas)</li>
                <li>Acessar uma API com o Axios</li>
               </ul>
               <ul className="Criterios">
                <label>Back-end:</label>
                <li>Criar uma API RESTful usando o Node.js e o Express.js</li>
                <li>Fazer a persistência de dados com o MongoDB (podem usar o mongoose)</li>
                <li>Desenvolva o backend em Node com as funcionalidades necessárias para que possa ser integrado com sua aplicação React..</li>
               
            </ul>
        </div>
    );
};
export default Home;


