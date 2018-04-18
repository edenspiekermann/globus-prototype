import tokens from '../../data/tokens';

export default ({ image, title, type, price }) => (
  <div className="product">
    <style jsx>{`
      .product {
        font-family: ${tokens.fonts.gill.family};
        text-align: center;
      }

      .product__title {
        text-transform: uppercase;
      }

      .product__type {
        display: block;
        font-weight: normal;
        text-transform: none;
      }

      .product__price {
        display: block;
        font-weight: normal;
        margin-top: 10px;
        text-transform: none;
      }
    `}</style>

    <img src={image.url} alt={image.alt} />

    <h3 className="product__title">
      {title}

      <small className="product__type">{type}</small>
      <span className="product__price">CHF {price}</span>
    </h3>
  </div>
);
