import React, { Component } from 'react';

import { withRouter } from 'react-router';

import Eye from '../../../../assets/images/eye';
import Play from '../../../../assets/images/play';

class RecordedClass extends Component {

    goToAulasGravadas = () => {
        const path = window.location.path;
        if(path){
            this.props.history.replace(path, "/aula_gravada")
        }else{
            this.props.history.push("/aula_gravada")
        }
    }

    render = () => {
        const { borderBottom, descr, date } = this.props;
        return (
            <div onClick={this.goToAulasGravadas} className={"info-data-row"} style={borderBottom ? { border:"1px solid gray", cursor:'pointer'} : {cursor:'pointer'}}>
                <div className={"info-data-date"}>
                    <p>
                        {date}
                    </p>
                </div>
                <div className={"info-data-text"}>
                    <p>
                        {descr}
                    </p>
                </div>
                <div className={"info-data-icon"}>
                    <Play></Play>
                </div>
                <div className={"info-data-icon"}>
                    <Eye></Eye>
                </div>
            </div>
        )
    }
}

export default withRouter(RecordedClass);