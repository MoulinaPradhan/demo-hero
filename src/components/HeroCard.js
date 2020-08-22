import React from "react";
import { addFovourite, removeFavourite } from "../actions";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class HeroCard extends React.Component {
  handleFavouriteClick = () => {
    let hero = this.props.hero;
    this.props.dispatch(addFovourite(hero));
  };

  handleUnFavouriteClick = () => {
    let hero = this.props.hero;
    this.props.dispatch(removeFavourite(hero));
  };

  render() {
    const { hero, isFavourite } = this.props;

    return (
      <div className="hero-card">
        <div className="image">
          <Link to="/about">
            <img src={hero.image} />
          </Link>
        </div>
        <div className="right">
          <div className="title">{hero.name}</div>
          <div className="plot">{hero.Plot}</div>
          <div className="footer">
            <div className="rating">{hero.imdbRating}</div>
            {isFavourite ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleUnFavouriteClick}
              >
                Unfavourite
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handleFavouriteClick}
              >
                Favourite
              </button>
            )}
          </div>
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

const connectedHeroCardComponent = connect(mapStateToProps)(HeroCard);

export default connectedHeroCardComponent;
