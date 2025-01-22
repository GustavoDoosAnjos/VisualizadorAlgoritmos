
export function bubbleSort(OldArray: number[]): [[string, number, number]] {
  const array = Array.from(OldArray);
  var animations: [[string, number, number]] = [['start', 0, 0]];

  if (!array) throw new Error('Invalid input');

  for (let i = array.length; i > 1; i--) {
    for (let j = 0; j < i - 1; j++) {
      animations.push(['comparison', j, j+1])
      if(array[j] > array[j+1]) {
        animations.push(['swap', j, j+1])
        swap(array, j, j+1)
      }
    }
  }

  return animations;
}

function swap(array: number[], leftIndex: number, rightIndex: number) {
  [[array[leftIndex], array[rightIndex]] = [array[rightIndex], array[leftIndex]]]
}
