import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`

  .intro-image {
    width: 75%;  
  }


  @media ${tokens.mq.desktop} {
    .intro-image {
      max-height: 100%;
      object-fit: contain;
      width: 40%;
    }
  }

  @media ${tokens.mq.desktop} {
    .intro-image--reversed {
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  @media ${tokens.mq.large} {
    .intro-image {
      max-height: inherit;
      object-fit: contain;
      width: 45%;
    }
  }
`;
