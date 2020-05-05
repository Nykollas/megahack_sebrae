import React, { Component } from 'react';

import Professora from './Professora';
import Score from './Score';
import Atividade from './Atividade';
import Avaliacao from './Avaliacao';
import RecordedClasses from './RecordedClasses';
import Desempenho from './Desempenho';
import Material from './Material';
class Aluno extends Component {
    render = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', padding:12}}>
                <div style={{ display: 'flex', flexDirection: 'row',  marginBottom:24,justifyContent:'space-around'}}>
                    <Professora></Professora>
                    <Score></Score>
                </div>
                <div style={{ display: 'flex', justifyContent:'space-around' }}>
                    <Atividade></Atividade>
                    <Avaliacao></Avaliacao>
                </div>
                <div style={{ display: 'flex',flexDirection:'column', paddingTop:12, paddingBottom:12 }}>
                    <RecordedClasses></RecordedClasses>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', marginTop:12}}> 
                        <Desempenho></Desempenho>
                        <Material></Material>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Aluno