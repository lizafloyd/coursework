window.onload = function() {

console.log("test");

var x = document.getElementById("woman");
x.addEventListener("mouseover", quoteFunction);

function quoteFunction() {
  x.innerHTML = "I like intelligent women.  When you go out, it shouldn't be a staring contest. -Frank Sinatra";
};
x.innerHTML = "Woman";

console.log(x.innerHTML);











}
