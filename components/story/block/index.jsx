import Content from '../content';
import Gallery from '../gallery';
import Products from '../products';
import Title from '../title';

import styles from './styles';

export default ({ content, gallery, products, title }) => (
  <section className="block">
    <style jsx>{styles}</style>

    {title && <Title {...title} />}
    {gallery && <Gallery {...gallery} />}
    {content && <Content {...content} />}
    {products && <Products {...products} />}
  </section>
);
