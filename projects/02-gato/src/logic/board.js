export const isWinner = (board) => {
  if (board[0] != null) {
    let pos1 = board[0],
      pos2 = board[1],
      pos3 = board[2];

    if (pos1 === pos2 && pos1 === pos3) {
      return pos1;
    }

    (pos2 = board[3]), (pos3 = board[6]);
    if (pos1 === pos2 && pos1 === pos3) {
      return pos1;
    }
  }
  if (board[8] != null) {
    let pos1 = board[8],
      pos2 = board[7],
      pos3 = board[6];

    if (pos1 === pos2 && pos1 === pos3) {
      return pos1;
    }

    (pos2 = board[5]), (pos3 = board[2]);
    if (pos1 === pos2 && pos1 === pos3) {
      return pos1;
    }
  }
  if (board[4] != null) {
    let pos1 = board[4],
      pos2 = board[3],
      pos3 = board[5];

    if (pos1 === pos2 && pos1 === pos3) {
      return pos1;
    }

    (pos2 = board[1]), (pos3 = board[7]);
    if (pos1 === pos2 && pos1 === pos3) {
      return pos1;
    }

    (pos2 = board[6]), (pos3 = board[2]);
    if (pos1 === pos2 && pos1 === pos3) {
      return pos1;
    }

    (pos2 = board[0]), (pos3 = board[8]);
    if (pos1 === pos2 && pos1 === pos3) {
      return pos1;
    }
  }
  return null;
};
export const revisarTablero = (newBoard) => {
  // Revisar si no hay empate
  return newBoard.every((position) => position != null);
};
