//named function
function ncalsquare(a){
    return a*a;

}
console.log("calling named function "+ncalsquare(10));

//anonymus function 

var annon = function(b){
    return b*b;

}
console.log('calling annonymus function'+annon(8));

//new constructor

var ccal =new Function("a","return a*a;");
console.log("calling constructor funtion"+ ccal(33));

//self invoking fuction
(function(a){
    console.log("self invoking function"+a*a)
    return a*a;})(9);
