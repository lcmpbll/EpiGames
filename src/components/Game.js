import React from 'react';
import PropTypes from 'prop-types';


function Game(props){
  const gameStyles = {
    fontFamily: 'sans-serif',
    margin: '10px',
    padding: '5px',
    textAlign: 'left'
  }
  return (
    <React.Fragment>
      <div style={gameStyles}>
        <img src={props.img} width='230px'/>
        <h2>{props.title}</h2>
        <h4>Rating {props.rating}</h4>
        <p>$ {props.price}</p>
        <p>Platforms: {props.platforms}</p>
      </div>
    </React.Fragment>
  );
}

Game.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.number,
  featured: PropTypes.bool,
  platforms: PropTypes.string,
  
};

export default Game;