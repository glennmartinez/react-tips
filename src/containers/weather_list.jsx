import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  
  
  renderWeather(cityData) {
    //mapping over to convert kalvin to celcius
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273 );
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;
    
    return (
      <tr key={cityData.city.name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} colour="orange" /></td>
        <td> <Chart data={pressure} colour="blue" /></td>
        <td><Chart data={humidities} colour="green" /></td>
      </tr>
    )
  }
  
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City </th>
            <th>Temperature (k) </th>
            <th>Pressure (hpa) </th>
            <th>Humidity (%) </th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}


function mapStateToProps({weather}) {
   //return { weather: weather }; and bring in state as the props rather than weather
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);