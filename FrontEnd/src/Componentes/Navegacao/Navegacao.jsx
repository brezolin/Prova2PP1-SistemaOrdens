import { Link, useNavigate } from "react-router-dom";
import './navegacao.css';

const Navegacao = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
            <div className="container">
                
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to="/home" className="navbar-brand text-dark">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/listadeordens" className="nav-link text-dark">Ordens</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/adicionarordem" className="nav-link text-dark">Adicionar Ordem</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/deletarordem" className="nav-link text-dark">Deletar Ordem</Link>
                        </li>
                    </ul>
                </div>
                <button className="btn btn-outline-danger" onClick={handleLogout}>Logoff</button>
            </div>
        </nav>
    );
};

export default Navegacao;
