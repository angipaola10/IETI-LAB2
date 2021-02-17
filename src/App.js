import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import TodoApp from './components/TodoApp';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function App() {

    localStorage.setItem("userEmail", "lab2@mail.com");
    localStorage.setItem("userPassword", "ieti2021");

    useEffect(function(){
        let currentPath = window.location.pathname;
        let nextPath = validate(currentPath)
        if (currentPath !== nextPath){
            window.location.href = nextPath;
        }
    },[]);

    const LoginView = () => (
        <Login />
    );

    const TodoAppView = () => (
        <TodoApp />
    );

    const validate = () => {
        if (localStorage.getItem("loggingStaus") === "logged") return "/todo";
        return "/";
    }

    const signOut = () => {
        localStorage.setItem("loggingStaus","notLogged");
        window.location.href = "/";
    }

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">TODO React App</h1>
                </header>
                <ul id="pages" >
                    <li><Link to={validate("/")} style={{textDecoration:"none"}}><Button color="primary">Login</Button></Link></li>
                    <li><Link to={validate("/todo")} style={{textDecoration:"none"}}><Button color="primary">Todo</Button></Link></li>
                    {
                        localStorage.getItem("loggingStaus") === "logged"
                        &&
                        <li><Button color="secondary" onClick={signOut}>Sign Out </Button></li>
                    }
                </ul>
                <div>
                    <Route exact path="/" component={LoginView} />
                    <Route path="/todo" component={TodoAppView} />
                </div>
            </div>
        </Router>
    );

}