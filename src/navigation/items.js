// export default [
//   {
//     page: 'Hero',
//     path: '/Hero',
//     type: '',
//   },
//   {
//     page: 'About',
//     path: '/About',
//     type: 'image',
//   },
//   {
//     page: 'Team',
//     path: '/Team',
//     type: 'carousel',
//   },
//   {
//     page: 'Services',
//     path: '/Services',
//     type: 'images',
//   },
//   {
//     page: 'Contact',
//     path: '/Contact',
//     type: '',
//   },
//   {
//     page: 'Footer',
//     path: '/Footer',
//     type: '',
//   },
// ];

// const obj = {
//   sections: [
//     {
//       page: 'Home',
//       path: '/',
//       styles: {},
//     },
//     {
//       page: 'About',
//       path: '/about',
//       styles: {},
//     },
//   ],
//   components: [
//     {
//       type: '',
//     },
//   ],
// };

export default [
  {
    page: 'Hero',
    path: '/Hero',
    type: 'flipbox',
    styles: {
      bg: '',
      bgImage: '',
    },
    data: {
      flipBoxes: [
        {
          title: '1',
          logo: '',
          message:
            'Para hacer una Transferencia Total, podrás depositar todo tu fondo disponible en Fondos Profuturo, en una entidad bancaria o en ambos según el porcentaje que tu decidas.',
        },
        {
          title: '2',
          logo: '',
          message: '2',
        },
        {
          title: '3',
          logo: '',
          message:
            'Para hacer una Transferencia Parcial, podrás depositar un porcentaje de tu fondo disponible en Fondos Profuturo o en una entidad bancaria y un porcentaje para tu pensión en cualquier modalidad de retiro.',
        },
      ],
    },
  },
  {
    page: 'About',
    path: '/About',
    type: 'carousel',
    styles: {
      bg: '#663399',
      bgImage: '',
    },
    data: {},
  },
];
