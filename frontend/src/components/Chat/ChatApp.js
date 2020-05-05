import React, { Component } from 'react';
import NameBox from './NameBox.js';
import Chat from 'twilio-chat';
import ChatIcon from './assets/chat';
import ChatIconClose from './assets/chat';
import ChatMessage from './ChatMessage';
import SubmitICon from './assets/submit';
import "./style.css"
import { Participant} from 'twilio-video';

class ChatApp extends Component {
  constructor(props) {
    super(props);
    const name = localStorage.getItem('name') || '';
    const loggedIn = name !== '';
    this.state = {
      name,
      loggedIn,
      token: '',
      chatReady: false,
      messages: [],
      newMessage: '',
      opened: true,
    };
    this.channelName = 'general';
  }

  //Revisar essa lógica
  openChat = () => {
    const chatContainer = document.getElementsByClassName("chat-container")[0];
    chatContainer.classList.replace("chat-closed", "chat-opened");
    this.setState({ opened: true });
  }

  closeChat = () => {
    const chatContainer = document.getElementsByClassName("chat-container")[0];
    chatContainer.classList.replace("chat-opened", "chat-closed");
    this.setState({ opened: false });
  }

  componentWillMount = () => {

    if (this.state.loggedIn) {
      this.getToken();
    }
  };

  onNameChanged = event => {
    this.setState({ name: event.target.value });
  };

  logIn = event => {
    event.preventDefault();
    if (this.state.name !== '') {
      localStorage.setItem('name', this.state.name);
      this.setState({ loggedIn: true }, this.getToken);
    }
  };

  logOut = event => {
    event.preventDefault();
    this.setState({
      name: '',
      loggedIn: false,
      token: '',
      chatReady: false,
      messages: [],
      newMessage: ''
    });
    localStorage.removeItem('name');
    this.chatClient.shutdown();
    this.channel = null;
  };
  getToken = () => {
    const header = new Headers([
      ['Access-Control-Allow-Origin', '*'],
    ]);
    fetch("http://rocky-basin-52490.herokuapp.com/token/" + `${this.state.name}`, {
      method: 'POST',
      headers: header
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ token: data.token }, this.initChat);
      });
  };

  //Inicializando Chat
  initChat = () => {
    this.chatClient = new Chat(this.state.token);
    this.chatClient.initialize().then(this.clientInitiated.bind(this));
  };

  //Chat incializado
  clientInitiated = () => {
    this.setState({ chatReady: true }, () => {
      this.chatClient
        .getChannelByUniqueName(this.channelName)
        .then(channel => {
          if (channel) {
            return (this.channel = channel);
          }
        })
        .catch(err => {
          if (err.body.code === 50300) {
            //Cria canal caso ele não existir
            return this.chatClient.createChannel({
              uniqueName: this.channelName
            });
          }
        })
        .then(channel => {
          this.channel = channel;
          window.channel = channel;
          //Juntando se ao canal
          //Checa se o membro já existe a partir de seu nome
          const identity = this.channel.getMemberByIdentity(this.state.name)
          console.log(identity);
          //Se o membro não existir adiciona ele ao canal
          if (!identity) {
            this.channel.join();
          }
          return;
        })
        .then(() => {
          //Carrega mensagens e executa o callback
          this.channel.getMessages().then(this.messagesLoaded);
          //Adiciona listener ao canal messageAdded => Atualiza o canal
          this.channel.on('messageAdded', this.messageAdded);
        });
    });
  };


  messagesLoaded = messagePage => {
    this.setState({ messages: messagePage.items });
  };

  messageAdded = message => {
    
    this.setState((prevState, props) => ({
      messages: [...prevState.messages, message]
    }));
  };

  onMessageChanged = event => {
    this.setState({ newMessage: event.target.value });
  };

  //Envia mensagem
  sendMessage = event => {
    event.preventDefault();
    const message = this.state.newMessage;
    this.setState({ newMessage: '' });
    this.channel.sendMessage(message);

  };

  //Warning: Revisar esse callback
  newMessageAdded = comp => {
    console.log(comp);
    if (comp) {
      comp._reactInternalFiber.child.stateNode.scrollIntoView();
    }
  };

  render() {
    var loginOrChat;
    const messages = this.state.messages.map(message => {
      return (
        <ChatMessage ref={this.newMessageAdded} key={message.sid} author={message.author} body={message.body}></ChatMessage>
      );
    });
    const { opened } = this.state;
    if (this.state.loggedIn) {
      
        loginOrChat = <>
        <div className="open-chat-icon-container">
         {!opened ? <ChatIcon onClick={this.openChat}></ChatIcon> : <ChatIconClose onClick={this.closeChat}></ChatIconClose>} 
        </div>
        <div className={"chat-container chat-opened"}>
        <p className={"user-name"}>{"Aluno"}</p>
        <ul className="messages">
          {messages}
        </ul>
        <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <form className={"edit-input-container"} onSubmit={this.sendMessage}>
            <input
              className={"edit-input"}
              type="text"
              name="message"
              id="message"
              placeholder={"Digite sua mensagem"}
              onChange={this.onMessageChanged}
              value={this.state.newMessage}
            />
            <SubmitICon onClick={this.sendMessage}></SubmitICon>
          </form>
        </div>
      </div>
      </>
    } else {
      loginOrChat =
        <div>
          <NameBox
            name={this.state.name}
            onNameChanged={this.onNameChanged}
            logIn={this.logIn}
          />
        </div>

    }
    return (
      loginOrChat
    );
  }
}

export default ChatApp;
