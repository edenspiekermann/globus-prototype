import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .intro {
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .intro__title {
    font-family: ${tokens.fonts.founders.family};
    font-size: 60px;
    font-weight: ${tokens.fonts.founders.weight.medium};
    line-height: 0.875;
    max-width: 640px;
    margin-top: -40px;
    margin-bottom: 0;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    z-index: 10;
  }

  @media ${tokens.mq.tablet} {
    .intro__title {
      font-size: 96px;
      max-width: 720px;
      margin-top: -60px;
      padding-left: 40px;
      padding-right: 40px;
    }
  }

  @media ${tokens.mq.desktop} {
    .intro__title {
      font-size: 128px;
      max-width: 1120px;
      margin-top: -80px;
    }
  }

  @media ${tokens.mq.large} {
    .intro__title {
      font-size: 160px;
      max-width: 1440px;
      margin-top: -100px;
    }
  }

  .intro__meta {
    color: #a1a1b3;
    font-family: ${tokens.fonts.founders.family};
    margin-bottom: 64px;
    text-align: center;
  }

  @media ${tokens.mq.desktop} {
    .intro__meta {
      margin-bottom: 128px;
    }
  }

  .intro__meta-published {
    display: inline-block;
    font-size: 16px;
    font-weight: ${tokens.fonts.founders.weight.medium};
    line-height: ${20 / 16};
    margin-bottom: 0;
    margin-top: 0;
    text-transform: uppercase;
  }

  .intro__meta-authors {
    font-size: 20px;
    font-weight: ${tokens.fonts.founders.weight.regular};
    line-height: ${30 / 20};
    margin-bottom: 0;
    margin-top: 5px;
  }

  .intro__content {
    font-family: ${tokens.fonts.founders.family};
    font-size: 24px;
    line-height: 1.25;
    max-width: 480px;
    margin-bottom: 10px;
    margin-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media ${tokens.mq.tablet} {
    .intro__content {
      font-size: 32px;
      max-width: 720px;
      margin-top: 32px;
      margin-bottom: 24px;
    }
  }

  @media ${tokens.mq.desktop} {
    .intro__content {
      margin-top: 48px;
      margin-bottom: 32px;
    }
  }

  @media ${tokens.mq.large} {
    .intro__content {
      font-size: 40px;
      max-width: 900px;
      margin-top: 64px;
      margin-bottom: 48px;
    }
  }

  .intro__image-container {
    font-size: 0;
    line-height: 0;
    position: relative;
  }

  .intro__image-container:before {
    bottom: 0;
    content: '';
    position: absolute;
    width: 100%;
    height: 50%;
    opacity: 0.25;
    background-image: linear-gradient(-180deg, rgba(255,255,255,0.00) 0%,
      rgba(255,255,255,0.05) 14%, rgba(255,255,255,0.12) 27%, rgba(255,255,255,0.22) 39%,
      rgba(255,255,255,0.32) 51%, rgba(255,255,255,0.44) 62%, rgba(255,255,255,0.55) 71%,
      rgba(255,255,255,0.67) 79%, rgba(255,255,255,0.77) 87%, rgba(255,255,255,0.86) 92%,
      rgba(255,255,255,0.94) 96%, rgba(255,255,255,0.98) 99%, #FFFFFF 100%);
    };
  }

  @media ${tokens.mq.desktop} {
    .intro__image-container:before {
      height: 25%;
    }
  }

  .intro__content-image-container {
    margin-bottom: 64px;
    max-width: 1120px;
  }

  @media ${tokens.mq.desktop} {
    .intro__content-image-container {
      margin-bottom: 128px;
    }
  }

  .intro__content-image-caption {
    color: #a1a1b3;
    font-family: ${tokens.fonts.founders.family};
    font-size: 16px;
    line-height: 1.25;
    margin-top: 8px;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    text-align: left;
  }

  @media ${tokens.mq.desktop} {
    .intro__content-image-caption {
      font-size: 20px;
    }
  }

  @media ${tokens.mq.large} {
    .intro__content-image-caption {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;
