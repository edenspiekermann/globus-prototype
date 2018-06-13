import styles from './styles';

export default ({ title, published, authors, content, image }) => (
  <header className="intro">
    <style jsx>{styles}</style>

    <div className="intro__image-container">
      <img src={image.url} alt={image.alt} className="intro__image" />
    </div>

    <h1 className="intro__title">{title}</h1>

    <div className="intro__content">
      {content.map(_ => <p className="intro__content-paragraph">{_}</p>)}
    </div>

    <div className="intro__meta">
      <p className="intro__meta-published">{published}</p>
      <p className="intro__meta-authors">{authors}</p>
    </div>
  </header>
);
