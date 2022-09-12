import React from 'react';
import Game from './Game';
import PropTypes from 'prop-types';

function MainGameList(props) {
  const cardStyles = {
    // position: 'relative',
    marginBottom: '30px',
    marginLeft: '10px',
    marginRight: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft: '-1%',
    background:
    'linear-gradient(360deg, rgb(231, 213, 177) 11%, rgb(207, 139, 24) 95%)',
    backgroundColor: '#FF5733',
    width: '300px',
  };
  
  const mainGameListStyles = {
    // margin: 'auto',
    // marginLeft: '30%',
    marginRight: '2px',
    padding: '10px',
  };

  return (
    <React.Fragment>
      <div style={mainGameListStyles} className='d-flex justify-content-center'>
        <div className='row'>
          {Object.values(props.gameList).map((game, index) => (
            <div className='card' style={cardStyles} key={index}>
              <div className='col'>
                <Game 
                  title={game.title}
                  img={game.img}
                  rating={game.rating}
                  price={game.price}
                  platforms={game.platforms}
                  id={game.id}
                  whenGameClicked = { props.onGameSelection }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

MainGameList.propTypes = {
  mainGameList: PropTypes.object,
  onGameSelection: PropTypes.func
};

export default MainGameList;
