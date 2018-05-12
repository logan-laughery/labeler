
module.exports = {
  type: 'default',
  template: {
    title: 'STYLE',
    subTitle: 'DESCRIPTION',
    version: 'v1.0.0',
    alcohol: 'ALC 9.0%',
    ibu: 'IBU 90',
    color: '#ffde5a',
    topWheel: {
      topText: 'Flavor',
      bottomText: 'Mouthfeel',
      wheel: [
        { color: '#eef4d7', text: 'Fluffy' },
        { color: '#dde9af', text: 'Creamy' },
        { color: '#cdde87', text: 'Effervescent' },
        { color: '#cdde87', text: 'Rich' },
        { color: '#abc837', text: 'Refreshing' },
        { color: '#e9ddaf', text: 'Caramel' },
        { color: '#decd87', text: 'Toasted' },
        { color: '#ffeeaa', text: 'Citrus' },
        { color: '#ffe680', text: 'Banana' },
        { color: '#ffd42a', text: 'Clove' },
        { color: '#ffcc00', text: 'Lemon' },
        { color: '#d4aa00', text: 'Cinnamon' },
      ],
    },
    bottomWheel: {
      topText: 'Aroma',
      bottomText: 'Appearance',
      wheel: [
        { color: '#d7e3f4', text: 'Hazy' },
        { color: '#afc6e9', text: 'Copper' },
        { color: '#87aade', text: 'Gold' },
        { color: '#deaa87', text: 'Bread' },
        { color: '#d38d5f', text: 'Cereal' },
        { color: '#c87137', text: 'Grainy' },
        { color: '#de8787', text: 'Orange' },
        { color: '#d35f5f', text: 'Pepper' },
        { color: '#ffe680', text: 'Banana' },
        { color: '#ffdd55', text: 'Clove' },
        { color: '#ffcc00', text: 'Vanilla' },
        { color: '#d4aa00', text: 'Bubble Gum' },
      ],
    },
    recipeTitle: 'RECIPE | 6.0 GAL',
    instructions: [
      [
        {
          title: 'MALT',
          content: 'Pilsner 5.6# | 50%\n' +
            'German Wheat 5.6# | 50%'
          ,
        },
        {
          title: 'YEAST',
          content: 'Wyeast 3028 | 200 BB',
        },
        {
          title: 'HOPS',
          content: 'Hallertau 4.5% | 0.8oz | 60min',
        },
      ],
      [
        {
          title: 'WATER',
          content: 'Ca 55 | Mg 3 | Na 0\n' +
            'Cl 59 | SO4 62',
        },
        {
          title: 'MASH',
          content: 'Ferulic Acid Rest | 110F | 10min\n' +
            'Sacch Rest | 152F | 80min',
        },
        {
          title: 'BOIL',
          content: '90min',
        },
      ],
      [
        {
          title: 'FERMENTATION',
          content: 'Day 1-7 | 62F to 64F\n' +
            'Day 7-10 | 64F to 55F\n' +
            'Day 10 - 12 | 55F - 68F\n' +
            'Day 12 - 24 | 68F - 70F',
        },
      ],
    ],
    size: 'RECIPE | 6.0 GAL',
  },
};
