function canIterate(arg) {
  try {
    return (arg[Symbol.iterator] !== undefined);
  } catch (error) {
    return (error);
  }
}

console.log(canIterate(new Map()));
console.log(canIterate(new Set()));
console.log(canIterate('Netology'));
console.log(canIterate(null));
console.log(canIterate(10));
