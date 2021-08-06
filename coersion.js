// ----- Coersion Implisita ----- //

var a = 20;
var b = a + "";

console.log(b);
// 20 

typeof b;
// "String"

// ----- Coersion explicita ----- //

var c = String(a);

console.log(c);
// 20

var d = Number(c);

typeof d;
// "number"
