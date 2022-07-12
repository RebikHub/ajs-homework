import Settings from '../classes/settings';

test('default settings', () => {
  const player = new Settings();
  const map = player.get();
  const arrValues = [];
  for (const values of map.values()) {
    arrValues.push(values);
  }
  expect(arrValues).toEqual(['dark', 'trance', 'easy']);
});

test('custom settings', () => {
  const player = new Settings('light', 'pop', 'normal');
  const map = player.get();
  const arrValues = [];
  for (const values of map.values()) {
    arrValues.push(values);
  }
  expect(arrValues).toEqual(['light', 'pop', 'normal']);
});
