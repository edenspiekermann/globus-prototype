import Link from 'next/link';
import slugify from 'slugify';

import styles from './styles';

export default ({ blocks = [] }) => {
  const titles = blocks.filter(_ => _.blockTitle);

  return (
    <nav className="navigation">
      <style jsx>{styles}</style>

      {titles.map(_ => (
        <Link href={`#${slugify(_.blockTitle).toLowerCase()}`}>
          <a className="navigation__link">{_.blockTitle}</a>
        </Link>
      ))}
    </nav>
  );
};
