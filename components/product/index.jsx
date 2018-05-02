import styles from './styles';

export default ({ image, title, type, price }) => (
  <div className="product">
    <style jsx>{styles}</style>

    <img src={image.url} alt={image.alt} />

    <h3 className="product__title">
      {title}

      <small className="product__type">{type}</small>
      <span className="product__price">CHF {price}</span>
    </h3>
  </div>
);
