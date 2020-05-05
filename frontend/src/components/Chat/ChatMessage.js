import React, { Component } from 'react';



export default class ChatMessage extends Component {

    getRandom = () => {
        return Math.floor(Math.random()*10);
    }

    name = ["Aline", "Maria", "João", "William","Jonas", "Lúcia", "Cicília", "Alice", "Alann", "José"]

    render = () => {
        const {author, body} = this.props;
        return(
            <div className={"message-container"}>
                <h1 className={"user"}>
                    {this.name[this.getRandom()]}
                </h1>
                <p className={"message-text"}>
                    {body}
                </p>
            </div>
        )
    }
}