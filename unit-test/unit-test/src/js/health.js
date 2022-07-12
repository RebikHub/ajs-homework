export default function getHealth(object) {
  if (object.health > 50) {
    return 'healthy';
  } if (object.health > 15 && object.health < 50) {
    return 'wounded';
  } if (object.health < 15) {
    return 'critical';
  }
  return 'error';
}
