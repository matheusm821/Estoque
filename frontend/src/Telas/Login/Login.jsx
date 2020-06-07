import React, { Component } from 'react'
import './Login.css'
import Topo from '../components/Topo/Topo'
import { Link } from 'react-router-dom'


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            senha: ''

        }
    }

 



    render() {
        return (
            <>
                <Topo/>
                <div id="body">

                    <div id="login" >
                        <p><label>Usuario:</label>  <input value={this.state.login} onChange={e => {this.setState({ login: e.target.value
                            })
                        }} type="text" placeholder="Seu Usuário " /></p>
                        <p> <label>Senha:</label>  <input value={this.state.senha} onChange={e => {this.setState({ senha: e.target.value
                            })
                        }} type="text" placeholder="Sua Senha" /></p>
                        <p></p>

                        <Link to="/home"> <button id="button">Entrar</button></Link>

                    </div>

                </div>
            </>
        )
    }
}

export default Login