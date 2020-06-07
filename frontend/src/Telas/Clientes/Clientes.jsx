import React, { Component } from 'react'
import './Clientes.css'
import Topo from '../components/Topo/Topo'
import Menu from '../components/Menu/Menu'

class Clientes extends Component {


  

    render() {
        return (<>
            <Topo/>
            <Menu cliente="clientes"/>
            <div id="cliente">

                <h1>Clientes</h1>
                
            </div>
            <div>
                <input type="text"/>
            </div>

            </>

        )
    }
}

export default Clientes