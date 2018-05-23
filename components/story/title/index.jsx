import styles from './styles';

export default ({ content, byline }) => (
  <strong className="title">
    <style jsx>{styles}</style>
    <span className="title__content">{content}</span>

    {byline && <small className="title__byline">{byline}</small>}
  </strong>
);
