import Link from 'next/link';

import tokens from '../../data/tokens';

export default ({ items }) => (
  <aside className="sidebar">
    <style jsx>{`
      .sidebar {
        background-color: rgb(245, 245, 250);
        overflow-x: hidden;
        padding-bottom: 20px;
        padding-top: 20px;
      }

      @media ${tokens.mq.desktop} {
        .sidebar {
          align-self: flex-start;
          margin-left: 60px;
          margin-right: 60px;
          position: sticky;
          top: 10px;
          width: 400px;
        }
      }

      .sidebar__title {
        font-family: ${tokens.fonts.domaine.family};
        font-size: 20px;
        font-weight: ${tokens.fonts.domaine.weight.semibold};
        line-height: ${22 / 20};
        text-align: center;
        text-transform: uppercase;
      }

      .sidebar__list {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .sidebar__outer-link {
        align-items: center;
        color: currentColor;
        display: block;
        display: flex;
        flex-direction: row;
        margin-bottom: 40px;
        text-decoration: none;
      }

      .sidebar__list-item {
        padding-right: 20px;
      }

      .sidebar__list-item-image {
        margin-right: -20px;
        max-height: 100px;
        max-width: 100px;
        transform: translateX(-50%);
        transition: transform 100ms ease;
      }
      .sidebar__outer-link:hover .sidebar__list-item-image,
      .sidebar__outer-link:focus .sidebar__list-item-image {
        transform: translateX(-35%);
      }

      .sidebar__list-item-title {
        font-family: ${tokens.fonts.founders.family};
        font-size: 24px;
        font-weight: ${tokens.fonts.founders.weight.medium};
        line-height: ${25 / 24};
      }

      .sidebar__list-item-byline {
        display: block;
        font-family: ${tokens.fonts.domaine.family};
        font-size: 13px;
        font-weight: ${tokens.fonts.domaine.weight.semibold};
        line-height: ${22 / 20};
        text-transform: uppercase;
      }
    `}</style>

    <h4 className="sidebar__title">Weiterlesen</h4>

    <ul className="sidebar__list">
      {items.map(_ => (
        <li className="sidebar__list-item">
          <Link href="#">
            <a className="sidebar__outer-link">
              <img src={_.image.url} alt={_.image.alt} className="sidebar__list-item-image" />
              <strong className="sidebar__list-item-title">
                {_.byline && <small className="sidebar__list-item-byline">{_.byline}</small>}

                {_.title}
              </strong>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </aside>
);
