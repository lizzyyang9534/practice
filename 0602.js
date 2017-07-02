fetch('http://www.json-generator.com/api/json/get/cewjUzHNCG')
.then(function(res){
return res.json()
})
.then(function(json){
console.log(json)
})
