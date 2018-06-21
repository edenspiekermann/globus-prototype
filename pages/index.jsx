import { Fragment } from 'react';
import Link from 'next/link';

import PageHead from '../components/page-head';

import tokens from '../tokens';

export default () => (
  <Fragment>
    <style jsx>{`
      .index {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100vh;
        padding: 40px;
      }

      .index__title {
        color: black;
        font-family: ${tokens.fonts.gill.family};
        font-size: 20px;
        margin-bottom: 10px;
        margin-top: 0;
        font-weight: normal;
      }

      @media ${tokens.mq.desktop} {
        .index__title {
          font-size: 26px;
        }
      }

      .index__list {
        border-left: 1px solid #d2d2d2;
        list-style: none;
        margin: 0 0 0 5px;
        padding: 0 0 0 20px;
      }

      .index__list + .index__title {
        margin-top: 45px;
      }

      .index__item {
        padding-bottom: 7px;
        padding-top: 7px;
        width: 100%;
      }

      .index__item-link {
        color: black;
        font-family: ${tokens.fonts.gill.family};
        font-size: 18px;
        text-decoration: none;
      }

      .index__item-link:hover,
      .index__item-link:focus {
        text-decoration: underline;
      }
    `}</style>

    <PageHead title="Templates mit Beispiel-Content" />

    <div className="index">
      <div className="index__container">
        <h1 className="index__title">Templates Gefäßkomplex 1</h1>

        <ul className="index__list">
          <li className="index__item">
            <Link href="/thesis">
              <a className="index__item-link">These 01: Flowershirts</a>
            </Link>
          </li>

          <li className="index__item">
            <Link href="/thesis-shoes">
              <a className="index__item-link">These 02: Cowboy-Boots</a>
            </Link>
          </li>
          
          <li className="index__item">
            <Link href="/thesis-logomania">
              <a className="index__item-link">These 03: Logomania</a>
            </Link>
          </li>
          
          <li className="index__item">
            <Link href="/thesis-schmoren">
              <a className="index__item-link">These 04: Schmoren</a>
            </Link>
          </li>

          <li className="index__item">
            <Link href="/listicle">
              <a className="index__item-link">
                Listicle 01: 7 Gründe für mehr Kalifornien
              </a>
            </Link>
          </li>

          <li className="index__item">
            <Link href="/listicle-wine">
              <a className="index__item-link">
                Listicle 02: 6 kalifornische Weine
              </a>
            </Link>
          </li>
        </ul>

        <h1 className="index__title">Templates Gefäßkomplex 2</h1>

        <ul className="index__list">
          <li className="index__item">
            <Link href="/in-the-mood">
              <a className="index__item-link">
                In the mood 01: Under the desert sun
              </a>
            </Link>
          </li>
          <li className="index__item">
            <Link href="/in-the-mood-market">
              <a className="index__item-link">In the mood 02: Farmers Markets</a>
            </Link>
          </li>
          <li className="index__item">
            <Link href="/in-the-mood-smartcity">
              <a className="index__item-link">In the mood 03: Smart City</a>
            </Link>
          </li>
          <li className="index__item">
            <Link href="/in-the-mood-studio">
              <a className="index__item-link">In the mood 04: Globus Studio</a>
            </Link>
          </li>
        </ul>

        <h1 className="index__title">Templates Gefäßkomplex 3</h1>

        <ul className="index__list">
          <li className="index__item">
            <Link href="/story">
              <a className="index__item-link">
                Story 01: Canadian Whisky's Long-Awaited Comeback
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </Fragment>
);
