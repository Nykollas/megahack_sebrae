import React, { Component } from 'react';
import { withRouter } from 'react-router';

class DrawerOption extends Component {

    navigate = () => {
        const {navigateTo, history} = this.props;
        
        if(navigateTo=="/login"){
            
        }

        history.replace(navigateTo, window.location.pathname);
    }

    render = () => {

        const {label} = this.props;



        return(
            <div onClick={this.navigate} className={"drawer-option"}>
                <p>{label}</p> 
            </div>
        );
    }
}

export default withRouter(DrawerOption);