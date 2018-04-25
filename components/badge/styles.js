import css from 'styled-jsx/css';

import tokens from '../../tokens';

export default css`
  .badge {
    align-items: center;
    background-color: black;
    border-radius: 50%;
    color: white;
    display: flex;
    justify-content: center;
    height: 90px;
    width: 90px;
  }

  @media ${tokens.mq.desktop} {
    .badge__text {
      height: 100px;
      width: 100px;
    }
  }

  .badge__text {
    font-family: ${tokens.fonts.founders.family};
    font-size: 13px;
    font-weight: ${tokens.fonts.founders.weight.medium};
    line-height: 1;
    margin: 0;
    padding: 20px 13px;
    text-align: center;
  }

  @media ${tokens.mq.tablet} {
    .badge__text {
      font-size: 14px;
    }
  }

  @media ${tokens.mq.desktop} {
    .badge__text {
      font-size: 16px;
    }
  }
`;
