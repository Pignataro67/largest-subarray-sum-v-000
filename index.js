// function largestSubarraySum(array) {
//   let sequence = 0
//   let largest = 0

//   for (let i = 0; i < array.length; i++) {
//     sequence = array[i]
//     if (sequence > largest) {
//       largest = sequence
//     }
//     for (let l = i + 1; l < array.length; l++) {
//       sequence = array[l] + sequence
//       if (sequence > largest) {
//         largest = sequence
//       }
//     }
//   }
  
//   return largest

// }

// goal: derive the largest sum from a subarray within an array
// brute force approach [O(n^2)]: find every possible subarray, get the sum, and if the sum is higher than the current record, that becomes the sum

// iterate over array once - [O(n)]
//1 have 2 variables: (1) stores the current largest sum; and (2) stores the running total as it loops over array
//2 loop over the array
//3 return the answer which is the greater of (0 or the current answer + the current value of the index)
//4 return the sum which is the greater of (the current answer or current sum)
//5 return sum after the looping is complete
//let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

function largestSubarraySum(array) {
  let sequence = 0
  let biggest = 0
  for (let i=0; i<array.length; i++) {
    sequence = Math.max(0, sequence + array[i])
    biggest = Math.max(sequence, biggest)
  }
  return biggest
}