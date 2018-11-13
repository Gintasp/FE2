import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../store/actions';

import Card from './Card';
import Genres from './Genres';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.props.onRequestMovies();
  }

  render() {
    return (
      <React.Fragment>
        <Genres />
        <div className="cards">
          {this.props.movieList
            ? this.props.movieList.map(movie => (
                <Card
                  key={movie.id}
                  isHearted={this.props.hearted.includes(movie.id)}
                  onAddHeart={() => this.props.onAddHeart(movie.id)}
                  onRemoveHeart={() => this.props.onRemoveHeart(movie.id)}
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
  const { movieList, hearted } = state;
  return {
    movieList,
    hearted,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestMovies: () => dispatch(actions.requestMovies()),
    onAddHeart: id => dispatch(actions.addHeart(id)),
    onRemoveHeart: id => dispatch(actions.removeHeart(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
