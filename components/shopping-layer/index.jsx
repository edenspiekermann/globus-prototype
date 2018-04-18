import Product from '../product';

import tokens from '../../data/tokens';

export default ({ products, title, inStock = true, hide = () => {} }) => <div className="shopping-layer">
  <style jsx>{`
    .shopping-layer {
      background-color: white;
      border: 1px solid black;
      padding: 50px;
      position: absolute;
      right: 0;
      top: calc(100% + 35px);
      width: 90vw;
      z-index: 20;
    }

    @media ${tokens.mq.desktop} {
      .shopping-layer {
        width: 40vw;
      }
    }

    .shopping-layer:after,
    .shopping-layer:before {
      border-style: solid;
      content: '';
      display: block;
      height: 0;
      position: absolute;
      right: 40%;
      top: -62px;
      width: 0;
    }

    .shopping-layer:after {
      border-color: transparent transparent white transparent;
      border-width: 30px;
      top: -60px;
    }

    .shopping-layer:before {
      border-color: transparent transparent black transparent;
      border-width: 31px;
    }

    .shopping-layer__close {
      background: transparent;
      border: 0;
      font-family: ${tokens.fonts.gill.family};
      font-size: 14px;
      letter-spacing: .5px;
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
    }

    .shopping-layer__title {
      font-family: ${tokens.fonts.gill.family};
      font-size: 20px;
      text-transform: uppercase;
    }

    .shopping-layer__product-container {
      position: relative;
    }

    .shopping-layer__product-nav-prev,
    .shopping-layer__product-nav-next {
      position: absolute;
      top: 50%;
      transform: translateY(calc(-50% - 50px));
    }

    .shopping-layer__product-nav-prev {
      left: -35px;
    }

    .shopping-layer__product-nav-next {
      right: -35px;
    }

    .shopping-layer__product {
      display: flex;
      list-style: none;
      margin: 30px -15px 0 0;
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
    <p className="shopping-layer__not-in-stock">
      Das Produkt ist leider ausverkauft.
    </p>
  )}

  {title && (
    <strong className="shopping-layer__title">{title}</strong>
  )}

  <div className="shopping-layer__product-container">
    <svg width="18" height="32" xmlns="http://www.w3.org/2000/svg" className="shopping-layer__product-nav-prev">
      <path d="M17 0L1 16l16 16" stroke="#000" fill="none"/>
    </svg>

    <ul className="shopping-layer__product">
      {products.map(_ => <li className="shopping-layer__product-item"><Product {..._} /></li>)}
    </ul>

    <svg width="18" height="32" xmlns="http://www.w3.org/2000/svg"  className="shopping-layer__product-nav-next">
      <path d="M1 0l16 16L1 32" stroke="#000" fill="none"/>
    </svg>
  </div>

</div>;
