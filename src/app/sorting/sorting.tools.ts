//var animations: [[string, number, number]] = [[]];

export function mergeSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }

  var mid = Math.floor(array.length / 2);
  var left = array.slice(0, mid);
  var right = array.slice(mid);

  return mergeHelper(mergeSort(left), mergeSort(right));
}

function mergeHelper(leftArray: number[], rightArray: number[]): number[] {
  const array = [];
  let leftArrayPointer = 0;
  let rightArrayPointer = 0;

  while (
    leftArrayPointer < leftArray.length &&
    rightArrayPointer < rightArray.length
  ) {
    if (leftArray[leftArrayPointer] < rightArray[rightArrayPointer]) {
      array.push(leftArray[leftArrayPointer]);
      leftArrayPointer++;
    } else {
      array.push(rightArray[rightArrayPointer]);
      rightArrayPointer++;
    }
  }

  while (leftArrayPointer < leftArray.length) {
    array.push(leftArray[leftArrayPointer]);
    leftArrayPointer++;
  }

  while (rightArrayPointer < rightArray.length) {
    array.push(rightArray[rightArrayPointer]);
    rightArrayPointer++;
  }

  return array;
}
