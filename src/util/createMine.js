// random start <= result <= end;
const makeRandomNumber = (start = 0, end) => {
  start = Math.ceil(start);
  end = Math.floor(end);
  return Math.floor(Math.random() * (end - start + 1));
};

const makeMineMap = (rowmax, colmax, mineCount) => {
  const result = [];

  // initiation (맵 초기화)
  for (let i = 0; i < rowmax; i++) {
    result[i] = [];
    for (let j = 0; j < colmax; j++) {
      result[i].push({ row: i, col: j, reveal: false, isMine: false });
    }
  }

  // 맵에 지뢰 설치
  let count = 0;

  while (count < mineCount) {
    const randomRowNum = makeRandomNumber(0, colmax - 1);
    const randomColNum = makeRandomNumber(0, colmax - 1);

    if (result[randomRowNum][randomColNum].isMine) continue;

    result[randomRowNum][randomColNum].isMine = true;
    count = count + 1;
  }

  return result;
};

export default makeMineMap;
