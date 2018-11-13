import * as types from '../actions/actionTypes';

const initialState = {
  movieList: [],
  hearted: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_SUCCESS:
      return {
        ...state,
        movieList: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
