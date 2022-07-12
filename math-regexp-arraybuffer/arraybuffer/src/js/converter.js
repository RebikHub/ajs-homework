export default class ArrayBufferConverter {
  constructor() {
    this.load();
  }

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const bufferArray = new Uint16Array(this.buffer);
    return String.fromCharCode(...bufferArray);
  }
}
