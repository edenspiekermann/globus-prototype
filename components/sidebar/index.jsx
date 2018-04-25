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

      @media ${tokens.mq.tablet} {
        .sidebar {
          align-self: flex-start;
          flex: 0 0 auto;
          margin-left: 20px;
          margin-right: 20px;
          position: sticky;
          top: 20px;
          width: 240px;
        }
      }

      @media ${tokens.mq.desktop} {
        .sidebar {
          margin-left: 60px;
          margin-right: 60px;
          width: 320px;
        }
      }

      @media ${tokens.mq.large} {
        .sidebar {
          width: 390px;
        }
      }

      .sidebar__title {
        font-family: ${tokens.fonts.domaine.family};
        font-size: 20px;
        font-weight: ${tokens.fonts.domaine.weight.semibold};
        letter-spacing: 1px;
        line-height: ${22 / 20};
        margin-bottom: 0;
        margin-top: 10px;
        text-align: center;
        text-transform: uppercase;
      }

      .sidebar__list {
        list-style: none;
        margin: 30px 0 0 0;
        padding: 0;
      }

      .sidebar__outer-link {
        align-items: center;
        color: currentColor;
        display: block;
        display: flex;
        flex-direction: row;
        margin-bottom: 20px;
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
        transition: transform 150ms ease;
        will-change: transition;
        z-index: 1;
      }

      @media ${tokens.mq.tablet} {
        .sidebar__list-item-image {
          max-height: 80px;
          max-width: 80px;
        }
      }

      @media ${tokens.mq.desktop} {
        .sidebar__list-item-image {
          max-height: 100px;
          max-width: 100px;
        }
      }

      .sidebar__outer-link:hover .sidebar__list-item-image,
      .sidebar__outer-link:focus .sidebar__list-item-image {
        transform: translateX(0);
      }

      .sidebar__list-item-title {
        font-family: ${tokens.fonts.founders.family};
        font-size: 24px;
        font-weight: ${tokens.fonts.founders.weight.medium};
        line-height: ${25 / 24};
        z-index: 2;
      }

      @media ${tokens.mq.tablet} {
        .sidebar__list-item-title {
          font-size: 17px;
        }
      }

      @media ${tokens.mq.desktop} {
        .sidebar__list-item-title {
          font-size: 24px;
        }
      }

      @media ${tokens.mq.large} {
        .sidebar__list-item-title {
          font-size: 25px;
        }
      }

      .sidebar__list-item-byline {
        display: block;
        font-family: ${tokens.fonts.domaine.family};
        font-size: 13px;
        font-weight: ${tokens.fonts.domaine.weight.semibold};
        letter-spacing: 0.5px;
        line-height: ${22 / 20};
        margin-bottom: 5px;
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
