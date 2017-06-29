// import {List} from 'immutable';

export const validDarts = [
  'M','D','T',
  '15', '16', '17', '18', '19', '20', 'B',
  'D15', 'D16', 'D17', 'D18', 'D19', 'D20', 'DB',
  'T15', 'T16', 'T17', 'T18', 'T19', 'T20'
];

const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
};

export const validInput = (dartValue) => (input) => {
  const valid = validInputs(dartValue);
  return valid.indexOf(input) !== -1;
};

export const validInputs = dart => {
  return validDarts
    .filter(d => d.startsWith(dart))
    .map(d => d.replace(dart, ''))
    // .map(d => d.charAt(0))
    .filter(onlyUnique)
};

export const calcValue = (dart) => {
  if (!validDarts.includes(dart)) return 0;
  const type = dart.charAt(0);
  const value = isNaN(Number(type)) ? dart.substr(1): dart;
  const numValue = value === 'B' ? 25 : +value;
  if (type === 'M') return 0;
  const multiplier = type === 'T' ? 3 : type === 'D' ? 2 : 1;
  return numValue * multiplier;
};
