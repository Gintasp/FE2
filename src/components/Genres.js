import React from 'react';
import axios from 'axios';
import { endpoints } from '../../config';

export default class Genres extends React.Component {
  constructor() {
    super();

    this.state = {
      genres: [],
    };

    this.requestGenres();
  }

  requestGenres = () => {
    axios
      .get(endpoints.genres())
      .then((res) => this.setGenreList(res.data.genres))
      .catch((error) => console.log(error));
  };

  requestGenresMovies = (id) => {
    const { onChangeList } = this.props;

    axios
      .get(endpoints.genreMovies(id))
      .then((res) => onChangeList(res.data.results))
      .catch((error) => console.log(error));
  };

  setGenreList = (genres) => {
    this.setState({
      genres,
    })
  };

  render() {
    const { genres } = this.state;

    return (
      <div className="genres">
        {genres.map((genre) => (
          <div key={genre.id} className="genre" onClick={() => this.requestGenresMovies(genre.id)}>
            {genre.name}
          </div>
        ))}
      </div>
    );
  }
}
