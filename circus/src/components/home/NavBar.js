import React, { Component } from 'react';

export default class NavBar extends Component {
  state = {
    navCollapsed: true
  };

  _onToggleNav = () => {
    this.setState({ navCollapsed: !this.state.navCollapsed });
  };

  render() {
    const { navCollapsed } = this.state;

    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Pantomine
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this._onToggleNav}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        {/* <div class="collapse navbar-collapse" id="navbarNavAltMarkup"> */}

        <div className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse'}>
          <div class="navbar-nav">
            {/* <a class="nav-item nav-link active" href="#">
              Home <span class="sr-only">(current)</span>
            </a> */}
            <a class="nav-item nav-link" href="#">
              Nos artistes
            </a>
            <a class="nav-item nav-link" href="#">
              Evénements
            </a>
            <a class="nav-item nav-link" href="#">
              Contact
            </a>
            <a
              class="nav-item nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Administration
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
