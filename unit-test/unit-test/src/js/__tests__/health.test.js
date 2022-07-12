import getHealth from '../health';

test('should healthy', () => {
  const healthy = getHealth({ health: 90 });
  expect(healthy).toBe('healthy');
});

test('should wounded', () => {
  const wounded = getHealth({ health: 40 });
  expect(wounded).toBe('wounded');
});

test('should critical', () => {
  const critical = getHealth({ health: 10 });
  expect(critical).toBe('critical');
});

test('should error', () => {
  const error = getHealth({ name: 'Маг' });
  expect(error).toBe('error');
});