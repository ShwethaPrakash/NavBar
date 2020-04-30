import React, { Component } from "react";
import "./index.css";

export default class NavBar extends Component {

  constructor(props)
    {
      super(props);
      this.OnNavBarClick = this.OnNavBarClick.bind(this);
      this.state={pagecontent:'HOME PAGE'};
    }

  OnNavBarClick(event)
  {
    let content = event.target.innerHTML.toUpperCase(); 
    this.setState({pagecontent : content+" PAGE"})

  }

  render() {
    return (
      <div className="layout-column justify-content-center align-items-center">

        <div className="layout-row justify-content-around align-items-center mt-20 links" data-testid="navigation-tabs">
            <a onClick={this.OnNavBarClick}>Home</a>
            <a onClick={this.OnNavBarClick}>News</a>
            <a onClick={this.OnNavBarClick}>Contact</a>
            <a onClick={this.OnNavBarClick}>About</a>
        </div>

        <div className="card w-20 ma-0">
          <section className="card-text" data-testid="tab-content">
              <span>{this.state.pagecontent}</span>
          </section>
        </div>
      </div>
    );
  }
}