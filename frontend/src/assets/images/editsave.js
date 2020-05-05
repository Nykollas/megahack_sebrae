import React, { Component } from 'react';


class EditButton extends Component {


    render = () => {

        const { height, width,  onClick } = this.props;

        return (
            <svg width={ width } height={ height } viewBox="0 0 182 171" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g style={{cursor:'pointer'}} filter="url(#filter0_i)">
                    <path onClick={onClick} fill-rule="evenodd" clip-rule="evenodd" d="M0 171H170C176.627 171 182 165.627 182 159V0.233765C167.596 45.0869 111.03 142.035 0 171Z" fill="#3988FF" />
                </g>
                <path  onClick={onClick} style={{cursor:'pointer'}}     d="M156.654 111.514L137.375 131.835L128.345 123.032L122 129.56L137.375 144.894L163 118.04L156.654 111.514Z" fill="white" />
                <defs>
                    <filter id="filter0_i" x="0" y="0.233765" width="182" height="174.766" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                    </filter>
                </defs>
            </svg>
        )
    }
}

export default EditButton;