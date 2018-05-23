import css from 'styled-jsx/css';

import tokens from '../../tokens';

export default css`
  .in-the-mood {
    padding-bottom: 30px;
  }

  @media ${tokens.mq.phone} {
    .in-the-mood {
      padding-bottom: 60px;
    }
  }

  @media ${tokens.mq.tablet} {
    .in-the-mood {
      padding-bottom: 120px;
    }
  }

  @media ${tokens.mq.large} {
    .in-the-mood {
      padding-bottom: 160px;
    }
  }
`;
