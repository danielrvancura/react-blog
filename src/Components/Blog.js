import React, { Component } from 'react';
import Comment from '../comment';
import Authors from '../Authors';


class Blog extends Component {
  constructor(props) {
    super();
    this.state = {
      body: props.body
    }
    this.handleChange = this.handleChange.bind(this);
    this.changeBody = this.changeBody.bind(this);
  }

  changeBody() {
    var newBody = prompt("Please enter a new body:");
    // console.log(newBody);
    this.setState({
      body: newBody
    })
  }

  handleChange(e){
    this.setState({
      body: e.target.body
    })
  }

  render() {
    const {title, author, body, comments} = this.props


    let allComments = comments.map(function(comment, index){
      return <Comment text={comment} />
    })

    let allAuthors = author.map(function(author, index){
      return <Authors text={author} />
    })

    return (
      <div className="Blog">
          <h1>{title}</h1>
          <p>{allAuthors}</p>
          <p>{this.state.body}</p>
          <button onClick={this.changeBody}>Update Body</button>
          <h3>Comments:</h3>
          {allComments}
      </div>
    );
  }
}

export default Blog;
