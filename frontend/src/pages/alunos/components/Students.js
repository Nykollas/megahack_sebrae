import React, { Component } from 'react';
import Assistant from './Assistant';
import Avatar from '../../../assets/images/students/Avatar';
import Professor from '../../../assets/images/teachers/Avatar';
import Coordernador from '../../../assets/images/coordinator/Avatar';
class Students extends Component {
    render = () => {
        return (
            <div style={{
                backgroundColor: '#F1F1F1', display: 'flex',
                justifyContent: 'center', flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingTop: 12,
                width: 240,
            }}>
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: 30,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    paddingLeft: 6,
                    paddingRight: 6,
                    paddingTop: 20,
                    paddingBottom: 20,
                    boxShadow: '1px 1px 1px 1px #E0E0E0',
                    marginBottom: 16
                }}>
                    <p style={{
                        fontSize: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 0,
                        marginBottom: 12,
                        display: 'flex'
                    }}>
                        alunos
                        </p>
                    <Avatar name={"Alexandre Silva"}></Avatar>
                    <Avatar name={"Bernardo Silva"}></Avatar>
                    <Avatar name={"Carlos Escobar"}></Avatar>
                    <Avatar name={"Ana Clara"}></Avatar>
                    <Avatar name={"Stella Christina"}></Avatar>
                    <Avatar name={"Nicolas Araujo"}></Avatar>
                    <Avatar name={"Roberta Diniz"}></Avatar>
                    <Avatar name={"Vitoria Maria"}></Avatar>
                    <Avatar name={"Kelvin Diego"}></Avatar>
                </div>
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: 30,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    paddingLeft: 6,
                    paddingRight: 6,
                    paddingTop: 20,
                    paddingBottom: 20,
                    boxShadow: '1px 1px 1px 1px #E0E0E0',
                    marginBottom: 16,
                }}>
                    <p style={{
                        fontSize: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 0,
                        marginBottom: 12,
                        display: 'flex'
                    }}>
                        professores
                                    </p>
                    <Professor name={"Ana Maria"}></Professor>
                    <Professor name={"Antonio Lisboa"}></Professor>
                    <Professor name={"Marieta Dias"}></Professor>
                    <Professor name={"Ronaldo Souza"}></Professor>

                </div>
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: 30,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    paddingLeft: 6,
                    paddingRight: 6,
                    paddingTop: 20,
                    paddingBottom: 20,
                    boxShadow: '1px 1px 1px 1px #E0E0E0',
                    marginBottom: 16,
                }}>
                    <p style={{
                        fontSize: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 0,
                        marginBottom: 12,
                        display: 'flex'
                    }}>
                        coordenadores
                                    </p>
                    <Coordernador name={"Maria Rita"}></Coordernador>
                    <Coordernador name={"Gilberto Silva"}></Coordernador>


                </div>
                <Assistant></Assistant>

            </div>

        )
    }
}

export default Students;