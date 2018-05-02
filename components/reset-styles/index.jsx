export default () => (
  <style global jsx>{`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      margin: 0;
      padding: 0;
    }

    img {
      width: 100%;
    }

    small {
      font-size: inherit;
    }
  `}</style>
);
