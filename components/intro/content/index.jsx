import { Fragment } from 'react';

import Share from '../../share';

import styles from './styles';

export default ({ text }) => (
  <Fragment>
    <style jsx>{styles}</style>

    <div className="intro-text">
      {text.map(_ => <p className="intro-text__paragraph">{_}</p>)}
    </div>
    <div className="intro-share">
      <Share />
    </div>
  </Fragment>
);
