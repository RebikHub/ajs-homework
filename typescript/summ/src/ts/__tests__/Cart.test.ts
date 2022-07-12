import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';

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

test('summ all price in cart', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'The Avengers', 250, 2012, 'USA', 'Avengerse Assemble', 'fantastic', 137));

  expect(cart.summWithoutDiscount()).toBe(3150);
});

test('summ all price with discount in cart', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'The Avengers', 250, 2012, 'USA', 'Avengerse Assemble', 'fantastic', 137));

  expect(cart.summWithDiscount(500)).toBe(2650);
});

test('remove id in cart', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'The Avengers', 250, 2012, 'USA', 'Avengerse Assemble', 'fantastic', 137));
  cart.removeItem(1001);
  expect(cart.items.length).toBe(2);
});
