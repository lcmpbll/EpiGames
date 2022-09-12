import gameListReducer from '../reducers/game-list-reducer';

describe('reducer', () => {
  let action;
  const gameData = {
    title: 'game of the year',
    img: 'img.jpeg',
    rating: 4, 
    price: 3,
    featured: false,
    platforms: 'sony',
    id: 1
  };
  
  test('should add a new game to the main game list', () => {
    const { title, img, rating, price, featured, platforms, id } = gameData;
    action= {
      type: 'ADD_GAME',
      title: title,
      img: img,
      rating: rating,
      price: price, 
      featured: featured,
      platforms: platforms,
      id: id
    };
    expect(gameListReducer({}, action)).toEqual({
      [id] : {
      title: title,
      img: img,
      rating: rating,
      price: price, 
      featured: featured,
      platforms: platforms,
      id: id
      }
    }) 
  })
});