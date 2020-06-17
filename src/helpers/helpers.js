export default function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    const cell1 = squares[a];
    const cell2 = squares[b];
    const cell3 = squares[c];
    const condition = cell1&&cell1===cell2&&cell1===cell3;
      if (condition) {
        return cell1;
      }
    }
    return null;
  }
                             
