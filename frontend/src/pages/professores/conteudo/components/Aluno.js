import React, { Component } from 'react';
import BancoVideos from './BancoVideos';
import Videos from './Videos';

class Aluno extends Component {
    render = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center' }}>
                <BancoVideos></BancoVideos>
                <Videos></Videos>
            </div>
        )
    }
}

export default Aluno