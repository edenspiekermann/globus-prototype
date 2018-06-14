import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .intro {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .intro__title {
    font-family: ${tokens.fonts.founders.family};
    font-size: 160px;
    font-weight: ${tokens.fonts.founders.weight.medium};
    line-height: ${140 / 160};
    margin: -100px 40px 40px 40px;
    text-align: center;
    z-index: 10;
  }

  .intro__meta {
    color: #a1a1b3;
    font-family: ${tokens.fonts.founders.family};
    margin-bottom: 120px;
    text-align: center;
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
    font-size: 32px;
    line-height: ${36 / 32};
    max-width: 720px;
    margin-bottom: 80px;
    margin-top: 80px;
  }

  .intro__image-container {
    font-size: 0;
    line-height: 0;
    position: relative;
  }

  .intro__image-container:before {
    background-image: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.15),
      transparent
    );
    bottom: 0;
    content: '';
    height: 20%;
    position: absolute;
    width: 100%;
  }

  .intro__content-image-container {
    margin-bottom: 60px;
    max-width: 1120px;
  }

  .intro__content-image-caption {
    color: #a1a1b3;
    font-family: ${tokens.fonts.founders.family};
    font-size: 20px;
    line-height: ${30 / 20};
    margin-top: 10px;
    width: 100%;
  }
`;
