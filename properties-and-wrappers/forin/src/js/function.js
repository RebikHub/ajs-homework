export default function orderByProps(obj, arrSort) {
  const arr = [];

  for (const [key, value] of Object.entries(obj)) {
    arr.push({ key, value });
  }

  arr.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    return -1;
  });

  arr.forEach((e, i) => {
    for (let j = 0; j < arrSort.length; j += 1) {
      if (e.key === arrSort[j]) {
        arr.splice(i, 1);
        return arr.unshift(e);
      }
    }
    return e;
  });

  return arr;
}
