import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      querry: "",
    };
  }
  handleSearch = (e) => {
    var a = this.state.querry;
    if (e.key === "Enter") {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${a}&appid=59a106ab236b3d0a4a44a205e23e0de7`
      )
        .then((res) => res.json())
        .then((data) =>
          this.setState({
            querry: "",
            items: data,
          })
        );
    }
  };
  handleChange = (e) => {
    const a = e.target.value;
    if (a !== null) {
      this.setState({
        querry: a,
      });
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input
            type="text"
            onChange={this.handleChange}
            onKeyPress={this.handleSearch}
            value={this.state.querry}
          />
        </header>
        {typeof this.state.items.main !== "undefined" ? (
          <div>
            <h1>
              {this.state.items.name},{this.state.items.sys.country}
            </h1>
            <span>
              Logitude:{this.state.items.coord.lon} Lattitude:
              {this.state.items.coord.lat}
            </span>
            <br />
            <h1>
              TEMP: {this.state.items.main.temp}
              <br />
              Pressure:
              {this.state.items.main.pressure} <br />
              Humidity:
              {this.state.items.main.humidity}
            </h1>
            <h1>Visiblity: {this.state.items.visibility}</h1>
            <h1>Wind Speed: {this.state.items.wind.speed}</h1>
            <h1>Wind Degree: {this.state.items.wind.deg}</h1>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
