import ListicleItem from './item';

export default ({ products }) => <ul className="listicle">
  <style jsx>{`
    .listicle {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .listicle__item {
      margin-bottom: 120px;
    }
  `}</style>

{products.map((_, index) => <li className="listicle__item">
    <ListicleItem {..._} index={index + 1} />
  </li>)}
</ul>;
