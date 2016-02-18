import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = { term: ''};
    //this = Searchbar class has a functoin called 'this inputchange' bind function to this class
    //and replace the existing function with it. callbacks need to be binded 
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  
  onInputChange(event) {
    this.setState({term: event.target.value});
  }
  
  onFormSubmit(event) {
    event.preventDefault();
    
    //fetch weather data  
    this.props.fetchWeather(this.state.term);
    //clearing our field to blank
    this.setState({ term: ''});
    
  }
  render() {
    
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="Get a 5 day forecast in your favourite cities"
          className="form-control"
          value={this.state.term}  
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
} 

//mapping fetchweather to this class 
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather } , dispatch);
}

//first args does not require state 
export default connect(null, mapDispatchToProps)(SearchBar);