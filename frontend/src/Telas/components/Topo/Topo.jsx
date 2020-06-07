import React from 'react'
import './Topo.css'
import { FaHome, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'


const data = new Date()

function formataData(data) {
    return data < 10 ? `0` + data : data
}

const dias = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']


export default props => {


    return (
        <>
            <div id="topo">
                <FaHome id="icon" size="40" color="white" />
                <div id="nomeloja">Ps Comercio de Passagens</div>
                <div id="data">{formataData(data.getDate())}/{formataData(data.getMonth() + 1)} </div>
                <div id="dia">{dias[data.getDay()]}</div>
                <div id="bemvindo">Bem Vindo</div>
                <div id="sair" title="SignOut"><Link to="/"><FaSignOutAlt size="40" color="white" /></Link></div>
            </div>
        
         
        </>
    )
}