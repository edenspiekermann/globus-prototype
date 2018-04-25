import React from 'react';

import BodyEnd from '../body-end';
import Button from '../input/button';
import ShoppingLayer from '../shopping-layer';

import productListData from '../../data/product-list';
import tokens from '../../data/tokens';

export default class extends React.Component {
  state = {
    showShoppingLayer: false,
  };

  toggleShoppingLayer(event) {
    let shoppingLayerPosition = { top: null, left: null };

    if (event) {
      const { target } = event.nativeEvent;
      const rect = target.getBoundingClientRect();
      const bodyRect = document.body.getBoundingClientRect();

      shoppingLayerPosition = {
        top: rect.top - bodyRect.top,
        left: parseInt(rect.left + rect.width / 2, 10),
      };
    }

    this.setState({
      showShoppingLayer: !this.state.showShoppingLayer,
      shoppingLayerPosition,
    });
  }

  render() {
    const { title, text, type, price, button, image, color, background } = this.props;

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
            padding: 0 40px 40px 40px;
          }

          @media ${tokens.mq.desktop} {
            .product-summary {
              flex-direction: row;
              padding: 60px;
            }
          }

          .product-summary__image-container {
            align-items: center;
            display: flex;
            flex-direction: column;
            margin-left: -40px;
            margin-right: -40px;
            order: 1;
          }

          @media ${tokens.mq.desktop} {
            .product-summary__image-container {
              margin-left: -120px;
              margin-right: 0;
              margin-top: 100px;
              order: 2;
            }
          }

          .product-summary__button {
            transform: translateY(-50%);
            z-index: 5;
          }

          .product-summary__content {
            max-width: 500px; // TODO
            order: 2;
            z-index: 2;
          }

          @media ${tokens.mq.desktop} {
            .product-summary__content {
              order: 1;
            }
          }

          .product-summary__title {
            font-family: ${tokens.fonts.founders.family};
            font-size: 32px;
            font-weight: ${tokens.fonts.founders.weight.medium};
            line-height: 1;
            margin-bottom: 0;
            margin-top: 0;
          }

          @media ${tokens.mq.desktop} {
            .product-summary__title {
              font-size: 56px;
            }
          }

          .product-summary__text {
            font-family: ${tokens.fonts.founders.family};
            font-size: 20px;
            line-height: ${24 / 20};
          }

          .product-summary__meta {
            font-family: ${tokens.fonts.founders.family};
            font-size: 16px;
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
          <img src={image.url} alt={image.alt} className="product-summary__image" />
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
          <div className="product-summary__text">{text.map(_ => <p>{_}</p>)}</div>

          {(type || price) && (
            <p className="product-summary__meta">
              {type && <small className="product-summary__type">{type}</small>}
              {price && <small className="product-summary__price">CHF {price}</small>}
            </p>
          )}
        </div>
      </section>
    );
  }
}
