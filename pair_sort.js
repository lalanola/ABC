const A = [1000, 500, 700, 2000];
const arrays = [
  ['x', 'x', 'x', 'o'],
  ['o', 'o', 'x', 'x'],
  ['o', 'x', 'o', 'x']
];

// Aとarraysの列をペアにする
const pairs = A.map((value, index) => ({value, index})).sort((a, b) => b.value - a.value);

console.log(pairs);
// ソートされたインデックスに基づいてarraysを並び替える
const sortedArrays = arrays.map(row => {
  return pairs.map(pair => row[pair.index]);
});

console.log('Sorted A:', pairs.map(pair => pair.value));
console.log('Sorted Arrays:', sortedArrays);