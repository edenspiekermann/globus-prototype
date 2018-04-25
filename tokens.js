export default {
  colors: {
    grey: 'rgb(166, 166, 166)',
  },

  mq: {
    phone: 'screen and (min-width: 380px)',
    tablet: 'screen and (min-width: 768px)',
    desktop: 'screen and (min-width: 960px)',
    large: 'screen and (min-width: 1400px)',
  },

  fonts: {
    domaine: {
      family: 'Domaine Display, serif',
      weight: {
        semibold: 600,
      },
    },

    founders: {
      family: 'Founders Grotesk, sans-serif',
      weight: {
        regular: 400,
        medium: 500,
      },
    },

    gill: {
      family: 'Gill Sans, sans-serif',
      weight: {
        regular: 400,
      },
    },

    icon: {
      family: 'Globus Icon',
    },
  },

  mixins: {
    visuallyHidden: `
      position: absolute !important;
      height: 1px; width: 1px;
      overflow: hidden;
      clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
      clip: rect(1px, 1px, 1px, 1px);
    `,
  },
};
