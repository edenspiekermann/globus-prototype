import { Fragment } from 'react';

import IntroTitle from './title';
import Share from '../share';

import tokens from '../../data/tokens';

export default ({ title, byline, text, image, color, reversed = false, number, children }) => (
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
            margin-bottom: 120px;
          }
        }

        .intro__title-container {
          background-color: ${color};
          padding: 20px 40px 300px 40px;
        }

        .intro--reversed .intro__title-container {
          margin-bottom: 80px;
          padding-bottom: 0;
          position: relative;
          z-index: 2;
        }

        @media ${tokens.mq.desktop} {
          .intro__title-container {
            background-color: transparent;
            margin-left: calc(40% - 100px);
            padding-bottom: 0;
            position: relative;
            z-index: 2;
          }

          .intro--reversed .intro__title-container {
            margin-left: 100px;
            margin-right: calc(40% - 100px);
          }
        }

        .intro__image-container {
          margin-left: 120px;
          margin-right: 60px;
          margin-top: -280px;
          overflow-y: hidden;
          z-index: 1;
        }

        .intro--reversed .intro__image-container {
          margin: 0;
          position: absolute;
          right: 0;
          top: 0;
          transform: translateX(50%);
        }

        @media ${tokens.mq.desktop} {
          .intro__image-container {
            background-image: linear-gradient(to bottom, ${color} 80%, transparent 0);
            height: 100%;
            left: 0;
            margin: 0;
            position: absolute;
            top: 0;
            width: 100%;
          }

          .intro__image {
            max-height: 100%;
            object-fit: contain;
            width: 40%;
          }

          .intro--reversed .intro__image-container {
            height: 100%;
            left: auto;
            transform: none;
          }

          .intro--reversed .intro__image {
            position: absolute;
            right: 0;
            top: 0;
          }
        }

        .intro__content {
          margin-left: 120px;
          margin-right: 60px;
          position: relative;
          z-index: 2;
        }

        .intro--reversed .intro__content {
          margin-left: 40px;
        }

        @media ${tokens.mq.desktop} {
          .intro__content {
            margin-left: calc(40% + 100px);
            max-width: 700px;
          }

          .intro--reversed .intro__content {
            margin-left: 360px;
            max-width: 900px;
          }
        }

        .intro__text {
          font-family: ${tokens.fonts.founders.family};
          font-size: 24px;
          line-height: ${27 / 24};
          max-width: 640px;
        }

        @media ${tokens.mq.desktop} {
          .intro__text {
            font-size: 32px;
          }
        }

        .intro__text-paragraph {
          margin-bottom: 0;
          margin-top: 0;
        }

        .intro__text-paragraph + .intro__text-paragraph {
          margin-top: 15px;
        }

        .intro__share {
          margin-top: 40px;
        }
      `}</style>

      <div className="intro__title-container">
        <IntroTitle byline={byline} title={title} number={number} />
      </div>

      <div className="intro__image-container">
        <img src={image.url} alt={image.alt} className="intro__image" />
      </div>

      <div className="intro__content">
        <div className="intro__text">{text.map(_ => <p className="intro__text-paragraph">{_}</p>)}</div>
        <div className="intro__share">
          <Share />
        </div>
      </div>
    </section>

    {children}
  </Fragment>
);
