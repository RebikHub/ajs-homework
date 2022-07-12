import getBuffer from './buffer';
import ArrayBufferConverter from './converter';

const obj = new ArrayBufferConverter();
obj.load(getBuffer());
const text = obj.toString();

console.log('app worked');

console.log(text);
