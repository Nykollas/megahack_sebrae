import React, { Component } from 'react';



class Hamburguer extends Component {
    render = () => {
        return (
            <svg width="36" height="40" viewBox="0 0 50 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="50" height="9" fill="white" />
                <rect y="19" width="50" height="9" fill="white" />
                <rect y="38" width="50" height="9" fill="white" />
            </svg>

        )
    }
}

export default Hamburguer;