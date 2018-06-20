import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .content {
    font-family: ${tokens.fonts.founders.family};
    font-size: 24px;
    line-height: 1.25;
    max-width: 720px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media ${tokens.mq.phone} {
    .content {
      line-height: 1.5;
    }
  }

  @media ${tokens.mq.phablet} {
    .content {
      padding-left: 40px;
      padding-right: 40px;
    }
  }

  @media ${tokens.mq.desktop} {
    .content {
      padding-left: 0;
      padding-right: 0;
    }
  }

  .content__grid {
    display: flex;
  }

  .content__paragraph--theme-intro {
    font-size: 32px;
    font-weight: ${tokens.fonts.founders.weight.medium};
    line-height: 1.125;
  }

  @media ${tokens.mq.phone} {
    .content__paragraph--theme-intro {
      line-height: 1.25;
    } 
  }
`;
