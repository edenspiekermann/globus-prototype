import styles from './styles';

export default ({ image, label }) => (
  <div className={`edition ${image ? 'edition--with-image' : ''}`}>
    <style jsx>{styles}</style>

    {image && (
      <div className="edition__image-container">
        <img src={image.url} alt={image.alt} className="edition__image" />
      </div>
    )}

    <p className="editon__label">{label}</p>
  </div>
);
