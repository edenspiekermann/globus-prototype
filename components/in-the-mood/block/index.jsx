import BlockContent from './content';
import BlockTitle from './title';
import Button from '../../input/button';

import styles from './styles';

export default ({
  button,
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

    {image && (
      <div className="in-the-mood-block__image-container">
        <img src={image.url} alt={image.alt} />

        {button && (
          <div className="in-the-mood-block__button-container">
            <Button href={button.url} look="window-condensed">
              {button.label}
            </Button>
          </div>
        )}
      </div>
    )}

    {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
    {video && <video src={video.url} />}

    {title && <BlockTitle {...title} standalone={!image} />}

    {content && <BlockContent {...content} />}
  </div>
);
