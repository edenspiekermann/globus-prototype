import { Fragment } from 'react';

import tokens from '../../tokens';

export default () => (
  <Fragment>
    <style jsx>{`
      .share {
        color: currentColor;
        margin-left: 5px;
        margin-right: 5px;
        text-decoration: none;
      }

      .share::before {
        display: inline-block;
        font-family: ${tokens.fonts.icon.family};
        font-size: 32px;
      }

      .share__label {
        ${tokens.mixins.visuallyHidden};
      }

      .share--facebook::before {
        content: '\\e81a';
        font-size: 26px;
      }

      .share--pinterest::before {
        content: '\\e82a';
      }

      .share--pinterest::before {
        content: '\\e826';
      }

      .share--print::before {
        content: '\\e82b';
      }
    `}</style>

    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href="#" className="share share--facebook">
      <span className="share__label">Auf facebook teilen</span>
    </a>

    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href="#" className="share share--pinterest">
      <span className="share__label">Auf pinterest speichern</span>
    </a>

    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href="#" className="share share--email">
      <span className="share__label">Per Email verschicken</span>
    </a>

    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href="#" className="share share--print">
      <span className="share__label">Ausdrucken</span>
    </a>
  </Fragment>
);
