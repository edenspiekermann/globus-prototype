import styles from './styles';

export default ({
  title,
  published,
  authors,
  content,
  image,
  contentImage
}) => (
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

    {contentImage && (
      <figure className="intro__content-image-container">
        <img
          src={contentImage.url}
          alt={contentImage.alt}
          className="intro__content-image"
        />

        {contentImage.caption && (
          <figcaption className="intro__content-image-caption">
            {contentImage.caption}
            {contentImage.author && (
              <small className="intro__content-image-author">
                {contentImage.author}
              </small>
            )}
          </figcaption>
        )}
      </figure>
    )}
  </header>
);
