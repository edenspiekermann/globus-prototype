import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .in-the-mood-section {
    display: flex;
    flex-direction: column;
  }

  .in-the-mood-section:last-child {
    margin-bottom: 80px;
  }

  @media ${tokens.mq.tablet} {
    .in-the-mood-section:last-child {
      margin-bottom: 160px;
    }
  }

  @media ${tokens.mq.large} {
    .in-the-mood-section:last-child {
      margin-bottom: 240px;
    }
  }

  @media ${tokens.mq.desktop} {
    .in-the-mood-section {
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }

  .in-the-mood-section + .in-the-mood-section {
    margin-top: 80px;
  }

  @media ${tokens.mq.tablet} {
    .in-the-mood-section + .in-the-mood-section {
      margin-top: 160px;
    }
  }

  @media ${tokens.mq.large} {
    .in-the-mood-section + .in-the-mood-section {
      margin-top: 240px;
    }
  }

  .in-the-mood-section + .in-the-mood-section--collapse {
    margin-top: 0;
  }

  .in-the-mood-section__container {
    line-height: 0;
    width: 100%;
  }
`;
