import React from "react";
import { data } from "../data";

import HeroCard from "./HeroCard";
import { addHeros, showFavourites } from "../actions";
import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(addHeros(data[0].results));
  }

  isFavourite = (hero) => {
    let favourite = this.props.list.favourites;
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
    console.log(this.props.list);
    let heros = this.props.list;
    console.log(heros, "hhh");
    let list = heros.list;
    let favourite = heros.favourites;
    let showFavourites = heros.showFavourites;
    let displayList = [];
    if (showFavourites === true) {
      displayList = favourite;
    } else {
      displayList = list;
    }

    return (
      <div className="Home">
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.showFavouriteHeros(false)}
            >
              Heros
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
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
  console.log(state, "ss");
  console.log("lis", state.heros);
  console.log("fofo", state.heros.favourites);
  console.log("st", state.heros.showFavourites);
  return {
    list: state.heros,
    search: state.search,
  };
}

const connectedHomeComponent = connect(mapStateToProps)(Home);

export default connectedHomeComponent;
