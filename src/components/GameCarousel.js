import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function GameCarousel(props) {
  const slideStyles = {
    width: '100%',
    height: '100%',
    margin: 'auto',
  };
  const imgStyles = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    maxHeight: '300px',
  };
  const textStyles = {
    webkitTextStroke: '1px black',
  };
  return (
    <div style={slideStyles}>
      <Carousel>
        {Object.values(props.gameList)
          // .filter((game) => game.featured)
          .map((game) => (
            <Carousel.Item key={game.id}>
              <img
                className='d-block img-fluid'
                style={imgStyles}
                src={game.img}
                alt={game.title}
              />
              <Carousel.Caption>
                <h3 styles={textStyles}>{game.title}</h3>
                <p styles={textStyles}>
                  <span role='img'>⭐</span>{game.rating} - ${game.price} - {game.platforms}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
}

export default GameCarousel;
