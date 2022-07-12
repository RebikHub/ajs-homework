import getBuffer from '../buffer';
import ArrayBufferConverter from '../converter';

test('should (getBuffer->data) === (toString->text)', () => {
  const obj = new ArrayBufferConverter();
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  obj.load(getBuffer());
  const text = obj.toString();
  expect(data).toEqual(text);
});
