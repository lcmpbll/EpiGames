const reducer = (state = {}, action) => {
  const { title, img, rating, price, featured, platforms, id } = action;
  switch (action.type) {
    case 'ADD_GAME':
      return Object.assign({}, state, {
        [id]: {
          title: title,
          img: img,
          rating: rating,
          price: price,
          featured: featured,
          platforms: platforms,
          id: id
        }
      });
    default: 
      return state;
  }
};


export default reducer;