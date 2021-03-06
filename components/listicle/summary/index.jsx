import React from 'react';

import BodyEnd from '../../body-end';
import Button from '../../input/button';
import ShoppingLayer from '../../shopping-layer';

import tokens from '../../../tokens';

export default class extends React.Component {
  state = {
    showShoppingLayer: false
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
      title,
      text,
      type,
      price,
      button,
      image,
      color,
      background,
      shoppingLayer
    } = this.props;

    return (
      <section className="summary">
        <style jsx>{`
          .summary {
            color: ${color};
            display: flex;
            flex-direction: column;
            flex: 0 0 100%;
            position: relative;
          }

          @media ${tokens.mq.tablet} {
            .summary {
              margin-bottom: -80px;
            }
          }

          @media ${tokens.mq.desktop} {
            .summary {
              flex-direction: row;
              padding-bottom: 80px;
              padding-top: 80px;
            }
          }

          .summary::before {
            background-color: ${background};
            content: '';
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            width: 100vw;
          }

          .summary__image-container {
            align-items: center;
            display: flex;
            flex-direction: column;
            order: 1;
            width: 100%;
            z-index: 2;
          }

          @media ${tokens.mq.desktop} {
            .summary__image-container {
              order: 2;
              width: 50%;
              margin-top: 80px;
              flex: 1;
            }
          }

          .summary__button {
            transform: translateY(-50%);
            z-index: 5;
          }

          .summary__content {
            order: 2;
            padding-left: 5%;
            padding-right: 5%;
            padding-top: 20px;
            padding-bottom: 40px;
            z-index: 3;
          }

          @media ${tokens.mq.desktop} {
            .summary__content {
              align-self: flex-start;
              min-width: 240px;
              order: 1;
              padding: 0;
              transform: translateX(30%);
              width: 33.333%;
            }
          }

          .summary__title {
            font-family: ${tokens.fonts.founders.family};
            font-size: 2rem;
            font-weight: ${tokens.fonts.founders.weight.medium};
            line-height: 1;
            margin-bottom: 0;
            margin-top: 0;
          }

          @media ${tokens.mq.large} {
            .summary__title {
              font-size: 3.5rem;
              min-width: 400px;
            }
          }

          .summary__text {
            font-family: ${tokens.fonts.founders.family};
            font-size: 1.25rem;
            line-height: 1.25;
          }

          @media ${tokens.mq.desktop} {
            .summary__text {
              width: 80%; //@gustav TODO
            }
          }

          @media ${tokens.mq.large} {
            .summary__text {
              font-size: calc(1.25rem * 1.125);
            }
          }

          .summary__meta {
            font-family: ${tokens.fonts.founders.family};
            font-size: 1rem;
            line-height: ${20 / 16};
            opacity: 0.6;
          }

          .summary__type {
            display: block;
          }

          .summary__price {
            display: block;
          }
        `}</style>

        <div className="summary__image-container">
          <img src={image.url} alt={image.alt} className="summary__image" />

          {button && (
            <div className="summary__button">
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
                    hide={() => this.toggleShoppingLayer()}
                    coordinates={this.state.shoppingLayerPosition}
                    {...shoppingLayer}
                  />
                </BodyEnd>
              )}
            </div>
          )}
        </div>

        <div className="summary__content">
          <h3 className="summary__title">{title}</h3>
          <div className="summary__text">{text.map(_ => <p>{_}</p>)}</div>

          {(type || price) && (
            <p className="summary__meta">
              {type && <small className="summary__type">{type}</small>}
              {price && <small className="summary__price">CHF {price}</small>}
            </p>
          )}
        </div>
      </section>
    );
  }
}
