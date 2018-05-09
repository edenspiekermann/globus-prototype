import css from 'styled-jsx/css';

import tokens from '../../../../tokens';

export default css`
  .title {
    font-family: ${tokens.fonts.founders.family};
    margin-bottom: 0;
    margin-top: 0;
    position: relative;
    z-index: 3;
  }

  @media ${tokens.mq.tablet} {
    .title {
      position: absolute;
      top: 0;
    }
  }

  .title--standalone {
    padding-left: 40px;
    padding-right: 40px;
    position: relative;
  }

  @media ${tokens.mq.tablet} {
    .title--standalone.title--center {
      transform: translateX(-50%);
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

  @media ${tokens.mq.tablet} {
    .title--small {
      font-size: 80px;
    }
  }

  .title--left,
  .title--right {
    margin-top: -120px;
    width: 80%;
  }

  @media ${tokens.mq.tablet} {
    .title--left,
    .title--right {
      margin-top: 0;
      width: 50%;
    }
  }

  .title--left {
    left: 0;
    margin-left: 40px;
  }

  .title--right {
    align-self: flex-end;
    margin-left: auto;
    margin-right: 40px;
    right: 0;
    text-align: right;
  }

  .title--center {
    max-width: 1200px;
    text-align: center;
    width: 100%;
  }

  @media ${tokens.mq.tablet} {
    .title--center {
      left: 50%;
      top: 0;
      transform: translateX(-50%) translateY(-50%);
    }
  }

  @media ${tokens.mq.tablet} {
    .title--center-overlay-right {
      right: -180px;
      text-align: right;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;
