import Button from '../../input/button';
import Product from '../../product';

import styles from './styles';

export default ({ title, products }) => (
  <div className="product-list">
    <style jsx>{styles}</style>

    {title && <h2 className="product-list__title">{title}</h2>}

    {products && (
      <>
        <ul className="product-list__list">
          {products.map(_ => (
            <li className="product-list__list-item">
              <Product {..._} />
            </li>
          ))}
        </ul>

        <div className="product-list__all">
          <Button href="#">Alle Whiskys ansehen</Button>
        </div>
      </>
    )}
  </div>
);
