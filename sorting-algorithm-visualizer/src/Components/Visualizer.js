import React from "react";
import "../CSS/Visualizer.css";

class Visualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.setArray();
  }

  setArray() {
    const newArray = [];

    //Variables declared by let are only available inside the block where they're defined.
    //Variables declared by var are available throughout the function in which they're declared
    for (let i = 0; i < 100; i++) {
      newArray.push(this.getRandomInt(5, 299));
    }
    this.setState({ array: newArray });
  }

  //https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  render() {
    return (
      <div className="visualizer">
        {this.state.array.map((value, index) => (
          <div
            key={index}
            className="array-bar"
            style={{ height: "${value}px" }}
          />
        ))}
      </div>
    );
  }
}

export default Visualizer;
