import css from 'styled-jsx/css';

import tokens from '../../tokens';

export default css`
  .edition {
    width: 30px;
  }

  .edition--with-image {
    margin-bottom: 80px;
    margin-right: 100px;
    max-width: 250px;
    position: relative;
    width: auto;
  }

  @media ${tokens.mq.phablet} {
    .edition--with-image {
      margin-bottom: 0;
      max-width: 150px;
      position: absolute;
      transform: translateY(-115%);
    }
  }

  @media ${tokens.mq.tablet} {
    .edition--with-image {
      margin-bottom: 40px;
      margin-right: 0;
    }
  }

  @media ${tokens.mq.desktop} {
    .edition--with-image {
      max-width: 250px;
    }
  }

  @media ${tokens.mq.desktop} {
    .edition:not(.edition--with-image) {
      position: sticky;
      top: 240px;
      bottom: -20px;
      z-index: 1000;
    }
  }

  .editon__label {
    font-family: ${tokens.fonts.founders.family};
    font-size: 1rem;
    font-weight: ${tokens.fonts.founders.weight.medium};
    line-height: 1.25;
    letter-spacing: 0.5px;
    margin: 0;
    text-transform: uppercase;
    transform: rotate(-90deg) translateX(calc(100% + 4px));
    transform-origin: bottom right;
    white-space: nowrap;
  }

  .edition:not(.edition--with-image).editon__label {
    transform: rotate(-90deg) translateX(calc(250% + 4px));
  }

  @media ${tokens.mq.desktop} {
    .editon__label {
      transform: rotate(-90deg) translateX(calc(100% + 4px));
    }
  }

  .edition--with-image .editon__label {
    bottom: 0;
    position: absolute;
    right: -30px;
  }
`;
