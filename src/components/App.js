import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../store/actions';

import Card from './Card';
import Genres from './Genres';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hearted: [],
    };

    this.props.onRequestMovies();
  }

  addHeart = id => {
    const { hearted } = this.state;

    this.setState({
      hearted: [...hearted, id],
    });
  };

  removeHeart = id => {
    const { hearted } = this.state;

    this.setState({
      hearted: hearted.filter(currentId => currentId !== id),
    });
  };

  render() {
    const { hearted } = this.state;

    return (
      <React.Fragment>
        <Genres />

        <div className="cards">
          {this.props.movieList
            ? this.props.movieList.map(movie => (
                <Card
                  key={movie.id}
                  isHearted={hearted.includes(movie.id)}
                  onAddHeart={() => this.addHeart(movie.id)}
                  onRemoveHeart={() => this.removeHeart(movie.id)}
                  movie={movie}
                />
              ))
            : null}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { movieList } = state;
  return {
    movieList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestMovies: () => dispatch(actions.requestMovies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
