import React from 'react';
import ActionCable from 'actioncable'

class ChatBox extends React.Component{

  state = {
    currentChatMessage: '',
    chatLogs: []
    };

  componentDidMount = () => {
  this.createSocket();
  }

  updateCurrentChatMessage = (event) => {
    console.log(event.target.value)
  this.setState({
    currentChatMessage: event.target.value
    });
  }


  renderChatLog = () => {
  return this.state.chatLogs.map((el) => {
    return (
      <li key={`chat_${el.id}`}>
        <span className='chat-message'>{ el.content }</span>
        <span className='chat-created-at'>{ el.created_at }</span>
      </li>
    );
  });
  }

  createSocket = () => {
  let cable = ActionCable.createConsumer('ws://localhost:3000/cable');
  this.chats = cable.subscriptions.create({
    channel: 'ChatChannel'
    }, {
    connected: () => {},
    received: (data) => {
      let chatLogs = this.state.chatLogs;
      chatLogs.push(data);
      this.setState({ chatLogs: chatLogs });
    },
    create: function(chatContent) {
      this.perform('create', {
        content: chatContent
      });
    }
  });
}

handleSendEvent = (event) => {
  event.preventDefault();
  this.chats.create(this.state.currentChatMessage);
  this.setState({
    currentChatMessage: ''
  });
}


  render(){
    console.log(this.state.chatLogs)
    return (
      <div>
      <div className='stage'>
        <h1>Chat</h1>
        <div className='chatlogs'>
        <ul className='chat-logs'>
          {this.renderChatLog()}
        </ul>
        </div>
          <input
          value={ this.state.currentChatMessage }
          onChange={ (e) => this.updateCurrentChatMessage(e) }
           type='text'
           placeholder='Enter your message...'
           className='chat-input'/>
           <button onClick={ (e) => this.handleSendEvent(e) }
           className='send'>
           Send
           </button>
         </div>
       </div>
    )
  }
}

export default ChatBox
