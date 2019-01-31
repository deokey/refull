// const obj = [
//   {
//     title: '1',
//     logo: '',
//     message: 'DOLOR SIT AEMTADSDASD',
//     data: [
//       {
//         type: 'text',
//         data: 'DOLOR SIT AEMTADSDASD',
//       },
//       {
//         type: 'img',
//         data: '',
//       },
//       {
//         type: 'button',
//         data: '',
//       },
//     ],
//   },
//   {
//     title: '2',
//     logo: '',
//     message: 'DOLOR SIT AEMTADSDASD',
//     data: [
//       {
//         type: 'img',
//         data: '',
//       },
//       {
//         type: 'text',
//         data: 'DOLOR SIT AEMTADSDASD',
//       },
//     ],
//   },
//   {
//     title: '3',
//     logo: '',
//     message: '',
//     data: [
//       {
//         type: 'text',
//         data: 'DOLOR SIT AEMTADSDASD',
//       },
//     ],
//   },
// ];

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
