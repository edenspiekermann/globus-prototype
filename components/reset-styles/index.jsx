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
      overflow-x: hidden;
      padding: 0;
    }

    img {
      width: 100%;
    }

    small {
      font-size: inherit;
    }

    video {
      max-width: 100%;
    }
  `}</style>
);
