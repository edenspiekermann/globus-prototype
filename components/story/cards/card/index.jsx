import styles from './styles';

export default ({ activeCard, title, content, index, cardsLength, style = {} }) => {
  const { backgroundColor } = style;

  return (
    <li
      className={`card ${
        index === activeCard ? 'card--is-active' : ''
      }`}
    >
      <style jsx>{ styles }</style>

      <style jsx>{`
        background-color: ${backgroundColor};
      `}</style>

      <h3 className="card-title">
        {title}{' '}
        <small className="card-counter">
          {index + 1} / {cardsLength}
        </small>
      </h3>

      <div className="card-content">
        {/* eslint-disable react/no-danger */}
        {content.map((p, pi) => (
          <p key={pi} dangerouslySetInnerHTML={{ __html: p }} />
        ))}
        {/* eslint-enable react/no-danger */}
      </div>
    </li>
  );
}
