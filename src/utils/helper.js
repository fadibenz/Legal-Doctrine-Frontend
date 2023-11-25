export const calculatePower = (item) => {
  const total =
    item.hp +
    item.attack +
    item.defense +
    item.special_attack +
    item.special_defense +
    item.speed;

  return total;
};
