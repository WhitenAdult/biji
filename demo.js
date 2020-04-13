// var result = 0;
// for(var i = 1;i <= 100;i++){
//   if(i%3 == 0){
//     result += i
//   }
// }
// console.log(result);

// var sum = '';
// var temp = '';
// for(var i = 1;i <= 9;i++){
//   for(var m = 1;m <= i;m++){
//     temp = m + '*' + i + '=' + m*i + '\t'
//     sum = sum + temp;
//   }
//   sum = sum + '\n'
// }
// console.log(sum);

var arr = [2,0,6,1,77,0,52,0,25,7];


for(var i = 0;i < arr.length; i++){
  if(arr[i] == 0){
    console.log(arr.length);
    arr.length = arr.length - 1;
    console.log(arr.length);
    for(var m = 0; m< arr.length-i; m++){
      arr[i] = arr[i+1];
      console.log(arr)
      console.log(arr.length);
    }
  }
}
console.log(arr);




