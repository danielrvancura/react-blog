import React, { Component } from 'react';
const axios = require('axios');

class About extends Component {
constructor(props) {
  super(props)
  this.state= {
    zipcode: '',
    weather: ''
  }
   // your required states here
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleChange(event) {
   console.log(event.target)
   this.setState({zipcode: event.target.value})
   // console.log('Your zip code is' + this.state.zipcode)
 }

 handleSubmit(event) {
   event.preventDefault()
   let weatherApi= `http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipcode},us&units=imperial&appid=052f26926ae9784c2d677ca7bc5dec98`
   axios.get(weatherApi)
   .then((response) => {
     this.setState({ weather: response.data.main.temp})
   })
   .catch((error) => {
       console.log('An error occurred while parsing', error)
     })
   // let base = this

   // your fetch here
   // your state updates go under function(json)

 }
 // componentDidMount(){
 //   var base = this
 //
 // }





render() {
  // if (this.state.weather) {
  //   var weather = this.state.weather
  // } else {
  //   var weather = 'Loading....'
  // }
  return (
    <div>

    <form onSubmit={this.handleSubmit}>
    // <p>
    //      Temperature: {this.state.weather}
    //    </p>
      <label>
        Please enter your zip code for the weather:
        <input type="text" value={this.state.zipcode} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Get my forecast!" />
      <p>Your local weather is: {this.state.weather}</p>
    </form>
    </div>
  )
}
}


export default About;
