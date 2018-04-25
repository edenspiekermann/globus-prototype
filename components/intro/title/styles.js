import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .intro-title {
    font-family: ${tokens.fonts.founders.family};
    // see https://www.smashingmagazine.com/2016/05/fluid-typography/
    font-size: calc(54px + ((42 * (100vw - 400px)) / 1600));
    font-weight: ${tokens.fonts.founders.weight.medium};
    line-height: 0.875;
    margin-bottom: 20px;
    max-width: 80%;
  }

  @media ${tokens.mq.desktop} {
    .intro-title {
      margin-bottom: 60px;
    }
  }

  .intro-title__byline {
    display: block;
    font-family: ${tokens.fonts.domaine.family};
    font-size: 20px;
    font-weight: ${tokens.fonts.domaine.weight.semibold};
    line-height: ${22 / 20}px;
    margin-bottom: 15px;
    text-transform: uppercase;
  }

  .intro-title__byline-separator {
    ${tokens.mixins.visuallyHidden};
  }

  .intro-title__number {
    display: block;
    font-size: 140px;
    font-weight: 500;
    margin-bottom: 20px;
  }

  @media ${tokens.mq.tablet} {
    .intro-title__number {
      font-size: 160px;
      margin-bottom: 40px;
    }
  }
`;
