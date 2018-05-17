import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .in-the-mood-section {
    display: flex;
    flex-direction: column;
  }

  @media ${tokens.mq.desktop} {
    .in-the-mood-section {
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }

  @media ${tokens.mq.tablet} {
    .in-the-mood-section + .in-the-mood-section {
      padding-top: 120px;
    }
  }

  @media ${tokens.mq.large} {
    .in-the-mood-section + .in-the-mood-section {
      padding-top: 160px;
    }
  }

  .in-the-mood-section + .in-the-mood-section--collapse {
    padding-top: 0;
  }

  .in-the-mood-section__container {
    line-height: 0;
    width: 100%;
    margin-bottom: 80px;
  }

  @media ${tokens.mq.tablet} {
    .in-the-mood-section__container {
      margin-bottom: inherit;
    }
  }
`;
