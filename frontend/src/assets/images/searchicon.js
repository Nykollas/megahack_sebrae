import React, { Component } from 'react';

class SearchIcon extends Component {
    render = () => {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path style={{cursor:'pointer'}} d="M21.172 24L13.785 16.613C12.397 17.487 10.761 18 9 18C4.029 18 0 13.971 0 9C0 4.029 4.029 0 9 0C13.971 0 18 4.029 18 9C18 10.761 17.486 12.398 16.613 13.785L24 21.172L21.172 24ZM9 16C12.859 16 16 12.86 16 9C16 5.14 12.859 2 9 2C5.141 2 2 5.14 2 9C2 12.86 5.141 16 9 16Z" fill="#2D6DCD" />
            </svg>
        )
    }
}

export default SearchIcon;