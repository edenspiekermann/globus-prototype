import styles from './styles';

import tokens from '../../../../tokens';

export default ({
  url,
  alt,
  caption,
  captionPosition,
  author,
  portrait = false,
  style = {}
}) => {
  const { backgroundColor } = style;

  return (
    <figure className={`figure ${portrait ? 'figure--portrait' : ''}`}>
      <style jsx>{styles}</style>

      <style jsx>{`
        @media ${tokens.mq.desktop} {
          .figure {
            background-color: ${backgroundColor};
          }
        }
      `}</style>

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
}
