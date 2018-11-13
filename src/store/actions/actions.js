import * as types from './actionTypes';

import axios from 'axios';

import { endpoints } from '../../../config';

export const requestMovies = () => {
  return dispatch => {
    axios
      .get(endpoints.mostPopularMovies())
      .then(res => dispatch(requestSuccess(res.data.results)))
      .catch(error => console.log(error));
  };
};

const requestSuccess = data => {
  return {
    type: types.REQUEST_SUCCESS,
    payload: data,
  };
};
