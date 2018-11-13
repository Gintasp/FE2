import React from 'react';

import PropTypes from 'prop-types';

import { getImageUrl } from '../../config';

export default class Card extends React.Component {
  constructor() {
    super();

    this.state = {
      opened: false,
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
    const { opened } = this.state;

    this.setState({
      opened: !opened,
    });
  };

  render() {
    const {
      isHearted,
      onAddHeart,
      onRemoveHeart,
      movie: {
        backdrop_path,
        original_title,
        overview,
        release_date,
        vote_average,
        vote_count,
      },
    } = this.props;
    const { opened } = this.state;

    return (
      <div className="card">
        <div
          className="card__image"
          style={{ backgroundImage: `url(${getImageUrl(backdrop_path)})` }}
        />

        <div className="card__title">{original_title}</div>

        <div
          className="card__like"
          onClick={isHearted ? onRemoveHeart : onAddHeart}
        >
          <i className={`fa fa-heart${isHearted ? '' : '-o'}`} />
        </div>

        <div className="card__subtitle">
          <span>{release_date}</span>
          <span>
            {vote_average} ({vote_count} votes)
          </span>
        </div>

        <div className="card-info">
          <div className="card-info__header" onClick={this.toggleSummary}>
            Summary
          </div>

          {opened ? (
            <div className="card-info__description">{overview}</div>
          ) : null}
        </div>
      </div>
    );
  }
}
