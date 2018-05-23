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
    z-index: 2;
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
    font-size: 80px; //fallback
    font-size: 20vw;
    line-height: 0.875;
    margin-top: -15vw;
    padding: 30px;
  }

  @media ${tokens.mq.phablet} {
    .title--large {
      margin-top: -12.5vw;
    }
  }

  @media ${tokens.mq.tablet} {
    .title--large {
      font-size: 12.5vw;

      position: absolute;
      padding: 0;
      margin-top: 0;
      transform: none;
    }

    .title--large.title--center {
      font-size: 15vw;

      top: 50px;
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
      top: 0px;
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
      font-size: 80px;
      padding-left: 0;
      padding-right: 0;
      max-width: 800px;
    }

    .title--small.title--left {
      transform: translateX(-60px);
      margin-left: 0;
    }

    .title--small.title--right {
      transform: translateX(60px);
      margin-right: 0;
    }
  }

  @media ${tokens.mq.large} {
    .title--small {
      font-size: 96px;
    }
  }
  /* Title Small: End */

`;
