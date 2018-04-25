import React from 'react';

import Badge from '../../badge';
import BodyEnd from '../../body-end';
import Button from '../../input/button';
import ShoppingLayer from '../../shopping-layer';

import productListData from '../../../data/product-list';
import tokens from '../../../tokens';

export default class extends React.Component {
  state = {
    showShoppingLayer: false,
    shoppingLayerPosition: {},
  };

  toggleShoppingLayer(event) {
    let position;

    if (event) {
      const { target } = event.nativeEvent;
      const rect = target.getBoundingClientRect();
      const bodyRect = document.body.getBoundingClientRect();

      position = {
        top: rect.top - bodyRect.top,
        left: parseInt(rect.left + rect.width / 2, 10),
      };
    }

    this.setState({
      showShoppingLayer: !this.state.showShoppingLayer,
      shoppingLayerPosition: position,
    });
  }

  render() {
    const { index, image, title, text, type = 'left', location, price, button, badge } = this.props;

    return (
      <div className={`listicle-item listicle-item--${type}`}>
        <style jsx>{`
          .listicle-item {
            display: flex;
          }

          .listicle-item--full {
            align-items: center;
            flex-direction: column;
          }

          .listicle-item--left,
          .listicle-item--right {
            flex-direction: column;
          }

          @media ${tokens.mq.desktop} {
            .listicle-item--left,
            .listicle-item--right {
              align-items: center;
              flex-direction: row;
            }
          }

          @media ${tokens.mq.desktop} {
            .listicle-item--right .listicle-item__image-container,
            .listicle-item--left .listicle-item__content {
              order: 1;
            }

            .listicle-item--right .listicle-item__content,
            .listicle-item--left .listicle-item__image-container {
              order: 2;
            }
          }

          .listicle-item__badge {
            position: absolute;
            top: 0;
            transform: translateY(-50%);
          }

          .listicle-item--full .listicle-item__badge {
            left: 40px;
          }

          @media ${tokens.mq.desktop} {
            .listicle-item--full .listicle-item__badge {
              left: 60px;
            }
          }

          .listicle-item--left .listicle-item__badge {
            right: 40px;
          }

          @media ${tokens.mq.desktop} {
            .listicle-item--left .listicle-item__badge {
              right: 60px;
            }
          }

          .listicle-item__title {
            font-family: ${tokens.fonts.founders.family};
            font-size: 32px;
            font-weight: ${tokens.fonts.founders.weight.medium};
            line-height: 1;
            margin-bottom: 20px;
            margin-top: 0;
          }

          .listicle-item__index {
            display: block;
            font-size: 108px;
            font-family: ${tokens.fonts.founders.family};
            font-weight: ${tokens.fonts.founders.weight.medium};
            line-height: 1;
            margin-bottom: 10px;
          }

          @media ${tokens.mq.tablet} {
            .listicle-item__index {
              font-size: 118px;
            }
          }

          @media ${tokens.mq.desktop} {
            .listicle-item__index {
              font-size: 128px;
            }
          }

          .listicle-item__content {
            position: relative;
            padding-left: 5%;
            padding-right: 5%;
            margin-top: -120px;
          }

          @media ${tokens.mq.desktop} {
            .listicle-item__content {
              padding-left: 0;
              padding-right: 0;
              margin-top: 0;
            }
          }

          .listicle-item__image-container {
            position: relative;
          }

          .listicle-item--full .listicle-item__image-container {
            width: 100%;
          }

          .listicle-item--right .listicle-item__content {
            text-align: right;
          }

          .listicle-item--left .listicle-item__image-container {
            align-self: flex-end;
          }

          .listicle-item--left .listicle-item__image-container,
          .listicle-item--right .listicle-item__image-container {
            text-align: center;
            width: calc(100% / 3 * 2);
          }

          @media ${tokens.mq.desktop} {
            .listicle-item--left .listicle-item__content,
            .listicle-item--right .listicle-item__content {
              z-index: 2;
              width: calc(100% / 3);
              min-width: 240px;
            }

            .listicle-item--left .listicle-item__content {
              transform: translateX(30%);
            }

            .listicle-item--right .listicle-item__content {
              transform: translateX(-30%);
              text-align: right;
            }
          }

          .listicle-item--full .listicle-item__content {
            margin-top: -80px;
            position: relative;
            text-align: center;
          }

          @media ${tokens.mq.tablet} {
            .listicle-item--full .listicle-item__content {
              max-width: 80%;
            }
          }

          @media ${tokens.mq.desktop} {
            .listicle-item--full .listicle-item__content {
              max-width: 65%;
            }
          }

          .listicle-item__button {
            display: inline-flex;
            position: relative;
            transform: translateY(-55%);
            z-index: 20;
          }

          .listicle-item__text {
            font-family: ${tokens.fonts.founders.family};
            font-size: 20px;
            line-height: ${24 / 20};
          }

          .listicle-item__text-paragraph {
            margin-bottom: 0;
            margin-top: 0;
          }

          .listicle-item__text-paragraph + .listicle-item__text-paragraph {
            margin-top: 15px;
          }

          .listicle-item__meta {
            color: ${tokens.colors.grey};
            font-family: ${tokens.fonts.founders.family};
            font-size: 16px;
            line-height: ${20 / 16};
          }

          .listicle-item__location {
            display: block;
          }

          .listicle-item__price {
            display: block;
          }
        `}</style>

        <div className="listicle-item__image-container">
          {badge && (
            <div className="listicle-item__badge">
              <Badge text={badge} />
            </div>
          )}

          <img src={image.url} alt={image.alt} className="listicle-item__image" />

          {button && (
            <div className="listicle-item__button">
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
                <BodyEnd>
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
              {location && <small className="listicle-item__location">{location}</small>}
              {price && <small className="listicle-item__price">CHF {price}</small>}
            </p>
          )}
        </div>
      </div>
    );
  }
}
