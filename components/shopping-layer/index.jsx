import Product from '../product';

import tokens from '../../tokens';

export default ({
  products,
  title,
  inStock = true,
  hide = () => {},
  position = 'center',
  coordinates
}) => (
  <div
    className={`shopping-layer shopping-layer--position-${position}`}
    style={{ top: coordinates.top }}
  >
    <style jsx>{`
      .shopping-layer {
        position: absolute;
        transform: translateY(60px);
        width: 100%;
        z-index: 5;
      }

      .shopping-layer::after,
      .shopping-layer::before {
        border-style: solid;
        content: '';
        display: block;
        height: 0;
        position: absolute;
        transform: translateX(-15px);
        top: -30px;
        width: 0;
      }

      .shopping-layer::after {
        border-color: transparent transparent white transparent;
        border-width: 19px;
        left: ${coordinates.left}px;
        top: -28px;
      }

      .shopping-layer::before {
        border-color: transparent transparent black transparent;
        border-width: 20px;
        left: ${coordinates.left - 1}px;
      }

      .shopping-layer__overlay {
        background-color: white;
        border: 1px solid black;
        left: 50%;
        margin-top: 9px;
        padding: 60px 35px 15px 35px;
        position: absolute;
        transform: translateX(-50%);
        width: 100%;
      }

      @media ${tokens.mq.desktop} {
        .shopping-layer__overlay {
          padding: 40px 60px 30px 60px;
          width: 70%;
        }
      }

      .shopping-layer__close {
        background: transparent;
        border: 0;
        font-family: ${tokens.fonts.gill.family};
        font-size: 14px;
        left: 50%;
        letter-spacing: 0.5px;
        padding: 5px 25px 1px 10px;
        position: absolute;
        text-transform: uppercase;
        top: 20px;
        transform: translateX(-50%);
      }

      @media ${tokens.mq.tablet} {
        .shopping-layer__close {
          left: auto;
          right: 20px;
          transform: none;
        }
      }

      .shopping-layer__close:hover,
      .shopping-layer__close:focus {
        text-decoration: underline;
      }

      .shopping-layer__close::after {
        content: '×';
        font-family: ${tokens.fonts.gill.family};
        font-size: 28px;
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(calc(-50% + 4px));
      }

      .shopping-layer__not-in-stock {
        color: #848484;
        font-family: ${tokens.fonts.gill.family};
        font-size: 14px;
        margin-bottom: 5px;
        margin-top: 0px;
        text-align: center;
      }

      @media ${tokens.mq.desktop} {
        .shopping-layer__not-in-stock {
          font-size: 16px;
          margin-top: 10px;
        }
      }

      .shopping-layer__title {
        color: black;
        display: block;
        font-family: ${tokens.fonts.gill.family};
        font-size: 16px;
        font-weight: ${tokens.fonts.gill.weight.regular};
        text-align: center;
        text-transform: uppercase;
      }

      @media ${tokens.mq.desktop} {
        .shopping-layer__title {
          font-size: 20px;
        }
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
        left: -28px;
      }

      @media ${tokens.mq.desktop} {
        .shopping-layer__product-nav-prev {
          left: -35px;
        }
      }

      .shopping-layer__product-nav-next {
        right: -28px;
      }

      @media ${tokens.mq.desktop} {
        .shopping-layer__product-nav-next {
          right: -35px;
        }
      }

      .shopping-layer__product {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        margin-bottom: 0;
        margin-right: -20px;
        padding: 0;
      }

      .shopping-layer__product-item {
        margin-bottom: 20px;
        padding-right: 20px;
        width: 50%;
      }

      @media ${tokens.mq.desktop} {
        .shopping-layer__product-item {
          margin-bottom: 0;
          width: 33.3333%;
        }
      }

      .shopping-layer__product-item:last-child {
        display: none;
      }

      @media ${tokens.mq.desktop} {
        .shopping-layer__product-item:last-child {
          display: block;
        }
      }
    `}</style>

    <div className="shopping-layer__overlay">
      <button className="shopping-layer__close" onClick={() => hide()}>
        Schließen
      </button>

      {!inStock && (
        <p className="shopping-layer__not-in-stock">
          Das Produkt ist leider ausverkauft.
        </p>
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
  </div>
);
