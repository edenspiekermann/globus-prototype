import css from 'styled-jsx/css';

import tokens from '../../../../tokens';

export default css`
  .title {
    font-family: ${tokens.fonts.founders.family};
    margin-bottom: 0;
    margin-top: 0;
    position: absolute;
    top: 40px;
    z-index: 2;
  }

  .title--standalone {
    position: relative;
  }

  .title--standalone.title--center {
    transform: translateX(-50%);
  }

  .title--large {
    font-size: 192px;
    line-height: ${160 / 192};
  }

  .title--medium {
    font-size: 96px;
    line-height: 1;
  }

  .title--small {
    font-size: 80px;
    line-height: 1;
  }

  .title--left,
  .title--right {
    width: 50%;
  }

  .title--left {
    left: 40px;
  }

  .title--right {
    right: 40px;
    text-align: right;
  }

  .title--center {
    left: 50%;
    max-width: 1200px;
    text-align: center;
    top: 0;
    transform: translateX(-50%) translateY(-50%);
    width: 100%;
  }

  .title--center-overlay-right {
    right: -180px;
    text-align: right;
    top: 50%;
    transform: translateY(-50%);
  }
`;
