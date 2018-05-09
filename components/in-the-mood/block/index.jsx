import BlockContent from './content';
import BlockTitle from './title';

import styles from './styles';

export default ({
  title,
  content,
  style = { padded: false, backgroundColor: false },
  image,
  video
}) => (
  <div
    className={`in-the-mood-block ${
      style.padded ? 'in-the-mood-block--padded' : ''
    }`}
  >
    <style jsx>{`
      background-color: ${style.backgroundColor};
    `}</style>

    <style jsx>{styles}</style>

    {image && <img src={image.url} alt={image.alt} />}

    {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
    {video && <video src={video.url} />}

    {title && <BlockTitle {...title} standalone={!image} />}

    {content && <BlockContent {...content} />}
  </div>
);
