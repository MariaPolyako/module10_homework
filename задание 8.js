let map = new Map();
map.set(1, "red"); 
map.set(2, "black"); 
map.set(3, "white");

console.log(map.get(1));
console.log(map.get(2));

alert(map.size); 

for (let elem of map){
  console.log(elem); 
}