import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .block {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .block + .block {
    margin-top: 64px;
  }

  @media ${tokens.mq.desktop} {
    .block + .block {
      margin-top: 128px;
    }
  }
`;
