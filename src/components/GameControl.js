import React from 'react';
import GameCarousel from './GameCarousel';
import MainGameList from './GameList';
import NewGameForm from './NewGameForm';
import GameDetail from './GameDetail';
import UpdateGameForm from './UpdateGameForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedGame: null,
      editing: false,
      // mainGameList: [
      //   {
      //     title: 'It is an Ad',
      //     img: 'https://cdn.discordapp.com/attachments/819377569715191818/1017196212534911026/ikg080z6j7141.jpg',
      //     rating: 0.6,
      //     price: 5,
      //     featured: false,
      //     platforms: 'Switch',
      //     id: 'kwnxoi',
      //   },
      //   {
      //     title: 'Invader Membrane',
      //     img: 'https://cdn.discordapp.com/attachments/819377569715191818/1017196805668208740/Y_n.png',
      //     rating: 4.5,
      //     price: 7,
      //     featured: true,
      //     platforms: 'PC',
      //     id: 'oi21jxl',
      //   },
      //   {
      //     title: 'Preist Mouse',
      //     img: 'https://cdn.discordapp.com/attachments/819377569715191818/1017197039433564200/Screenshot_20220606-084236.png',
      //     rating: 4.1,
      //     price: 2,
      //     featured: false,
      //     platforms: 'PC/Mac',
      //     id: 'mciowh24',
      //   },
      //   {
      //     title: 'Final Donkey 7',
      //     img: 'https://cdn.discordapp.com/attachments/819377569715191818/1017196805362032680/Screenshot_20210117-1954312.png',
      //     rating: 2.1,
      //     price: 20,
      //     featured: true,
      //     platforms: 'PlayStation',
      //     id: 'enklxxi',
      //   },
      //   {
      //     title: 'Carby\'s Adventure',
      //     img: 'https://cdn.discordapp.com/attachments/819377569715191818/1017197197789515856/Kirby-and-the-Forgotten-Half-Car.png',
      //     rating: 2.7,
      //     price: 15,
      //     featured: false,
      //     platforms: 'Switch',
      //     id: 'qtvbx',
      //   },
      //   {
      //     title: 'Rosarama and Sad Star',
      //     img: 'https://cdn.discordapp.com/attachments/819377569715191818/1017196806062493746/IllSmashWithYou.jpeg',
      //     rating: 4.4,
      //     price: 34,
      //     featured: false,
      //     platforms: 'Switch',
      //     id: 'hwecver',
      //   },
      // ],
    };
    this.handleShowForm = this.handleShowForm.bind(this);
  }

  handleEditingGameInList = (gameToEdit) => {
    const { dispatch } = this.props;
    const {  title, img, rating, price, featured, platforms, id } = gameToEdit;
    const action = {
      type: 'ADD_GAME',
      title: title,
      img: img,
      rating: rating,
      price: price,
      featured: featured,
      platforms: platforms,
      id: id,
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedGame: null
    });
  }

  handleDeletingGame = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_GAME',
      id: id
    }
    dispatch(action);
    this.setState({selectedGame: null});
  }

  handleEditClick = () => {

    this.setState({editing: true});
  }

  handleAddingNewGameToList = (newGame) => {
    const  { dispatch } = this.props;
    const { title, img, rating, price, featured, platforms, id } = newGame;
    const action = {
      type: "ADD_GAME",
      title: title,
      img: img,
      rating: rating,
      price: price,
      featured: featured,
      platforms: platforms,
      id: id,
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  handleShowForm = () => {
    if (this.state.selectedGame === null) {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    } else {
      this.setState({
        formVisibleOnPage: false,
        selectedGame: null,
        editing: false
      });
    }
  };

  handleChangingSelectedGame = (id) => {
    const selectedGame = this.state.mainGameList.filter(game => game.id === id)[0];
    this.setState({selectedGame: selectedGame});
  };

  render() {
    let currentlyVisibleState = false;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <UpdateGameForm game = {this.state.selectedGame} onEditGame = {this.handleEditingGameInList} />
      buttonText = "Return to Game List";}
      else if (this.state.selectedGame != null) {
      currentlyVisibleState = <GameDetail game = {this.state.selectedGame} onClickingDelete = {this.handleDeletingGame} onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Game List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewGameForm onNewGameCreation={this.handleAddingNewGameToList} />
      );
      buttonText = 'Return to Game List';
    } else {
      currentlyVisibleState = <MainGameList gameList={this.props.mainGameList} onGameSelection={this.handleChangingSelectedGame} />;
      buttonText = 'Add Game';
    }
    return (
      <React.Fragment>
        <GameCarousel gameList={this.props.mainGameList} />
        <h4>This splits carousel stuff and game list</h4>
        {currentlyVisibleState}
        <button
          type='button'
          onClick={this.handleShowForm}
          className='btn btn-warning'
        >
          {buttonText}
        </button>
      </React.Fragment>
    );
  }
}

GameControl.propTypes = {
  mainGameList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    mainGameList: state
  }
}

GameControl = connect(mapStateToProps)(GameControl);
export default GameControl;

