import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .in-the-mood-block {
    height: 100%;
    position: relative;
  }

  @media ${tokens.mq.desktop} {
    .in-the-mood-block {
      display: flex;
    }
  }

  .in-the-mood-block__image-container,
  .in-the-mood-block__video-container {
    width: 100%;
    align-self: center;
  }

  .in-the-mood-block--padded .in-the-mood-block__image-container,
  .in-the-mood-block--padded .in-the-mood-block__video-container {
    padding: 0;
  }

  @media ${tokens.mq.phone} {
    .in-the-mood-block--padded .in-the-mood-block__image-container,
    .in-the-mood-block--padded .in-the-mood-block__video-container {
      padding: 0;
    }
  }

  @media ${tokens.mq.tablet} {
    .in-the-mood-block--padded .in-the-mood-block__image-container,
    .in-the-mood-block--padded .in-the-mood-block__video-container {
      padding: 120px;
    }
  }

  @media ${tokens.mq.large} {
    .in-the-mood-block--padded .in-the-mood-block__image-container,
    .in-the-mood-block--padded .in-the-mood-block__video-container {
      padding: 160px;
    }
  }

  .in-the-mood-block__inner-media-container {
    position: relative;
  }

  .in-the-mood-block__button-container {
    bottom: 0;
    left: 50%;
    position: absolute;
    transform: translateY(50%) translateX(-50%);
    z-index: 2;
  }

  .in-the-mood-block__video {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
`;
