import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Gadgets from '../domain/Gadgets';

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
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'The Avengers', 250, 2012, 'USA', 'Avengerse Assemble', 'fantastic', 137));
  cart.add(new Gadgets(1009, 'Smartphone', 20000));
  cart.add(new Gadgets(1009, 'Smartphone', 20000));
  cart.add(new Gadgets(1009, 'Smartphone', 20000));

  expect(cart.summWithoutDiscount()).toBe(61150);
});

test('summ all price with discount in cart', () => {
  const cart = new Cart();
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'The Avengers', 250, 2012, 'USA', 'Avengerse Assemble', 'fantastic', 137));
  cart.add(new Gadgets(1009, 'Smartphone', 20000));
  cart.add(new Gadgets(1009, 'Smartphone', 20000));
  cart.add(new Gadgets(1009, 'Smartphone', 20000));

  expect(cart.summWithDiscount(500)).toBe(60650);
});

test('remove id in cart', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'The Avengers', 250, 2012, 'USA', 'Avengerse Assemble', 'fantastic', 137));
  cart.removeItem(1001);

  expect(cart.items.length).toBe(2);
});

test('remove id and amount in cart', () => {
  const cart = new Cart();
  cart.add(new Gadgets(1009, 'Smartphone', 20000));
  cart.add(new Gadgets(1009, 'Smartphone', 20000));
  cart.add(new Gadgets(1009, 'Smartphone', 20000));
  cart.removeItem(1009);
  
  expect(cart.items[0].amount).toBe(2);
});

test('amount', () => {
  const gadget = new Gadgets(1009, 'Smartphone', 20000, 2);
  expect(gadget.amount).toBe(2);
});
