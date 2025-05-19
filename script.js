const baralho = {};

const type = ['monster', 'shield', 'heal'];
const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

type.forEach(type => {
  value.forEach(value => {
    if (type == 'heal' || type == 'shield') {
      if (value > 10) {
        return;
      }
    };
    const chave = `${value}_${type}`;
    baralho[chave] = {
      type: type,
      value: value
    }
  });
});

console.log(baralho);
