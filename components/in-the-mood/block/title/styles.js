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
  }

  /* Title Large: Start */
  .title--large {
    font-size: 64px;
    line-height: 0.875;
    margin-top: -90px;
    padding: 30px;
  }

  @media ${tokens.mq.phone} {
    .title--large {
      margin-top: -120px;
    }
  }

  @media ${tokens.mq.phablet} {
    .title--large {
      font-size: 80px;
      margin-top: -135px;
    }
  }

  @media ${tokens.mq.tablet} {
    .title--large {
      font-size: 96px;

      position: absolute;
      padding: 0;
      margin-top: 0;
      transform: none;
    }

    .title--large.title--center {
      top: 65px;
      width: 100%;
      max-width: 100%;
      padding-left: 60px;
      padding-right: 60px;
    }

    .title--large.title--left,
    .title--large.title--right {
      top: 30px;
      max-width: 50%;
    }

    .title--large.title--right {
      right: 30px;
      text-align: right;
    }

    .title--large.title--left {
      left: 30px;
      text-align: left;
    }
  }

  @media ${tokens.mq.desktop} {
    .title--large {
      font-size: 128px;
    }

    .title--large.title--left,
    .title--large.title--right {
      top: 60px;
    }

    .title--large.title--right {
      right: 60px;
    }

    .title--large.title--left {
      left: 60px;
    }

    .title--large.title--center {
      top: 50px;
    }
  }

  @media ${tokens.mq.large} {
    .title--large {
      font-size: 192px;
    }
  }
  /* Title Large: End */

  /* Title Medium: Start */
  .title--medium {
    font-size: 42px;
    line-height: 1;
  }

  @media ${tokens.mq.tablet} {
    .title--medium {
      font-size: 96px;
    }
  }
  /* Title Medium: End */

  /* Title Small: Start */
  .title--small {
    font-size: 42px;
    line-height: 1;
  }

  @media ${tokens.mq.tablet} {
    .title--small {
      font-size: 96px;
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
  /* Title Small: End */

`;
