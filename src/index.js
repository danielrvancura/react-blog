import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import Blog from './Components/Blog';
import registerServiceWorker from './registerServiceWorker';

var post = {
  title: "Dinosaurs are awesome",
  author: ["Stealthy Stegosaurus", "Tiny", "You"],
  body: "Check out this body property!",
  comments: ["First!", "Great post", "Hire this author now!"]
}

ReactDOM.render(<App
  title={post.title}
  author={post.author}
  body={post.body}
  comments={post.comments}
  />, document.getElementById('root'));
registerServiceWorker();
