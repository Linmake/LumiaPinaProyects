const fs = require("fs");
process.stdin.resume();
let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

const readLine = () => {
  return inputString[currentLine++];
};

const formingMagicSquare = (s) => {
  const squares = [
    [8, 1, 6, 3, 5, 7, 4, 9, 2],
    [6, 1, 8, 7, 5, 3, 2, 9, 4],
    [4, 9, 2, 3, 5, 7, 8, 1, 6],
    [2, 9, 4, 7, 5, 3, 6, 1, 8],
    [8, 3, 4, 1, 5, 9, 6, 7, 2],
    [4, 3, 8, 9, 5, 1, 2, 7, 6],
    [6, 7, 2, 1, 5, 9, 8, 3, 4],
    [2, 7, 6, 9, 5, 1, 4, 3, 8],
  ];

  let minCost = Infinity;

  const flatS = s.flat();

  for (const square of squares) {
    let cost = 0;
    for (let i = 0; i < 9; i++) {
      cost += Math.abs(flatS[i] - square[i]);
    }
    minCost = Math.min(minCost, cost);
  }

  return minCost;
};

const main = () => {
  const writeStream = fs.createWriteStream(process.env.OUTPUT_PATH);

  let s = Array(3);

  for (let i = 0; i < 3; i++) {
    s[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((sTemp) => parseInt(sTemp, 10));
  }

  const result = formingMagicSquare(s);
  writeStream.write(result + "\n");
  writeStream.end();
};
