import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .in-the-mood-section {
    display: flex;
    flex-direction: column;
  }

  @media ${tokens.mq.tablet} {
    .in-the-mood-section {
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }

  .in-the-mood-section + .in-the-mood-section {
    margin-top: 60px;
  }

  @media ${tokens.mq.tablet} {
    .in-the-mood-section + .in-the-mood-section {
      margin-top: 120px;
    }
  }

  .in-the-mood-section__container {
    line-height: 0;
    width: 100%;
  }

  .in-the-mood-section__container + .in-the-mood-section__container {
    margin-top: 60px;
  }

  .in-the-mood-section--collapse
    .in-the-mood-section__container
    + .in-the-mood-section__container {
    margin-top: 0;
  }

  @media ${tokens.mq.tablet} {
    .in-the-mood-section__container + .in-the-mood-section__container {
      margin-top: 0;
    }
  }
`;
