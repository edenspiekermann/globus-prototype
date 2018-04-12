import { Fragment } from 'react';
import Link from 'next/link';

const LinkElement = ({ href, children, style }) => (
  <Fragment>
    <style jsx>{`
      .button {
        color: currentColor;
        display: inline-block;
        padding: 15px 30px;
        text-decoration: none;
        text-transform: uppercase;
      }

      .button--window {
        border: 1px solid black;
      }

      .button--window:hover,
      .button--window:focus {
        background-color: black;
        color: white;
      }
    `}</style>

    <Link href={href}>
      <a className={`button ${style ? `button--${style}` : ''}`}>{children}</a>
    </Link>
  </Fragment>
);

const ButtonElement = ({ className, type = 'button', children, style }) => (
  <button type="button" className={`button ${style && `button--${style}`}`}>
    {children}
  </button>
);

export default props => (
  <Fragment>{props.href ? <LinkElement {...props} /> : <ButtonElement {...props} />}</Fragment>
);
