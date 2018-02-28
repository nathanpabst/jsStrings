//challenge 1

var numOfSandwiches = 2 * 4;
console.log("numOfSandwiches", numOfSandwiches)

//challenge 2
var name = "bob";
var string = "hello, " + name + " how are you doing today?";
console.log("string:", string);

//challenge 3

var DNA = "GCAT";
var RNA = DNA.replace("T","U");
console.log("RNA:", RNA);

//challenge 4

// var animal = "bird";
// var animal = "dog"
var animal = "Alligator";
if (animal.toLowerCase() === "alligator"){
    // debugger;
    console.log("small:")
} else {
    console.log("wide:")
}


var yarn = "the better string";
var domString = "<h4>" + yarn + "</h4>";

var myDiv = document.getElementById('yarn-holder');
myDiv.innerHTML = domString;

// challenge 5

var str = "IBMWLOVEbmwcatsbmw";
var cats = str.replace(/[BMWbmw]/g, '');
console.log("cats", cats);
var catStr = "<h1>" + cats + "<h1>";
var catElement = document.getElementById("cat-holder");
catElement.innerHTML = catStr;