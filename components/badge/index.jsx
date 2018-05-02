import styles from './styles';

export default ({ text }) => (
  <div className="badge">
    <style jsx>{styles}</style>
    <p className="badge__text">{text}</p>
  </div>
);
