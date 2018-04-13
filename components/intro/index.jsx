import IntroTitle from './title';
import Share from '../share';

import tokens from '../../data/tokens';

export default ({ title, byline, text, image, color, reversed = false, number, children }) => (
  <section className={`intro ${reversed ? 'intro--reversed' : ''}`}>
    <style jsx>{`
      .intro {
        padding-bottom: 100px;
        position: relative;
      }

      .intro__title-container {
        background-color: ${color};
        padding: 20px 40px 300px 40px;
      }

      @media ${tokens.mq.desktop} {
        .intro__title-container {
          background-color: transparent;
          margin-left: calc(40% - 100px);
          padding-bottom: 0;
          position: relative;
          z-index: 2;
        }
      }

      .intro__image-container {
        margin-left: 120px;
        margin-right: 60px;
        margin-top: -280px;
      }

      @media ${tokens.mq.desktop} {
        .intro__image-container {
          background-image: linear-gradient(to bottom, ${color} 80%, transparent 0);
          left: 0;
          margin: 0;
          position: absolute;
          top: 0;
          width: 100%;
          z-index: 1;
        }

        .intro__image {
          width: 40%;
        }
      }

      .intro__content {
        margin-left: 120px;
        margin-right: 60px;
      }

      @media ${tokens.mq.desktop} {
        .intro__content {
          margin-left: calc(40% + 100px);
          max-width: 700px;
          position: relative;
          z-index: 2;
        }
      }

      .intro__text {
        font-family: ${tokens.fonts.founders.family};
        font-size: 24px;
        line-height: ${27 / 24};
      }

      @media ${tokens.mq.desktop} {
        font-size: 32px;
      }
    `}</style>

    <div className="intro__title-container">
      <IntroTitle byline={byline} title={title} number={number} />
    </div>

    <div className="intro__image-container">
      <img src={image.url} alt={image.alt} className="intro__image" />
    </div>

    <div className="intro__content">
      <div className="intro__text">{text.map(_ => <p>{_}</p>)}</div>
      <div className="intro__share">
        <Share />
      </div>
    </div>
  </section>
);
