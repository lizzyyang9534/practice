//FP-map
var a = ['1', '2', '3'];
for (i = 0;i < a.length;i++){
  a[i] = "Hello" + a[i];
}
console.log(a);
//↓
var b = a.map(function(item) {
    return 'Hello' + item;
});
console.log(b);


//立即函式
(function(){

}());


//FP-filter
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var b = [];
for (i = 0;i < a.length;i++){
  if(a[i] % 2 == 0)
    b.push(a[i]);
}
console.log(b);
//↓
var b = a.filter(function(item){
    return item%2 === 0;
})
//or結果後面加Hello
var b = a.filter(function(item){
    return item%2 === 0;
}).map(function(item){
  return item + "Hello";
  //or結果加10
  //return item + 10;
})

console.log(b);
//*不會改變a的值

//FP-reduce
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var b = a.reduce(function(prev, next){
    return prev + next;
}, 0);

console.log(b);

//or
function reduce(callback, init){
  var state = init;
  for(var i = 0;i < this.length;i++){
    state = callback(state, this[i]);
  }
  return state;
}
var b = reduce(a, function(prev, next){
  return prev + next;
}, 0);
