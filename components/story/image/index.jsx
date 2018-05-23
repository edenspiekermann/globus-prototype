import styles from './styles';

export default ({ url, alt, caption, author }) => (
  <figure className="figure">
    <style jsx>{styles}</style>

    <img src={url} alt={alt} />
    {caption && (
      <figcaption className="figure__caption">
        {caption}
        {author && <small className="figure__author">{author}</small>}
      </figcaption>
    )}
  </figure>
);
