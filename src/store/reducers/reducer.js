import * as types from '../actions/actionTypes';

const initialState = {
  movieList: [],
  hearted: [],
  genres: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_SUCCESS:
      return {
        ...state,
        movieList: action.payload,
      };
    case types.REQUEST_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload,
      };
    case types.REQUEST_GENRES_MOVIES_SUCCESS:
      return {
        ...state,
        movieList: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
