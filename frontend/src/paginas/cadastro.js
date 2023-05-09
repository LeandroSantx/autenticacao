import React from 'react';
import { Container, Row, Nav, Button, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cadastro(){
    return(
        <div class="container">
        <h1>Formulário de Cadastro</h1>
        <form>
          <div class="form-group">
            <label for="name">Nome:</label>
            <input type="text" id="name" name="name" required/>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>
          </div>
          <div class="form-group">
            <label for="password">Senha:</label>
            <input type="password" id="password" name="password" required/>
          </div>
          <button type="submit" class="submit-btn">Cadastrar</button>
        </form>
      </div>
    )
};
export default Cadastro;