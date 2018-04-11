import { Fragment } from 'react';
import Link from 'next/link';

export default () => (
  <Fragment>
    <h1>Available templates</h1>

    <ul className="index">
      <style jsx>{`
        .index {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .index__item {
          font-weight: bold;
        }
      `}</style>

      <li className="index__item">
        <Link href="/listicle">Listicle</Link>
      </li>
    </ul>
  </Fragment>
);
