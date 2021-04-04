import React, {Component} from 'react';

class Home extends Component {
  render() {
    return (
      <div className="container mx-auto">
        <h1>Welcome</h1>
        <p>
          This is a simple web app which you can use to browse the spacex api (currently v4). I made this to experiment
          a little bit with React. To view the different data, just click on a link above in the navigation.
        </p>
      </div>
    );
  }
}

export default Home;
