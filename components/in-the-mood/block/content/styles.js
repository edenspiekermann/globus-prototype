import css from 'styled-jsx/css';

import tokens from '../../../../tokens';

export default css`
  .content {
    font-family: ${tokens.fonts.founders.family};
    font-size: 16px;
    line-height: 1.25;
    padding: 30px;
    text-align: center;
  }

  .content--has-image-and-shoppinglayer {
    padding-top: 40px;
  }

  @media ${tokens.mq.phone} {
    .content {
      font-size: 20px;
      padding: 30px 60px 60px 60px;
    }

    .content--has-image-and-shoppinglayer {
      padding-top: 60px;
    }
  }

  @media ${tokens.mq.phablet} {
    .content {
      max-width: 160px;
      padding: 0;
      font-size: 16px;
      position: absolute;
      top: 30px;
      width: 60%;
    }
  }

  @media ${tokens.mq.tablet} {
    .content {
      max-width: 240px;
      font-size: 20px;
    }
  }

  @media ${tokens.mq.large} {
    .content {
      max-width: 320px;
      font-size: 24px;
    }
  }

  .content--left {
    left: 30px;
  }

  .content--right {
    right: 30px;
  }

  @media ${tokens.mq.phablet} {
    .content--left {
      text-align: left;
    }
    
    .content--right {
      text-align: right;
    }
  }

  @media ${tokens.mq.large} {
    .content--left,
    .content--right {
      top: 60px;
    }

    .content--right {
      right: 60px;
    }

    .content--left {
      left: 60px;
    }
  }

  .content__paragraph:first-child {
    margin-top: 0;
  }

  .content__paragraph:last-child {
    margin-bottom: 0;
  }
`;
