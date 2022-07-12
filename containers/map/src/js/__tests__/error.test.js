import ErrorRepository from '../classes/error';

test('code unknown error', () => {
  const erRepo = new ErrorRepository();
  erRepo.repo.set(101, 'error-01');

  expect(() => erRepo.translate(103)).toThrow('Unknown error');
});

test('code - values', () => {
  const erRepo = new ErrorRepository();
  erRepo.repo.set(101, 'error-01');

  expect(erRepo.translate(101)).toEqual('error-01');
});
