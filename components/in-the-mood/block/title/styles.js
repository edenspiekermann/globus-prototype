import css from 'styled-jsx/css';

import tokens from '../../../../tokens';

export default css`
  .title {
    font-family: ${tokens.fonts.founders.family};
    margin-bottom: 0;
    margin-top: 0;
    position: relative;
    z-index: 3;
    align-self: center;
  }

  @media ${tokens.mq.tablet} {
    .title {
      position: absolute;
      top: 0;
    }
  }

  .title--standalone {
    margin-left: auto;
    margin-right: auto;
    padding: 30px;
    position: static;
  }

  @media ${tokens.mq.phablet} {
    .title--standalone {
      padding: 60px;
    }
  }

  @media ${tokens.mq.tablet} {
    .title--standalone {
      padding: 120px;
    }
  }

  @media ${tokens.mq.large} {
    .title--standalone {
      padding: 160px;
    }
  }

  .title--large {
    font-size: 64px;
    line-height: ${56 / 64};
  }

  @media ${tokens.mq.tablet} {
    .title--large {
      font-size: 192px;
      line-height: ${160 / 192};
    }
  }

  .title--medium {
    font-size: 48px;
    line-height: 1;
  }

  @media ${tokens.mq.tablet} {
    .title--medium {
      font-size: 96px;
    }
  }

  .title--small {
    font-size: 48px;
    line-height: 1;
  }

  @media ${tokens.mq.phablet} {
    .title--small {
      font-size: 56px;
    }
  }

  @media ${tokens.mq.desktop} {
    .title--small {
      font-size: 64px;
    }
    
    .title--small.title--left {
      padding-left: 0;
      transform: translateX(-80px);
    }
    
    .title--small.title--right {
      padding-right: 0;
      transform: translateX(80px);
    }
  }

  @media ${tokens.mq.large} {
    .title--small {
      font-size: 80px;
    }
    
    .title--small.title--left {
      transform: translateX(-200px);
    }
    
    .title--small.title--right {
      transform: translateX(200px);
    }
  }

  .title--left {
    text-align: left;
  }

  .title--right {
    text-align: right;
  }

  .title--center {
    text-align: center;
    max-width: 1800px;
  }

`;
