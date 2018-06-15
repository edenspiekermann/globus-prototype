import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .cards {
    background-color: #ffecb3;
    margin-bottom: 64px;
    padding: 20px 20px 60px 20px;
    position: relative;
    width: 100%;
  }

  @media ${tokens.mq.phone} {
    .cards {
      padding: 20px 40px 40px 40px;
    }
  }

  @media ${tokens.mq.phablet} {
    .cards {
      padding: 20px 60px 60px 60px;
      margin-top: 32px;
      margin-bottom: 80px;
    }
  }

  @media ${tokens.mq.desktopLarge} {
    .cards {
      float: left;
      height: 500px;
      margin-top: 0;
      margin-bottom: 60px;
      margin-left: -200px;
      margin-right: 60px;
      padding: 50px;
      width: 380px;
    }
  }

  .cards__category {
    bottom: 0;
    font-family: ${tokens.fonts.founders.family};
    font-weight: ${tokens.fonts.founders.weight.medium};
    font-size: 32px;
    text-align: center;
    line-height: 1;
    left: 15px;
    margin-top: -38px;
    margin-bottom: 32px;
  }

  @media ${tokens.mq.phablet} {
    .cards__category {
      font-size: 48px;
      margin-top: -48px;
    }
  }

  @media ${tokens.mq.desktop} {
    .cards__category {
      font-size: 64px;
      margin-top: -56px;
    }
  }

  @media ${tokens.mq.desktopLarge} {
    .cards__category {
      bottom: -32px;
      left: 24px;
      width: 500px;
      
      margin-top: 0;
      margin-bottom: 0;
      
      text-align: left;
      position: absolute;
      transform: rotate(-90deg);
      transform-origin: bottom left;
    }
  }

  .cards__controls {
    bottom: 0;
    position: absolute;
    right: 20px;
    transform: translateY(30%);
  }

  .cards__controls-control {
    background: #fff;
    border: 2px solid #000;
    cursor: pointer;
    padding: 9px 15px 7px 15px;
  }

  .cards__controls-control:active {
    transform: translateY(2px);
  }

  .cards__controls-control + .cards__controls-control {
    margin-left: 5px;
  }

  .cards__controls-control-arrow {
    height: 16px;
    width: 24px;
  }

  .cards__cards-track {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .cards__card:not(.cards__card--is-active) {
    display: none;
  }

  .cards__card-title {
    font-family: ${tokens.fonts.founders.family};
    font-size: 20px;
    font-weight: ${tokens.fonts.founders.weight.medium};
    line-height: 1.25;
    letter-spacing: 0.5px;
    margin-bottom: 16px;
    margin-top: 0;
    text-align: center;
    text-transform: uppercase;
  }

  .cards__card-counter {
    opacity: 0.2;
    display: block;
    font-size: 16px;
    letter-spacing: 1px;
    margin-top: 16px;
  }

  .cards__card-content {
    font-family: ${tokens.fonts.founders.family};
    font-size: 20px;
    line-height: 1.5;
  }
`;
