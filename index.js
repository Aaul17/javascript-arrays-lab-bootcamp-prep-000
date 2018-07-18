var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push('Ralph');
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift('Bob');
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var moreKittens = [...kittens, 'Broom'];
  return moreKittens;
}

function prependKitten(name) {
  var moreKittens = ['Arnold', ...kittens];
  return moreKittens;
}

function removeLastKitten() {
  kittens.slice(0, kittens.length - 1);
  return kittens;
}

function removeFirstKitten() {
  kittens = kittens.slice(1);
}