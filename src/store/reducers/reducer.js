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
    case types.ADD_HEART:
      return {
        ...state,
        hearted: [...state.hearted, action.payload],
      };
    case types.REMOVE_HEART:
      return {
        ...state,
        hearted: state.hearted.filter(currId => currId !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
