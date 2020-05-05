import React, { Component } from 'react';



import TextEditor from './TextEditor';
import NovaAtividade from './NovaAtividade';
class Aluno extends Component {
    render = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center' }}>
                <NovaAtividade></NovaAtividade>
                <TextEditor></TextEditor>
            </div>

        )
    }
}

export default Aluno