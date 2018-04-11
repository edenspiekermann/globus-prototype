import tokens from '../../data/tokens';

export default ({ items }) => (
  <aside className="sidebar">
    <style jsx>{`
      .sidebar {
        background-color: rgb(245, 245, 250);
        overflow-x: hidden;
        padding: 20px;
        width: 100%;
      }

      @media ${tokens.mq.desktop} {
        .sidebar {
          width: 25%;
        }
      }

      .sidebar__title {
        font-size: 20px;
        text-transform: uppercase;
      }

      .sidebar__list {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .sidebar__list-item {
        align-items: center;
        display: flex;
        flex-direction: row;
        margin-bottom: 20px;
      }

      .sidebar__list-item-image {
        margin-left: -50px;
        margin-right: 20px;
      }

      .sidebar__list-item-title {
        font-size: 24px;
      }

      .sidebar__list-item-byline {
        display: block;
        font-size: 13px;
      }
    `}</style>

    <h4 className="sidebar__title">Weiterlesen</h4>

    <ul className="sidebar__list">
      {items.map(_ => (
        <li className="sidebar__list-item">
          <img src={_.image.url} alt={_.image.alt} className="sidebar__list-item-image" />
          <strong className="sidebar__list-item-title">
            {_.byline && <small className="sidebar__list-item-byline">{_.byline}</small>}

            {_.title}
          </strong>
        </li>
      ))}
    </ul>
  </aside>
);
