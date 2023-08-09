function ageSort(users) {
  let compare = (a, b) => {
    return a.age - b.age;
  };
  return users.sort(compare);
}

function oddEvenSort(arr) {
  let isOdd = (num) => num % 2 === 1;
  let compare = (a, b) => {
    if (isOdd(a) && !isOdd(b)) {
      return -1;
    }
    if (!isOdd(a) && isOdd(b)) {
      return 1;
    }
    return a - b;
  };
  return arr.sort(compare);
}

function validAnagrams(s, t) {
  let sArr = s.split("").sort().join("");
  let tArr = t.split("").sort().join("");
  return sArr === tArr;
}

function reverseBaseSort(arr) {
  let compare = (a, b) => {
    if (a.toString().length > b.toString().length) {
      return -1;
    }
    if (a.toString().length < b.toString().length) {
      return 1;
    }
    return a - b;
  };
  return arr.sort(compare);
}

function frequencySort(arr) {
  let frequency = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (frequency[num]) {
      frequency[num]++;
    } else {
      frequency[num] = 1;
    }
  }

  let compare = (a, b) => {
    if (frequency[a] !== frequency[b]) {
      return frequency[a] - frequency[b];
    } else {
      return b - a;
    }
  };

  return arr.sort(compare);
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
