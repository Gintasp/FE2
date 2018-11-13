import React from 'react';

import { connect } from 'react-redux';

import * as actions from '../store/actions';

class Genres extends React.Component {
  constructor(props) {
    super(props);

    this.props.onRequestGenres();
  }

  render() {
    return (
      <div className="genres">
        {this.props.genres
          ? this.props.genres.map(genre => (
              <div
                key={genre.id}
                className="genre"
                onClick={() => this.props.onRequestGenresMovies(genre.id)}
              >
                {genre.name}
              </div>
            ))
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { genres } = state;
  return {
    genres,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestGenresMovies: id => dispatch(actions.requestGenresMovies(id)),
    onRequestGenres: () => dispatch(actions.requestGenres()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Genres);
