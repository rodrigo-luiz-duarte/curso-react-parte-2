import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/reset.css';
import './css/login.css';
import './css/timeline.css';
import { Router, Route, browserHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import Login from './componentes/Login';
import Logout from './componentes/Logout';

function verificaAutenticacao(nextState,replace) {
    if(localStorage.getItem('auth-token') === null){
        replace('/?msg=Você precisa estar logado para acessar o endereço');
    }
}

ReactDOM.render(
    (
        <Router history={browserHistory}>
            <Route path="/" component={Login}/>
            <Route path="/timeline" component={App} onEnter={verificaAutenticacao}/>
            <Route path="/logout" component={Logout}/>
        </Router>
    ),
    document.getElementById('root')
);

registerServiceWorker();
