import React, { Component } from 'react';



class Avatar extends Component {

    getAvatar = (name) => {
        if (name.split(" ")[0] == "Alexandre") {
            return require("./alexandre.svg");
        }else if(name.split(" ")[0] == "Ana"){
            return require("./anaclara.svg");
        }else if(name.split(" ")[0] == "Bernardo"){
            return require("./bernardo.svg");
        }else if(name.split(" ")[0] == "Carlos"){
            return require("./carlos.svg");
        }else if(name.split(" ")[0] == "Kelvin"){
            return require("./kelvin.svg");
        }else if(name.split(" ")[0] == "Nicolas"){
            return require("./nicolas.svg");
        }else if(name.split(" ")[0] == "Roberta"){
            return require("./roberta.svg");
        }else if(name.split(" ")[0] == "Stella"){
            return require("./stella.svg");
        }else if(name.split(" ")[0] == "Vitoria"){
            return require("./vitoria.svg");
        }
    }

    render = () => {
        const { name } = this.props;

        return (
            <div  style={{
                display: 'flex',
                flexDirection: 'row',
                height:32,
                width:200,
                borderRadius: 50,
                justifyContent:'center',
                alignItems:'center',
                marginBottom:16,
            }}>
                               <div style={{
                    display: 'flex',
                    flexDirection:'column',
                    left:160,
                    zIndex:4,
                    position:'relative'

                }}>
                    <div style={{height:4,
                                 width:4,
                                 backgroundColor:'#AAAAAA',
                                 borderRadius:100,
                                 marginBottom:3
                                 }}>
                    </div>
                    <div style={{height:4,
                                 width:4,
                                 backgroundColor:'#AAAAAA',
                                 borderRadius:100,
                                 marginBottom:3
                                 }}>
                    </div>
                    <div style={{height:4,
                                 width:4,
                                 backgroundColor:'#AAAAAA',
                                 borderRadius:100
                                 }}>
                    </div>
                </div>
                                <div style={{backgroundColor:'green',
                             zIndex:3,position:'relative',
                             borderRadius:100,
                             height:12, 
                             width:12,
                             right:-12,
                             top:16
                             }}>

                </div>

                    <div style={{ zIndex:1,
                                  backgroundColor: "gray",
                                  borderRadius: 100,
                                  padding: 4,
                                  height:'inherit',
                                  display:'flex',
                                  alignItems:'center',
                                  justifyContent:'center',
                        }}>
                        <img src={this.getAvatar(name)} />
                    </div>

     
                <div 
                    className={"person-card"}
                    style={{
                    paddingTop: 6,
                    paddingBottom: 6,
                    backgroundColor:'green',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    borderRadius: 50,
                    position:'relative',
                    right:'24px',
                    paddingLeft:32,
                    paddingRight:16,
                    height:'inherit',
                    backgroundColor:'#EDEAEA',
                    width:120,
                }}>
                <p style={{ margin: 0, fontSize:12 }}>{name}</p>
                </div>
 
            </div>

        )
    }
}

export default Avatar;