import css from 'styled-jsx/css';

import tokens from '../../tokens';

const IMAGE_SIZE_DESKTOP = '50%';
const IMAGE_SIZE_LARGE = '45%';

export default css`
  .intro {
    margin-bottom: 80px;
    overflow-x: hidden;
    position: relative;
  }

  @media ${tokens.mq.desktop} {
    .intro {
      margin-bottom: 200px;
    }
  }

  @media ${tokens.mq.desktop} {
    .intro__title-container {
      background-color: transparent;
      margin-left: calc(${IMAGE_SIZE_DESKTOP} - 100px);
      padding-bottom: 0;
      position: relative;
      z-index: 2;
    }
  }

  @media ${tokens.mq.large} {
    .intro__title-container {
      margin-left: calc(${IMAGE_SIZE_LARGE} - 150px);
    }
  }

  .intro--reversed .intro__title-container {
    margin-bottom: 80px;
    padding-bottom: 0;
    position: relative;
    z-index: 2;
  }

  @media ${tokens.mq.desktop} {
    .intro--reversed .intro__title-container {
      margin-left: 100px;
      margin-right: calc(${IMAGE_SIZE_DESKTOP} - 100px);
    }
  }

  @media ${tokens.mq.large} {
    .intro--reversed .intro__title-container {
      margin-left: 100px;
      margin-right: calc(${IMAGE_SIZE_LARGE} - 100px);
    }
  }

  .intro__image-container {
    margin: -280px 60px 20px 120px;
    overflow-y: hidden;
    z-index: 1;
  }

  .intro--reversed .intro__image-container {
    margin: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(50%);
  }

  @media ${tokens.mq.desktop} {
    .intro--reversed .intro__image-container {
      height: 100%;
      left: auto;
      transform: none;
    }
  }

  .intro__content {
    margin-left: 120px;
    margin-right: 60px;
    position: relative;
    z-index: 2;
  }

  @media ${tokens.mq.desktop} {
    .intro__content {
      margin-left: calc(${IMAGE_SIZE_DESKTOP} + 100px);
      max-width: 700px;
    }
  }

  @media ${tokens.mq.large} {
    .intro__content {
      margin-left: calc(${IMAGE_SIZE_LARGE} + 100px);
    }
  }

  .intro--reversed .intro__content {
    margin-left: 40px;
  }

  @media ${tokens.mq.phablet} {
    .intro--reversed .intro__content {
      margin-left: 240px;
    }
  }

  @media ${tokens.mq.desktop} {
    .intro--reversed .intro__content {
      margin-left: 360px;
      max-width: 900px;
    }
  }
`;
