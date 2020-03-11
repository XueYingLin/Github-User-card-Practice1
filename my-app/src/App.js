import React from 'react';

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

    
  }
  render() {
  return (
    <div className="App">
      
        
        
    </div>
  );
}
}

export default App;
