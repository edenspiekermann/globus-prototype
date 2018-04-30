import css from 'styled-jsx/css';

import tokens from '../../tokens';

export default css`
  .sidebar {
    background-color: rgb(245, 245, 250);
    overflow-x: hidden;
    padding-bottom: 20px;
    padding-top: 20px;
  }

  @media ${tokens.mq.tablet} {
    .sidebar {
      align-self: flex-start;
      flex: 0 0 auto;
      margin-left: 20px;
      margin-right: 20px;
      position: sticky;
      top: 6vh;
      width: 290px;
    }
  }

  @media ${tokens.mq.desktop} {
    .sidebar {
      margin-left: 60px;
      margin-right: 60px;
      width: 320px;
    }
  }

  @media ${tokens.mq.large} {
    .sidebar {
      width: 390px;
    }
  }

  .sidebar__title {
    font-family: ${tokens.fonts.domaine.family};
    font-size: 1.25rem;
    font-weight: ${tokens.fonts.domaine.weight.semibold};
    letter-spacing: 1px;
    line-height: ${22 / 20};
    margin-bottom: 0;
    margin-top: 10px;
    text-align: center;
    text-transform: uppercase;
  }

  .sidebar__list {
    list-style: none;
    margin: 30px 0 0 0;
    padding: 0;
  }

  .sidebar__outer-link {
    align-items: center;
    color: currentColor;
    display: block;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    text-decoration: none;
  }

  .sidebar__list-item {
    padding-right: 20px;
  }

  .sidebar__list-item-image {
    margin-right: -20px;
    max-height: 100px;
    max-width: 100px;
    transform: translateX(-50%);
    transition: transform 150ms ease;
    will-change: transition;
    z-index: 1;
  }

  @media ${tokens.mq.tablet} {
    .sidebar__list-item-image {
      max-height: 80px;
      max-width: 80px;
    }
  }

  @media ${tokens.mq.desktop} {
    .sidebar__list-item-image {
      max-height: 100px;
      max-width: 100px;
    }
  }

  .sidebar__outer-link:hover .sidebar__list-item-image,
  .sidebar__outer-link:focus .sidebar__list-item-image {
    transform: translateX(0);
  }

  .sidebar__list-item-title {
    font-family: ${tokens.fonts.founders.family};
    font-size: 1.5rem;
    font-weight: ${tokens.fonts.founders.weight.medium};
    line-height: 1;
    max-width: 410px;
    z-index: 2;
  }

  @media ${tokens.mq.tablet} {
    .sidebar__list-item-title {
      font-size: 1.25rem;
    }
  }

  @media ${tokens.mq.desktop} {
    .sidebar__list-item-title {
      font-size: 1.5rem;
    }
  }

  .sidebar__list-item-byline {
    display: block;
    font-family: ${tokens.fonts.domaine.family};
    font-size: 0.75rem;
    font-weight: ${tokens.fonts.domaine.weight.semibold};
    letter-spacing: 0.5px;
    line-height: 1;
    margin-bottom: 5px;
    text-transform: uppercase;
  }
`;
