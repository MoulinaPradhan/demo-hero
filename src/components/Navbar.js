import React from "react";
import { addHeroToList, handleHeroSearch } from "../actions";
import { connect } from "react-redux";

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

          {this.props.search.showSearchResults && (
            <div className="search-results">
              <div className="search-result">
                <img src={this.props.search.result.results.image} />
                <div className="hero-info">
                  <span>{this.props.search.result.results.name}</span>
                  <button
                    onClick={() =>
                      this.handleAddToHeros(this.props.search.result)
                    }
                  >
                    Add To Heros
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    search: state.search,
  };
}

const connectedNavbarComponent = connect(mapStateToProps)(Navbar);

export default connectedNavbarComponent;
