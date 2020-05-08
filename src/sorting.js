const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (arr[mid] !== target && left <= right) {
    console.log(left, right, mid);
    arr[mid] < target ? left = mid + 1 : right = mid - 1;
    mid = Math.floor((left + right) / 2);
  }
  return arr[mid] === target ? mid : -1;
};


const sort = (x) => {
  x.length === 0 ? [] : null;

  const y = [x[0]];

  for (let i = 1; i < x.length; i++) {
    x[i] > y[0] ? y.push(x[i]) : y.unshift(x[i]);
  }
  return y;
};

// sort([55,64,32,29,100])


const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const bubbleSort = (arr) => {
  let didSwap;
  for (let i = arr.length; i > 0; i--) {
    didSwap = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        didSwap = true;
      }
    }
    if (!didSwap) break;
  }
  return arr;
};

// bubbleSort([8,1,2,3,5,6])


const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let store = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[store]) store = j;
    }
    if (i !== store) swap(arr, i, store);
  }
  return arr;
};

// selectionSort([5,3,4,1,2]) == [1,2,3,4,5]
// selectionSort([5,3,9,1,2])


const iSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const stored = arr[i];
    let j = i - 1;


    while (j >= 0 && arr[j] > stored) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = stored;
  }
  return arr;
};


const merge = (x, y) => {
  const arr = [];
  let i = 0;
  let j = 0;

  // compare arrays
  while (i < x.length && j < y.length) {
    if (y[j] > x[i]) {
      arr.push(x[i]);
      i++;
    } else {
      arr.push(y[j]);
      j++;
    }
  }
  while (i < x.length) { // deals with first array
    arr.push(x[i]);
    i++;
  }
  while (j < y.length) { // deals with second array
    arr.push(y[j]);
    j++;
  }
  return arr;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

// mergeSort([10,24,76,30, 70])


// RETURN INDEX
const pivot = (arr, start = 0, end = arr.length + 1) => {
  const partition = arr[start]; // value
  let swapIdx = start; // index

  for (let i = start + 1; i < arr.length; i++) {
    if (partition > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);

  return swapIdx;
};
// pivot([9,4,8,2,1,5,7,6,3])


// sorting in place
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right); // 3
    console.log(pivotIndex);

    // left
    quickSort(arr, left, pivotIndex - 1);

    // right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
};

// quickSort([4, 6, 9, 1, 2, 5, 3, 200, 44, 82]);
