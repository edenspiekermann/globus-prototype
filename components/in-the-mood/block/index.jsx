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
        <div className="in-the-mood-block__inner-media-container">
          <img src={image.url} alt={image.alt} />

          {button && (
            <div className="in-the-mood-block__button-container">
              <Button href={button.url} look="window-condensed">
                {button.label}
              </Button>
            </div>
          )}
        </div>
      </div>
    )}

    {video && (
      <div className="in-the-mood-block__video-container">
        <div className="in-the-mood-block__inner-media-container">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video src={video.url} autoPlay muted />

          {button && (
            <div className="in-the-mood-block__button-container">
              <Button href={button.url} look="window-condensed">
                {button.label}
              </Button>
            </div>
          )}
        </div>
      </div>
    )}

    {title && <BlockTitle {...title} standalone={!image} />}

    {content && <BlockContent {...content} />}
  </div>
);
