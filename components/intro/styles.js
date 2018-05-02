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
      margin-bottom: 180px;
    }
  }

  @media ${tokens.mq.large} {
    .intro {
      padding-bottom: 10%;
      margin-bottom: 5%;
    }
    
    .intro--reversed {
      margin-bottom: 10%;
    }
  }

  .intro__title-container {
    padding: 20px 5% 300px 5%;
  }

  @media ${tokens.mq.desktop} {
    .intro__title-container {
      background-color: transparent;
      margin-left: calc(${IMAGE_SIZE_DESKTOP} - 100px);
      padding: 20px 40px 0 40px;
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
    margin: -280px 5% 20px 20%;
    overflow-y: hidden;
    z-index: 1;
  }

  .intro--reversed .intro__image-container {
    margin: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(calc(50%));
    height: 75%;
  }

  @media ${tokens.mq.desktop} {
    .intro--reversed .intro__image-container {
      height: 100%;
      left: auto;
      transform: none;
    }
  }

  .intro__content {
    margin-left: 20%;
    margin-right: 5%;
    position: relative;
    z-index: 2;
  }

  @media ${tokens.mq.desktop} {
    .intro__content {
      margin-left: calc(${IMAGE_SIZE_DESKTOP} + -50px);
      max-width: 700px;
    }
  }

  @media ${tokens.mq.large} {
    .intro__content {
      margin-left: calc(${IMAGE_SIZE_LARGE} + 100px);
    }
  }

  .intro--reversed .intro__content {
    margin-left: 5%;
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
