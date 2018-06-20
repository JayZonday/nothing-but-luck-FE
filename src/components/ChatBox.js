import React from 'react';
import ActionCable from 'actioncable'
import { connect } from 'react-redux';
import { fetchPosts, editPost} from '../actions/postActions';
import { fetchUsers, persistData } from '../actions/userActions';

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
    [event.target.name]: event.target.value
    });
  }


  renderChatLog = () => {
  return this.state.chatLogs.map((el) => {
    return (
      <div id="a-message" key={`chat_${el.id}`}>
        <span className='chat-username'>{el.username} <span className='chat-created-at'>[{ el.created_at }]</span>: </span>
        <span className='chat-message'>{ el.content }</span>
        <hr />
      </div>
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
    create: function(chatContent, chatUsername) {
      this.perform('create', {
        content: chatContent,
        username: chatUsername
      });
    }
  });
}

handleChatInputKeyPress = (event) => {
  if(event.key === 'Enter') {
    this.handleSendEvent(event);
  }
}


handleSendEvent = (event) => {
  event.preventDefault();
  this.chats.create(this.state.currentChatMessage, this.state.currentChateUsername);
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
          <div className="chat-inputs">
          <input
          value={ this.state.username }
          onChange={ (e) => this.updateCurrentChatMessage(e) }
          type='text'
          name="currentChateUsername"
          placeholder='Enter an Alias'
          className='chat-input'/>
          <br />
          <input
          value={ this.state.currentChatMessage }
          onChange={ (e) => this.updateCurrentChatMessage(e) }
          onKeyPress={ (e) => this.handleChatInputKeyPress(e) }
           type='text'
           name="currentChatMessage"
           placeholder='message...'
           className='chat-input'/>
           <br />
           <button onClick={ (e) => this.handleSendEvent(e) }
           className='send'>
           Send
           </button>
           </div>
         </div>
       </div>
    )
  }
}

const mapStateToProps = state => ({
    users: state.users.items,
    posts: state.posts.items,
    user: state.users.item
});



export default connect(mapStateToProps,{})(ChatBox)
