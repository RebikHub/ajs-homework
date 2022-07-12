import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Gadgets from './domain/Gadgets';

const cart = new Cart();

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new Movie(1010, 'The Avengers', 250, 2012, 'USA', 'Avengerse Assemble', 'fantastic', 137));
cart.add(new Gadgets(1009, 'Smartphone', 20000));
cart.add(new Gadgets(1009, 'Smartphone', 20000));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Gadgets(1009, 'Smartphone', 20000));
cart.add(new Gadgets(1009, 'Smartphone', 20000));

cart.removeItem(1001);
cart.removeItem(1009);
console.log(cart.summWithoutDiscount());
console.log(cart.summWithDiscount(500));
console.log(cart.items);
