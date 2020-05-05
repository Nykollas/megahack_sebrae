import React, { Component } from 'react';

class Avatar extends Component {

    getAvatar = (name) => {
        if (name.split(" ")[0] == "Maria") {
            return require("./maria.svg");
        } else if (name.split(" ")[0] == "Gilberto") {
            return require("./gilberto.svg");
        } 
    }

    render = () => {
        const { name } = this.props;

        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                height: 32,
                width: 200,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 16,
            }}>
                <div style={{
                    backgroundColor: 'green',
                    zIndex: 3, position: 'relative',
                    borderRadius: 100,
                    height: 12,
                    width: 12,
                    right: -12,
                    top: 16
                }}>

                </div>

                <div style={{
                    zIndex: 1,
                    backgroundColor: "gray",
                    borderRadius: 100,
                    padding: 4,
                    height: 'inherit',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <img src={this.getAvatar(name)} />
                </div>


                <div
                    className={"person-card"} 
                    style={{
                    paddingTop: 6,
                    paddingBottom: 6,
                    backgroundColor: 'green',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    borderRadius: 50,
                    position: 'relative',
                    right: '24px',
                    paddingLeft: 32,
                    paddingRight: 16,
                    height: 'inherit',
                    backgroundColor: '#EDEAEA',
                    width: 120,
                }}>
                    <p style={{ margin: 0, fontSize: 12 }}>{name}</p>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection:'column',
                    right:42,
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
            </div>

        )
    }
}

export default Avatar;