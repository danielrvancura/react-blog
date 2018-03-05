import React, { Component } from 'react';
import logo from './logo.svg';
import Comment from './comment';
import Authors from './Authors';
import './App.css';

class Post extends Component {
  render() {
    const {title, author, body, comments} = this.props
    //
    // {let allComments = [
    //   <Comment text={comments[0]} />,
    //   <Comment text={comments[1]} />,
    //   <Comment text={comments[2]} />
    // ]}

    let allComments = comments.map(function(comment, index){
      return<Comment text={comment} />
    })

    let allAuthors = author.map(function(author, index){
      return<Authors text={author} />
    })

    return (
      <div className="Post">
          <h1>{title}</h1>
        <p>{allAuthors}</p>
        <p>{body}</p>
        <h3>Comments:</h3>
        {allComments}
      </div>
    );
  }
}

export default Post;
