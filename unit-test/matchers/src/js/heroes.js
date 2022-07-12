export default function sortHeroes(array) {
  const arr = array.sort((a, b) => {
    if (a.health > b.health) {
      return -1;
    }
    return 1;
  });
  return arr;
}
