const kebab = string => {
  return string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
};

const countWords = paragraph => {
  return paragraph
    .normalize("NFD")
    .replace(/[^a-zA-Z ]/g, "")
    .toLowerCase()
    .split(" ")
    .reduce((count, word) => {
      count[word] = (count[word] || 0) + 1;
      return count;
    }, {});
};

const getCoffee = () => {
  return Promise.resolve("☕️");
};

const startGame = cb => {
  setTimeout(() => {
    console.log("Start Game!");
    cb();
  }, 10000);
};

module.exports = {
  kebab,
  countWords,
  getCoffee,
  startGame
}