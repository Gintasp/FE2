import React from 'react';
import Card from './Card';

import axios from 'axios';

import { endpoints } from '../../config';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieList: [],
      genreList: [],
      liked: [],
    };
  }

  onHeartClick = id => {
    const arr = this.state.liked;

    if (arr.length != 0) {
      arr.map(likedId => {
        if (likedId == id) {
          arr.splice(arr.indexOf(id), 1);
        } else {
          arr.push(id);
        }
      });
    } else {
      arr.push(id);
    }

    this.setState({
      liked: arr,
    });
  };

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
        this.setState({
          genreList: response.data.genres,
        });
      })
      .catch(error => console.log(error.response));
  };

  filterMovies = id => {
    axios
      .get(endpoints.genreMovies(id))
      .then(response => {
        console.log(response);
        this.setState({
          movieList: response.data.results,
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    const { movieList, genreList, liked } = this.state;

    return (
      <React.Fragment>
        {genreList ? (
          <ul className="genre__list">
            {genreList.map(genre => (
              <li
                onClick={() => this.filterMovies(genre.id)}
                key={genre.id}
                className="genre__item"
              >
                {genre.name}
              </li>
            ))}
          </ul>
        ) : null}
        {movieList.map(movie => (
          <Card
            onClick={() => this.onHeartClick(movie.id)}
            key={movie.id}
            movieId={movie.id}
            data={movie}
            liked={liked}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default App;
