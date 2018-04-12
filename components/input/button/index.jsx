import { Fragment } from 'react';
import Link from 'next/link';

const LinkElement = ({ href, children, look }) => (
  <Fragment>
    <style jsx>{`
      .button {
        background-color: white;
        color: black;
        display: inline-block;
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
        padding: 9px 30px;
      }

      .button--window:hover,
      .button--window:focus {
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
