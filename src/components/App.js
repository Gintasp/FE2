import React from 'react';
import Card from './Card';
import axios from 'axios';
import { endpoints } from '../../config';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movieList: [],
      genreList: [],
    };
  }

  componentDidMount() {
    this.requestPopularMovies();
    this.requestGenreList();
  }

  requestPopularMovies = () => {
    axios
      .get(endpoints.mostPopularMovies())
      .then(response => {
        this.setState({
          movieList: response.data.results,
        });
      })
      .catch(error => console.log(error.response));
  };

  requestGenreList = () => {
    axios
      .get(endpoints.genres())
      .then(response => {
        console.log(response);
        this.setState({
          genreList: response.data.genres,
        });
      })
      .catch(error => console.log(error.response));
  };

  render() {
    const { movieList, genreList } = this.state;

    return (
      <React.Fragment>
        {genreList ? (
          <ul className="genre__list">
            {genreList.map(genre => (
              <li key={genre.id} className="genre__item">
                {genre.name}
              </li>
            ))}
          </ul>
        ) : null}
        {movieList.map(movie => (
          <Card key={movie.id} data={movie} />
        ))}
      </React.Fragment>
    );
  }
}

export default App;
