import { Fragment } from 'react';
import Link from 'next/link';

import tokens from '../data/tokens';

export default () => (
  <Fragment>
    <ul className="index">
      <style jsx>{`
        .index {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100vh;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .index__item {
          padding-bottom: 15px;
          padding-top: 15px;
          text-align: center;
          width: 50%;
        }

        .index__item + .index__item {
          border-top: 1px solid #e4e4e4;
        }

        .index__item-link {
          color: black;
          font-family: ${tokens.fonts.gill.family};
          font-size: 34px;
          text-decoration: none;
        }

        .index__item-link:hover,
        .index__item-link:focus {
          text-decoration: underline;
        }
      `}</style>

      <li className="index__item">
        <Link href="/thesis">
          <a className="index__item-link">Thesis</a>
        </Link>
      </li>

      <li className="index__item">
        <Link href="/thesis-shoes">
          <a className="index__item-link">Thesis - Shoes</a>
        </Link>
      </li>

      <li className="index__item">
        <Link href="/listicle">
          <a className="index__item-link">Listicle</a>
        </Link>
      </li>
    </ul>
  </Fragment>
);
