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
    height: 6rem;
    width: 6rem;
  }

  @media ${tokens.mq.desktop} {
    .badge__text {
      height: 6rem;
      width: 6rem;
    }
  }

  .badge__text {
    font-family: ${tokens.fonts.founders.family};
    font-size: 1rem;
    font-weight: ${tokens.fonts.founders.weight.medium};
    line-height: 1;
    margin: 0;
    padding: 1.375em 0.75em 1.5em 0.75em;
    text-align: center;
  }

  @media ${tokens.mq.desktop} {
    .badge {
      transform: scale(1.25);
    }
  }
`;
