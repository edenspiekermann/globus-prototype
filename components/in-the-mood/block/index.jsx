import React from 'react';

import BlockContent from './content';
import BlockTitle from './title';
import BodyEnd from '../../body-end';
import Button from '../../input/button';
import ShoppingLayer from '../../shopping-layer';

import styles from './styles';

export default class extends React.Component {
  state = {
    showShoppingLayer: false,
    shoppingLayerPosition: {}
  };

  toggleShoppingLayer(event) {
    let shoppingLayerPosition = { top: null, left: null };
    const windowCallback = windowClickEvent => {
      if (!windowClickEvent.target.closest('.shopping-layer')) {
        this.toggleShoppingLayer();

        setTimeout(() => {
          document.removeEventListener('click', windowCallback);
        });
      }
    };

    if (event) {
      const { target } = event;
      const rect = target.getBoundingClientRect();
      const bodyRect = document.body.getBoundingClientRect();

      shoppingLayerPosition = {
        top: rect.top - bodyRect.top,
        left: parseInt(rect.left + rect.width / 2, 10)
      };
    }

    this.setState(
      {
        showShoppingLayer: !this.state.showShoppingLayer,
        shoppingLayerPosition
      },
      () => {
        document[
          `${this.state.showShoppingLayer ? 'add' : 'remove'}EventListener`
        ]('click', windowCallback);
      }
    );
  }

  render() {
    const {
      button,
      title,
      content,
      style = { padded: false, backgroundColor: 'transparent' },
      image,
      video,
      shoppingLayer
    } = this.props;

    return (
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
                  <Button
                    href={button.url}
                    look="window-condensed"
                    modifier={this.state.showShoppingLayer ? 'open' : null}
                    onClick={event => {
                      event.preventDefault();
                      event.nativeEvent.stopImmediatePropagation();
                      this.toggleShoppingLayer(event);
                    }}
                  >
                    {button.label}
                  </Button>

                  {this.state.showShoppingLayer && (
                    <BodyEnd>
                      <ShoppingLayer
                        hide={event => this.toggleShoppingLayer(event)}
                        coordinates={this.state.shoppingLayerPosition}
                        {...shoppingLayer}
                      />
                    </BodyEnd>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {video && (
          <div className="in-the-mood-block__video-container">
            <div className="in-the-mood-block__inner-media-container">
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video
                src={video.url}
                autoPlay
                muted
                loop
                className="in-the-mood-block__video"
              />

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

        {content && (
          <BlockContent
            {...content}
            hasShoppingLayer={!!shoppingLayer}
            blockHasImage={!!image}
          />
        )}
      </div>
    );
  }
}
