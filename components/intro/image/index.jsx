import { Fragment } from 'react';

import styles from './styles';

export default ({ image, reversed }) => (
  <Fragment>
    <style jsx>{styles}</style>
    <img
      src={image.url}
      alt={image.alt}
      className={`intro-image ${reversed ? 'intro-image--reversed' : ''}`}
    />
  </Fragment>
);
