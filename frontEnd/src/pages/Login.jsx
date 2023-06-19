import React from "react";

import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="container">
      <div className="formWrapper ">
        <span className="logo">Chat</span>
        <span className="title">Login</span>

        <form action="">
          <label htmlFor="">E-mail:</label>
          <input type="email" placeholder="Digite seu email" />
          <label htmlFor="">Senha:</label>
          <input type="password" placeholder="Difite sua senha" />

          {/* foto */}

          <button className="registrar" type="submit">
            Login
          </button>
        </form>
        <p>
          Não possui conta?
          <Link to="/cadastro"> Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
