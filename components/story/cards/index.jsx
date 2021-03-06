import React from 'react';
import Card from './card';

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

    if (prevCard < 0) {
      prevCard = this.props.cards.length - 1;
    }

    this.setState({ activeCard: prevCard });
  }

  handleTouchStart(event) {
    this.touchStartX = event.touches[0].clientX;
  }

  handleTouchEnd(event) {
    const touchEndX = event.changedTouches[0].clientX;

    if (touchEndX <= this.touchStartX) {
      this.next();
    } else {
      this.previous();
    }
  }

  render() {
    const { cards, category } = this.props;

    return (
      <div
        className="cards"
        onTouchStart={event => this.handleTouchStart(event)}
        onTouchEnd={event => this.handleTouchEnd(event)}
      >
        <style jsx>{styles}</style>

        <h2 className="cards__category">{category}</h2>

        <div className="cards__cards">
          <ul className="cards__cards-track">
            {cards.map((_, i) => (
              <Card
                key={i}
                index={i}
                cardsLength={cards.length}
                activeCard={this.state.activeCard}
                {..._}
              />
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
