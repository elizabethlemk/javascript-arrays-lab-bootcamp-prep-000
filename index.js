var kittens = new Array("Milo", "Otis", "Garfield");

 //define your array here


// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push("Ralph")
  return kittens
}
function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}
function appendKitten(name){
  const moreKittens = [...kittens, name]
  return moreKittens
}

function prependKitten(name){
  
}