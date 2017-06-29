// import {List} from 'immutable';

export const validDarts = [
  'M',
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '25',
  'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13', 'D14', 'D15', 'D16', 'D17', 'D18', 'D19', 'D20', 'D25',
  'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12', 'T13', 'T14', 'T15', 'T16', 'T17', 'T18', 'T19', 'T20'
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
    .map(d => d.charAt(0))
    .filter(onlyUnique)
};

export const calcValue = (dart) => {
  if (!validDarts.includes(dart)) return -1;
  const type = dart.charAt(0);
  const value = isNaN(Number(type)) ? +dart.substr(1): +dart;

  if (type === 'M') return 0;
  const multiplier = type === 'T' ? 3 : type === 'D' ? 2 : 1;
  return value * multiplier;
};
