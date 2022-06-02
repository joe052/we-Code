function scrapper(word){
  let a = word.replace(/a/g,'');
  let b = a.replace(/e/g,'');
  let c = b.replace(/i/g,'');
  let d = c.replace(/o/g,'');
  let e = d.replace(/u/g,'');

  return e;
}
let result = scrapper('big bang theory');
console.log(result);