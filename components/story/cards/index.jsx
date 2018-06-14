import React from 'react';

import styles from './styles';

export default class Cards extends React.Component {
  state = {
    activeCard: 0
  };

  next() {
    let nextCard = this.state.activeCard + 1;

    if (nextCard + 1 > this.props.cards.length) {
      nextCard = 0;
    }

    this.setState({ activeCard: nextCard });
  }

  previous() {
    let prevCard = this.state.activeCard - 1;

    if (prevCard - 1 < 0) {
      prevCard = this.props.cards.length;
    }

    this.setState({ activeCard: prevCard });
  }

  render() {
    const { cards, category } = this.props;

    return (
      <div className="cards">
        <style jsx>{styles}</style>

        <h2 className="cards__category">{category}</h2>

        <div className="cards__cards">
          <ul className="cards__cards-track">
            {cards.map((_, i) => (
              <li
                key={i}
                className={`cards__card ${
                  i === this.state.activeCard ? 'cards__card--is-active' : ''
                }`}
              >
                <h3 className="cards__card-title">
                  {_.title}{' '}
                  <small className="cards__card-counter">
                    {i + 1} / {cards.length}
                  </small>
                </h3>

                <div className="cards__card-content">
                  {/* eslint-disable react/no-danger */}
                  {_.content.map((p, pi) => (
                    <p key={pi} dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                  {/* eslint-enable react/no-danger */}
                </div>
              </li>
            ))}
          </ul>

          <div className="cards__controls">
            <button
              className="cards__controls-control"
              type="button"
              onClick={() => this.previous()}
            >
              <svg
                className="cards__controls-control-arrow"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
              </svg>
            </button>

            <button
              className="cards__controls-control"
              type="button"
              onClick={() => this.next()}
            >
              <svg
                className="cards__controls-control-arrow"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
