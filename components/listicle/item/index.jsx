import React from 'react';

import Badge from '../../badge';
import BodyEnd from '../../body-end';
import Button from '../../input/button';
import ShoppingLayer from '../../shopping-layer';

import styles from './styles';

export default class extends React.Component {
  state = {
    showShoppingLayer: false,
    shoppingLayerPosition: {}
  };

  toggleShoppingLayer(event) {
    let shoppingLayerPosition = { top: null, left: null };
    const windowCallback = windowClickEvent => {
      if (!windowClickEvent.target.closest('.shopping-layer')) {
        this.toggleShoppingLayer();

        setTimeout(() => {
          document.removeEventListener('click', windowCallback);
        });
      }
    };

    if (event) {
      const { target } = event;
      const rect = target.getBoundingClientRect();
      const bodyRect = document.body.getBoundingClientRect();

      shoppingLayerPosition = {
        top: rect.top - bodyRect.top,
        left: parseInt(rect.left + rect.width / 2, 10)
      };
    }

    this.setState(
      {
        showShoppingLayer: !this.state.showShoppingLayer,
        shoppingLayerPosition
      },
      () => {
        document[
          `${this.state.showShoppingLayer ? 'add' : 'remove'}EventListener`
        ]('click', windowCallback);
      }
    );
  }

  render() {
    const {
      index,
      image,
      title,
      text,
      type = 'left',
      location,
      price,
      button,
      badge,
      shoppingLayer
    } = this.props;

    return (
      <div className={`listicle-item listicle-item--${type}`}>
        <style jsx>{styles}</style>

        <div className="listicle-item__image-container">
          {badge && (
            <div className="listicle-item__badge">
              <Badge text={badge} />
            </div>
          )}

          <img
            src={image.url}
            alt={image.alt}
            className="listicle-item__image"
          />

          {button && (
            <div className="listicle-item__button">
              <Button
                href={button.url}
                look="window-condensed"
                modifier={this.state.showShoppingLayer ? 'open' : null}
                onClick={event => {
                  event.preventDefault();
                  event.nativeEvent.stopImmediatePropagation();
                  this.toggleShoppingLayer(event);
                }}
              >
                {button.label}
              </Button>

              {this.state.showShoppingLayer && (
                <BodyEnd>
                  <ShoppingLayer
                    hide={event => this.toggleShoppingLayer(event)}
                    coordinates={this.state.shoppingLayerPosition}
                    {...shoppingLayer}
                  />
                </BodyEnd>
              )}
            </div>
          )}
        </div>

        <div className="listicle-item__content">
          <h3 className="listicle-item__title">
            <span className="listicle-item__index">{index}</span>
            {title}
          </h3>

          <div className="listicle-item__text">
            {text.map(paragraph => (
              <p className="listicle-item__text-paragraph" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          {(location || price) && (
            <p className="listicle-item__meta">
              {location && (
                <small className="listicle-item__location">{location}</small>
              )}
              {price && (
                <small className="listicle-item__price">CHF {price}</small>
              )}
            </p>
          )}
        </div>
      </div>
    );
  }
}
