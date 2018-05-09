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
    margin-top: 120px;
  }
`;
