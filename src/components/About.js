import React from "react";

class About extends React.Component {
  render() {
    const hero = this.props;
    return (
      <div>
        <h1 className="heading">About the super hero</h1>
        <div id="about-section">
          <img id="hero-img" src={hero.image} alt="image of the superhero" />
          <div id="hero-info"></div>
        </div>
      </div>
    );
  }
}

export default About;
