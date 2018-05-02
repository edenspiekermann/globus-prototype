const sizes = {
  phone: 380,
  phablet: 650,
  tablet: 768,
  desktop: 960,
  large: 1400
};

export default {
  sizes,

  colors: {
    grey: 'rgb(166, 166, 166)'
  },

  mq: Object.keys(sizes).reduce((acc, size) => {
    acc[size] = `screen and (min-width: ${sizes[size]}px)`;
    return acc;
  }, {}),

  fonts: {
    domaine: {
      family: 'Domaine Display, serif',
      weight: {
        semibold: 600
      }
    },

    founders: {
      family: 'Founders Grotesk, sans-serif',
      weight: {
        regular: 400,
        medium: 500
      }
    },

    gill: {
      family: 'Gill Sans, sans-serif',
      weight: {
        regular: 400
      }
    },

    icon: {
      family: 'Globus Icon'
    }
  },

  mixins: {
    visuallyHidden: `
      position: absolute !important;
      height: 1px; width: 1px;
      overflow: hidden;
      clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
      clip: rect(1px, 1px, 1px, 1px);
    `
  }
};
