import React from "react";
import Add from "../img/addAvatar.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container">
      <div className="formWrapper ">
        <span className="logo">Chat</span>
        <span className="title">Cadastro</span>

        <form action="">
          <label htmlFor="">Nome Completo:</label>
          <input type="text" placeholder="Digite seu nome" />
          <label htmlFor="">E-mail:</label>
          <input type="email" placeholder="Digite seu email" />
          <label htmlFor="">Senha:</label>
          <input type="password" placeholder="Difite sua senha" />

          {/* foto */}

          <input style={{ display: "none" }} type="file" id="file" />

          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Adicione um avatar</span>
          </label>

          <button className="registrar" type="submit">
            Cadastrar
          </button>
        </form>
        <p>
          Já possui conta?
          <Link to="/"> Fazer login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
