import React from 'react';
import './App.css';
import loading from './loading.gif';

class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoaded: false,
        error: null,
        items: null
    }
  }

  fetchNewDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(items => this.setState({ isLoaded: true, items: items }));
  }
  

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(items => this.setState({ isLoaded: true, items: items }));

  }
  render () {
    console.log(this.state.items)
    console.log(this.state.isLoaded)
    var item = this.state.items

    if(this.state.isLoaded) {
    console.log(item.message)
    var picture = item.message;
    }
    else return( <img src={loading}></img> )

  
  return (
    <div id="dog">
      <img src={picture} id="dog" alt="dog">
      </img>
      <br />
      <button onClick={this.fetchNewDog} id="dogButton">Gimme another dog!</button>
      <hr />      
    </div>
  );
  }
}

export default Dog;
