const colors = ["red", "black", "green", "gray", "white", "black"];

function containsDuplicates(colors) {
  for (let i = 0; i < colors.length; i++) {
    if (colors.indexOf(colors[i]) !== colors.lastIndexOf(colors[i])) {
      return true
    }
  }
  return false
};
console.log(containsDuplicates(colors));