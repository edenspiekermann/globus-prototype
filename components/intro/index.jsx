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
          padding: 20px 40px 300px 40px;
        }
      `}</style>

      <style jsx>{styles}</style>

      <style jsx>{`
        @media ${tokens.mq.desktop} {
          .intro__image-container {
            background-image: linear-gradient(
              to bottom,
              ${color} 65%,
              transparent 0
            );
            height: 100%;
            left: 0;
            margin: 0;
            position: absolute;
            top: 0;
            width: 100%;
          }
        }

        @media ${tokens.mq.large} {
          .intro__image-container {
            background-image: linear-gradient(
              to bottom,
              ${color} 80%,
              transparent 0
            );
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
