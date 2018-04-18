export default () => <span className="dots"><style jsx>{`
  .dots {
    display: inline-block;
    height: 18px;
    margin-left: 5px;
    position: relative;
    width: 15px;
  }

  .dots:before {
    content: '…';
    font-size: 24px;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`}</style></span>;
