import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('new card should be not empty', () => {
  const cart = new Cart();
  const film = new Movie(1010, 'The Avengers', 250, 2012, 'USA', 'Avengerse Assemble', 'fantastic', 137);
  cart.add(film);

  expect(cart.items[0]).toEqual(film);
});
