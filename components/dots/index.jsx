import tokens from '../../data/tokens';

export default () => <span className="dots"><style jsx>{`
  .dots {
    display: inline-block;
    height: 14px;
    margin-left: 5px;
    position: relative;
    width: 12px;
  }

  @media ${tokens.mq.desktop} {
    .dots {
      height: 18px;
      width: 15px;
    }
  }

  .dots:before {
    content: '…';
    font-size: 14px;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  @media ${tokens.mq.desktop} {
    .dots:before {
      font-size: 24px;
    }
  }
`}</style></span>;
