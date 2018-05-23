import styles from './styles';

export default ({ title, published, category, content, image }) => (
  <header className="intro">
    <style jsx>{styles}</style>

    <img src={image.url} alt={image.alt} className="intro__image" />
    <h1 className="intro__title">{title}</h1>

    <div className="intro__meta">
      <p className="intro__meta-category">{category}</p>
      <p className="intro__meta-published">{published}</p>
    </div>

    <div className="intro__content">
      {content.map(_ => <p className="intro__content-paragraph">{_}</p>)}
    </div>
  </header>
);
