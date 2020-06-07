import React, { Component } from 'react'
import './Produtos.css'
import Topo from '../components/Topo/Topo'
import Menu from '../components/Menu/Menu'

class Produtos extends Component {


  

    render() {
        return (<>
            <Topo/>
            <Menu produto="produtos"/>
            <nav id="menu">

                <h1>Produtos</h1>
                
            </nav>
 

            </>

        )
    }
}

export default Produtos