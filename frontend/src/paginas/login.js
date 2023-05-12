import React, { useState } from 'react';
import axios from 'axios';
//import { Container, Row, Nav, Button, Col } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import './styles.css'
import usuarioService from '../services/serviceUsuario';

function Login(){
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
     
    usuarioService.loginUsuario(email, senha)
    .then(response => {
      if(response.status === 200 || response.status === 201) {
        alert('Bem-vindo!');
        setEmail('');
        setSenha('');
        setErro(false);
      }else{
        setErro(true);
      }
    })
    .catch(error => {
      console.log(error);
      setErro(true);
    })
  }
  
  return(
    <div className="wrapper fadeInDown">
      <div className="content-login">
        <h2 className="active"> Login </h2>
        <form className="box-login" onSubmit={handleSubmit}>
          <input type="email" id="email" className="campo" name="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required/>
          <input type="password" id="password" className="campo" name="senha" placeholder="Senha"  value={senha} onChange={e => setSenha(e.target.value)} required />
          {erro && <p className="erro">Email ou senha inválidos!</p>}
          <input type="submit" className="botao" value="Entrar"/>         
        </form>
        <div className="box-lembrar-senha">  
          <a className="link" href="./cadastro">Crie uma conta</a>
        </div>
      </div>
    </div>
  )
};

export default Login;


