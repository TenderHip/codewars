/*

Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

*/

function remove (string) {
    let arr = string.split("")
    
    if(arr[arr.length-1] == '!'){
      arr.pop()
    }
    return arr.join("");
  }