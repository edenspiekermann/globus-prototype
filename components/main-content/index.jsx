import styles from './styles';

export default ({ children }) => (
  <section className="main-content">
    <style jsx>{styles}</style>
    {children}
  </section>
);
