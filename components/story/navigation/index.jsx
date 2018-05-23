import Link from 'next/link';
import slugify from 'slugify';

export default ({ blocks = [] }) => {
  const titles = blocks.filter(_ => _.blockTitle);

  return (
    <nav className="navigation">
      {titles.map(_ => (
        <Link href={`#${slugify(_.blockTitle).toLowerCase()}`}>
          <a>{_.blockTitle}</a>
        </Link>
      ))}
    </nav>
  );
};
