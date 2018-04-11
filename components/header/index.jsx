import data from './data';

export default () => (
  <header className="header">
    <style jsx>{`
      .header {
        background-color: black;
        color: white;
        padding: 1rem;
        text-align: center;
      }

      .header__title {
        display: block;
        font-size: 2.5rem;
        margin-bottom: 1rem;
        text-transform: uppercase;
      }

      .header__item {
        color: currentColor;
        display: inline-block;
        padding-left: 1rem;
        padding-right: 1rem;
        text-decoration: none;
        text-transform: uppercase;
      }
    `}</style>

    <strong className="header__title">Globus</strong>

    {data.items.map(item => (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a href="#" className="header__item">
        {item.label}
      </a>
    ))}
  </header>
);
