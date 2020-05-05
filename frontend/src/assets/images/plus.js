import React, { Component } from 'react';


class PlusIcon extends Component {

    constructor(props){
        super(props);
    }

    render = () => {

        const { onClick } =this.props;

        return (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 24C5.38329 24 0 18.6167 0 12C0 5.38328 5.38329 -3.8147e-06 12 -3.8147e-06C18.6167 -3.8147e-06 24 5.38328 24 12C24 18.6167 18.6167 24 12 24ZM18 10.5H13.5V6H10.5V10.5H6V13.5H10.5V18H13.5V13.5H18V10.5Z" fill="#969696"/>
</svg>

        )
    }
}

export default PlusIcon;