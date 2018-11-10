import React from 'react';

import PropTypes from 'prop-types';

import { getImageUrl } from '../../config';

class Card extends React.Component {
  constructor() {
    super();

    this.state = {
      summaryShowing: false,
    };
  }

  checkLiked = (liked, id) => {
    let result = 'fa fa-heart-o';
    liked.map(movieId => {
      if (movieId == id) {
        result = 'fa fa-heart';
      }
    });

    return result;
  };

  toggleSummary = () => {
    const { summaryShowing } = this.state;

    this.setState({
      summaryShowing: !summaryShowing,
    });
  };

  render() {
    const { summaryShowing } = this.state;
    const {
      data: {
        poster_path,
        original_title,
        overview,
        release_date,
        vote_average,
        vote_count,
      },
    } = this.props;

    return (
      <div className="card">
        <div
          className="card__image"
          style={{ backgroundImage: `url(${getImageUrl(poster_path)})` }}
        />

        <div className="card__title">{original_title}</div>

        <div onClick={this.props.onClick} className="card__like">
          <i
            className={this.checkLiked(this.props.liked, this.props.movieId)}
          />
        </div>

        <div className="card__subtitle">
          <span>{release_date}</span>
          <span>
            {vote_average} ({vote_count} votes)
          </span>
        </div>

        {summaryShowing ? (
          <div className="card-info">
            <div className="card-info__header">Summary</div>
            <div className="card-info__description">{overview}</div>
          </div>
        ) : null}

        <div className="button" onClick={() => this.toggleSummary()}>
          Show summary
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  liked: PropTypes.array,
  movieId: PropTypes.number,
};

export default Card;
