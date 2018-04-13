export default ({ image }) => (
  <p className="edition">
    <style jsx>{`
      .edition {
        display: inline-block;
        margin-left: 30px;
        margin-top: -300px;
        text-transform: uppercase;
        transform: rotate(-90deg);
        transform-origin: bottom left;
      }
    `}</style>

  {image && <img src={image.url} alt={image.alt} className="edition__image" />}

    Frühling / Sommer 2018
  </p>
);
