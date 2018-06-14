import css from 'styled-jsx/css';

export default css`
  .block {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .block + .block {
    margin-top: 60px;
  }
`;
