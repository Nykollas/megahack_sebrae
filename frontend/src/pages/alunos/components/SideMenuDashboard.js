import React, { Component } from 'react';
import { withRouter } from 'react-router';


class SideMenuDashbaord extends Component {

    goToAtividade = () => {
        const path = window.location.path;
        if(path ){
            console.log(path)
            this.props.history.replace(path, "/atividade")
        }else{
            this.props.history.push("/atividade")
        }
    }

    goToAluno = () => {
        const path = window.location.path;
        if(path ){
            console.log(path)
            this.props.history.replace(path, "/aluno")
        }else{
            this.props.history.push("/aluno")
        }
    }


    render = () => {
        return (
            <div style={{
                width: 200,
                height: '100%',
                backgroundColor: '#F1F1F1',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection:'column'
            }}>

                <div style={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    marginBottom: 32,
                    cursor:'pointer'
                }} 
                onClick={this.goToAluno}
                >
                    <img src={require("../../../assets/images/aluno.svg")}></img>
                    <p style={{
                        fontFamily: 'Sofia',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        color: 'black'
                    }}>Aline Machado</p>
                    <p style={{ fontFamily: "Dosis", margin: 0 }}>9º Ano,  Turma C</p>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                    }}>
                        <img style={{ margin: 6, display: 'flex', flex: 1 }} src={require("../../../assets/images/star.svg")}></img>
                        <img style={{ margin: 6, display: 'flex', flex: 1 }} src={require("../../../assets/images/star.svg")}></img>
                        <img style={{ margin: 6, display: 'flex', flex: 1 }} src={require("../../../assets/images/star.svg")}></img>
                        <img style={{ margin: 6, display: 'flex', flex: 1 }} src={require("../../../assets/images/star.svg")}></img>
                        <img style={{ margin: 6, display: 'flex', flex: 1 }} src={require("../../../assets/images/star.svg")}></img>
                    </div>
                </div>
                <div style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div style={{
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'row'
                    }}>
                        <img src={require("../../../assets//images/calendar.svg")}/>
                        <p style={{ marginLeft:12,color:'#AFADAD'}}>Disciplinas</p>
                    </div>
                    <div className={"disciplinas"} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'white',
                        borderRadius: 12,
                        padding: 12,
                        cursor: 'pointer'
                    }}>
                        <p>Artes</p>
                        <p >Biologia</p>
                        <p >Educação Física</p>
                        <p >Física</p>
                        <p >Filosofia</p>
                        <p >História</p>
                        <p >Geografia</p>
                        <p >Inglês</p>
                        <p onClick={this.goToAtividade}>Língua Portuguesa</p>
                        <p >Matemática</p>
                        <p >Química</p>
                    </div>
                </div>
                <div style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',

                }}>
                    <div style={{
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'row',
                    

                    }}>
                        <img src={require("../../../assets//images/config.svg")}/>
                        <p style={{marginLeft:12, color:'#AFADAD'}} >Configurações</p>
                    </div>
                    <div className={"disciplinas"} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'white',
                        borderRadius: 12,
                        padding: 12,
                        cursor: 'pointer',
                        width: 150,
                        marginBottom: 12,
                    }}>
                        <p>Meu Perfil</p>
                        <p >Preferências</p>
                        <p >Sair</p>
                    </div>
                </div>

            </div >


        )
    }
}

export default withRouter(SideMenuDashbaord);
