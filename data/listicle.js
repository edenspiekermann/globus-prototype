export default [
  {
    summary: {
      background: 'rgb(58, 32, 64)',
      color: 'white',
      title: 'Für alle Genießer:  die Weinkiste mit 6 kalifornischen Weinen',
      text: [
        'Diese Zusammenstellung aus Kalifornien lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
      ],
      image: {
        url: '/static/images/product-summary_1.jpg',
        alt: 'Dinge auf einem Regal'
      },
      price: '239.00',
      type: '6er Box Kalifornische Weine',
      button: {
        label: 'Weinbox bestellen',
        url: '#'
      }
    },

    products: [
      {
        title: 'LOGOMANIA',
        text: [
          'Die Logomania ist noch immer auf dem Vormarsch. Modelabels wie Calvin Klein oder Champion setzen auf den grossflächigen Print des eigenen Namens. Klicken Sie sich durch die coolsten Logo-Sweater & Logo-Accessoires!'
        ],
        image: {
          url: '/static/images/listicle_1.jpg',
          alt: 'Logomania'
        },
        button: {
          url: '#',
          label: 'Shop the style'
        },
        shoppingLayer: {
          title: '',
          inStock: true,
          products: [
            {
              image: {
                url: '/static/images/logomania_3.jpg',
                alt: 'Dummy image'
              },
              title: 'Calvin Klein',
              type: 'Bikini Oberteil',
              price: '79.90'
            },
            {
              image: {
                url: '/static/images/logomania_2.jpg',
                alt: 'Dummy image'
              },
              title: 'FILA',
              type: 'Athleisure-langarm Shirt',
              price: '89.90'
            },
            {
              image: {
                url: '/static/images/logomania_1.jpg',
                alt: 'Dummy image'
              },
              title: 'FILA',
              type: 'Gürteltasche',
              price: '19.90'
            }
          ]
        }
      },

      {
        title: 'Nachhaltigkeit als Lebensstil',
        text: [
          'In kaum einer anderen Grossstadt wird so viel Wert auf Nachhaltigkeit gelegt wie in Los Angeles. Der direkte Einkauf bei den Bauern und Produzenten findet auf dem wöchentlichen Farmers’ Market statt.',
          'Nicht nur in Beverly Hills, auch in unserem hauseigenen Farmers’ Market, unserer ***delicatessa, stehen saisonale Produkte aus der Region im Fokus. Schauen Sie vorbei und lassen Sie sich inspirieren.'
        ],
        type: 'full',
        image: {
          url: '/static/images/listicle_2.jpg',
          alt: 'Viele leckere Gemüsekisten'
        },
        badge: 'Ab Mai 2018 im Sortiment'
      },

      {
        title: 'Good vibrations',
        text: [
          'The Weeknd, Beyoncé und Eminem führten als Headliner das diesjährige Coachella Festival an.',
          'Den Sound der kalifornischen Wüste können Sie jetzt auch zu Hause geniessen — oder unterwegs wo immer sie gerade sind.'
        ],
        image: {
          url: '/static/images/listicle_3.jpg',
          alt: 'Dicke Soundbox'
        },
        button: {
          url: '#',
          label: 'Bluetooth-Box kaufen'
        },
        shoppingLayer: {
          title: '',
          inStock: true,
          products: [
            {
              image: {
                url: '/static/images/speakers_1.jpg',
                alt: 'Dummy image'
              },
              title: 'JBL Harman',
              type: 'Bluetooth Lautsprecher',
              price: '279.00'
            },
            {
              image: {
                url: '/static/images/speakers_2.jpg',
                alt: 'Dummy image'
              },
              title: 'JBL Harman',
              type: 'Bluetooth Lautsprecher',
              price: '179.00'
            },
            {
              image: {
                url: '/static/images/speakers_3.jpg',
                alt: 'Dummy image'
              },
              title: 'JBL Harman',
              type: 'Bluetooth Lautsprecher',
              price: '69.90'
            }
          ]
        }
      },

      {
        title: 'Glow für die Haut',
        text: [
          'Die Glamglow Masken made in Hollywood machen Ihre Haut innerhalb von wenigen Sekunden „camera-ready“.',
          'Die unterschiedlichen Mud-Treatments schaffen eine ideale Pflegegrundlage und eignen sich für verschiedene Hauttypen.'
        ],
        type: 'right',
        badge: 'Ab Mai 2018 im Sortiment',
        image: {
          url: '/static/images/listicle_4.jpg',
          alt: 'Mud-Treatment Cremes'
        },
        button: {
          url: '#',
          label: 'Treatments shoppen'
        },
        shoppingLayer: {
          title: 'Das könnten Ihnen auch gefallen',
          inStock: false,
          products: [
            {
              image: {
                url: '/static/images/glamglow_1.jpg',
                alt: 'Dummy image'
              },
              title: 'Glamglow',
              type: 'THIRSTYMUD Hydrating Treatment',
              price: '19.90'
            },
            {
              image: {
                url: '/static/images/glamglow_2.jpg',
                alt: 'Dummy image'
              },
              title: 'Glamglow',
              type: 'GRAVITYMUD FirmingTreatment',
              price: '19.90'
            },
            {
              image: {
                url: '/static/images/glamglow_3.jpg',
                alt: 'Dummy image'
              },
              title: 'Glamglow',
              type: 'YOUTHMUD Tinglexfoliate Treatment',
              price: '59.90'
            }
          ]
        }
      },

      {
        title: 'MEHR ATHLEISURE',
        text: [
          'Athleisure heisst der Trend, der den Sportsgeist auf die Strasse bringt. Lässige Shirts vermitteln Good Vibrations und den lockeren L.A.­Spirit.',
          'In Kombination mit auffälligen Accessoires erhält der Look ein Fashion­-Upgrade.'
        ],
        image: {
          url: '/static/images/listicle_5.jpg',
          alt: 'Modeshot'
        },
        button: {
          url: '#',
          label: 'Shop the look'
        },
        shoppingLayer: {
          title: '',
          inStock: true,
          products: [
            {
              image: {
                url: '/static/images/athleisure_1.jpg',
                alt: 'Dummy image'
              },
              title: 'NOKA’OI',
              type: 'Athleisure-langarm Shirt',
              price: '239.90'
            },
            {
              image: {
                url: '/static/images/athleisure_2.jpg',
                alt: 'Dummy image'
              },
              title: 'CASALL',
              type: 'Athleisure-Top',
              price: '59.90'
            },
            {
              image: {
                url: '/static/images/athleisure_3.jpg',
                alt: 'Dummy image'
              },
              title: 'BIRKENSTOCK',
              type: 'Sandale',
              price: '99.90'
            }
          ]
        }
      },

      {
        title: 'Mehr Bewegung',
        text: [
          'Kalifornier aller Altersgruppen trainieren Körper und Geist — ob im Studio oder bei einem Hike im Runyon Canyon.',
          'Einfache Tricks wie Treppensteigen statt Liftfahren oder anstelle des Autos mit dem Fahrrad zur Arbeit fahren bringen mehr Bewegung in Ihren Alltag.'
        ],
        type: 'right',
        image: {
          url: '/static/images/listicle_6.jpg',
          alt: 'Ein rotes Fahrrad'
        },
        button: {
          url: '#',
          label: 'Velo shoppen'
        },
        shoppingLayer: {
          title: 'Das könnten Ihnen auch gefallen',
          inStock: false,
          products: [
            {
              image: {
                url: '/static/images/bike_1.jpg',
                alt: 'Dummy image'
              },
              title: 'MARTONE',
              type: 'Herrenvelo',
              price: '1290.00'
            },
            {
              image: {
                url: '/static/images/bike_2.jpg',
                alt: 'Dummy image'
              },
              title: 'Thousand',
              type: 'Fahrradhandschuhe',
              price: '49.90'
            },
            {
              image: {
                url: '/static/images/bike_3.jpg',
                alt: 'Dummy image'
              },
              title: 'BROOKS ENGLAND',
              type: 'Fahrradpumpe',
              price: '69.90'
            }
          ]
        }
      },

      {
        title: 'KAKTEEN!',
        text: [
          'Der Kaktus ist zur Modepflanze geworden und begegnet uns nicht nur in der kalifornischen Wüste, sondern auch auf Design-Blogs, Kunstmessen und in Lifestyle-Magazinen. Die Wüstenpflanzen brauchen nur wenig Aufmerksamkeit und sind praktisch in der Pflege.'
        ],
        image: {
          url: '/static/images/listicle_7.jpg',
          alt: 'Kakteen an Felsen, Stillleben'
        },
        button: {
          url: '#',
          label: 'Kakteen shoppen'
        },
        shoppingLayer: {
          title: '',
          inStock: true,
          products: [
            {
              image: {
                url: '/static/images/kaktus_1.jpg',
                alt: 'Dummy image'
              },
              title: 'Globus',
              type: 'Deko Kaktus',
              price: '59.90'
            },
            {
              image: {
                url: '/static/images/kaktus_2.jpg',
                alt: 'Dummy image'
              },
              title: 'Sunnylife',
              type: 'Aufblasbarer Kaktus',
              price: '69.90'
            },
            {
              image: {
                url: '/static/images/kaktus_3.jpg',
                alt: 'Dummy image'
              },
              title: 'NATURAL LIFE',
              type: 'Dekoschale',
              price: '19.90'
            }
          ]
        }
      }
    ]
  },

  // Wine
  {
    summary: {
      background: 'rgb(58, 32, 64)',
      color: 'white',
      title: 'Für alle Genießer:  die Weinkiste mit 6 kalifornischen Weinen',
      text: [
        'Diese Zusammenstellung aus Kalifornien lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
      ],
      image: {
        url: '/static/images/product-summary_1.jpg',
        alt: 'Dinge auf einem Regal'
      },
      price: '239.00',
      type: '6er Box Kalifornische Weine',
      button: {
        label: 'Weinbox bestellen',
        url: '#'
      }
    },

    products: [
      {
        title: 'DER FRISCHE',
        text: [
          '«Zinfandel gehört zu den wichtigsten Rebsorten Kaliforniens. Das Familienunternehmen Caymus Vineyards ist einer der führender Hersteller herausragender Rotweine in der Napa Valley Region.»'
        ],
        image: {
          url: '/static/images/wine_1.jpg',
          alt: 'Logomania'
        },
        location: 'Zinfandel, Napa Valley 2015',
        button: {
          url: '#',
          label: 'Wein kaufen'
        },
        shoppingLayer: {
          title: '',
          inStock: true,
          products: [
            {
              image: {
                url: '/static/images/wine-product_1.jpg',
                alt: 'Dummy image'
              },
              title: 'Caymus Vineyars',
              type: 'Zinfandel Napa Valley 2014',
              price: '49.90'
            },
            {
              image: {
                url: '/static/images/wine-product_2.jpg',
                alt: 'Dummy image'
              },
              title: 'Stag’s Leap Wine Cellars',
              type: 'Chardonnay Karia Napa Valley 2015',
              price: '39.90'
            },
            {
              image: {
                url: '/static/images/wine-product_3.jpg',
                alt: 'Dummy image'
              },
              title: 'Ramey Wine Cellars',
              type: 'Chardonnay Russian River Valley 2014',
              price: '49.90'
            }
          ]
        }
      },

      {
        title: 'DER PRICKELNDE',
        text: [
          '«Ebenfalls von Caymus Vineyards stammt dieser traditionelle Cabernet Sauvignon. Ein kraftvoller, sehr opulenter Rotwein aus dem Napa Valley.»'
        ],
        type: 'right',
        location: 'Zinfandel, Napa Valley 2015',
        price: '49.90',
        badge: 'Ab Mai 2018 im Sortiment',
        image: {
          url: '/static/images/wine_2.jpg',
          alt: 'Viele leckere Gemüsekisten'
        },
        button: {
          url: '#',
          label: 'Wein kaufen'
        },
        shoppingLayer: {
          title: '',
          inStock: true,
          products: [
            {
              image: {
                url: '/static/images/wine-product_1.jpg',
                alt: 'Dummy image'
              },
              title: 'Caymus Vineyars',
              type: 'Zinfandel Napa Valley 2014',
              price: '49.90'
            },
            {
              image: {
                url: '/static/images/wine-product_2.jpg',
                alt: 'Dummy image'
              },
              title: 'Stag’s Leap Wine Cellars',
              type: 'Chardonnay Karia Napa Valley 2015',
              price: '39.90'
            },
            {
              image: {
                url: '/static/images/wine-product_3.jpg',
                alt: 'Dummy image'
              },
              title: 'Ramey Wine Cellars',
              type: 'Chardonnay Russian River Valley 2014',
              price: '49.90'
            }
          ]
        }
      },

      {
        title: 'DER NEUE',
        text: [
          '«Neu im Globus Sortiment ist der Cabernet Sauvignon von Stag’s Leap Wine Cellars aus dem Napa Valley. Dieser sensationelle Jahrgang ist finessenreich und elegant.»'
        ],
        image: {
          url: '/static/images/wine_3.jpg',
          alt: 'Dicke Soundbox'
        },
        price: '49.90',
        location: 'Zinfandel, Napa Valley 2015',
        button: {
          url: '#',
          label: 'Wein kaufen'
        },
        shoppingLayer: {
          title: '',
          inStock: true,
          products: [
            {
              image: {
                url: '/static/images/wine-product_1.jpg',
                alt: 'Dummy image'
              },
              title: 'Caymus Vineyars',
              type: 'Zinfandel Napa Valley 2014',
              price: '49.90'
            },
            {
              image: {
                url: '/static/images/wine-product_2.jpg',
                alt: 'Dummy image'
              },
              title: 'Stag’s Leap Wine Cellars',
              type: 'Chardonnay Karia Napa Valley 2015',
              price: '39.90'
            },
            {
              image: {
                url: '/static/images/wine-product_3.jpg',
                alt: 'Dummy image'
              },
              title: 'Ramey Wine Cellars',
              type: 'Chardonnay Russian River Valley 2014',
              price: '49.90'
            }
          ]
        }
      },

      {
        title: 'DER WEISSE',
        text: [
          '«Ein cool climate Chardonnay aus dem Russian River Valley. Winzer David Ramey lernte sein Handwerk bei kalifornsichen Kultweingütern wie Rudd oder Dominus, bis er 1996 die Ramey Wine Cellars gründete.»'
        ],
        type: 'right',
        location: 'Zinfandel, Napa Valley 2015',
        price: '49.90',
        image: {
          url: '/static/images/wine_4.jpg',
          alt: 'Mud-Treatment Cremes'
        },
        button: {
          url: '#',
          label: 'Wein kaufen'
        },
        shoppingLayer: {
          title: '',
          inStock: true,
          products: [
            {
              image: {
                url: '/static/images/wine-product_3.jpg',
                alt: 'Dummy image'
              },
              title: 'Ramey Wine Cellars',
              type: 'Chardonnay Russian River Valley 2014',
              price: '49.90'
            },
            {
              image: {
                url: '/static/images/wine-product_1.jpg',
                alt: 'Dummy image'
              },
              title: 'Caymus Vineyars',
              type: 'Zinfandel Napa Valley 2014',
              price: '49.90'
            },
            {
              image: {
                url: '/static/images/wine-product_2.jpg',
                alt: 'Dummy image'
              },
              title: 'Stag’s Leap Wine Cellars',
              type: 'Chardonnay Karia Napa Valley 2015',
              price: '39.90'
            }
          ]
        }
      },

      {
        title: 'DER GÜNSTIGE',
        text: [
          '«Die Assemblage aus Petite Sirah, Cabernet Sauvignon und Mourvèdre verleiht diesem opulenten Kalifornier eine kräftige Note. Das familiengeführte Weingut Bogle heimst für ihre Weine immer wieder internationale Preise ein.»'
        ],
        location: 'Zinfandel, Napa Valley 2015',
        price: '49.90',
        badge: 'Ab Mai 2018 im Sortiment',
        image: {
          url: '/static/images/wine_4.jpg',
          alt: 'Modeshot'
        },
        button: {
          url: '#',
          label: 'Wein kaufen'
        },
        shoppingLayer: {
          title: '',
          inStock: true,
          products: [
            {
              image: {
                url: '/static/images/wine-product_3.jpg',
                alt: 'Dummy image'
              },
              title: 'Ramey Wine Cellars',
              type: 'Chardonnay Russian River Valley 2014',
              price: '49.90'
            },
            {
              image: {
                url: '/static/images/wine-product_1.jpg',
                alt: 'Dummy image'
              },
              title: 'Caymus Vineyars',
              type: 'Zinfandel Napa Valley 2014',
              price: '49.90'
            },
            {
              image: {
                url: '/static/images/wine-product_2.jpg',
                alt: 'Dummy image'
              },
              title: 'Stag’s Leap Wine Cellars',
              type: 'Chardonnay Karia Napa Valley 2015',
              price: '39.90'
            }
          ]
        }
      }
    ]
  }
];
