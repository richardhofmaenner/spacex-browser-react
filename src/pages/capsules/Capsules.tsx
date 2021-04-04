import React, {Component} from 'react';
import CapsulesState from "../../types/CapsulesState";
import Capsule from "../../types/Capsule";

class Capsules extends Component {

  state: CapsulesState = {
    capsules: [],
    isLoading: true
  }

  componentDidMount() {
    fetch('https://api.spacexdata.com/v4/capsules')
      .then(response => response.json())
      .then(data => {
        this.setState({
          capsules: data
        })
      })
      .then(() => {
        this.setState({
          isLoading: false
        })
      })
  }

  render() {

    let capsules;

    if (this.state.isLoading) {
      capsules = (
        <p>Loading data.</p>
      )
    } else if (!this.state.isLoading && this.state.capsules.length > 0) {
      capsules = (
        this.state.capsules.map((capsule: Capsule) => {
          return capsule.serial
        })
      )
    } else {

    }

    return (
      <div className="container mx-auto">
        <h1>Capsules</h1>
        {capsules}
      </div>
    );
  }
}

export default Capsules;
