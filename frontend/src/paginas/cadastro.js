import React, { useState } from 'react';
import { Container, Row, Nav, Button, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles.css'; // importe o arquivo CSS
import usuarioService from '../services/serviceUsuario';

function Cadastro() {
  const [formData, setFormData] = useState({
    email: '',
    nome: '',
    senha: '',
    nrsec: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const teste = formData.nrsec = '123';

      await usuarioService.postUsuario(formData, teste);

      alert('inserido!');

      setFormData({ // definir o estado inicial do formData
        email: '',
        nome: '',
        senha: '',
        nrsec: ''
      });

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="login">
      <div className="card">
        <div className="card-header">
          <h1>Cadastre-se</h1>
        </div>
        <div className="card-content">
          <form onSubmit={handleSubmit}>
            <div className="card-content-area">
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
            </div>
            <div className="card-content-area">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="card-content-area">
              <label htmlFor="senha">Senha:</label>
              <input type="password" id="senha" name="senha" value={formData.senha} onChange={handleChange} required />
            </div>
            <div className="card-footer">
              <button type="submit" className="submit">Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
