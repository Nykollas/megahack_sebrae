import React, { Component } from 'react';


class EditButton extends Component {

    constructor(props){
        super(props);
    }

    render = () => {

        const { height, width, onClick } = this.props;

        return (
            <svg width={width} height={height} viewBox="0 0 182 171" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g  style={{cursor:'pointer'}}  filter="url(#filter0_i)">
                    <path onClick={onClick} fill-rule="evenodd" clip-rule="evenodd" d="M0 171H170C176.627 171 182 165.628 182 159V0.233887C167.596 45.087 111.03 142.035 0 171Z" fill="#3988FF" />
                </g>
                <g style={{cursor:'pointer'}}  clip-path="url(#clip0)">
                    <path onClick={onClick} d="M138.127 148.402L131 149.918L132.438 142.404L138.127 148.402ZM139.541 146.912L150.769 135.079L145.079 129.079L133.852 140.914L139.541 146.912ZM149.309 124.619L146.493 127.589L152.184 133.588L155 130.616L149.309 124.619V124.619Z" fill="white" />
                </g>
                <defs>
                    <filter id="filter0_i" x="0" y="0.233887" width="182" height="174.766" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                    </filter>
                    <clipPath  id="clip0">
                        <rect x="131" y="124.619" width="24" height="25.2987" fill="white" />
                    </clipPath>
                </defs>
            </svg>


        )
    }
}

export default EditButton;