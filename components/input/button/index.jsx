import { Fragment } from 'react';
import Link from 'next/link';

import tokens from '../../../data/tokens';

const LinkElement = ({ href, children, look, onClick = null }) => (
  <Fragment>
    <style jsx>{`
      .button__inner {
        background-color: white;
        color: black;
        display: inline-block;
        font-family: ${tokens.fonts.gill.family};
        font-size: 14px;
        font-weight: ${tokens.fonts.gill.weight.regular};
        letter-spacing: 0.5px;
        line-height: 1;
        padding: 15px 25px;
        text-decoration: none;
        text-transform: uppercase;
      }

      @media ${tokens.mq.desktop} {
        .button__inner {
          font-size: 16px;
        }
      }

      .button--window-condensed .button__inner,
      .button--window .button__inner {
        border: 1px solid black;
      }

      .button--window .button__inner {
        padding-bottom: 12px;
        padding-top: 18px;
      }

      .button--window-condensed .button__inner {
        padding: 6px 15px;
      }

      @media ${tokens.mq.desktop} {
        .button--window-condensed .button__inner {
          padding: 7px 30px;
        }
      }

      .button:hover .button__inner,
      .button:focus .button__inner {
        background-color: black;
        color: white;
      }
    `}</style>

    <Link href={href}>
      <a className={`button ${look ? `button--${look}` : ''}`}>
        <span className="button__inner" onClick={onClick}>
          {children}
        </span>
      </a>
    </Link>
  </Fragment>
);

const ButtonElement = ({ type = 'button', children, look }) => (
  <button type={type} className={`button ${look && `button--${look}`}`}>
    <span className="button__inner">{children}</span>
  </button>
);

export default props => (
  <Fragment>{props.href ? <LinkElement {...props} /> : <ButtonElement {...props} />}</Fragment>
);
