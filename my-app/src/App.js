import React from 'react';
import DisplayCard from "./components/DisplayCard";
import axios from "axios";
import "./components/styles.css";

import './App.css';


class App extends React.Component {
  state = {
    profile: {},
    followers: []
  };

  componentDidMount() {
    axios
    .get('https://api.github.com/users/XueYingLin')
    .then(res => {
      this.setState({
        profile: res.data
      });
    })
    .catch(err => console.log(err.message));

    axios
    .get('https://api.github.com/users/XueYingLin/followers')
    .then(res => {
      this.setState({
        followers: res.data
      });
    })
    .catch(err => console.log(err.message));
  }
  render() {
  return (
    <div className="App">
      <DisplayCard avatar_url={this.state.profile.avatar_url}
               login={this.state.profile.login}
               html_url={this.state.profile.html_url}
               email={this.state.profile.email} />

      <p className="text">Followers as bellow</p>

      {this.state.followers.map(follower => (
        <DisplayCard avatar_url={follower.avatar_url}
               login={follower.login}
               html_url={follower.html_url}
               email={follower.email} />
      ))}


        
        
    </div>
  );
}
}

export default App;
