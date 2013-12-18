/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 12/5/13
 * Time: 6:12 PM
 * To change this template use File | Settings | File Templates.
 */

console.log("started");

(function (){

    var person = {};
    person.name = "Jerry";
    person.address = {street: "960 rolling hills", state: "FL"}
    person.date = new Date();
    person.grades = [100,92,80]

    person.average = function(){
       var total = 0;
       for (var i = 0; i<person.grades.length;i++){
           total+=person.grades[i];
       }

        return total/person.grades.length;
    };

    console.log(person.average());

    for ( var p in person){
        console.log(p,person[p]);
    }


    ship[prop]=500;
    ship.x=500;

}) ();
