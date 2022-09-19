function getRandomFromRange(min, max) {
    return Math.random() * (max - min) + min;
  };
  console.log(getRandomFromRange(0, 100));