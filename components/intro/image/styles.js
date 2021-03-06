import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .intro-image {
    object-fit: contain;
    width: 75%;
  }

  @media ${tokens.mq.phablet} {
    .intro-image--reversed {
      width: 50%;
    }
  }

  @media ${tokens.mq.desktop} {
    .intro-image {
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
      width: 45%;
    }
  }
`;
