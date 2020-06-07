import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Telas/Login'
import Home from './Telas/Home'
import Clientes from './Telas/Clientes/Clientes'
import Produtos from './Telas/Produtos/Produtos'
export default function Rotas() {

    return(
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/clientes" exact component={Clientes}/>
        <Route path="/produtos" exact component={Produtos}/>
        </Switch>        
        </BrowserRouter>

    )


}