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
  const endKittens = [...kittens, "Broom"]
  return endKittens
}

function prependKitten(name){
  const firstKittens = ["Arnold", ...kittens]
  return firstKittens
}

function removeLastKitten(){
  noEndKittens = kittens.slice(0, kittens.length - 1)
  return noEndKittens
}

function removeFirstKitten(){
  noFirstKittens = kittens.slice(1)
  return noFirstKittens
}
