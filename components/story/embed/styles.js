import css from 'styled-jsx/css';

export default css`
  .embed {
    overflow: hidden;
    position: relative;
    padding-top: 56.25%;
    width: 100%;
  }

  .embed iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;
