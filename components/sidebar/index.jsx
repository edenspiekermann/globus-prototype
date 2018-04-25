import Link from 'next/link';

import styles from './styles';

export default ({ items }) => (
  <aside className="sidebar">
    <style jsx>{styles}</style>

    <h4 className="sidebar__title">Weiterlesen</h4>

    <ul className="sidebar__list">
      {items.map(_ => (
        <li className="sidebar__list-item">
          <Link href="#">
            <a className="sidebar__outer-link">
              <img
                src={_.image.url}
                alt={_.image.alt}
                className="sidebar__list-item-image"
              />
              <strong className="sidebar__list-item-title">
                {_.byline && (
                  <small className="sidebar__list-item-byline">
                    {_.byline}
                  </small>
                )}

                {_.title}
              </strong>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </aside>
);
