import React, { Component } from 'react'
import './Menu.css'
import { FaAddressBook } from 'react-icons/fa';
import $ from 'jquery'


class Menu extends Component {

    constructor(props) {
        super(props);
      }



  

    render() {
        return (

            <nav id="menu">

                <FaAddressBook color='white' id='client' /><a id={this.props.cliente} href="/clientes" >Clientes</a>
                <a id={this.props.produto} href="/produtos">Produtos</a>
                <a href="#">Missão</a>
                <a href="#">Links</a>
                <a href="#">Contato</a>
                <a href="#">Sobre</a>
                
            </nav>
 



        )
    }
}

export default Menu