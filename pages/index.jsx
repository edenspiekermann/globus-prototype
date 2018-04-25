import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import tokens from '../data/tokens';

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
        font-size: 22px;
        margin-bottom: 40px;
        margin-top: 0;
        max-width: 200px;
        text-align: center;
        text-transform: uppercase;
      }

      @media ${tokens.mq.desktop} {
        .index__title {
          font-size: 34px;
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
        font-size: 24px;
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

    <Head>
      <title>Globus - Available templates</title>
      <link rel="icon" href="/static/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <div className="index">
      <h1 className="index__title">Verfügbare Templates:</h1>

      <ul className="index__list">
        <li className="index__item">
          <Link href="/thesis">
            <a className="index__item-link">Thesis</a>
          </Link>
        </li>

        <li className="index__item">
          <Link href="/thesis-shoes">
            <a className="index__item-link">Thesis + Shoes</a>
          </Link>
        </li>

        <li className="index__item">
          <Link href="/listicle">
            <a className="index__item-link">Listicle</a>
          </Link>
        </li>

        <li className="index__item">
          <Link href="/listicle-wine">
            <a className="index__item-link">Listicle + Wine</a>
          </Link>
        </li>
      </ul>
    </div>
  </Fragment>
);
