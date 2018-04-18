import { Fragment } from 'react';
import Link from 'next/link';

import tokens from '../../../data/tokens';

const LinkElement = ({ href, children, look }) => (
  <Fragment>
    <style jsx>{`
      .button {
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

      .button--window-condensed,
      .button--window {
        border: 1px solid black;
      }

      .button--window-condensed {
        padding: 8px 30px 7px 30px;
      }

      .button:hover,
      .button:focus {
        background-color: black;
        color: white;
      }
    `}</style>

    <Link href={href}>
      <a className={`button ${look ? `button--${look}` : ''}`}>{children}</a>
    </Link>
  </Fragment>
);

const ButtonElement = ({ type = 'button', children, look }) => (
  <button type={type} className={`button ${look && `button--${look}`}`}>
    {children}
  </button>
);

export default props => (
  <Fragment>{props.href ? <LinkElement {...props} /> : <ButtonElement {...props} />}</Fragment>
);
