import Button from '../../input/button';
import Dots from '../../dots';

import tokens from '../../../data/tokens';

export default ({ index, image, title, text, type = 'left', location, price, button }) => (
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

      .listicle-item__title {
        font-family: ${tokens.fonts.founders.family};
        font-size: 32px;
        font-weight: ${tokens.fonts.founders.weight.medium};
        line-height: 1;
      }

      .listicle-item__index {
        display: block;
        font-size: 128px;
        font-family: ${tokens.fonts.founders.family};
        font-weight: ${tokens.fonts.founders.weight.medium};
        line-height: 1;
        margin-bottom: 10px;
      }

      .listicle-item--full .listicle-item__image-container {
        width: 100%;
      }

      .listicle-item--right .listicle-item__content {
        text-align: right;
      }

      .listicle-item--left .listicle-item__image-container,
      .listicle-item--right .listicle-item__image-container {
        text-align: center;
        width: 80%;
      }

      @media ${tokens.mq.desktop} {
        .listicle-item--left .listicle-item__image-container,
        .listicle-item--right .listicle-item__image-container {
          width: 65%;
          z-index: 1;
        }

        .listicle-item--left .listicle-item__content,
        .listicle-item--right .listicle-item__content {
          width: 35%;
          z-index: 2;
        }

        .listicle-item--left .listicle-item__content {
          margin-right: -40px;
          padding-left: 60px;
        }

        .listicle-item--right .listicle-item__content {
          margin-left: -40px;
          text-align: right;
        }
      }

      .listicle-item--full .listicle-item__content {
        margin-top: -120px;
        max-width: 60%;
        text-align: center;
      }

      .listicle-item__button {
        transform: translateY(-55%);
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
        margin-top: 5px;
      }

      .listicle-item__meta {
        color: ${tokens.colors.grey};
        font-size: 16px;
        line-height: 1.5;
      }

      .listicle-item__location {
        display: block;
      }

      .listicle-item__price {
        display: block;
      }
    `}</style>

    <div className="listicle-item__image-container">
      <img src={image.url} alt={image.alt} className="listicle-item__image" />

      {button && (
        <div className="listicle-item__button">
          <Button href={button.url} look="window-condensed">
            {button.label}
            <Dots />
          </Button>
        </div>
      )}
    </div>

    <div className="listicle-item__content">
      <h3 className="listicle-item__title">
        <span className="listicle-item__index">{index}</span>
        {title}
      </h3>

      <div className="listicle-item__text">
        {text.map(paragraph => <p className="listicle-item__text-paragraph">{paragraph}</p>)}
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
