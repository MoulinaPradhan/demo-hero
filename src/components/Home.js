import React from "react";
import { data } from "../data";

import HeroCard from "./HeroCard";
import { addHeros, showFavourites } from "../actions";
import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(addHeros(data));
  }

  isFavourite = (hero) => {
    let favourite = this.props.heros.favourites;
    let index = favourite.indexOf(hero);
    if (index === -1) {
      return false;
    }
    return true;
  };

  showFavouriteHeros = (val) => {
    this.props.dispatch(showFavourites(val));
  };

  render() {
    let displayList = this.props.heros.showFavourites
      ? this.props.heros.favourites
      : this.props.heros.list;
    return (
      <div className="Home">
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${
                this.props.heros.showFavourites ? "" : "active-tabs"
              }`}
              onClick={() => this.showFavouriteHeros(false)}
            >
              Heros
            </div>
            <div
              className={`tab ${
                this.props.heros.showFavourites ? "active-tabs" : ""
              }`}
              onClick={() => this.showFavouriteHeros(true)}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {displayList.map((hero, index) => {
              return (
                <HeroCard
                  isFavourite={this.isFavourite(hero)}
                  hero={hero}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    heros: state.heros,
    search: state.search,
  };
}

const connectedHomeComponent = connect(mapStateToProps)(Home);

export default connectedHomeComponent;
