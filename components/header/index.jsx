import Link from 'next/link';

import data from './data';
import styles from './styles';

export default () => (
  <header className="header">
    <style jsx>{styles}</style>

    <Link href="/">
      <a className="header__title">Globus</a>
    </Link>

    {data.items.map(item => (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a href="#" className="header__item">
        {item.label}
      </a>
    ))}
  </header>
);
