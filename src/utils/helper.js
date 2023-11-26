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



  export const handlePowerChange = (data, setPower) => {
    if (data) {
      const { max, min } = data.reduce(
        (acc, item) => {
          const total = calculatePower(item);

          acc.max = Math.max(acc.max, total);
          acc.min = Math.min(acc.min, total);

          return acc;
        },
        { max: -Infinity, min: Infinity }
      );
      setPower({ min, max });
    }
  };

export const sliceData = (data, currentPage, perPage) => {
  const startIndex = currentPage * perPage;
  const endIndex = startIndex + perPage;
  return data.slice(startIndex, endIndex);
};
