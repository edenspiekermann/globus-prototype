import { Fragment } from 'react';

import styles from './styles';

export default () => (
  <Fragment>
    <style jsx>{styles}</style>

    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href="#" className="share share--facebook">
      <span className="share__label">Auf facebook teilen</span>
    </a>

    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href="#" className="share share--pinterest">
      <span className="share__label">Auf pinterest speichern</span>
    </a>

    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href="#" className="share share--email">
      <span className="share__label">Per Email verschicken</span>
    </a>

    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href="#" className="share share--print">
      <span className="share__label">Ausdrucken</span>
    </a>
  </Fragment>
);
