import React, { Component } from 'react';



class Atividade extends Component {
    render = () => {
        return (
            <div style={{ display: 'flex', flex: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'row', marginBottom:6 }}>
                    <div style={{ display: 'flex',
                                  flexDirection: 'column',
                                  flex: 1,
                                  border:'1px solid #E1E1E1'}}>
                        <div style={{ 
                                      display: 'flex',
                                      flexDirection: 'row',
                                      borderBottom:"1px solid #E1E1E1",
                                      marginRight:12, 
                                      marginLeft:12 }}>
                            <img style={{paddingRight:6}} src={require("../../../../assets/images/sino.svg")} />
                            <p style={{fontSize:14, margin:6}}> Sujeito composto simples </p>
                        </div>
                        <div style={{ display: 'flex',
                                      flexDirection: 'row',
                                      marginRight:12, 
                                      marginLeft:12 ,
                                      justifyContent:'space-around'
                                       }}>
                            <div style={{ display: 'flex',
                                         flexDirection: 'row',
                                         justifyContent:'space-around',
                                         display: 'flex',
                                         flexDirection: 'row',
                                         paddingRight:6
                                        }}>
                                             
                                <img  style={{paddingRight:6}} src={require("../../../../assets/images/clock.svg")} />
                                <p style={{fontSize:12, margin:6}}> 15 min </p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', paddingRight:6 }}>
                                <img   style={{paddingRight:6}} src={require("../../../../assets/images/clock.svg")} />
                                <p style={{fontSize:12, margin:6}}> Individual </p>
                            </div>
                            <div style={{ display: 'flex',
                                          flexDirection: 'row',
                                          justifyContent:'space-around',
                                          
                                           }}>
                                <img style={{paddingRight:6}}src={require("../../../../assets/images/clock.svg")} />
                                <p style={{fontSize:12, margin:6}}> até 08/05</p>
                            </div>
                        </div>
                    </div>
    
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                    </div>
                </div>
            </div>
        )
    }
}

export default Atividade;
