import Product from '../product';

import tokens from '../../data/tokens';

export default ({ products, children }) => (
  <div className="product-list">
    <style jsx>{`
      .product-list {
        align-self: center;
        margin-left: auto;
        margin-right: auto;
        max-width: 800px;
        text-align: center;
      }

      .product-list__list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .product-list__item {
        padding-right: 20px;
        width: 50%;
      }

      @media ${tokens.mq.desktop} {
        .product-list__item {
          margin-bottom: 80px;
        }
      }
    `}</style>

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
