import React from "react";
import { addHeroToList, handleHeroSearch } from "../actions";
import { connect } from "react-redux";
import { BrowserRouter as Link } from "react-router-dom";
class Navbar extends React.Component {
  handleAddToHeros = (hero) => {
    this.props.dispatch(addHeroToList(hero));
  };
  handleSearch = () => {
    var searchText = document.getElementById("input").value;
    this.props.dispatch(handleHeroSearch(searchText));
    console.log("this.prps.search.result", this.props.search.result);
  };
  render() {
    let arr = this.props.search;
    console.log(arr, "arr");
    return (
      <div className="nav">
        <div className="search-container">
          <input id="input" />
          <button id="search-btn" onClick={this.handleSearch}>
            <img
              id="search-icon"
              alt="search-icon"
              src="https://image.flaticon.com/icons/svg/1296/1296902.svg"
            />
          </button>
          {this.props.search.map((search) => {
            return (
              <div className="search-results" key={search.key}>
                <div className="search-result">
                  <img src={search.image.url} />
                  <div className="hero-info">
                    <span>{search.name}</span>
                    <button onClick={() => this.handleAddToHeros(search)}>
                      Add To Heros
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    search: state.search.result,
  };
}

const connectedNavbarComponent = connect(mapStateToProps)(Navbar);

export default connectedNavbarComponent;
