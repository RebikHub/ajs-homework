export default function extract(arg) {
  const { special } = arg;
  const arr = [];

  special.forEach((e) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = e;
    return arr.push({
      id, name, icon, description,
    });
  });

  return arr;
}
