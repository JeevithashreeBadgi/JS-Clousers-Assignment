console.log("working");

//Problem 1
function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());


//Problem 2

let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count);//1
  }
  console.log(count);//0
})();


// Problem 3

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); //3 
    }, 1000);
  }


//Problem 4

let length=20;
const g = function (){
    const breadth = 30;
    f = function () {
        console.log(length*breadth);
    }
}
g();
f();

//Problem 5
function outside(){
    let  x = 0;
     return function inside(){
         x++;
         console.log(x);
    };
   
}

let y = outside();
y();
y();
y();
y();
y()


//Problem 6
// Print Output

var a = 12;
(function () {
  alert(a);
})();


//Problem 7
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();




//Problem 8
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456)
    })(123);
