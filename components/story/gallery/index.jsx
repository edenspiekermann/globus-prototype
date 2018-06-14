import styles from './styles';

export default ({ items }) => (
  <div className="gallery">
    <style jsx>{styles}</style>

    {items.map(_ => {
      const {
        url,
        alt,
        caption,
        captionPosition,
        author,
        portrait = false
      } = _;

      return (
        <figure className={`figure ${portrait ? 'figure--portrait' : ''}`}>
          <img src={url} alt={alt} className="figure__image" />

          {caption && (
            <figcaption
              className={`figure__caption figure__caption--position-${captionPosition}`}
            >
              {caption}
              {author && <small className="figure__author">{author}</small>}
            </figcaption>
          )}
        </figure>
      );
    })}
  </div>
);
