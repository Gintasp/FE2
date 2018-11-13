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

export const requestGenresMovies = id => {
  return dispatch => {
    axios
      .get(endpoints.genreMovies(id))
      .then(res => dispatch(requestGenresMoviesSuccess(res.data.results)))
      .catch(error => console.log(error));
  };
};

const requestGenresMoviesSuccess = data => {
  return {
    type: types.REQUEST_GENRES_MOVIES_SUCCESS,
    payload: data,
  };
};

export const requestGenres = () => {
  return dispatch => {
    axios
      .get(endpoints.genres())
      .then(res => dispatch(requestGenresSuccess(res.data.genres)))
      .catch(error => console.log(error));
  };
};

const requestGenresSuccess = data => {
  return {
    type: types.REQUEST_GENRES_SUCCESS,
    payload: data,
  };
};

export const addHeart = id => {
  return {
    type: types.ADD_HEART,
    payload: id,
  };
};

export const removeHeart = id => {
  return {
    type: types.REMOVE_HEART,
    payload: id,
  };
};
