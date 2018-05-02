import { Fragment } from 'react';

import styles from './styles';

const LinkElement = ({ href, children, look, onClick = null, modifier }) => (
  <Fragment>
    <style jsx>{styles}</style>

    <a
      href={href}
      className={`button ${look ? `button--${look}` : ''} ${
        modifier && look ? `button--${look}-${modifier}` : ''
      }`}
      onClick={onClick}
    >
      {children}
    </a>
  </Fragment>
);

const ButtonElement = ({ type = 'button', children, look }) => (
  <button type={type} className={`button ${look && `button--${look}`}`}>
    <span className="button__inner">{children}</span>
  </button>
);

export default props => (
  <Fragment>
    {props.href ? <LinkElement {...props} /> : <ButtonElement {...props} />}
  </Fragment>
);
