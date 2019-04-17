function largestSubarraySum(array) {
  let sequence = 0
  let biggest = 0
  for (let i=0; i<array.length; i++) {
    sequence = Math.max(0, sequence + array[i])
    biggest = Math.max(sequence, biggest)
  }
  return biggest
}