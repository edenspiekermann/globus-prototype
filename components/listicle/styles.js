import css from 'styled-jsx/css';

import tokens from '../../tokens';

export default css`
  .listicle__list {
    list-style: none;
    max-width: 1200px;
    padding: 0;
    margin: 0;
  }

  .listicle__item {
    margin-bottom: 120px;
  }

  @media ${tokens.mq.tablet} {
    .listicle__item {
      margin-bottom: 180px;
    }
  }

  @media ${tokens.mq.desktop} {
    .listicle__item {
      margin-bottom: 240px;
    }
  }

  .listicle__item:last-child {
    margin-bottom: 120px;
  }
`;
