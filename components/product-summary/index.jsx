import Button from '../input/button';

export default ({ title, text, type, price, button, image, color, background }) => (
  <section className="product-summary">
    <style jsx>{`
      .product-summary {
        align-items: center;
        background-color: ${background};
        color: ${color};
        display: flex;
        justify-content: center;
        padding: 60px;
      }

      .product-summary__image-container {
        align-items: center;
        display: flex;
        flex-direction: column;
        margin-left: -120px;
        margin-top: 100px;
        order: 2;
      }

      .product-summary__button {
        transform: translateY(-50%);
      }

      .product-summary__content {
        max-width: 500px; // TODO
        z-index: 2;
      }

      .product-summary__title {
        font-size: 56px;
        line-height: 1.2;
        margin-bottom: 0;
        margin-top: 0;
      }

      .product-summary__text {
        font-size: 20px;
        line-height: 1.45;
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
          <Button href={button.url} look="window-condensed">
            {button.label}
          </Button>
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
