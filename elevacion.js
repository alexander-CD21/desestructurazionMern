// Ejercicio 1
console.log(hello);                                   
var hello = 'world';                                 
//prediccion antes de ejecucion 
//undefined

// ejercicio 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//prediccion antes de ejecucion:  magnet

//ejercicio 3 

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//prediccion antes de ejecucion : super cool


//ejercicio 4

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//prediccion antes de ejecucion es : chicken y half -chicken 

//ejercicio 5 
//mean();
//console.log(food);
//var mean = function() {
//    food = "chicken";
//    console.log(food);
//    var food = "fish";
//    console.log(food);
//}
//console.log(food);
//prediccion antes de ejecucion es  :error

//ejercicio 6

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//prediccion antes de ejecucion es: disco rock rock disco 

//ejercicio 7

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//prediccion antes de ejecuccion es: san jose ,seattle,burbank,san jose

//ejercicio 8

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//prediccion antes de ejecucion {name :chicago , students:65, hiring=true},error