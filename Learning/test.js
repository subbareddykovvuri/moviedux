function main(){
  console.log("test");
  console.log("test2");
}
//main();

// var : accessible anywhere global scope
// let: local scope
// const: local scope (similar to let)
function scope(){
  var x=10;
  x=20;

  let a=50;

  const b=70;
  //b=80; //it will raise error "ypeError: Assignment to constant variable."
   
  const book ={title:"Hello World"};

  book.title="Hello world 2" // we can change value inside the const
  //book ={title:"Test"} // we cannot change the const value 
  if (true){
    // it will still reference the x value
    var x=30;
    // creating a new variable 
    var y=40;
    // it will not reference the a value 
    let a=60;
    console.log("inside the if block value of a:"+a);

    const b=90;
    //console.log("inside the if block value of b:"+b);
  }
  console.log("x:"+x);
  console.log("y:"+y);
  console.log("outside the if block value of a:"+a);
  console.log("b:"+b);
  console.log(book);
}

//scope();


/*

function addTraditionalFunction(a,b){
  console.log("In traditional function");
  return a+b;
}

console.log(addTraditionalFunction(1,2));

const addTraditionalFunction1 = function(a,b){
  console.log("In traditional Function saving to const");
  return a+b;
}
console.log(addTraditionalFunction1(1,2));

const addModernFunction =(a,b) => a+b; 
console.log(addModernFunction(1,2));

const addModernFunction1 = (a,b) => {
  console.log("In modern function");
  return a+b;
}
console.log(addModernFunction1(1,2));

const testFunctionWithoutParam = () => console.log("Testing the function without passing parameters");
testFunctionWithoutParam()
const testFunctionWithoutParam1 = () =>{
  console.log("Testing the function without passing parameters");
}
testFunctionWithoutParam1()


const ids = [1,2,3,4,5];

ids.forEach(id => {
  id++;
  console.log(id);
})

*/


/*
//Functions as declarations or expressions

test(); // it will work

function test(){
}


//test1(); // it will not work
const test1 = () =>{
  console.log("Hello World");
}

test1();

*/

/*
//REST Operator

function test(firstArgumrnt, ...otherArguments){
  console.log(firstArgumrnt);
  console.log(otherArguments);
}

test("Peter","Max");//Peter  (1) ['Max']
test("Peter","Max","Claudia","Mitch");//Peter (3) ['Max', 'Claudia', 'Mitch']
test( ['Max', 'Claudia', 'Mitch'], ['Max', 'Claudia', 'Mitch'], ['Max', 'Claudia', 'Mitch']) //(3) ['Max', 'Claudia', 'Mitch'] (2) [Array(3), Array(3)]


function test1(firstArgumrnt,secondArgumrnt, ...otherArguments){
  console.log(firstArgumrnt);
  console.log(secondArgumrnt);
  console.log(otherArguments);
}
test1("Peter","Max"); //Peter Max (0) []
test1("Peter","Max","Claudia","Mitch");// Peter Max (2) ['Claudia', 'Mitch']

*/
/*
//Spread Operator

//indicated by three dots(...)

const fruits = ["apple","banana"];
const moreFruits = ["cherry","melon"];
//combine two array to single array

const allFruits = [...fruits,...moreFruits];

console.log(allFruits); //['apple', 'banana', 'cherry', 'melon']
console.log([...fruits,"cherry"]); //['apple', 'banana', 'cherry']
console.log(..."fruit"); //f r u i t

*/




