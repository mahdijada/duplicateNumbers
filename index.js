let arr = [1, 2, 3, 3, 4, 5, 5, 5];

function removeDuplicateNumbers(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      result.push(arr[i]);
    }
  }
  return result;
}