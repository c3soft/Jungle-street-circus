// import React from 'react';
import React, { Component } from 'react';
import NavBar from './NavBar';
import './home.css';

export default class Home extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="containerHome">
          <h1 className="titleHome">pantomine</h1>
          <h2 className="titleSlogan">The jungle street circus</h2>
        </div>
      </>
    );
  }
}
