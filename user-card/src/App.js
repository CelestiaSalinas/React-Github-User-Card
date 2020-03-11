import React from 'react';
import CardGrid from './components/cardGrid'
import axios from 'axios'
import './App.css';

class App extends React.Component {
  state = {
    user:{},
    followers: []
  }

  componentDidMount(){
    axios
    .get('https://api.github.com/users/CelestiaSalinas')
        .then(res => {
          this.setState({user: res.data});
        })
        .catch(error => {
          console.error("Server Error", error);
        });

    axios
    .get('https://api.github.com/users/CelestiaSalinas/followers')
    .then(res => {
      this.setState({followers: res.data});
    })
    .catch(error => {
      console.error("Server Error", error);
    });
  }

  render() {
  return (
    <div className="App">
      <CardGrid user={this.state.user} followers={this.state.followers} />
    </div>
  );
}}

export default App;
