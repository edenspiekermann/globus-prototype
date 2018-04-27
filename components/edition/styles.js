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
      transform: translateY(80px);
    }
  }

  .editon__label {
    font-family: ${tokens.fonts.founders.family};
    font-size: 16px;
    font-weight: ${tokens.fonts.founders.weight.medium};
    line-height: ${20 / 16};
    margin: 0;
    text-transform: uppercase;
    transform: rotate(-90deg) translateX(calc(100% + 10px));
    transform-origin: bottom right;
    white-space: nowrap;
  }

  .edition:not(.edition--with-image).editon__label {
    transform: rotate(-90deg) translateX(calc(250% + 10px));
  }

  @media ${tokens.mq.desktop} {
    .editon__label {
      transform: rotate(-90deg) translateX(calc(100% + 10px));
    }
  }

  .edition--with-image .editon__label {
    bottom: 0;
    position: absolute;
    right: -25px;
  }
`;
