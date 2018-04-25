import { Fragment } from 'react';

import styles from './styles';

const IntroTitle = ({ byline, title, number }) => (
  <h2 className="intro-title">
    <style jsx>{styles}</style>

    {number && <span className="intro-title__number">{number}</span>}

    {byline && (
      <Fragment>
        <small className="intro-title__byline">{byline}</small>
        <span className="intro-title__byline-separator">:</span>
      </Fragment>
    )}

    {title}
  </h2>
);

export default IntroTitle;
