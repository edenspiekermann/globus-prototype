import Product from '../product';

import tokens from '../../data/tokens';

export default ({ products }) => (
  <ul className="product-list">
    <style jsx>{`
      .product-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        list-style: none;
        margin: 0;
        width: 75%;
        padding: 0;
      }

      .product-list__item {
        padding-right: 20px;
        width: 50%;
      }

      @media ${tokens.mq.desktop} {
        .product-list__item {
          padding-right: 0;
        }
      }
    `}</style>

    {products.map(_ => (
      <li className="product-list__item">
        <Product {..._} />
      </li>
    ))}
  </ul>
);
