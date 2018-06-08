import React from 'react'

class Postform extends React.Component{

    state = {
      title: "",
      body: ""
    }

onChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

onSubmit = (e) => {
  e.preventDefault();
  const post = {
    title: this.state.title,
    body: this.state.body
  }

  fetch('http://localhost:3000/api/v1/posts',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  .then(res => res.json())
  .then(post => console.log(post))
}




  render(){
    return (
      <div>
        <h1>Add Posts</h1>
        <form onSubmit={this.onSubmit}>
        <div>
          <label>Title: </label>
          <input type="text" name="title" onChange={this.onChange} value={this.state.title}></input>
          <br></br>
          <br></br>
          <label>Body: </label>
          <textarea name="body" cols="10" rows="1" onChange={this.onChange} value={this.state.body}></textarea>
          <br></br>
          <button type='submit'>Submit Post</button>
        </div>
        </form>
      </div>
    )
  }
}

export default Postform
