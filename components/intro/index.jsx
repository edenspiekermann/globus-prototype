import IntroTitle from './title';
import Share from '../share';

import tokens from '../../data/tokens';

export default ({ title, byline, text, image }) => (
  <div className="intro">
    <style jsx>{`
      .intro {
        padding-bottom: 140px;
      }

      .intro__header {
        background-image: linear-gradient(to bottom, ${tokens.colors.melrose} 85%, transparent 0);
        display: flex;
        flex-direction: column;
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

      .intro__image,
      .intro__content {
        margin-left: ${tokens.colWidth.mobile * 5}px;
      }

      @media ${tokens.mq.desktop} {
        .intro__image {
          margin-left: 0;
          max-width: auto;
          order: 1;
        }
      }

      .intro__content {
        margin-right: ${tokens.colWidth.mobile * 2}px;
      }

      @media ${tokens.mq.desktop} {
        .intro__content {
          margin-left: 700px;
          margin-right: 0;
          margin-top: -200px;
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
      }
    `}</style>

    <div className="intro__header">
      <div className="intro__image">
        <img src={image.url} alt={image.alt} />
      </div>

      <IntroTitle byline={byline} title={title} />
    </div>

    <div className="intro__content">
      <div className="intro__text">{text.map(_ => <p>{_}</p>)}</div>

      <div className="intro__share">
        <Share />
      </div>
    </div>
  </div>
);
