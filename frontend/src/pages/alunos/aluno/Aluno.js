import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import "./style.css";
import Header from '../../../components/Header';
import Hamburguer from '../../../assets/images/hamburguer';


import SideMenuDashboard from '../components/SideMenuDashboard';

import Events from '../components/Events';
import Students from '../components/Students';

import Aluno from './components/Aluno';


class AlunoPage extends Component {

    openTurma = () => {
        const { history } = this.props;
        history.push("/turma");
    }
    render = () => {
        return (
            <>
                <Header drawer={true} icon={<Hamburguer />} title={"Aluno"}></Header>
                
                <div style={{display:"flex", flexDirection:'row'}}>
                    <div >
                        <SideMenuDashboard></SideMenuDashboard>
                    </div>
                    <div style={{display:"flex", flexDirection:'row', flex:1}}>
                            <div style={{display:'flex', flex:1, paddingTop:32, flexDirection:'column'}}>
                                <Aluno></Aluno>
                            </div>
                            <Events></Events>
                            <Students></Students>
                    </div>
                </div>

            </>
        )
    }

}

export default withRouter(AlunoPage);