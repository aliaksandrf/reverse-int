module.exports = function reverse (n) {
  let result = String(Math.abs(n));
  let arr = result.split("").reverse().join("");
  return arr;  
  
}

