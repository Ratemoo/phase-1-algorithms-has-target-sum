function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i=0; i<array.length;i++){
    const currentNum= array[i]
    const complement=target-currentNum
    for (let j=i+1; j< array.length; j++){
      if(array[j]===complement){
        return true
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  This approach has a time complexity of 0(n^2) because it involves nested loops iterating through the array. The outer loop iterates n times, and for each iteration, the inner loop iterates up to n-1 times(excluding the current element). This results in a total of n*(n-1)=0(n^2)opeeations in the worst case
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
