import Product from '../product';

import styles from './styles';

export default ({ products, children }) => (
  <div className="product-list">
    <style jsx>{styles}</style>

    <ul className="product-list__list">
      {products.map(_ => (
        <li className="product-list__item">
          <Product {..._} />
        </li>
      ))}
    </ul>

    {children}
  </div>
);
