import css from 'styled-jsx/css';

import tokens from '../../tokens';

export default css`
  .main-content {
    display: flex;
    flex-direction: column;
  }

  @media ${tokens.mq.tablet} {
    .main-content {
      flex-direction: row;
      justify-content: space-between;
      padding-bottom: 80px;
    }
  }
`;
