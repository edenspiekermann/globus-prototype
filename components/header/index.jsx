import Link from 'next/link';

import data from './data';
import tokens from '../../data/tokens';

export default () => (
  <header className="header">
    <style jsx>{`
      .header {
        background-color: black;
        color: white;
        font-family: ${tokens.fonts.gill.family};
        padding: 1rem;
        text-align: center;
      }

      .header__title {
        color: currentColor;
        display: block;
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        text-decoration: none;
        text-transform: uppercase;
      }

      .header__title:hover,
      .header__title:focus {
        text-decoration: underline;
      }

      .header__item {
        color: currentColor;
        display: inline-block;
        padding-left: 1rem;
        padding-right: 1rem;
        text-decoration: none;
        text-transform: uppercase;
      }
    `}</style>

    <Link href="/">
      <a className="header__title">Globus</a>
    </Link>

    {data.items.map(item => (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a href="#" className="header__item">
        {item.label}
      </a>
    ))}
  </header>
);
