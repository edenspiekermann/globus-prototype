import { Fragment } from 'react';

import IntroContent from './content';
import IntroImage from './image';
import IntroTitle from './title';

import tokens from '../../tokens';

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
        .intro {
          margin-bottom: 80px;
          overflow-x: hidden;
          position: relative;
        }

        @media ${tokens.mq.desktop} {
          .intro {
            margin-bottom: 200px;
          }
        }

        .intro__title-container {
          background-color: ${color};
          padding: 20px 40px 300px 40px;
        }

        @media ${tokens.mq.desktop} {
          .intro__title-container {
            background-color: transparent;
            margin-left: calc(45% - 100px);
            padding-bottom: 0;
            position: relative;
            z-index: 2;
          }
        }

        .intro--reversed .intro__title-container {
          margin-bottom: 80px;
          padding-bottom: 0;
          position: relative;
          z-index: 2;
        }

        @media ${tokens.mq.desktop} {
          .intro--reversed .intro__title-container {
            margin-left: 100px;
            margin-right: calc(50% - 100px);
          }
        }

        .intro__image-container {
          margin: -280px 60px 20px 120px;
          overflow-y: hidden;
          z-index: 1;
        }

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

        .intro--reversed .intro__image-container {
          margin: 0;
          position: absolute;
          right: 0;
          top: 0;
          transform: translateX(50%);
        }

        @media ${tokens.mq.desktop} {
          .intro--reversed .intro__image-container {
            height: 100%;
            left: auto;
            transform: none;
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

        .intro__content {
          margin-left: 120px;
          margin-right: 60px;
          position: relative;
          z-index: 2;
        }

        @media ${tokens.mq.desktop} {
          .intro__content {
            margin-left: calc(45% + 120px);
            max-width: 700px;
          }
        }

        .intro--reversed .intro__content {
          margin-left: 40px;
        }

        @media ${tokens.mq.desktop} {
          .intro--reversed .intro__content {
            margin-left: 360px;
            max-width: 900px;
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
