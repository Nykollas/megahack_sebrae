import React, { Component } from 'react';
import EyeIcon from '../../../assets/images/eye_black';
import { withRouter } from 'react-router';


import TeacherContainer from './TeacherContainer';
class Events extends Component {


    goToConf = () => {
        const path = window.location.pathname.split("/")[0];
        if(path){
            console.log(path)
            //this.props.history.replace(path, "/room/aluno");
            const url = "https://megahacksebrae.herokuapp.com/"
            window.open(url);
        }else{
            //this.props.history.push("/room/aluno");
            const url = "https://megahacksebrae.herokuapp.com/"
            window.open(url);
        }
        
    }

    render  = () => {
        return(
            <div className={"events-container"} style={{paddingTop:6}}>
                <div className={"events-title"}>
                        <p style={{fontSize:12, fontWeight:'bold'}}>ACONTECENDO AGORA</p>
                </div>
                <TeacherContainer onClick={this.goToConf} teacher={"Profª Marieta Dias"} subject={"Língua P."} start={"11h10"} end={"12h00"}/>
                <div className={"watching-label"}>
                    <EyeIcon></EyeIcon>
                    <p style={{margin:0, fontSize:12, color:'black'}}>56 assistindo</p>
                </div>
                <div className={"events-title"}>
                        <p style={{fontSize:12, fontWeight:'bold'} }>PRÓXIMAS AULAS</p>
                </div>
                    <p style={{fontSize:12}}>05/05/2020</p><TeacherContainer teacher={"Prof Antônio Lisboa"} subject={"Inglês"} start={"08h10"} end={"09h00"}/>
                    <TeacherContainer teacher={"Prof Ronaldo Souza"} subject={"Química"} start={"09h10"} end={"10h00"}/>
                    <TeacherContainer teacher={"Profª Marieta Dias"} subject={"Língua P."} start={"08h10"} end={"09h00"}/>
                    <p style={{fontSize:12}}>06/05/2020</p>
                    <TeacherContainer teacher={"Profª Marieta Dias"} subject={"Língua P."} start={"11h10"} end={"12h00"}/>
                    
            </div>
        )
    }
}

export default withRouter(Events);