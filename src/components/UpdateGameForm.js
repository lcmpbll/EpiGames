import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function UpdateGameForm(props) {
  const { game } = props;

  function handleUpdateGameFormSubmission(event) {
    event.preventDefault();
    props.onEditGame({
      title: event.target.title.value,
      img: event.target.img.value,
      rating: parseInt(event.target.rating.value),
      price: parseInt(event.target.price.value),
      featured: event.target.featured.value,
      platforms: event.target.platforms.value,
      id: game.id
    })
    console.log('You updated the game: ' + event.target.title.value);
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleUpdateGameFormSubmission}
      buttonText='Update Game'/>
    </React.Fragment>
  );
}

UpdateGameForm.propTypes = {
    onEditGame: PropTypes.func,
  game: PropTypes.object
};

export default UpdateGameForm;
