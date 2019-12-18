import React, { useState } from 'react';
import Cell from './Cell.js';
import './minesweeper.css';

Array.prototype.pushUniqueItem = function(item) {
  let found = false;
  this.forEach(thing => {
    if (item == thing) {
      found = true;
      return;
    }
  });
  return found ? false : this.push(item);
};
const ran = (min, max) => {
  return Math.floor(Math.random() * (max + 1) + min);
};
const constrain = (x, min, max) => {
  if (x > max) return max;
  if (x < min) return min;
  return x;
};
function Point(x, y) {
  this.x = x;
  this.y = y;
}
const randomPoint = ([x, xMax], [y, yMax]) => {
  x = ran(x, xMax);
  y = ran(y, yMax);
  return new Point(x, y);
};
const genBombs = size => {
  let arr = [];
  const xRange = [0, size - 1];
  const yRange = [0, size - 1];
  while (arr.length < size * size * 0.1) {
    arr.pushUniqueItem(randomPoint(xRange, yRange));
  }
  return arr;
};
let surroundings = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
  [1, 1],
  [1, -1],
  [-1, -1],
  [-1, 1]
];
const createGrid = size => {
  const grid = new Array(size);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(size);
  }

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      grid[i][j] = { num: 0, shown: false, flagged: false };
    }
  }
  const bombs = genBombs(size);
  for (let i = 0; i < bombs.length; i++) {
    grid[bombs[i].x][bombs[i].y] = { num: 'b', shown: false, flagged: false };
  }
  //CALCULATING NUMBERS
  for (let r = 1; r < grid.length - 1; r++) {
    for (let c = 1; c < grid[r].length - 1; c++) {
      if (grid[r][c].num == 'b') continue;
      let count = 0;
      surroundings.forEach(value => {
        count += grid[r + value[0]][c + value[1]].num == 'b' ? 1 : 0;
      });
      grid[r][c].num = count;
    }
  }

  for (let i = 1; i < grid.length - 1; i++) {
    const topRow = [
      [0, i - 1],
      [0, i + 1],
      [1, i - 1],
      [1, i + 1],
      [1, i]
    ];
    const bottomRow = topRow.map(arr => [grid.length - 1 - arr[0], arr[1]]);
    const leftCol = topRow.map(arr => [arr[1], arr[0]]);
    const rightCol = bottomRow.map(arr => [arr[1], arr[0]]);
    if (grid[0][i].num != 'b') {
      topRow.forEach(value => {
        grid[0][i].num += grid[value[0]][value[1]].num == 'b' ? 1 : 0;
      });
    }
    if (grid[grid.length - 1][i].num != 'b') {
      bottomRow.forEach(
        value =>
          (grid[grid.length - 1][i].num +=
            grid[value[0]][value[1]].num == 'b' ? 1 : 0)
      );
    }
    if (grid[i][0].num != 'b') {
      leftCol.forEach(
        value => (grid[i][0].num += grid[value[0]][value[1]].num == 'b' ? 1 : 0)
      );
    }
    if (grid[i][grid.length - 1].num != 'b') {
      rightCol.forEach(
        value =>
          (grid[i][grid.length - 1].num +=
            grid[value[0]][value[1]].num == 'b' ? 1 : 0)
      );
    }
  }
  //corners

  const topLeft = [
    [0, 1],
    [1, 1],
    [1, 0]
  ];
  const topRight = topLeft.map(arr => [arr[0], grid.length - 1 - arr[1]]);
  const bottomLeft = topRight.map(arr => [arr[1], arr[0]]);
  const bottomRight = topLeft.map(arr => [
    grid.length - 1 - arr[0],
    grid.length - 1 - arr[1]
  ]);

  if (grid[0][0].num != 'b') {
    topLeft.forEach(
      value => (grid[0][0].num += grid[value[0]][value[1]].num == 'b' ? 1 : 0)
    );
  }
  if (grid[0][grid.length - 1].num != 'b') {
    topRight.forEach(
      value =>
        (grid[0][grid.length - 1].num +=
          grid[value[0]][value[1]].num == 'b' ? 1 : 0)
    );
  }
  if (grid[grid.length - 1][grid.length - 1].num != 'b') {
    bottomRight.forEach(
      value =>
        (grid[grid.length - 1][grid.length - 1].num +=
          grid[value[0]][value[1]].num == 'b' ? 1 : 0)
    );
  }
  if (grid[grid.length - 1][0].num != 'b') {
    bottomLeft.forEach(
      value =>
        (grid[grid.length - 1][0].num +=
          grid[value[0]][value[1]].num == 'b' ? 1 : 0)
    );
  }
  return grid;
};

const MinesweeperGrid = props => {
  const size = props.size;
  const [score, setScore] = useState(0);
  const [grid, setGrid] = useState(createGrid(size));

  const combineShownCells = (...grids) => {
    let newGrid = grids[0].map(row => row.map(col => ({ ...col })));
    for (let i = 1; i < grids.length; i++) {
      for (let r = 0; r < newGrid.length; r++) {
        for (let c = 0; c < newGrid[0].length; c++) {
          newGrid[r][c].shown = newGrid[r][c].shown || grids[i][r][c].shown;
        }
      }
    }
    return newGrid;
  };
  const showAdjacent = (r, c) => {
    console.log('r:' + r);
    console.log('c:' + c);
    let gr = grid.map(row => row.map(col => ({ ...col })));
    let recurList = [[], []];
    for (let i = 0; i < r.length; i++) {
      surroundings.forEach(a => {
        let cr = constrain(
          parseInt(r[i]) + parseInt(a[0]),
          0,
          parseInt(size) - 1
        );
        let cc = constrain(
          parseInt(c[i]) + parseInt(a[1]),
          0,
          parseInt(size) - 1
        );
        if (gr[cr][cc].num === 0 && !gr[cr][cc].shown) {
          recurList[0].push(constrain(r + a[0]));
          recurList[1].push(constrain(c + a[1]));
        }
        gr[cr][cc].shown = true;
      });
    }
    return gr;
  };
  const chain = () => {
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid.length; c++) {
        if (grid[r][c].num === 0 && !grid[r][c].shown)
          return showAdjacent(r, c);
      }
    }
    return false;
  };
  const recur = (r, c, oldGrid) => {
    let gr = oldGrid.map(row => row.map(col => ({ ...col })));
    if (r < 0 || r >= gr.length || c < 0 || c >= gr.length) {
      return gr;
    }
    if (gr[r][c].shown) {
      return gr;
    }
    if (gr[r][c].flagged) {
      return gr;
    }
    if (gr[r][c].num === 0) {
      gr = showAdjacent(r, c);
    }
    gr[r][c].shown = true;
    return gr;
  };
  const updateGrid = (r, c) => {
    setGrid(recur(r, c, grid));
  };

  const JSXGrid = grid.map((row, r) => (
    <div style={{ display: 'block' }}>
      {row.map((val, c) => (
        <Cell
          key={r + ',' + c}
          r={r}
          c={c}
          shown={val.shown}
          value={val == 'b' ? val : val.num}
          flagged={val.flagged}
          clicked={updateGrid}
        />
      ))}
    </div>
  ));

  return (
    <div className="gameBoard">
      <div className="score">Score: {score}</div>
      {JSXGrid}
    </div>
  );
};

export default MinesweeperGrid;
