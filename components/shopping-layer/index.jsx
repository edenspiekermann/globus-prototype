import Product from '../product';

import tokens from '../../data/tokens';

export default ({ products, title, inStock = true, hide = () => {}, position = 'center' }) => (
  <div className={`shopping-layer shopping-layer--position-${position}`}>
    <style jsx>{`
      .shopping-layer {
        background-color: white;
        border: 1px solid black;
        padding: 60px 30px 15px 30px;
        position: absolute;
        top: calc(100% + 23px);
        width: 90vw;
        z-index: 20;
      }

      .shopping-layer--position-left {
        left: 0;
        transform: translateX(-15%);
      }

      .shopping-layer--position-right {
        right: 0;
        transform: translateX(15%);
      }

      @media ${tokens.mq.desktop} {
        .shopping-layer {
          padding: 60px 60px 30px 60px;
          width: 50vw;
        }
      }

      .shopping-layer::after,
      .shopping-layer::before {
        border-style: solid;
        content: '';
        display: block;
        height: 0;
        position: absolute;
        top: -40px;
        width: 0;
      }

      .shopping-layer--position-left::after,
      .shopping-layer--position-left::before {
        left: calc(15% + 50px);
      }

      .shopping-layer--position-right::after,
      .shopping-layer--position-right::before {
        right: calc(15% + 50px);
      }

      .shopping-layer::after {
        border-color: transparent transparent white transparent;
        border-width: 19px;
        top: -38px;
      }

      .shopping-layer--position-right::after {
        right: calc(15% + 51px);
      }

      .shopping-layer--position-left::after {
        left: calc(15% + 51px);
      }

      .shopping-layer::before {
        border-color: transparent transparent black transparent;
        border-width: 20px;
      }

      .shopping-layer__close {
        background: transparent;
        border: 0;
        font-family: ${tokens.fonts.gill.family};
        font-size: 14px;
        letter-spacing: 0.5px;
        padding: 5px 10px 1px 10px;
        position: absolute;
        right: 20px;
        text-transform: uppercase;
        top: 20px;
      }

      .shopping-layer__close:hover,
      .shopping-layer__close:focus {
        background-color: #f0f0f0;
        cursor: pointer;
      }

      .shopping-layer__not-in-stock {
        color: #848484;
        font-family: ${tokens.fonts.gill.family};
        font-size: 16px;
        margin-bottom: 5px;
        margin-top: 10px;
        text-align: center;
      }

      .shopping-layer__title {
        color: black;
        display: block;
        font-family: ${tokens.fonts.gill.family};
        font-size: 20px;
        font-weight: ${tokens.fonts.gill.weight.regular};
        text-align: center;
        text-transform: uppercase;
      }

      .shopping-layer__product-container {
        margin-top: 20px;
        position: relative;
      }

      .shopping-layer__product-nav-prev,
      .shopping-layer__product-nav-next {
        position: absolute;
        top: 50%;
        transform: translateY(calc(-50% - 50px));
      }

      .shopping-layer__product-nav-prev {
        left: -25px;
      }

      @media ${tokens.mq.desktop} {
        .shopping-layer__product-nav-prev {
          left: -35px;
        }
      }

      .shopping-layer__product-nav-next {
        right: -25px;
      }

      @media ${tokens.mq.desktop} {
        .shopping-layer__product-nav-next {
          right: -35px;
        }
      }

      .shopping-layer__product {
        display: flex;
        list-style: none;
        margin-bottom: 0;
        margin-right: -20px;
        padding: 0;
      }

      .shopping-layer__product-item {
        padding-right: 20px;
        width: 33.3333%;
      }
    `}</style>

    <button className="shopping-layer__close" onClick={() => hide()}>
      Schließen ×
    </button>

    {!inStock && (
      <p className="shopping-layer__not-in-stock">Das Produkt ist leider ausverkauft.</p>
    )}

    {title && <strong className="shopping-layer__title">{title}</strong>}

    <div className="shopping-layer__product-container">
      <svg
        width="18"
        height="32"
        xmlns="http://www.w3.org/2000/svg"
        className="shopping-layer__product-nav-prev"
      >
        <path d="M17 0L1 16l16 16" stroke="#000" fill="none" />
      </svg>

      <ul className="shopping-layer__product">
        {products.map(_ => (
          <li className="shopping-layer__product-item">
            <Product {..._} />
          </li>
        ))}
      </ul>

      <svg
        width="18"
        height="32"
        xmlns="http://www.w3.org/2000/svg"
        className="shopping-layer__product-nav-next"
      >
        <path d="M1 0l16 16L1 32" stroke="#000" fill="none" />
      </svg>
    </div>
  </div>
);
