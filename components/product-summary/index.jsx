import React from 'react';

import BodyEnd from '../body-end';
import Button from '../input/button';
import ShoppingLayer from '../shopping-layer';

import productListData from '../../data/product-list';
import tokens from '../../tokens';

export default class extends React.Component {
  state = {
    showShoppingLayer: false
  };

  toggleShoppingLayer(event) {
    let shoppingLayerPosition = { top: null, left: null };

    if (event) {
      const { target } = event.nativeEvent;
      const rect = target.getBoundingClientRect();
      const bodyRect = document.body.getBoundingClientRect();

      shoppingLayerPosition = {
        top: rect.top - bodyRect.top,
        left: parseInt(rect.left + rect.width / 2, 10)
      };
    }

    this.setState({
      showShoppingLayer: !this.state.showShoppingLayer,
      shoppingLayerPosition
    });
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
      background
    } = this.props;

    return (
      <section className="product-summary">
        <style jsx>{`
          .product-summary {
            align-items: center;
            background-color: ${background};
            color: ${color};
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          @media ${tokens.mq.desktop} {
            .product-summary {
              flex-direction: row;
              padding-top: 80px;
              padding-bottom: 80px;
            }
          }

          .product-summary__image-container {
            align-items: center;
            display: flex;
            flex-direction: column;
            order: 1;
            width: 100%;
          }

          @media ${tokens.mq.desktop} {
            .product-summary__image-container {
              order: 2;
              width: calc(100% / 2);
              margin-top: 80px;
              transform: translateX(-7.5%);
            }
          }

          .product-summary__button {
            transform: translateY(-50%);
            z-index: 5;
          }

          .product-summary__content {
            order: 2;
            z-index: 2;
            padding-left: 5%;
            padding-right: 5%;
            padding-top: 20px;
            padding-bottom: 40px;
          }

          @media ${tokens.mq.desktop} {
            .product-summary__content {
              order: 1;
              width: calc(100% / 3);
              min-width: 240px;
              padding: 0;
              transform: translateX(7.5%);
              align-self: flex-start;
            }
          }

          .product-summary__title {
            font-family: ${tokens.fonts.founders.family};
            font-size: 2rem;
            font-weight: ${tokens.fonts.founders.weight.medium};
            line-height: 1;
            margin-bottom: 0;
            margin-top: 0;
          }

          @media ${tokens.mq.large} {
            .product-summary__title {
              font-size: 3.5rem;
            }
          }

          .product-summary__text {
            font-family: ${tokens.fonts.founders.family};
            font-size: 1.25rem;
            line-height: 1.25;
          }

          @media ${tokens.mq.desktop} {
            .product-summary__text {
              width: 80%; //@gustav TODO
            }
          }

          @media ${tokens.mq.large} {
            .product-summary__text {
              font-size: calc(1.25rem * 1.125);
            }
          }

          .product-summary__meta {
            font-family: ${tokens.fonts.founders.family};
            font-size: 1rem;
            line-height: ${20 / 16};
            opacity: 0.6;
          }

          .product-summary__type {
            display: block;
          }

          .product-summary__price {
            display: block;
          }
        `}</style>

        <div className="product-summary__image-container">
          <img
            src={image.url}
            alt={image.alt}
            className="product-summary__image"
          />
          {button && (
            <div className="product-summary__button">
              <Button
                href={button.url}
                look="window-condensed"
                modifier={this.state.showShoppingLayer ? 'open' : null}
                onClick={event => {
                  event.preventDefault();
                  this.toggleShoppingLayer(event);
                }}
              >
                {button.label}
              </Button>

              {this.state.showShoppingLayer && (
                <BodyEnd onBodyClick={() => this.toggleShoppingLayer()}>
                  <ShoppingLayer
                    hide={() => this.toggleShoppingLayer()}
                    products={productListData[0].products.slice(0, 3)}
                    title="Das könnte Ihnen auch gefallen"
                    inStock={false}
                    coordinates={this.state.shoppingLayerPosition}
                  />
                </BodyEnd>
              )}
            </div>
          )}
        </div>

        <div className="product-summary__content">
          <h3 className="product-summary__title">{title}</h3>
          <div className="product-summary__text">
            {text.map(_ => <p>{_}</p>)}
          </div>

          {(type || price) && (
            <p className="product-summary__meta">
              {type && <small className="product-summary__type">{type}</small>}
              {price && (
                <small className="product-summary__price">CHF {price}</small>
              )}
            </p>
          )}
        </div>
      </section>
    );
  }
}
