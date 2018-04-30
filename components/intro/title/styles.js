import css from 'styled-jsx/css';

import tokens from '../../../tokens';

export default css`
  .intro-title {
    font-family: ${tokens.fonts.founders.family};
    // see https://www.smashingmagazine.com/2016/05/fluid-typography/
    font-size: calc(2.5rem + ((42 * (100vw - 400px)) / 1600));
    font-weight: ${tokens.fonts.founders.weight.medium};
    line-height: 0.875;
    margin-bottom: 20px;
  }

  @media ${tokens.mq.phone} {
    .intro-title {
      margin-bottom: 60px;
      font-size: calc(3.5rem + ((42 * (100vw - 400px)) / 1600));
      max-width: 80%;
    }
  }

  @media ${tokens.mq.tablet} {
    .intro-title {
      margin-bottom: 60px;
      font-size: calc(4rem + ((42 * (100vw - 400px)) / 1600));
      max-width: 80%;
    }
  }

  .intro-title__byline {
    display: block;
    font-family: ${tokens.fonts.domaine.family};
    font-size: 1rem;
    font-weight: ${tokens.fonts.domaine.weight.semibold};
    line-height: 1;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  @media ${tokens.mq.phone} {
    .intro-title__byline {
      font-size: 1.25rem;
      line-height: 1;
    }
  }

  .intro-title__byline-separator {
    ${tokens.mixins.visuallyHidden};
  }

  .intro-title__number {
    display: block;
    font-size: 6rem;
    font-weight: 500;
    margin-bottom: 20px;
  }

  @media ${tokens.mq.tablet} {
    .intro-title__number {
      font-size: 10rem;
      margin-bottom: 40px;
    }
  }
`;
