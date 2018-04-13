import IntroTitle from './title';
import Share from '../share';

import tokens from '../../data/tokens';

export default ({ title, byline, text, image, color, reversed = false, number, children }) => (
  <section className={`intro ${reversed ? 'intro--reversed' : ''}`}>
    <style jsx>{`
      .intro {
        overflow-x: hidden;
        padding-bottom: 150px;
        width: 100vw;
      }

      .intro__header {
        ${color
          ? `background-image: linear-gradient(to bottom, ${color} 85%, transparent 0);`
          : ''}
        display: flex;
        flex-direction: column;
        padding-left: 60px;
        padding-right: 60px;
        position: relative;
      }

      @media ${tokens.mq.desktop} {
        .intro__header {
          flex-direction: row;
          padding-left: 0;
          padding-right: 0;
        }
      }

      .intro__title-container {
        order: 1;
        z-index: 2;
      }

      @media ${tokens.mq.desktop} {
        .intro__title-container {
          margin-left: -80px;
          max-width: 800px;
          padding-right: 80px;
          width: 60%;
          order: 2;
        }

        .intro--reversed .intro__title-container {
          margin-left: 120px;
          order: 1;
        }
      }

      .intro__image-container {
        margin-left: 80px;
        order: 2;
        z-index: 1;
      }

      .intro--reversed .intro__image-container {
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(50%);
      }

      @media ${tokens.mq.desktop} {
        .intro__image-container {
          margin-left: 0;
          min-height: 60vh;
          min-width: 40%;
          order: 1;
        }

        .intro--reversed .intro__image-container {
          align-self: flex-end;
          order: 2;
          margin-left: auto;
          margin-right: 0;
          position: static;
          transform: none;
        }
      }

      .intro__content {
        padding-left: 140px;
        padding-right: 40px;
        position: relative;
        z-index: 2;
      }

      .intro--reversed .intro__content {
        padding-left: 60px;
      }

      @media ${tokens.mq.desktop} {
        .intro__content {
          margin-top: -75px;
          padding-left: calc(40% + 150px);
          padding-right: 80px;
          width: 100%;
          z-index: 2;
        }

        .intro--reversed .intro__content {
          padding-left: 30%;
          padding-right: 0;
        }
      }

      .intro__text {
        font-family: Arial;
        font-size: 32px;
        max-width: 900px;
      }

      @media ${tokens.mq.desktop} {
        .intro--reversed .intro__text {
          max-width: 650px;
        }
      }

    `}</style>

    <div className="intro__header">
      <div className="intro__image-container">
        <img src={image.url} alt={image.alt} />
      </div>

      <div className="intro__title-container">
        <IntroTitle byline={byline} title={title} number={number} />
      </div>
    </div>

    <div className="intro__content">
      <div className="intro__text">{text.map(_ => <p>{_}</p>)}</div>
      <div className="intro__share">
        <Share />
      </div>
    </div>

    {children}
  </section>
);
