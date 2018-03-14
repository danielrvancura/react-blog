import React, { Component } from 'react';
const axios = require('axios');

class Home extends Component {
  constructor(props) {
    super(props)
    this.state ={
      shakespeare: ''
    }
  }
  componentDidMount(){
    // save a reference to 'this' because the value of 'this' will change
    // inside the different callback function
    var base = this
    // the url for our api
    let poemApi = 'http://shakeitspeare.com/api/poem'
    // our fetch of that poemApi
    // fetch(poemApi)
    // .then((response) => {
    //   return response.json()
    // }).then((json) =>{
    //   base.setState({ shakespeare: json.poem})
    // })
    // .catch((error) => {
    //   console.log('An error occurred while parsing', error)
    // })
    // axios.get(poemApi)
    // .then((response) => {
    //   console.log(response)
    //   base.setState({ shakespeare: response.data.poem})
    //   })
    //   .catch((error) => {
    //     console.log('An error occurred while parsing', error)
    //   })
      axios({
        method: 'GET',
        url: poemApi
      })
      .then((response) => {
        base.setState({ shakespeare: response.data.poem})
      })
      .catch((error) => {
          console.log('An error occurred while parsing', error)
        })
  }



  render() {

    if (this.state.shakespeare) {
      var poetry = this.state.shakespeare
    } else {
      var poetry = 'Loading....'
    }
    return (
      <div className= 'App'>
        <h1> A Fucking Website</h1>
        <h2>My Favorite Shakespeare Poem:</h2>
        <p>{poetry}</p>
      </div>

    )
  }
  }

export default Home;
