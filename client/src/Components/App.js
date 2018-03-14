import React, { Component } from 'react';
import Comment from '../comment';
import Authors from '../Authors';
import Movies from './movie';
import Home from './Home';
import About from './about';
import Food from './food';
import Blog from './Blog'
import '../App.css';
import {BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

var post = {
  title: "Dinosaurs are awesome",
  author: ["Stealthy Stegosaurus", "Tiny", "You"],
  body: "Check out this body property!",
  comments: ["First!", "Great post", "Hire this author now!"]
}

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <nav>
      <Link to='/'>Go to Home Page</Link>{' '}
      <Link to='/about'>About Me</Link>{' '}
      <Link to='/movie'>Favorite Movies</Link>{' '}
      <Link to='/Blog'>My Blog</Link>{' '}
      <Link to='/food'>Favorite Foods</Link>
      </nav>

          <Route exact path='/' component ={Home} />
          <Route path='/about' component ={About} />
          <Route path='/movie' component ={Movies} />
          <Route path='/Blog' component={() => (<Blog title={post.title}
			         author={post.author}
			            body={post.body}
			               comments={post.comments}
			                  authors={post.allAuthors}
			/>)} />
          <Route path='/food' component ={Food} />
      </div>
        </Router>
    );
  }
}
export default App;
