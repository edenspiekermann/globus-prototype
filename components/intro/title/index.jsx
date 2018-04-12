import { Fragment } from 'react';

import mixins from '../../../data/mixins';
import tokens from '../../../data/tokens';

const IntroTitle = ({ byline, title, transparent, number }) => (
  <h2 className={`intro-title ${transparent ? 'intro-title--transparent' : ''}`}>
    <style jsx>{`
      .intro-title {
        font-family: Arial;
        font-size: 48px;
        font-weight: normal;
        line-height: 1;
        margin-left: ${tokens.colWidth.mobile * 2}px;
        margin-right: ${tokens.colWidth.mobile * 2}px;
        white-space: wrap;
        z-index: 10;
      }

      @media ${tokens.mq.desktop} {
        .intro-title {
          font-size: 88px;
          max-width: 750px; // TODO
          order: 1;
        }

        .intro-title--transparent {
          font-size: 88px;
          margin-left: -${tokens.colWidth.desktop * 8}px;
          margin-right: 0;

          order: 2;
        }
      }

      .intro-title__byline {
        display: block;
        font-size: 20px;
        margin-bottom: ${tokens.colWidth.mobile}px;
      }

      .intro-title__byline-separator {
        ${mixins.visuallyHidden};
      }

      .intro-title__number {
        display: block;
        font-size: 160px;
        font-weight: bold;
        margin-bottom: 40px;
      }
    `}</style>

    {number && <span className="intro-title__number">{number}</span>}

    {byline && (
      <Fragment>
        <small className="intro-title__byline">{byline}</small>
        <span className="intro-title__byline-separator">:</span>
      </Fragment>
    )}

    {title}
  </h2>
);

export default IntroTitle;
