import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .cards {
    background-color: #ffecb3;
    margin-bottom: 40px;
    padding: 20px 20px 40px 40px;
    position: relative;
    width: 100%;
  }

  @media ${tokens.mq.desktop} {
    .cards {
      float: left;
      height: 500px;
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
    font-size: 34px;
    line-height: 1;
    left: 15px;
    margin-bottom: 0;
    margin-top: 0;
    position: absolute;
    transform: rotate(-90deg);
    transform-origin: bottom left;
  }

  @media ${tokens.mq.desktop} {
    .cards__category {
      bottom: -25px;
      font-size: 48px;
      left: 25px;
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
    line-height: ${30 / 20};
    margin-bottom: 15px;
    margin-top: 0;
    text-align: center;
    text-transform: uppercase;
  }

  .cards__card-counter {
    color: rgb(186, 178, 156);
    display: block;
    font-size: 16px;
    margin-top: 15px;
  }

  .cards__card-content {
    font-family: ${tokens.fonts.founders.family};
    font-size: 20px;
    line-height: ${30 / 20};
  }
`;
