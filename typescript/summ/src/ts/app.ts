import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1010, 'The Avengers', 250, 2012, 'USA', 'Avengerse Assemble', 'fantastic', 137));

console.log(cart);

console.log(cart.items);
console.log(cart.summWithoutDiscount());
console.log(cart.summWithDiscount(500));

console.log(cart.removeItem(1001));
console.log(cart.items);