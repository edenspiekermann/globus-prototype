import css from 'styled-jsx/css';

import tokens from '../../tokens';

export default css`
  .main-content {
    display: flex;
    flex-direction: column;
    padding-bottom: 80px;
    padding-top: 120px;
  }

  @media ${tokens.mq.tablet} {
    .main-content {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
