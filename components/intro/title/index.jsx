import { Fragment } from 'react';

import mixins from '../../../data/mixins';
import tokens from '../../../data/tokens';

const IntroTitle = ({ byline, title, number }) => (
  <h2 className="intro-title">
    <style jsx>{`
      .intro-title {
        font-family: Arial;
        // see https://www.smashingmagazine.com/2016/05/fluid-typography/
        font-size: calc(48px + (105 - 48) * (100vw - 400px) / (2000 - 400));
        font-weight: normal;
        line-height: 1.05;
        white-space: wrap;
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
