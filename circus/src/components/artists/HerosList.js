import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../../components/home/NavBar';
import Cards from './Cards';

export default class HerosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: []
    };
    this.getHeroes = this.getHeroes.bind(this);
  }

  getHeroes() {
    axios
      .all(
        [125, 126, 116].map(id =>
          axios.get(
            `https://www.superheroapi.com/api.php/157312608676119/${id}`
          )
        )
      )
      .then(responses => {
        this.setState({
          heroes: responses.map(response => response.data)
        });
      });
  }

  componentDidMount() {
    this.getHeroes();
  }
  render() {
    return (
      <div>
        <NavBar />
        <h1>Our Artists</h1>
        <div>
          {React.Children.toArray(
            this.state.heroes.map(listData => {
              return <Cards {...listData} />;
            })
          )}
        </div>
      </div>
    );
  }
}
