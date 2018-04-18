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
        font-size: 16px;
        font-weight: ${tokens.fonts.gill.weight.regular};
        letter-spacing: 0.5px;
        line-height: 1;
        padding: 15px 30px;
        text-decoration: none;
        text-transform: uppercase;
      }

      .button--window-condensed .button__inner,
      .button--window .button__inner {
        border: 1px solid black;
      }

      .button--window-condensed .button__inner {
        padding: 8px 30px 7px 30px;
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
  <button type={type} className={`button ${look && `button--${look}`}`} {...otherProps}>
    <span className="button__inner">{children}</span>
  </button>
);

export default props => (
  <Fragment>{props.href ? <LinkElement {...props} /> : <ButtonElement {...props} />}</Fragment>
);
