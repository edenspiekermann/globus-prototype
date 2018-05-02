import { Fragment } from 'react';

import IntroContent from './content';
import IntroImage from './image';
import IntroTitle from './title';

import tokens from '../../tokens';
import styles from './styles';

export default ({
  title,
  byline,
  text,
  image,
  color,
  reversed = false,
  number,
  children
}) => (
  <Fragment>
    <section className={`intro ${reversed ? 'intro--reversed' : ''}`}>
      <style jsx>{`
        .intro__title-container {
          background-color: ${color};
        }
      `}</style>

      <style jsx>{styles}</style>

      <style jsx>{`
        @media ${tokens.mq.desktop} {
          .intro__image-container {
            background-image: linear-gradient(
              to bottom,
              ${color} 85%,
              transparent 0
            );
            left: 0;
            margin: 0;
            max-height: 100%;
            position: absolute;
            top: 0;
            width: 100%;
          }
        }
      `}</style>

      <div className="intro__title-container">
        <IntroTitle byline={byline} title={title} number={number} />
      </div>

      <div className="intro__image-container">
        <IntroImage image={image} reversed={reversed} />
      </div>

      <div className="intro__content">
        <IntroContent text={text} />
      </div>
    </section>
    {children}
  </Fragment>
);
