
exports.min = function min (array) {
    if((typeof array==='undefined')||(array.length == 0)){
     return 0;
    } else {
        let mn = array[0];
        for (let a of array)
          if (mn > a) mn = a;
        return mn;
      }
}

exports.max = function max (array) {
  if((typeof array==='undefined')||(array.length == 0)){
    return 0;
   } else {
        let mx = array[0];
        for (let a of array)
         if (mx < a) mx = a;
      return mx;
   }
}

exports.avg = function avg (array) {
  if((typeof array==='undefined')||(array.length == 0)){
    return 0;
   } else {
        let sum = 0;
        for (let a of array) {
          sum += a;
      } 
      sum = sum / array.length;
      return sum.toFixed(2);
    }
}
