import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .listicle-item {
    display: flex;
  }

  .listicle-item:first-child {
    padding-top: 120px; 
  }

  .listicle-item--full {
    align-items: center;
    flex-direction: column;
  }

  .listicle-item--left,
  .listicle-item--right {
    flex-direction: column;
  }

  @media ${tokens.mq.desktop} {
    .listicle-item--left,
    .listicle-item--right {
      align-items: center;
      flex-direction: row;
    }
  }

  @media ${tokens.mq.desktop} {
    .listicle-item--right .listicle-item__image-container,
    .listicle-item--left .listicle-item__content {
      order: 1;
    }

    .listicle-item--right .listicle-item__content,
    .listicle-item--left .listicle-item__image-container {
      order: 2;
    }
  }

  .listicle-item__badge {
    position: absolute;
    top: 0;
    transform: translateY(-50%);
  }

  .listicle-item--full .listicle-item__badge {
    left: 40px;
  }

  @media ${tokens.mq.desktop} {
    .listicle-item--full .listicle-item__badge {
      left: 60px;
    }
  }

  .listicle-item--left .listicle-item__badge {
    right: 40px;
  }

  @media ${tokens.mq.desktop} {
    .listicle-item--left .listicle-item__badge {
      right: 60px;
    }
  }

  .listicle-item__title {
    font-family: ${tokens.fonts.founders.family};
    font-size: 2rem;
    font-weight: ${tokens.fonts.founders.weight.medium};
    line-height: 1;
    margin-bottom: 20px;
    margin-top: 0;
  }

  @media ${tokens.mq.large} {
    .listicle-item__title {
      font-size: calc(2rem * 1.125);
    }
  }

  .listicle-item__index {
    display: block;
    font-size: 6rem;
    font-family: ${tokens.fonts.founders.family};
    font-weight: ${tokens.fonts.founders.weight.medium};
    line-height: 1;
    margin-bottom: 10px;
  }

  @media ${tokens.mq.tablet} {
    .listicle-item__index {
      font-size: calc(6rem * 1.125);
    }
  }

  @media ${tokens.mq.desktop} {
    .listicle-item__index {
      font-size: calc(6rem * 1.25);
    }
  }

  @media ${tokens.mq.large} {
    .listicle-item__index {
      font-size: calc(6rem * 1.5);
    }
  }

  .listicle-item__content {
    position: relative;
    padding-left: 5%;
    padding-right: 5%;
    margin-top: -120px;
  }

  @media ${tokens.mq.desktop} {
    .listicle-item__content {
      padding-left: 0;
      padding-right: 0;
      margin-top: 0;
    }
  }

  .listicle-item__image-container {
    position: relative;
  }

  .listicle-item--full .listicle-item__image-container {
    width: 100%;
  }

  .listicle-item--right .listicle-item__content {
    text-align: right;
  }

  .listicle-item--left .listicle-item__image-container {
    align-self: flex-end;
  }

  .listicle-item--left .listicle-item__image-container,
  .listicle-item--right .listicle-item__image-container {
    text-align: center;
    width: calc(100% / 3 * 2);
  }

  @media ${tokens.mq.desktop} {
    .listicle-item--left .listicle-item__content,
    .listicle-item--right .listicle-item__content {
      z-index: 2;
      width: calc(100% / 3);
      min-width: 240px;
    }

    .listicle-item--left .listicle-item__content {
      transform: translateX(30%);
    }

    .listicle-item--right .listicle-item__content {
      transform: translateX(-30%);
      text-align: right;
    }
  }

  .listicle-item--full .listicle-item__content {
    margin-top: -80px;
    position: relative;
    text-align: center;
  }

  @media ${tokens.mq.tablet} {
    .listicle-item--full .listicle-item__content {
      max-width: 80%;
    }
  }

  @media ${tokens.mq.desktop} {
    .listicle-item--full .listicle-item__content {
      max-width: 50%;
    }
  }

  .listicle-item__button {
    display: inline-flex;
    position: relative;
    transform: translateY(-55%);
    z-index: 20;
  }

  .listicle-item__text {
    font-family: ${tokens.fonts.founders.family};
    font-size: 1.25rem;
    line-height: 1.25;
  }

  @media ${tokens.mq.desktop} {
    .listicle-item--left .listicle-item__text,
    .listicle-item--right .listicle-item__text,
    .listicle-item--left .listicle-item__meta,
    .listicle-item--right .listicle-item__meta {
      width: 80%;
    }
    
    .listicle-item--right .listicle-item__text,
    .listicle-item--right .listicle-item__meta {
        margin-left: 20%;
    }
  }

  @media ${tokens.mq.large} {
    .listicle-item__text {
      font-size: calc(1.25rem * 1.125);
    }
  }

  .listicle-item__text-paragraph {
    margin-bottom: 0;
    margin-top: 0;
  }

  .listicle-item__text-paragraph + .listicle-item__text-paragraph {
    margin-top: 0.5em;
  }

  .listicle-item__meta {
    color: ${tokens.colors.grey};
    font-family: ${tokens.fonts.founders.family};
    font-size: 1rem;
    line-height: ${20 / 16};
  }

  .listicle-item__location {
    display: block;
  }

  .listicle-item__price {
    display: block;
  }
`;
