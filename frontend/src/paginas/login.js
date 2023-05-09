import React from 'react';
import { Container, Row, Nav, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css'
import Cadastro from './cadastro';

function Login(){
  return(
    
    <div class="wrapper fadeInDown">
            <div class="content-login">

             <h2 class="active"> Login </h2>

                <form class="box-login" method="post" action="#">
                    <input type="email" id="email" class="campo" name="email" placeholder="E-mail"/>
                    <input type="text" id="password" class="campo" name="senha" placeholder="Senha"/>
                    <input type="submit" class="botao" value="Entrar"/>
                </form>
                <div class="box-lembrar-senha">  
                  <a class="link" href="./cadastro">Crie uma conta</a>
                </div>
            </div>
            
        </div>
  )
};

export default Login;


