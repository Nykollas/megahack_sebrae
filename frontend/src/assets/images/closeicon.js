import React, { Component } from 'react';


class CloseIcon extends Component {

    constructor(props) {
        super(props);
    }

    render = () => {

        const { size, onClick } = this.props;
        
        return (
            <svg width={size} height={size} viewBox={"0 0 60 120"} fill="none" xmlns="http://www.w3.org/2000/svg">
                <g onClick={onClick} clip-path="url(#clip0)">
                    <path style={{cursor:'pointer'}} d="M24 21.6332L15.685 12.98L23.885 4.24984L20.188 0.352783L11.976 9.12089L3.666 0.474006L0 4.33838L8.321 13.0243L0.115 21.7871L3.781 25.6515L12.018 16.8834L20.303 25.5303L24 21.6332Z" fill="#3988FF" />
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect y="0.352783" width={size} height={size} fill="white" />
                    </clipPath>
                </defs>
            </svg>
        )
    }
}

export default CloseIcon;