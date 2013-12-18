/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 12/13/13
 * Time: 2:22 PM
 * To change this template use File | Settings | File Templates.
 */
(function(){

    var interval =  setInterval(runUpdate, 1000 / 30);
    var names = ["Carmine","Zack","Marc","Eric","Scott","Vid","Mike"];
    var people = [];


    var columnOne = document.querySelector("#r3c1");
    var columnTwo = document.querySelector("#r3c2");
    var columnThree = document.querySelector("#r3c3");

    for(var i=0; i<3 ; i++) {

        var randomNameIndex = Math.floor(Math.random()*names.length);
        var randomName = names[randomNameIndex];
        var row = i+1;

        var newPerson = new Person(randomName, row);
        console.log(newPerson);
        console.log("this is the index position in the array 'names' " + randomNameIndex);
        people.push(newPerson);

        names.splice(randomNameIndex,1);
    }


    function  populateHTML(){
    var namePositionInTheArray =0;
    var splicedNames = "";
        for(var i = 0; i < people.length; i++){
            document.querySelector("#r" + parseInt(i + 1) + "c1").innerHTML = people[i].name;
            //console.log("this is the name in the array people "+ people[i].name);
            document.querySelector("#r" + parseInt(i + 1) + "c2").innerHTML = people[i].job;
            document.querySelector("#r" + parseInt(i + 1) + "c3").innerHTML = people[i].action;

        }

    }

    populateHTML();

    function runUpdate(){
        people.forEach(function(element){
            element.update();
        });
        populateHTML();
    }

    window.Person=Person;
})();