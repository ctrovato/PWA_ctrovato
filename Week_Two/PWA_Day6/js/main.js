/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 12/12/13
 * Time: 5:34 AM
 * To change this template use File | Settings | File Templates.
 */

(function(){

//    var dog = {name: "Max",
//                breed: "Doberman",
//                bark: function(){
//                    console.log("barking");
//                }};
//
//    var dogs = [];
//
///*  CREATE CONSTRUCTOR OBJECT    */
//    function Dog(color, age, name){
//
//        console.log("Dog Created");
//        this.color = color;
//        this.age = age;
//        this.name = name;
//    }
//
//    var scottsDog = new Dog("Black", 3, "Max");
//    scottsDog.name = "Max";
//
//    var ryansDog = new Dog();
//    ryansDog.name = "Killa";
//
//    dogs.push(scottsDog, ryansDog);

//     for(var i=0;i<dogs.length; i++){
//        console.log(dogs[i].name);
//
//      }
//
//    dogs.forEach(function(e){
//       console.log(e.name);
//
//
//    });

//    console.log(scottsDog.name);


    var names = ["Scott", "Joey", "Manton", "Eric", "Richie"];
    var people = [];

    function Person(n, j){
        this.name=  n;
        this.job = j;
    }

    Person.prototype.greeting = function(){
//        console.log("Hi, My name is "+this.name);
    }

//    var ryan = new Person("Name", "WebDev");

    for(var i=0;i<1000;i++){
        var num = ~~(Math.random()*names.length);
        var person = new Person(names[num], "students");
        people.push(person);
    }
//  console.log(people[4].name);

    people.forEach(function(e){
    e.greeting();

    });
    Array.prototype.push = function(){
        console.log("Fuck You!");
    }
    people.push("Bob")

})();
