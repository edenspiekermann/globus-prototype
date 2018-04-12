import IntroTitle from './title';
import Share from '../share';

import tokens from '../../data/tokens';

export default ({ title, byline, text, image, color, reversed = false, number }) => (
  <div className={`intro ${reversed ? 'intro--reversed' : ''}`}>
    <style jsx>{`
      .intro {
        padding-bottom: 140px;
      }

      .intro__header {
        ${color
          ? `background-image: linear-gradient(to bottom, ${color} 85%, transparent 0);`
          : ''} display: flex;
        flex-direction: column;
      }

      .intro--reversed .intro__content {
        display: flex;
      }

      .intro--reversed .intro__header,
      .intro--reversed .intro__content {
        align-items: flex-end;
      }

      @media ${tokens.mq.desktop} {
        .intro__header {
          flex-direction: row;
        }
      }

      .intro__image {
        margin-right: ${tokens.colWidth.mobile * 5}px;
        order: 2;
      }

      @media ${tokens.mq.desktop} {
        .intro__image {
          margin-left: 0;
          max-width: auto;
          order: 1;
        }

        .intro--reversed .intro__image {
          margin-left: auto;
          margin-right: 0;
          order: 2;
        }
      }

      .intro__content {
        margin-left: ${tokens.colWidth.mobile * 5}px;
        margin-right: ${tokens.colWidth.mobile * 2}px;
      }

      @media ${tokens.mq.desktop} {
        .intro__content {
          margin-left: 700px;
          margin-right: 0;
          margin-top: -200px;
        }

        .intro--reversed .intro__content {
          margin-left: 0;
          margin-right: 700px;
          margin-top: -40px;
        }
      }

      .intro__text {
        font-family: Arial;
        font-size: 24px;
        line-height: 1.45;
        margin-right: ${tokens.colWidth.mobile * 2}px;
      }

      @media ${tokens.mq.desktop} {
        .intro__text {
          font-size: 32px;
          max-width: 540px;
        }

        .intro--reversed .intro__text {
          margin-left: auto;
        }
      }
    `}</style>

    <div className="intro__header">
      <div className="intro__image">
        <img src={image.url} alt={image.alt} />
      </div>

      <IntroTitle byline={byline} title={title} transparent={!reversed} number={number} />
    </div>

    <div className="intro__content">
      <div className="intro__text">{text.map(_ => <p>{_}</p>)}</div>

      <div className="intro__share">
        <Share />
      </div>
    </div>
  </div>
);
