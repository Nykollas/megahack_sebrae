import React, { Component } from 'react';



class SideMenuDashbaord extends Component {
    render = () => {
        return (
            <div style={{
                width: 200,
                height: '100%',
                backgroundColor: '#F1F1F1',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column'
            }}>

                <div style={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    marginBottom: 32,
                }} >
                    <img src={require("../../../../assets/images/professor.svg")}></img>
                    <p style={{
                        fontFamily: 'Sofia',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        color: 'black'
                    }}>Profº Marieta Dias</p>
                    <p style={{ fontFamily: "Dosis", margin: 0 }}>Língua Portuguesa</p>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        paddingTop: 16
                    }}>

                        <div style={{
                            borderRadius: 16,
                            width: 160,
                            height: 40,
                            border: 0,
                            paddingLeft: 12,
                            paddingRight: 12,
                            display: 'flex',
                            flexDirection: 'row',
                            backgroundColor: 'white',
                        }}>
                            <input style={{
                                borderRadius: 16,
                                width: 120,
                                height: 40,
                                border: 0,
                                paddingLeft: 12,
                                paddingRight: 12,
                                backgroundColor: 'white',
                                color: '#C1C1C1', 
                                fontSize: 15,
                            }} type={"text"} placeholder={"SELECIONAR ATIVIDADE"}/>
                            <img src={require("../../../../assets/images/arrow_down.svg")}></img>

                        </div>
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
                        <img src={require("../../../../assets//images/calendar.svg")} />
                        <p style={{ marginLeft: 12, color: '#AFADAD' }}>Disciplinas</p>
                    </div>
                    <div className={"disciplinas"} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'white',
                        borderRadius: 12,
                        padding: 12,
                        cursor: 'pointer',
                        width: 150,
                    }}>
                        <p>Notas</p>
                        <p >Presença</p>
                        <p >Atividade</p>
                        <p >Avaliações</p>
                        <p >Aula ao vivo</p>
                        <p >Aulas Gravadas</p>
                        <p >Grupos</p>
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
                        <img src={require("../../../../assets//images/config.svg")} />
                        <p style={{ marginLeft: 12, color: '#AFADAD' }} >Configurações</p>
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

export default SideMenuDashbaord;
