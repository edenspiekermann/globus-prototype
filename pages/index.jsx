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
        height: 100vh;
      }

      .index__title {
        color: black;
        font-family: ${tokens.fonts.gill.family};
        font-size: 20px;
        margin-bottom: 48px;
        margin-top: 0;
        max-width: 200px;
        font-weight: normal;
      }

      @media ${tokens.mq.desktop} {
        .index__title {
          font-size: 48px;
          max-width: none;
        }
      }

      .index__list {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
      }

      .index__list + .index__title {
        margin-top: 60px;
      }

      .index__item {
        padding-bottom: 15px;
        padding-top: 15px;
        width: 50%;
      }

      .index__item + .index__item {
        border-top: 1px solid #e4e4e4;
      }

      .index__item-link {
        color: black;
        font-family: ${tokens.fonts.gill.family};
        font-size: 18px;
        text-decoration: none;
      }

      @media ${tokens.mq.desktop} {
        .index__item-link {
          font-size: 34px;
        }
      }

      .index__item-link:hover,
      .index__item-link:focus {
        text-decoration: underline;
      }
    `}</style>

    <PageHead title="Templates mit Beispiel-Content" />

    <div className="index">
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
      </ul>
    </div>
  </Fragment>
);
