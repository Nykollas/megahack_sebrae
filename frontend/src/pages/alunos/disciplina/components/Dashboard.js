import React, { Component } from 'react';

import ProximasTarefas from './ProximasTarefas';
import ProgressoPerfil from './ProgressoPerfil';
import ProgressoAvaliacao from './ProgressoAvaliacao';
import Calendar from './Calendar'

class Aluno extends Component {
    render = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', padding: 12 }}>
                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 24, justifyContent: 'space-around' }}>
                    <ProximasTarefas></ProximasTarefas>
                    <ProgressoPerfil></ProgressoPerfil>

                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <ProgressoAvaliacao></ProgressoAvaliacao>
                    <Calendar></Calendar>
                    
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', padding: 12 }}>

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 12 }}>


                    </div>

                </div>
            </div>
        )
    }
}

export default Aluno