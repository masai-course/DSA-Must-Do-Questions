let n=500;
let toBinaryReverse=''

while(n!=0){
   let reminder=n%2
  n=(n-reminder)/2
  toBinaryReverse+=reminder
}
let toBinary=''
for(let i=toBinaryReverse.length-1;i>=0;i--){
  toBinary+=toBinaryReverse[i]
}
console.log(toBinary)
