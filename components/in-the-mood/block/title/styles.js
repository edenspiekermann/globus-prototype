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
    font-weight: 500;
    text-align: center;
  }

  .title--large {
    padding: 30px;
    margin-top: -80px;
  }

  @media ${tokens.mq.tablet} {
    .title--large {
      position: absolute;
      top: 30px;
      padding: 0;
      margin-top: 0;
    }
    
    .title--large.title--center {
      width: 100%;
      max-width: 100%;
      padding-left: 60px;
      padding-right: 60px;
    }
    
    .title--large.title--right {
      right: 30px;
      max-width: 50%;
      text-align: right;
    }
    
    .title--large.title--left {
      right: 30px;
      max-width: 50%;
      text-align: left;
    }
  }

  @media ${tokens.mq.desktop} {
      .title--large {
        top: 60px;
      }
      
      .title--large.title--right {
        right: 60px;
      }
      
      .title--large.title--left {
        right: 60px;
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
    font-size: 80px;
    line-height: 0.875;
  }

  @media ${tokens.mq.tablet} {
    .title--large {
      font-size: 96px;
    }
  }

  @media ${tokens.mq.desktop} {
    .title--large {
      font-size: 128px;
    }
  }

  @media ${tokens.mq.large} {
    .title--large {
      font-size: 192px;
    }
  }

  .title--medium {
    font-size: 48px;
    line-height: 0.875;
  }

  @media ${tokens.mq.tablet} {
    .title--medium {
      font-size: 96px;
    }
  }

  .title--small {
    font-size: 48px;
    line-height: 0.875;
  }

  @media ${tokens.mq.phablet} {
    .title--small {
      font-size: 56px;
    }
  }

  @media ${tokens.mq.desktop} {
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

`;
